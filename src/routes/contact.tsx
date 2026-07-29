import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aspire Removals & Transport | Speak to a Move Coordinator" },
      { name: "description", content: "Contact our UK removals team — call, email or send a message and we'll respond within 24 hours." },
      { property: "og:title", content: "Contact Aspire Removals & Transport" },
      { property: "og:description", content: "Reach our UK removals team — call, email or message." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a real move coordinator</>}
        subtitle="Call, email, or drop us a note — we reply within 24 hours, seven days a week."
      />

      <section className="container-page mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <Reveal>
          <div className="space-y-5">
            <InfoRow icon={Phone} title="Call us" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
            <InfoRow icon={Mail} title="Email us" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoRow icon={MapPin} title="Head office" value={SITE.address} />
            <div className="rounded-2xl bg-section border border-border p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-navy">Business hours</p>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.d} className="flex justify-between">
                    <span>{h.d}</span>
                    <span className="font-medium text-navy">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <ContactForm />
        </Reveal>
      </section>

      <div className="mt-24" />
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-2xl bg-card border border-border p-5 card-lift shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-navy">{title}</p>
        <p className="text-muted-foreground text-sm break-words">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

