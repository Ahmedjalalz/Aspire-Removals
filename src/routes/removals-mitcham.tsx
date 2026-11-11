import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Users,
  Clock,
  Truck,
  Sparkles,
  Award,
  ChevronDown,
  ArrowRight,
  Phone,
  MapPin,
  PackageCheck,
  Home,
  Building2,
  Wrench,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import domesticImg from "@/assets/services/domestic-removals.jpg";
import homeImg from "@/assets/services/home-removals.jpg";
import packingImg from "@/assets/services/packing-services.jpg";

export const Route = createFileRoute("/removals-mitcham")({
  head: () => ({
    meta: [
      { title: "Removals Mitcham | Aspire Removals & Transport" },
      {
        name: "description",
        content:
          "Looking for reliable removals mitcham? Aspire Removals provides fully insured home and flat moving across CR4. Get your free fixed quote today.",
      },
      { property: "og:title", content: "Removals Mitcham | Aspire Removals & Transport" },
      {
        property: "og:description",
        content:
          "Professional moving services across CR4 by Aspire Removals & Transport. Fully insured home, flat, and man and van moves from our nearby New Malden base.",
      },
      { property: "og:url", content: `${SITE.url}/removals-mitcham` },
      { property: "og:image", content: `${SITE.url}/Hero-Section-Image.png` },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      {
        property: "og:image:alt",
        content: "Aspire Removals & Transport modern fleet vehicle ready for Mitcham relocations",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Removals Mitcham | Aspire Removals & Transport" },
      {
        name: "twitter:description",
        content:
          "Looking for removals mitcham? Fully insured home, flat and man and van moving services across CR4 from our nearby New Malden base.",
      },
      { name: "twitter:image", content: `${SITE.url}/Hero-Section-Image.png` },
      {
        name: "twitter:image:alt",
        content: "Aspire Removals & Transport modern fleet vehicle ready for Mitcham relocations",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/removals-mitcham` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${SITE.url}/removals-mitcham#service`,
              name: "Removals Mitcham",
              serviceType: "Removals and Relocation Services",
              description:
                "Professional house removals, flat moves, packing services, and man and van hire in Mitcham CR4 provided by Aspire Removals & Transport.",
              provider: {
                "@type": "MovingCompany",
                name: "Aspire Removals & Transport",
                url: SITE.url,
                telephone: SITE.phone,
                email: SITE.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "20A Reynolds Road",
                  addressLocality: "New Malden",
                  addressRegion: "Greater London",
                  postalCode: "KT3 5NG",
                  addressCountry: "GB",
                },
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Mitcham",
                },
                {
                  "@type": "PostalCodeAreaSpecification",
                  postalCode: "CR4",
                },
              ],
              url: `${SITE.url}/removals-mitcham`,
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE.url}/removals-mitcham#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How is the cost of my Mitcham move calculated?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We calculate our quotes based on the volume of furniture and boxes, access conditions at both properties, travel distance, and any additional packing or assembly requirements. We provide an all-inclusive, fixed quotation up front so you know exactly what you are paying.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How far in advance should I book my moving date?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend booking two to three weeks ahead of your planned completion date, especially if you are moving on a Friday or during month-end when demand across South London peaks. If you require a short-notice move in Mitcham, our team will always do our best to accommodate you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are my belongings fully insured while in transit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every job we carry out is backed by comprehensive Goods-in-Transit insurance and Public Liability protection. Your furniture, electronics, and boxed items are fully covered from collection through to delivery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you dismantle and reassemble large furniture?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Our uniformed crew brings professional tools to safely take apart wooden bed frames, multi-door wardrobes, and flat-pack desks, rebuilding them securely in the designated rooms of your new property.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a parking permit for the removal van in Mitcham?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If your street falls within a Merton Council Controlled Parking Zone (CPZ) or has restricted parking bays, a temporary parking dispensation or bay suspension may be needed. Our coordinator will advise you on the vehicle size and arrangements required.",
                  },
                },
              ],
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
                  name: "Removals Mitcham",
                  item: `${SITE.url}/removals-mitcham`,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: RemovalsMitchamPage,
});

