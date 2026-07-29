import { createAPIFileRoute } from "@tanstack/react-start/api";
import dotenv from "dotenv";

dotenv.config();

export const APIRoute = createAPIFileRoute("/api/send-email")({
  POST: async ({ request }) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "umerqadoos2@gmail.com";
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing Resend API key in server environment." }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    let payload: any;
    try {
      payload = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON payload." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const name = typeof payload?.name === "string" ? payload.name : "";
    const email = typeof payload?.email === "string" ? payload.email : "";
    const message = typeof payload?.message === "string" ? payload.message : "";
    const phone = typeof payload?.phone === "string" ? payload.phone : "";
    const subject = typeof payload?.subject === "string" ? payload.subject : "";
    const details = payload?.details && typeof payload.details === "object" ? payload.details : {};
    const type = payload?.type === "quote" ? "quote" : "contact";

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required form fields." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const html = buildEmailHtml({ type, name, email, phone, subject, message, details });

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: type === "quote" ? `Quote request from ${name}` : `Contact message from ${name}`,
        html,
      }),
    });

    const responseText = await resendResponse.text();
    if (!resendResponse.ok) {
      return new Response(JSON.stringify({ error: `Resend error: ${resendResponse.status} ${responseText}` }), {
        status: 502,
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  },
});

function buildEmailHtml(params: {
  type: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  details?: Record<string, unknown>;
}) {
  const lines = [
    `<p><strong>Type:</strong> ${escapeHtml(params.type)}</p>`,
    `<p><strong>Name:</strong> ${escapeHtml(params.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(params.email)}</p>`,
    params.phone ? `<p><strong>Phone:</strong> ${escapeHtml(params.phone)}</p>` : "",
    params.subject ? `<p><strong>Subject:</strong> ${escapeHtml(params.subject)}</p>` : "",
    `<p><strong>Message:</strong></p><p>${escapeHtml(params.message).replace(/\n/g, "<br />")}</p>`,
  ];

  if (params.type === "quote" && params.details) {
    lines.push("<hr />", "<p><strong>Quote details:</strong></p>");
    for (const [key, value] of Object.entries(params.details)) {
      if (value) {
        lines.push(`<p><strong>${escapeHtml(capitalize(key))}:</strong> ${escapeHtml(String(value))}</p>`);
      }
    }
  }

  return `<div style="font-family:system-ui, sans-serif; color:#111; line-height:1.6;">${lines.filter(Boolean).join("")}</div>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
