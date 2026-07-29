import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { SERVICE_BY_SLUG, SERVICES, type Service } from "@/lib/site";
import { SERVICE_IMAGES } from "@/lib/service-images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_BY_SLUG[params.slug];
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const s = loaderData;
    return {
      meta: [
        { title: `${s?.title ?? "Service"} | Aspire Removals & Transport` },
        { name: "description", content: s?.short ?? "" },
        { property: "og:title", content: `${s?.title ?? "Service"} | Aspire Removals` },
        { property: "og:description", content: s?.description ?? "" },
        { property: "og:url", content: `/services/${s?.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s?.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center pt-24">
      <p>Service not found. <Link to="/services" className="text-primary underline">All services</Link></p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData() as Service;
  const img = SERVICE_IMAGES[s.slug];
  return (
    <>
      <PageHero eyebrow="Service" title={s.title} subtitle={s.description}>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground btn-glow-accent"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </PageHero>

      {/* Service image */}
      {img && (
        <section className="container-page mt-14">
          <Reveal>
            <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-lift">
              <img
                src={img}
                alt={s.title}
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[440px] object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </section>
      )}


      {/* Benefits */}
      <section className="container-page mt-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Benefits</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">Why customers choose us for {s.title.toLowerCase()}</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Every job includes the essentials most companies charge extra for — because premium
              service should be the standard.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {s.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 50}>
                <div className="flex gap-3 rounded-2xl bg-card border border-border p-5 card-lift shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-navy font-medium">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mt-24 bg-section py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Process</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">How it works</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Step {i + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page mt-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary text-center">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy text-center">Common questions</h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {s.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group rounded-2xl bg-card border border-border p-6 shadow-soft">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <span className="text-base font-semibold text-navy">{f.q}</span>
                    <ChevronDown className="h-5 w-5 text-primary transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Other services */}
      <section className="container-page my-24">
        <h2 className="text-2xl font-semibold text-navy">Explore other services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.filter((o) => o.slug !== s.slug).map((o) => {
            const Icon = o.icon;
            return (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group rounded-2xl bg-card border border-border p-5 card-lift shadow-soft"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg gradient-brand-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">{o.title}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  View <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
