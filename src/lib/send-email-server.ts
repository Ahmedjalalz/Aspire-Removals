import dotenv from "dotenv";

dotenv.config();

export async function handleSendEmailRequest(request: Request): Promise<Response> {
  const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "umerqadoos2@gmail.com";
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json", allow: "POST" },
    });
  }

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing Resend API key in server environment." }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (!isValidPayload(payload)) {
    return new Response(JSON.stringify({ error: "Missing required form fields." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const body = buildEmailBody(payload);
  const subject = payload.type === "quote" ? `Quote request from ${payload.name}` : `Contact message from ${payload.name}`;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html: body,
      reply_to: payload.email,
    }),
  });

  if (!resendResponse.ok) {
    const text = await resendResponse.text();
    return new Response(JSON.stringify({ error: `Resend error: ${resendResponse.status} ${text}` }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

function isValidPayload(payload: unknown): payload is {
  type: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
  details?: Record<string, string>;
} {
  if (!payload || typeof payload !== "object") return false;
  const data = payload as Record<string, unknown>;
  return (
    typeof data.type === "string" &&
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.message === "string"
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailBody(payload: { type: string; name: string; email: string; phone?: string; subject?: string; message: string; details?: Record<string, string> }) {
  const lines = [
    `<p><strong>Type:</strong> ${escapeHtml(payload.type)}</p>`,
    `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
    payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : "",
    payload.subject ? `<p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>` : "",
    `<p><strong>Message:</strong></p><p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>`,
  ];

  if (payload.type === "quote" && payload.details) {
    lines.push("<hr />", `<p><strong>Quote details:</strong></p>`);
    for (const [key, value] of Object.entries(payload.details)) {
      if (value) {
        lines.push(`<p><strong>${escapeHtml(capitalize(key))}:</strong> ${escapeHtml(value)}</p>`);
      }
    }
  }

  return `<div style="font-family:system-ui, sans-serif; color:#111; line-height:1.6;">${lines.filter(Boolean).join("")}</div>`;
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