const SELLING_POINTS = [
  {
    icon: ShieldCheck,
    title: "Fully Insured Cover",
    text: "Every move includes full Goods-in-Transit and Public Liability insurance, protecting your household goods and both properties throughout.",
  },
  {
    icon: Users,
    title: "Uniformed DBS-Checked Crews",
    text: "Our movers are directly employed, courteous, and background-checked, trained in careful lifting, furniture protection, and polite customer service.",
  },
  {
    icon: Sparkles,
    title: "Transparent Fixed Quotes",
    text: "You receive an honest, all-inclusive price before moving day, free from hidden charges, unexpected mileage rates, or surprise completion fees.",
  },
  {
    icon: Truck,
    title: "GPS-Tracked Modern Fleet",
    text: "Our modern vehicles are fully equipped with protective ties, air-ride suspension, transit blankets, and GPS tracking for reliable, visible journeys.",
  },
  {
    icon: Award,
    title: "Dedicated Move Coordinator",
    text: "From your initial quotation to final room placement, you have a dedicated point of contact answering queries and organising every logistical detail.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable Scheduling",
    text: "We understand that completion day deadlines are strict. We arrive promptly at agreed times and communicate clearly from start to finish.",
  },
];

const MITCHAM_STEPS = [
  {
    icon: PackageCheck,
    title: "Book a Quote",
    text: "Tell us about your property size, access arrangements, and preferred date. We will issue a transparent fixed quotation with no hidden extras.",
  },
  {
    icon: Sparkles,
    title: "Wrapping & Packing",
    text: "On move day—or the day prior if booking packing—our crew wraps furniture in padded blankets, boxes delicate items, and lays floor runners.",
  },
  {
    icon: Truck,
    title: "Moving",
    text: "Belongings are securely loaded into our GPS-tracked vehicles using webbing and specialist ramps before direct transit to your new address.",
  },
  {
    icon: Home,
    title: "Offload & Unpack",
    text: "At your new home, items are placed directly into your designated rooms, and dismantled furniture is rebuilt so you can settle in comfortably.",
  },
];

const FAQS = [
  {
    q: "How is the cost of my Mitcham move calculated?",
    a: "We calculate our quotes based on the volume of furniture and boxes, access conditions at both properties, travel distance, and any additional packing or assembly requirements. We provide an all-inclusive, fixed quotation up front so you know exactly what you are paying.",
  },
  {
    q: "How far in advance should I book my moving date?",
    a: "We recommend booking two to three weeks ahead of your planned completion date, especially if you are moving on a Friday or during month-end when demand across South London peaks. If you require a short-notice move in Mitcham, our team will always do our best to accommodate you.",
  },
  {
    q: "Are my belongings fully insured while in transit?",
    a: "Yes. Every job we carry out is backed by comprehensive Goods-in-Transit insurance and Public Liability protection. Your furniture, electronics, and boxed items are fully covered from collection through to delivery.",
  },
  {
    q: "Can you dismantle and reassemble large furniture?",
    a: "Yes. Our uniformed crew brings professional tools to safely take apart wooden bed frames, multi-door wardrobes, and flat-pack desks, rebuilding them securely in the designated rooms of your new property.",
  },
  {
    q: "Do I need a parking permit for the removal van in Mitcham?",
    a: "If your street falls within a Merton Council Controlled Parking Zone (CPZ) or has restricted parking bays, a temporary parking dispensation or bay suspension may be needed. Our coordinator will advise you on the vehicle size and arrangements required.",
  },
];

