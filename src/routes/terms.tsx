import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Aspire Removals & Transport" },
      { name: "description", content: "Terms and conditions for Aspire Removals & Transport services." },
      { property: "og:title", content: "Terms & Conditions | Aspire Removals" },
      { property: "og:description", content: "Terms and conditions for Aspire Removals & Transport." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="The terms that govern your use of our website and services." />
      <section className="container-page my-20">
        <article className="prose-page max-w-3xl mx-auto space-y-8">
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
  { h: "1. Agreement", p: "By booking a service with Aspire Removals & Transport (\"we\", \"us\") you agree to be bound by these terms, together with any written quotation supplied to you." },
  { h: "2. Quotations", p: "Quotations are valid for 30 days and are based on the information you provide. Where actual volume, access or timings differ materially, we may revise the quotation before the move begins." },
  { h: "3. Payment", p: "A booking fee may be required to secure your date. The balance is due on the day of the move unless otherwise agreed in writing." },
  { h: "4. Cancellation", p: "Cancellations made more than 7 days before the move are refunded in full. Within 7 days, a proportion of the fee may be retained to cover crew allocation." },
  { h: "5. Insurance & Liability", p: "Every move includes Goods-in-Transit and Public Liability cover. Additional high-value cover is available on request. Our liability is limited to the terms of these policies." },
  { h: "6. Items We Cannot Move", p: "For safety reasons we cannot transport hazardous materials, live plants, perishable food, cash, jewellery or firearms unless expressly agreed in writing." },
  { h: "7. Delays", p: "We plan realistic schedules but cannot be held responsible for delays caused by traffic, weather, third parties or events beyond our reasonable control." },
  { h: "8. Complaints", p: "Any complaint should be raised in writing within 7 days of the move. We commit to acknowledging complaints within 2 working days." },
  { h: "9. Changes", p: "We may update these terms from time to time. The version in force at the time of your booking will apply to your move." },
  { h: "10. Governing Law", p: "These terms are governed by the laws of England & Wales and any disputes fall under the exclusive jurisdiction of the English courts." },
];
