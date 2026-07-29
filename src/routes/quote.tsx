import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { sendEmail } from "@/lib/send-email-client";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { useState } from "react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | Aspire Removals & Transport" },
      { name: "description", content: "Request a fast, transparent, no-obligation moving quote from Aspire Removals & Transport." },
      { property: "og:title", content: "Get a Free Quote | Aspire Removals" },
      { property: "og:description", content: "Fast, transparent moving quote — replied to within 24 hours." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending">("idle");
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title={<>Your fixed-price moving quote — in minutes</>}
        subtitle="Tell us about your move. We'll respond with a transparent, no-obligation quote within 24 hours."
      />

      <section className="container-page mt-16 mb-24 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <Reveal>
          {submitted ? (
            <div className="rounded-3xl bg-card border border-border p-10 shadow-soft text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-brand text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-navy">Request received</h2>
              <p className="mt-2 text-muted-foreground">
                Thanks — a move coordinator will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus("pending");
                setError(null);

                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);

                try {
                  await sendEmail({
                    type: "quote",
                    name: formData.get("name")?.toString().trim() ?? "",
                    email: formData.get("email")?.toString().trim() ?? "",
                    phone: formData.get("phone")?.toString().trim() ?? "",
                    message: formData.get("message")?.toString().trim() ?? "",
                    details: {
                      subject: formData.get("subject")?.toString().trim() ?? "",
                      pickup: formData.get("pickup")?.toString().trim() ?? "",
                      destination: formData.get("destination")?.toString().trim() ?? "",
                      date: formData.get("date")?.toString().trim() ?? "",
                      property: formData.get("property")?.toString().trim() ?? "",
                      bedrooms: formData.get("bedrooms")?.toString().trim() ?? "",
                      service: formData.get("service")?.toString().trim() ?? "",
                    },
                  });
                  form.reset();
                  setSubmitted(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } catch (err) {
                  setStatus("idle");
                  setError(err instanceof Error ? err.message : "Unable to send quote request. Please try again.");
                }
              }}
              className="rounded-3xl bg-card border border-border p-7 md:p-10 shadow-soft"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-navy">Quote request</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked with * are required.</p>

              <fieldset className="mt-8">
                <legend className="text-sm font-semibold text-navy">Your details</legend>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <div className="sm:col-span-2">
                    <Field label="Email" name="email" type="email" required />
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-sm font-semibold text-navy">Move details</legend>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Pickup address" name="pickup" required />
                  <Field label="Destination address" name="destination" required />
                  <Field label="Moving date" name="date" type="date" required />
                  <SelectField
                    label="Property type"
                    name="property"
                    options={["Flat / Apartment", "House", "Office", "Studio", "Storage unit", "Other"]}
                  />
                  <SelectField
                    label="Number of bedrooms"
                    name="bedrooms"
                    options={["Studio", "1", "2", "3", "4", "5+", "N/A"]}
                  />
                  <SelectField
                    label="Services required"
                    name="service"
                    options={SERVICES.map((s) => s.title)}
                  />
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-sm font-semibold text-navy">Anything else?</legend>
                <div className="mt-4">
                  <Field label="Message" name="message" as="textarea" />
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={status === "pending"}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground btn-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "pending" ? "Sending..." : "Submit quote request"}
              </button>
              {error && <p className="mt-4 text-sm text-destructive text-center">{error}</p>}
              <p className="mt-3 text-xs text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. We never share your details.
              </p>
            </form>
          )}
        </Reveal>

        <Reveal direction="right">
          <aside className="sticky top-28 space-y-4">
            <div className="rounded-2xl bg-section border border-border p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-navy">Fixed price. No surprises.</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Every quote includes packing materials, protection, insurance and reassembly at
                destination.
              </p>
            </div>
            <ul className="rounded-2xl bg-card border border-border p-6 space-y-3 text-sm shadow-soft">
              {[
                "Free survey (in-home or video)",
                "Fully-insured, uniformed crew",
                "GPS-tracked modern fleet",
                "Reassembly & room-by-room placement",
                "Free box collection after your move",
              ].map((l) => (
                <li key={l} className="flex gap-2 text-navy">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </section>
    </>
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
        <textarea name={name} required={required} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-sm font-medium text-navy">
      {label}
      <select
        name={name}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
        defaultValue=""
      >
        <option value="" disabled>
          Please select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