function RemovalsMitchamPage() {
  return (
    <>
      {/* 2. One H1 containing "Removals Mitcham" */}
      <PageHero
        eyebrow="Service Area"
        title={<>Removals Mitcham | Reliable Home &amp; Flat Movers</>}
        subtitle="Professional residential moves, packing services, and man and van transport across Mitcham CR4 and neighbouring South London boroughs from our nearby New Malden base."
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground btn-glow-accent"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
      </PageHero>

      {/* 3. Intro Paragraph & Initial Image */}
      <section className="container-page mt-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Local Moving Specialists
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              Attentive, organised moving services across CR4
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                If you are looking for dependable removals mitcham, Aspire Removals &amp; Transport
                provides an organised, professional moving service tailored to your timeline. Located
                just minutes away in neighbouring New Malden, our experienced moving teams frequently
                assist residents and businesses relocating across the CR4 district.
              </p>
              <p>
                From Victorian terraces near Mitcham Cricket Green to modern riverside apartments, we
                manage every stage of your relocation with care and precision.{" "}
                <Link to="/quote" className="text-primary font-semibold underline hover:text-navy">
                  Get a Quote
                </Link>{" "}
                today for a transparent, fixed-price moving plan.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground btn-glow"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-navy hover:bg-section transition-colors"
              >
                Speak to a Coordinator
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
              <img
                src={domesticImg}
                alt="Aspire Removals Luton van parked on a residential street in Mitcham CR4"
                width={1400}
                height={1000}
                loading="eager"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Our Mitcham Removals Services */}
      <section className="mt-24 bg-section py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Comprehensive Solutions
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                Our Mitcham Removals Services
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Every property move brings unique logistical considerations. From multi-storey family
                houses around Pollards Hill to third-floor converted flats without lifts near London
                Road, our trained crew delivers tailored solutions covering every aspect of removals mitcham:
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* House Removals */}
            <Reveal delay={40}>
              <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">House &amp; Flat Moves</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Complete domestic removals for properties of any size. We protect carpets, banisters,
                    and doors with heavy floor runners and quilted blankets, ensuring large sofas and
                    dining tables transition smoothly through narrow Victorian hallways.
                  </p>
                </div>
                <Link
                  to="/services/home-removals"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Explore Home Removals <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Packing Services */}
            <Reveal delay={80}>
              <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Boxes className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">Packing Services</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Eliminate moving preparation stress with our professional full or fragile-only packing.
                    We bring premium double-wall cartons, acid-free tissue paper, and bubble wrap to pack
                    kitchen chinaware, glassware, and framed art safely and efficiently.
                  </p>
                </div>
                <Link
                  to="/services/packing-services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Explore Packing Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Assembly & Disassembly */}
            <Reveal delay={120}>
              <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">Assembly &amp; Disassembly</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Bulky ottoman beds, multi-door wardrobes, and flat-pack tables carefully dismantled
                    at collection and rebuilt at your destination. Our crew brings all professional tools
                    and keeps all fixings safely labelled and organised.
                  </p>
                </div>
                <Link
                  to="/services/assembly-disassembly"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Explore Assembly <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Man and Van */}
            <Reveal delay={160}>
              <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">Man &amp; Van Services</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    A flexible, hourly transport service ideal for smaller flat moves, student transitions,
                    or individual bulky furniture pieces throughout the local Merton and Wandsworth areas,
                    delivering the same high insurance and care standards.
                  </p>
                </div>
                <Link
                  to="/services/man-and-van"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Explore Man &amp; Van <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Aspire for Your Mitcham Move */}
      <section className="container-page mt-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Commitments
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              Why Choose Aspire for Your Mitcham Move
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              When evaluating different options for removals in mitcham, having complete confidence
              in your movers is vital. We uphold verified standards on every single booking:
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SELLING_POINTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="h-full rounded-2xl bg-card border border-border p-7 card-lift shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Areas We Cover Around Mitcham */}
      <section className="mt-24 bg-section py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Local Coverage &amp; Postcode
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                Areas We Cover Around Mitcham
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  From our headquarters at 20A Reynolds Road in New Malden, our team reaches Mitcham in
                  minutes via the direct A217 and Bishopsford Road links. We provide complete moving
                  coverage across the entire <strong>CR4 postcode</strong> and adjacent residential borders.
                </p>
                <p>
                  Key neighbourhoods we regularly serve include:
                </p>
                <ul className="space-y-2.5 text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Mitcham Common &amp; Pollards Hill:</strong> Providing reliable transit across residential cul-de-sacs, detached homes, and quiet suburban roads bordering Croydon.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Colliers Wood &amp; Merton Abbey:</strong> Handling modern apartment buildings, shared developments, and riverside complexes along the Wandle corridor.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Morden &amp; St Helier:</strong> Convenient access connecting southern Merton residential avenues and 1930s semi-detached houses into central Mitcham.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Tooting &amp; Streatham Vale:</strong> Skilfully managing busy main-road collections, red routes, and compact terraced streets near local railway bridges.</span>
                  </li>
                </ul>
                <p className="pt-2">
                  Delivering successful mitcham removals requires familiarity with Merton Council
                  parking regulations. Narrow residential streets off London Road, Western Road, and
                  Church Road, alongside preservation guidelines near the Mitcham Cricket Green
                  conservation zone, often mean careful vehicle positioning is essential. Many local
                  Victorian terraced homes converted into upstairs flats feature steep stairwells and
                  tight landings. Our move coordinators evaluate access conditions in advance, advising
                  whether temporary parking bay suspensions or resident permits are required so moving day
                  runs without a hitch.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
                <img
                  src={homeImg}
                  alt="Uniformed movers carrying boxes into a family home near Mitcham Common"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. How Your Mitcham Move Works */}
      <section className="container-page mt-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Simple 4-Step Plan
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              How Your Mitcham Move Works
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Every relocation with Aspire follows a clear, four-step structure designed to ensure your
              belongings are transported safely and your move completes on schedule:
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-4">
            {MITCHAM_STEPS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="relative rounded-2xl bg-card border border-border p-7 card-lift shadow-soft h-full flex flex-col">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-brand text-white shadow-lift shrink-0">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page protective packing highlight */}
      <section className="container-page my-20">
        <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
          <img
            src={packingImg}
            alt="Movers carefully wrapping wooden furniture for a house move in Mitcham"
            width={1600}
            height={600}
            loading="lazy"
            className="w-full h-[260px] md:h-[360px] object-cover"
          />
        </div>
      </section>

      {/* 8. Mitcham Removals FAQs */}
      <section className="bg-section py-24">
        <div className="container-page max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary text-center">
              Help &amp; Advice
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy text-center">
              Mitcham Removals FAQs
            </h2>
            <p className="mt-3 text-muted-foreground text-center">
              Answers to frequently asked questions about moving home or office in the Mitcham area.
            </p>
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group rounded-2xl bg-card border border-border p-6 shadow-soft">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <span className="text-base font-semibold text-navy">{f.q}</span>
                    <ChevronDown className="h-5 w-5 text-primary transition-transform group-open:rotate-180 shrink-0 mt-0.5" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="container-page my-24">
        <Reveal className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-white shadow-lift">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />
          </div>
          <div className="relative grid lg:grid-cols-[1.3fr_auto] items-center gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Book with Confidence
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready for Your Mitcham Move?
              </h2>
              <p className="mt-4 text-white/85 text-lg max-w-2xl leading-relaxed">
                Contact our friendly move coordination team today on{" "}
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="underline font-semibold hover:text-accent">
                  {SITE.phone}
                </a>{" "}
                to discuss your requirements or request your free moving quote online. Operating from
                our nearby New Malden base at 20A Reynolds Road (KT3 5NG), we are open Monday to Friday
                07:00–19:00, Saturday 08:00–17:00, and Sunday by appointment.
              </p>
              <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/75">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" /> Base: 20A Reynolds Road, New Malden, KT3 5NG
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground btn-glow-accent text-center"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors text-center"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
