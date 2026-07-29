import { createFileRoute } from "@tanstack/react-router";
import teamImg from "@/assets/about-team.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Compass, Target, HeartHandshake, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aspire Removals & Transport | Trusted UK Movers" },
      {
        name: "description",
        content:
          "Meet the family-run UK removals company redefining what customers expect from a moving service. Our story, mission and values.",
      },
      { property: "og:title", content: "About Aspire Removals & Transport" },
      { property: "og:description", content: "Family-run UK removals company built on trust, care and craftsmanship." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Compass, title: "Our Mission", text: "To take the stress out of moving through honest service, careful handling and complete transparency." },
  { icon: Target, title: "Our Vision", text: "To be the UK's most-trusted removals brand — the name friends recommend when a move really matters." },
  { icon: HeartHandshake, title: "Our Values", text: "Care, craftsmanship, punctuality and integrity — the four things every crew is measured on." },
  { icon: Award, title: "Why Trust Us", text: "500+ successful moves, 4.9-star average rating and full insurance on every single job." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Aspire"
        title={<>Family-run movers, obsessed with the details</>}
        subtitle="We started Aspire because we knew moving could feel calmer, kinder and more premium than it usually does. Today we bring that standard to homes and businesses across the UK."
      />

      <section className="container-page mt-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our story</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">Built on trust, since day one</h2>
            <div className="mt-5 space-y-4 text-muted-foreground text-lg">
              <p>
                Aspire Removals & Transport was founded on a simple belief: your home deserves
                more than a hurried job and a scratched sideboard. From a single van in London to
                a nationwide fleet, we've grown by doing right by every customer.
              </p>
              <p>
                Every crew is directly employed, uniformed and trained by our operations team.
                Every vehicle is modern, GPS-tracked and equipped with premium protective
                materials. And every quote is a fixed price — no surprises, ever.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
              <img
                src={teamImg}
                alt="Neatly packed and protected furniture ready for an Aspire Removals move"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-24 bg-section py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What drives us</p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">Mission, vision & values</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { k: "500+", v: "Moves completed" },
            { k: "4.9★", v: "Average rating" },
            { k: "100%", v: "Insured jobs" },
            { k: "7", v: "Days a week" },
          ].map((s) => (
            <Reveal key={s.v}>
              <div className="rounded-2xl bg-card border border-border p-6 shadow-soft card-lift">
                <p className="text-3xl md:text-4xl font-bold text-gradient-brand">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
