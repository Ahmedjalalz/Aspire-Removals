import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Clock,
  Star,
  Mail,
  Phone,
  MapPin,
  Truck,
  PackageCheck,
  Home as HomeIcon,
  Sparkles,
} from "lucide-react";
import { TOP_SERVICES, SITE } from "@/lib/site";
import { SERVICE_IMAGES, GALLERY_IMAGES } from "@/lib/service-images";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aspire Removals & Transport | Reliable UK House & Office Movers" },
      {
        name: "description",
        content:
          "Fully-insured UK removals and transport. House moves, office relocation, packing services and furniture delivery — trust us to take you home.",
      },
      { property: "og:title", content: "Aspire Removals & Transport | Reliable UK Movers" },
      {
        property: "og:description",
        content:
          "Reliable, premium removals across the UK — house moves, office relocation, packing and furniture transport.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TRUST = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Users, label: "Professional Team" },
  { icon: Clock, label: "Reliable Service" },
  { icon: Star, label: "5-Star Rated" },
];

const REASONS = [
  {
    icon: Users,
    title: "Professional movers",
    text: "Uniformed, DBS-checked crews trained in careful handling, disassembly and reassembly.",
  },
  {
    icon: Sparkles,
    title: "Affordable pricing",
    text: "Transparent fixed quotes with no hidden fees — you always know what you're paying for.",
  },
  {
    icon: Truck,
    title: "Safe transportation",
    text: "Modern GPS-tracked fleet with air-ride suspension and full protective materials.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    text: "Comprehensive Goods-in-Transit and Public Liability cover on every single job.",
  },
  {
    icon: Clock,
    title: "Reliable scheduling",
    text: "Punctual arrivals, honest timelines and same-day updates from start to finish.",
  },
  {
    icon: Star,
    title: "Excellent customer service",
    text: "A dedicated move coordinator from first call through to final placement.",
  },
];

const STEPS = [
  { icon: PackageCheck, title: "Book a Quote", text: "Share your details online or by phone for a same-day fixed price." },
  { icon: Sparkles, title: "Wrapping & Packing", text: "We arrive with premium materials to protect everything you own." },
  { icon: Truck, title: "Moving", text: "Careful loading, GPS-tracked transit and continuous communication." },
  { icon: HomeIcon, title: "Offload & Unpack", text: "Furniture placed room-by-room, reassembled and ready to enjoy." },
];

const REVIEWS = [
  {
    name: "Sarah Whitmore",
    role: "Homeowner, Islington",
    quote:
      "From the first survey to the final box, the Aspire team were meticulous. They wrapped everything twice — nothing so much as a scratch.",
  },
  {
    name: "David Okafor",
    role: "Operations Director, Studio Nine",
    quote:
      "Our entire office moved over one weekend and the team had us live again by 8am Monday. Genuinely impressive.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner, Manchester",
    quote:
      "Polite, punctual and fast. They took the stress out of what I thought would be the worst weekend of the year.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062A42]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(14,74,107,0.55),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(4,20,35,0.7),transparent_65%)]" />
        </div>

        <div className="container-page relative pt-28 md:pt-32 pb-24 md:pb-32">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="text-white">
              <Reveal>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                  Trust Us <br />
                  Take You Home
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg md:text-xl text-white/75 max-w-lg leading-relaxed">
                  Reliable removals and transport services designed to make your move
                  stress-free and effortless.
                </p>
              </Reveal>
              <Reveal delay={220} className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-md bg-[#0E4A6B] hover:bg-[#125b83] px-8 py-3.5 text-sm font-semibold text-white transition-colors shadow-lift"
                >
                  Our Services
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center rounded-md bg-accent hover:bg-accent/90 px-8 py-3.5 text-sm font-semibold text-accent-foreground btn-glow-accent transition-colors"
                >
                  Get a Quote
                </Link>
              </Reveal>
            </div>

            <Reveal direction="right" delay={200} className="relative">
              <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-2xl">
                <img
                  src="/Hero-Section-Image.png"
                  alt="Aspire Removals & Transport branded moving truck"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                  fetchPriority="high"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative -mb-px leading-[0]" aria-hidden>
          <svg
            className="block w-full h-[80px] md:h-[110px]"
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,70 C240,110 480,10 720,40 C960,70 1200,110 1440,50 L1440,110 L0,110 Z"
              fill="var(--color-background)"
            />
          </svg>
        </div>
      </section>



      {/* SERVICES OVERVIEW */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-navy">
              A complete range of <span className="text-gradient-brand">moving services</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From single-item transport to full-house relocations, our specialists cover every
              part of your move under one roof.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_SERVICES.map((s, i) => {
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
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-28 bg-section py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why Aspire</p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                Trusted for the moments that matter most
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                We've earned our reputation by treating every home and office like it's our own.
                Here's what makes moving with us different.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground btn-glow"
              >
                Learn about us <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {REASONS.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 50}>
                  <div className="h-full rounded-2xl bg-card border border-border p-6 card-lift shadow-soft">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy">{title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="container-page mt-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our process</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">A simple four-step move</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Every Aspire move follows a proven process designed to eliminate surprises and keep
              you in control from start to finish.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="relative rounded-2xl bg-card border border-border p-7 card-lift shadow-soft">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-brand text-white shadow-lift">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mt-28 bg-section py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Customer stories</p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                Loved by families and businesses across the UK
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <figure className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-navy leading-relaxed">"{r.quote}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-full text-white font-semibold"
                      style={{ background: "linear-gradient(135deg,#005F86,#0E8FB3)" }}
                      aria-hidden
                    >
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-page mt-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our work</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              A glimpse inside every Aspire move
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From delicate packing to nationwide transport — real moments from jobs we've delivered
              for families and businesses across the UK.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map((g, i) => {
            const spans = [
              "sm:col-span-2 sm:row-span-2",
              "",
              "",
              "lg:row-span-2",
              "",
              "sm:col-span-2",
              "",
              "",
              "",
              "sm:col-span-2 lg:col-span-2",
            ];
            return (
              <Reveal key={g.src} delay={i * 40} className={`group relative overflow-hidden rounded-2xl shadow-soft ${spans[i] ?? ""}`}>
                <Link to="/services/$slug" params={{ slug: g.slug }} className="block h-full w-full">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute left-4 bottom-3 right-4 text-sm font-semibold text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {g.alt}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />


      {/* CONTACT PREVIEW */}
      <section className="container-page my-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Get in touch</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">Talk to a real person</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Prefer a quick chat? Our move coordinators are on hand seven days a week to help
              plan your move.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Call us</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Email us</p>
                  <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Head office</p>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-section border border-border p-5">
              <p className="text-sm font-semibold text-navy">Business hours</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.d} className="flex justify-between">
                    <span>{h.d}</span>
                    <span className="font-medium text-navy">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

