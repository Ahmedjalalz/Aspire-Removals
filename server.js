import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT || 3001);
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer(async (req, res) => {
  try {
    if (req.url?.startsWith('/api/send-email')) {
      if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
      }

      let body = '';
      for await (const chunk of req) {
        body += chunk;
      }

      const payload = body ? JSON.parse(body) : {};
      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? 'umerqadoos2@gmail.com';
      const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

      if (!RESEND_API_KEY) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing Resend API key in server environment.' }));
        return;
      }

      const name = typeof payload?.name === 'string' ? payload.name : '';
      const email = typeof payload?.email === 'string' ? payload.email : '';
      const message = typeof payload?.message === 'string' ? payload.message : '';
      const phone = typeof payload?.phone === 'string' ? payload.phone : '';
      const subject = typeof payload?.subject === 'string' ? payload.subject : '';
      const details = payload?.details && typeof payload.details === 'object' ? payload.details : {};
      const type = payload?.type === 'quote' ? 'quote' : 'contact';

      if (!name || !email || !message) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing required form fields.' }));
        return;
      }

      const html = buildEmailHtml({ type, name, email, phone, subject, message, details });
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          reply_to: email,
          subject: type === 'quote' ? `Quote request from ${name}` : `Contact message from ${name}`,
          html,
        }),
      });

      const responseText = await response.text();
      if (!response.ok) {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `Resend error: ${response.status} ${responseText}` }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    if (req.url === '/' || req.url?.startsWith('/assets/') || req.url?.startsWith('/@') || req.url?.endsWith('.css') || req.url?.endsWith('.js') || req.url?.endsWith('.png') || req.url?.endsWith('.jpg') || req.url?.endsWith('.jpeg') || req.url?.endsWith('.svg') || req.url?.endsWith('.ico')) {
      const filePath = req.url === '/' ? '/index.html' : req.url;
      const absolutePath = path.join(rootDir, 'dist', filePath);
      try {
        const content = await readFile(absolutePath);
        const contentType = getContentType(absolutePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      }
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error instanceof Error ? error.message : 'Server error' }));
  }
});

server.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
});

export default {
  fetch(request, env, ctx) {
    return new Promise((resolve, reject) => {
      const req = request;
      const res = {};
      const handler = () => {
        const url = new URL(request.url);
        if (url.pathname === '/api/send-email') {
          const body = request.clone().text();
          body.then((text) => {
            const payload = text ? JSON.parse(text) : {};
            const RESEND_API_KEY = process.env.RESEND_API_KEY;
            const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? 'umerqadoos2@gmail.com';
            const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
            const name = typeof payload?.name === 'string' ? payload.name : '';
            const email = typeof payload?.email === 'string' ? payload.email : '';
            const message = typeof payload?.message === 'string' ? payload.message : '';
            const phone = typeof payload?.phone === 'string' ? payload.phone : '';
            const subject = typeof payload?.subject === 'string' ? payload.subject : '';
            const details = payload?.details && typeof payload.details === 'object' ? payload.details : {};
            const type = payload?.type === 'quote' ? 'quote' : 'contact';
            if (!RESEND_API_KEY || !name || !email || !message) {
              resolve(new Response(JSON.stringify({ error: !RESEND_API_KEY ? 'Missing Resend API key in server environment.' : 'Missing required form fields.' }), { status: !RESEND_API_KEY ? 500 : 400, headers: { 'content-type': 'application/json' }}));
              return;
            }
            const html = buildEmailHtml({ type, name, email, phone, subject, message, details });
            fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                reply_to: email,
                subject: type === 'quote' ? `Quote request from ${name}` : `Contact message from ${name}`,
                html,
              }),
            }).then(async (mailResponse) => {
              const responseText = await mailResponse.text();
              resolve(new Response(JSON.stringify(mailResponse.ok ? { ok: true } : { error: `Resend error: ${mailResponse.status} ${responseText}` }), { status: mailResponse.ok ? 200 : 502, headers: { 'content-type': 'application/json' }}));
            }).catch(reject);
          }).catch(reject);
          return;
        }
        resolve(new Response('Not found', { status: 404 }));
      };
      handler();
    });
  },
};

function buildEmailHtml(params) {
  const lines = [
    `<p><strong>Type:</strong> ${escapeHtml(params.type)}</p>`,
    `<p><strong>Name:</strong> ${escapeHtml(params.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(params.email)}</p>`,
    params.phone ? `<p><strong>Phone:</strong> ${escapeHtml(params.phone)}</p>` : '',
    params.subject ? `<p><strong>Subject:</strong> ${escapeHtml(params.subject)}</p>` : '',
    `<p><strong>Message:</strong></p><p>${escapeHtml(params.message).replace(/\n/g, '<br />')}</p>`,
  ];

  if (params.type === 'quote' && params.details) {
    lines.push('<hr />', '<p><strong>Quote details:</strong></p>');
    for (const [key, value] of Object.entries(params.details)) {
      if (value) {
        lines.push(`<p><strong>${escapeHtml(capitalize(key))}:</strong> ${escapeHtml(String(value))}</p>`);
      }
    }
  }

  return `<div style="font-family:system-ui, sans-serif; color:#111; line-height:1.6;">${lines.filter(Boolean).join('')}</div>`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getContentType(filePath) {
  if (filePath.endsWith('.html')) return 'text/html; charset=utf-8';
  if (filePath.endsWith('.css')) return 'text/css; charset=utf-8';
  if (filePath.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (filePath.endsWith('.json')) return 'application/json; charset=utf-8';
  if (filePath.endsWith('.png')) return 'image/png';
  if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) return 'image/jpeg';
  if (filePath.endsWith('.svg')) return 'image/svg+xml';
  return 'application/octet-stream';
}
