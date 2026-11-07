import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TOP_SERVICES as SERVICES, SITE } from "@/lib/site";
import { SERVICE_IMAGES } from "@/lib/service-images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "UK Removals & Transport Services | Aspire Removals" },
      {
        name: "description",
        content:
          "Explore full-service UK removals & logistics by Aspire Removals: house moves, office relocations, secure storage, packing services and man & van transport.",
      },
      { property: "og:title", content: "UK Removals & Transport Services | Aspire Removals" },
      {
        property: "og:description",
        content:
          "Explore full-service UK removals and logistics: house moves, office relocations, secure storage, packing services, and man & van transport.",
      },
      { property: "og:url", content: `${SITE.url}/services` },
      { property: "og:image", content: `${SITE.url}/Hero-Section-Image.png` },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      {
        property: "og:image:alt",
        content: "Aspire Removals & Transport moving services overview",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UK Removals & Transport Services | Aspire Removals" },
      {
        name: "twitter:description",
        content:
          "Explore full-service UK removals: house moves, office relocations, storage, packing, and furniture transport.",
      },
      { name: "twitter:image", content: `${SITE.url}/Hero-Section-Image.png` },
      {
        name: "twitter:image:alt",
        content: "Aspire Removals & Transport moving services overview",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
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
              name: "Services",
              item: `${SITE.url}/services`,
            },
          ],
        }),
      },
    ],
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
                      alt={s.imageAlt}
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
