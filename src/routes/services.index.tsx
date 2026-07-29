import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TOP_SERVICES as SERVICES } from "@/lib/site";
import { SERVICE_IMAGES } from "@/lib/service-images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Aspire Removals & Transport" },
      {
        name: "description",
        content:
          "Full-service UK removals: house moves, office relocation, packing, furniture transport and additional logistics.",
      },
      { property: "og:title", content: "Our Services | Aspire Removals & Transport" },
      { property: "og:description", content: "House moves, office relocation, packing and transport across the UK." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Every part of your move, handled by specialists</>}
        subtitle="From single-item transport to nationwide house moves, we bring the same care and craftsmanship to every job."
      />
      <section className="container-page mt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const img = SERVICE_IMAGES[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full overflow-hidden rounded-2xl bg-card border border-border shadow-soft card-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <h3 className="absolute left-5 bottom-4 right-5 text-xl font-semibold text-white drop-shadow">
                      {s.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
