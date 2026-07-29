export type EmailPayload =
  | {
      type: "contact";
      name: string;
      email: string;
      phone?: string;
      subject?: string;
      message: string;
    }
  | {
      type: "quote";
      name: string;
      email: string;
      phone?: string;
      message?: string;
      details?: Record<string, string | number>;
    };

export async function sendEmail(payload: EmailPayload) {
  const endpoint = import.meta.env.VITE_EMAIL_ENDPOINT ?? "/api/send-email";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = `Unable to send email (${response.status})`;
    try {
      const json = await response.json();
      if (json?.error) {
        errorMessage = json.error;
      }
    } catch {
      const text = await response.text();
      if (text) errorMessage = text;
    }
    throw new Error(errorMessage);
  }

  return response.json();
}
