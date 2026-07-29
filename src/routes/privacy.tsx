import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Aspire Removals & Transport" },
      { name: "description", content: "How Aspire Removals & Transport collects, uses and protects your personal data." },
      { property: "og:title", content: "Privacy Policy | Aspire Removals" },
      { property: "og:description", content: "How we handle your personal data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we collect, use and protect your personal information." />
      <section className="container-page my-20">
        <article className="max-w-3xl mx-auto space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-semibold text-navy">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </section>
          ))}
        </article>
      </section>
    </>
  );
}

const SECTIONS = [
  { h: "Who we are", p: "Aspire Removals & Transport is a UK-registered removals company. This policy explains how we handle personal data collected through our website, quotes and moves." },
  { h: "Data we collect", p: "Contact details you provide when requesting a quote or booking a move, and technical information (device, browser, pages viewed) collected automatically when you visit our website." },
  { h: "How we use your data", p: "To respond to enquiries, provide our services, arrange insurance where required, and improve our website. We never sell your personal information." },
  { h: "Legal basis", p: "We rely on your consent, the performance of a contract with you and our legitimate business interests as lawful bases for processing your personal data." },
  { h: "Sharing", p: "We share limited data with trusted partners (payment processors, insurance underwriters, logistics partners) only where necessary to deliver your move." },
  { h: "Retention", p: "We keep quote and booking records for up to seven years to meet UK accounting and insurance requirements." },
  { h: "Your rights", p: "You have the right to access, correct, delete or object to the processing of your personal data. To exercise any of these rights, contact info@aspireremovals.co.uk." },
  { h: "Cookies", p: "Our website uses essential cookies to function and optional analytics cookies to help us improve the experience. You can control non-essential cookies through your browser settings." },
  { h: "Contact", p: "For any privacy-related question, contact us at info@aspireremovals.co.uk or by post to our head office listed on the Contact page." },
];
