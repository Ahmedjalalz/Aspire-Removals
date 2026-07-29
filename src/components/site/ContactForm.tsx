import { useState } from "react";
import { sendEmail } from "@/lib/send-email-client";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("pending");
        setError(null);

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        try {
          await sendEmail({
            type: "contact",
            name: formData.get("name")?.toString().trim() ?? "",
            email: formData.get("email")?.toString().trim() ?? "",
            phone: formData.get("phone")?.toString().trim() ?? "",
            subject: formData.get("subject")?.toString().trim() ?? "",
            message: formData.get("message")?.toString().trim() ?? "",
          });
          form.reset();
          setStatus("success");
        } catch (err) {
          setStatus("idle");
          setError(err instanceof Error ? err.message : "Unable to send message. Please try again.");
        }
      }}
      className="rounded-3xl bg-card border border-border p-7 md:p-9 shadow-soft"
      aria-label="Contact form"
    >
      <h2 className="text-xl font-semibold text-navy">Send us a message</h2>
      <p className="mt-1 text-sm text-muted-foreground">We reply within 24 hours.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" />
        <div className="sm:col-span-2">
          <Field label="Email" name="email" type="email" required />
        </div>
        <div className="sm:col-span-2">
          <Field label="Subject" name="subject" />
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" name="message" as="textarea" required />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "pending"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground btn-glow disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "pending" ? "Sending..." : "Send message"} <CheckCircle2 className="h-4 w-4" />
      </button>
      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-primary">Thanks — we'll be in touch within 24 hours.</p>
      )}
      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
}) {
  const cls =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors";
  return (
    <label className="block text-sm font-medium text-navy">
      {label} {required && <span className="text-accent">*</span>}
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}
