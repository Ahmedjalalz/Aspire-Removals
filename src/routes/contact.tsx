import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Aspire Removals & Transport UK" },
      {
        name: "description",
        content:
          "Contact Aspire Removals & Transport. Call 07493 732371 or message our New Malden office for free advice and fast booking. Open 7 days a week.",
      },
      { property: "og:title", content: "Contact Us | Aspire Removals & Transport UK" },
      {
        property: "og:description",
        content:
          "Reach our UK removals team — call 07493 732371, email info@aspireremovalsandtransport.co.uk or send a message. Fast response 7 days a week.",
      },
      { property: "og:url", content: `${SITE.url}/contact` },
      { property: "og:image", content: `${SITE.url}/Hero-Section-Image.png` },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      {
        property: "og:image:alt",
        content: "Aspire Removals & Transport customer support and move coordinators",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Us | Aspire Removals & Transport UK" },
      {
        name: "twitter:description",
        content:
          "Reach our UK removals team — call 07493 732371, email info@aspireremovalsandtransport.co.uk or message our coordinators.",
      },
      { name: "twitter:image", content: `${SITE.url}/Hero-Section-Image.png` },
      {
        name: "twitter:image:alt",
        content: "Aspire Removals & Transport customer support and move coordinators",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": `${SITE.url}/contact#webpage`,
              url: `${SITE.url}/contact`,
              name: "Contact Aspire Removals & Transport",
              description:
                "Get in touch with Aspire Removals & Transport for enquiries, bookings, and customer support.",
              isPartOf: {
                "@id": `${SITE.url}/#website`,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${SITE.url}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact Us",
                  item: `${SITE.url}/contact`,
                },
              ],
            },
          ],
        }),
      },
    ],
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
  return href ? (
    <a href={href} className="block transition-transform hover:scale-[1.01]">
      {content}
    </a>
  ) : (
    content
  );
}
