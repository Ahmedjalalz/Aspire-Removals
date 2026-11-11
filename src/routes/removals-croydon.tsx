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
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/lib/site";
import domesticImg from "@/assets/services/domestic-removals.jpg";
import homeImg from "@/assets/services/home-removals.jpg";
import manVanImg from "@/assets/services/man-and-van.jpg";
import packingImg from "@/assets/services/packing-services.jpg";

export const Route = createFileRoute("/removals-croydon")({
  head: () => ({
    meta: [
      { title: "Removals Croydon | Aspire Removals & Transport" },
      {
        name: "description",
        content:
          "Looking for reliable removals croydon? Aspire Removals delivers fully insured home and office moves. Get your free fixed quote online today.",
      },
      { property: "og:title", content: "Removals Croydon | Aspire Removals & Transport" },
      {
        property: "og:description",
        content:
          "Reliable removals croydon provided by Aspire Removals & Transport. Uniformed DBS-checked crews, fixed quotes, and fully insured home and office moves.",
      },
      { property: "og:url", content: `${SITE.url}/removals-croydon` },
      { property: "og:image", content: `${SITE.url}/Hero-Section-Image.png` },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      {
        property: "og:image:alt",
        content: "Aspire Removals & Transport modern fleet vehicle ready for Croydon relocations",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Removals Croydon | Aspire Removals & Transport" },
      {
        name: "twitter:description",
        content:
          "Looking for removals croydon? Fully insured home, office and man with a van moving services across Croydon from our nearby New Malden base.",
      },
      { name: "twitter:image", content: `${SITE.url}/Hero-Section-Image.png` },
      {
        name: "twitter:image:alt",
        content: "Aspire Removals & Transport modern fleet vehicle ready for Croydon relocations",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/removals-croydon` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${SITE.url}/removals-croydon#service`,
              name: "Removals Croydon",
              serviceType: "Removals and Relocation Services",
              description:
                "Professional home removals, office relocations, and man and van services in Croydon provided by Aspire Removals & Transport.",
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
                  name: "Croydon",
                },
                {
                  "@type": "PostalCodeAreaSpecification",
                  postalCode: "CR0",
                },
                {
                  "@type": "PostalCodeAreaSpecification",
                  postalCode: "CR2",
                },
                {
                  "@type": "PostalCodeAreaSpecification",
                  postalCode: "CR7",
                },
                {
                  "@type": "PostalCodeAreaSpecification",
                  postalCode: "CR8",
                },
              ],
              url: `${SITE.url}/removals-croydon`,
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE.url}/removals-croydon#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much do removals in Croydon cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Removal costs depend on the volume of belongings, property access conditions, travel distance, and whether packing or furniture dismantling is required. We do not provide generic estimates; instead, we assess your move details and provide an all-inclusive, fixed quotation with no hidden extras.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How far ahead should I book my move?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend reserving your booking two to three weeks in advance, especially for Friday completions or month-end dates when demand across South London is highest. However, short-notice and mid-week bookings are often accommodated depending on fleet availability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are my belongings insured during the move?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every relocation we undertake is fully backed by comprehensive Goods-in-Transit insurance as well as Public Liability insurance, providing full protection from collection to delivery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you supply packing materials and full packing services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We supply premium double-wall moving cartons, wardrobe boxes with hanging rails, packing tape, and bubble wrap. You can pack your own belongings using our supplies or select our full or fragile-only packing service where our team wraps everything for you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I book a man with a van for smaller moves?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Our man and van service is specifically designed for student moves, single-bedroom flats, and individual bulky furniture items across Croydon and surrounding postcodes, offering the same insurance and professional standards as our large household moves.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to arrange a parking suspension in Croydon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If your property is situated within a Croydon Council Controlled Parking Zone (CPZ) or has restrictive on-street parking, a parking bay suspension or dispensation is advisable. We guide you on the necessary vehicle lengths and timing so your loading bay is ready when our team arrives.",
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
                  name: "Removals Croydon",
                  item: `${SITE.url}/removals-croydon`,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: RemovalsCroydonPage,
});

const SELLING_POINTS = [
  {
    icon: ShieldCheck,
    title: "Fully Insured Cover",
    text: "Every move includes comprehensive Goods-in-Transit insurance alongside Public Liability protection, safeguarding your furniture and property throughout the process.",
  },
  {
    icon: Users,
    title: "Uniformed DBS-Checked Crews",
    text: "Our moving teams are directly employed, DBS-checked professionals trained in safe lifting, protective wrapping, and courteous customer care.",
  },
  {
    icon: Sparkles,
    title: "Transparent Fixed Quotes",
    text: "We provide clear, fixed quotations without hidden charges, fuel surcharges, or unexpected completion fees.",
  },
  {
    icon: Truck,
    title: "GPS-Tracked Modern Fleet",
    text: "Our modern removal vehicles are fully equipped with air-ride suspension, transit blankets, and GPS tracking, giving you total visibility during transit.",
  },
  {
    icon: Award,
    title: "Dedicated Move Coordinator",
    text: "From your initial enquiry through to the moment the last carton is placed, you work with a single point of contact who understands your move requirements.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable Scheduling",
    text: "Moving day timelines are strictly respected, with prompt arrivals and proactive communication keeping your completion day smooth.",
  },
];

const CROPDON_STEPS = [
  {
    icon: PackageCheck,
    title: "Book a Quote",
    text: "Contact our team online or by phone. Tell us about your property size, access arrangements, and moving date, and we will issue a transparent, fixed-price quotation.",
  },
  {
    icon: Sparkles,
    title: "Wrapping & Packing",
    text: "On moving day—or the day prior if you book our packing service—our uniformed crew wraps furniture in padded blankets, boxes fragile items with acid-free paper, and lays protective floor runners.",
  },
  {
    icon: Truck,
    title: "Moving",
    text: "Your goods are loaded using padded ties and specialist ramps into our GPS-tracked fleet. We drive directly to your destination, maintaining continuous communication.",
  },
  {
    icon: Home,
    title: "Offload & Unpack",
    text: "At your new property, our crew places furniture and labelled cartons into your specified rooms, reassembling dismantled items so you can relax immediately.",
  },
];

const FAQS = [
  {
    q: "How much do removals in Croydon cost?",
    a: "Removal costs depend on the volume of belongings, property access conditions, travel distance, and whether packing or furniture dismantling is required. We do not provide generic estimates; instead, we assess your move details and provide an all-inclusive, fixed quotation with no hidden extras.",
  },
  {
    q: "How far ahead should I book my move?",
    a: "We recommend reserving your booking two to three weeks in advance, especially for Friday completions or month-end dates when demand across South London is highest. However, short-notice and mid-week bookings are often accommodated depending on fleet availability.",
  },
  {
    q: "Are my belongings insured during the move?",
    a: "Yes. Every relocation we undertake is fully backed by comprehensive Goods-in-Transit insurance as well as Public Liability insurance, providing full protection from collection to delivery.",
  },
  {
    q: "Do you supply packing materials and full packing services?",
    a: "Yes. We supply premium double-wall moving cartons, wardrobe boxes with hanging rails, packing tape, and bubble wrap. You can pack your own belongings using our supplies or select our full or fragile-only packing service where our team wraps everything for you.",
  },
  {
    q: "Can I book a man with a van for smaller moves?",
    a: "Yes. Our man and van service is specifically designed for student moves, single-bedroom flats, and individual bulky furniture items across Croydon and surrounding postcodes, offering the same insurance and professional standards as our large household moves.",
  },
  {
    q: "Do I need to arrange a parking suspension in Croydon?",
    a: "If your property is situated within a Croydon Council Controlled Parking Zone (CPZ) or has restrictive on-street parking, a parking bay suspension or dispensation is advisable. We guide you on the necessary vehicle lengths and timing so your loading bay is ready when our team arrives.",
  },
];

function RemovalsCroydonPage() {
  return (
    <>
      {/* 2. One H1 containing "Removals Croydon" */}
      <PageHero
        eyebrow="Service Area"
        title={<>Removals Croydon | Professional Home & Office Movers</>}
        subtitle="Trusted domestic, commercial, and man with a van moving services throughout Croydon and surrounding South London areas from our nearby New Malden base."
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
              Experienced, punctual moving teams serving Croydon
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                When planning your removals croydon, Aspire Removals & Transport delivers a
                dependable, courteous service tailored to your exact schedule. Operating from our
                nearby base in New Malden, our professional crews assist homeowners, tenants, and
                local businesses across the borough with smooth, well-organised relocations.
              </p>
              <p>
                Whether you are transitioning between flats near East Croydon or relocating an
                entire family household, we take care of the heavy lifting and logistical planning
                from initial enquiry through to final delivery.
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
                alt="Aspire Removals modern Luton van parked outside a Victorian terraced house in Croydon"
                width={1400}
                height={1000}
                loading="eager"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. House Removals in Croydon */}
      <section className="mt-24 bg-section py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal direction="left" className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
                <img
                  src={homeImg}
                  alt="Uniformed house movers Croydon wrapping wooden dining furniture with protective transit blankets"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Household Moves
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                House Removals in Croydon
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Relocating your household requires thoughtful coordination and careful handling.
                  Our dedicated service for house removals croydon caters to properties of all
                  layouts, from modern high-rise apartments in central developments to spacious
                  Edwardian and 1930s homes. As an experienced removal company croydon residents
                  rely on, we protect your property from start to finish.
                </p>
                <p>
                  Our uniformed team arrives equipped with heavy-duty quilted furniture blankets, floor
                  runners, mattress covers, and specialist webbing to safeguard doorways, banisters,
                  and carpets. When arranging home removals croydon families can choose full or partial
                  packing options, alongside dismantling and reassembling services for beds and large
                  wardrobes. With our skilled house movers croydon managing loading and unloading, your
                  domestic possessions travel safely, allowing you to settle into your new address
                  without unnecessary hassle.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Man with a Van in Croydon & 6. Office Removals Croydon */}
      <section className="container-page mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 5. Man with a Van in Croydon */}
          <Reveal>
            <div className="h-full rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft flex flex-col justify-between">
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-brand text-white shadow-soft">
                  <Truck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy">
                  Man with a Van in Croydon
                </h2>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    If you are moving a compact flat, transporting student belongings, or shifting
                    individual pieces of furniture, our man with a van croydon service offers an
                    efficient and practical solution. Ideal for smaller loads that do not require a
                    full lorry, this flexible option provides a punctual driver and a clean, spacious
                    vehicle with all necessary protective straps.
                  </p>
                  <p>
                    We regularly handle man and van croydon surrey bookings for local apartment
                    moves, antique collections, and urgent single-item runs across South London. As
                    part of our broader removal services croydon, this service operates under the same
                    high operational standards as our major household relocations. You receive punctual
                    arrival, polite assistance with loading, and complete peace of mind that your goods
                    are properly looked after throughout the journey.
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-border">
                <img
                  src={manVanImg}
                  alt="Man with a van Croydon movers loading a sofa with protective straps on a residential street"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* 6. Office Removals Croydon */}
          <Reveal delay={80}>
            <div className="h-full rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft flex flex-col justify-between">
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-brand text-white shadow-soft">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy">
                  Office Removals Croydon
                </h2>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Minimising operational disruption is the central priority of our office removals
                    croydon service. We assist local firms, corporate offices, retail spaces, and
                    creative studios across the borough with structured relocations scheduled around
                    working hours. Weekend and evening moves ensure your staff experience zero daytime
                    disruption.
                  </p>
                  <p>
                    With methodical crate labelling, careful IT workstation transport, and systematic
                    placement at your destination address, our move coordinators ensure your workspace
                    is organized and ready for business promptly on Monday morning.
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-section border border-border p-6 space-y-3">
                <p className="text-sm font-semibold text-navy">Business Move Inclusions:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Out-of-hours, evening and weekend moving slots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Heavy-duty plastic crate hire and colour-coded labelling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Anti-static IT equipment and monitor screen protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Dedicated project manager from proposal to sign-off</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Why Choose Aspire for Your Croydon Move */}
      <section className="mt-24 bg-section py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Why Aspire
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                Why Choose Aspire for Your Croydon Move
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Choosing between different removal companies croydon comes down to reliability,
                transparency, and the standard of care given to your possessions. As an established
                removals company croydon clients trust, we base our service exclusively on verified
                standards.
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

          <Reveal className="mt-12 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              As an attentive moving company croydon residents count on, we never take shortcuts with
              your belongings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. Areas We Cover Around Croydon */}
      <section className="container-page mt-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Local Coverage & Postcodes
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              Areas We Cover Around Croydon
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                From our operational base at 20A Reynolds Road in New Malden, our vehicles have swift direct
                access into Croydon via the A232 and A23 corridors. We provide full moving coverage across
                all local postal districts, including <strong>CR0, CR2, CR7, and CR8</strong>.
              </p>
              <p>
                Key residential and commercial neighbourhoods we cover include:
              </p>
              <ul className="space-y-2.5 text-base">
                <li className="flex items-start gap-2.5">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Addiscombe &amp; Selhurst:</strong> Navigating tight Victorian residential streets, terraced frontages, and busy tramlines along Addiscombe Road.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>South Croydon &amp; Sanderstead:</strong> Managing family relocations across hillside avenues, tree-lined residential drives, and multi-storey detached properties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Purley &amp; Kenley:</strong> Providing large-scale household transit with easy access to the southern Surrey borders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Norbury &amp; Thornton Heath:</strong> Skilfully handling period conversions, narrow communal stairwells, and busy main road loading.</span>
                </li>
              </ul>
              <p className="pt-2">
                Managing removals in croydon demands real local knowledge. Our team is familiar with
                Croydon Council controlled parking zones (CPZ), Red Route loading restrictions along the
                Purley Way and Wellesley Road, and the tight access common in converted period flats. We
                advise you in advance regarding parking suspension applications so vehicle positioning is
                secured on the day.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
              <img
                src={packingImg}
                alt="Aspire Removals crew carrying double-wall packing cartons into a flat in South Croydon"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. How Your Croydon Move Works */}
      <section className="mt-28 bg-section py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Clear 4-Step Process
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-navy">
                How Your Croydon Move Works
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Every Aspire relocation follows a clear, four-step moving plan designed to eliminate
                stress from first contact through to placement:
              </p>
            </Reveal>
          </div>

          <div className="relative mt-14">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid gap-8 lg:grid-cols-4">
              {CROPDON_STEPS.map(({ icon: Icon, title, text }, i) => (
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
        </div>
      </section>

      {/* 10. Croydon Removals FAQs */}
      <section className="container-page mt-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary text-center">
              Questions &amp; Answers
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy text-center">
              Croydon Removals FAQs
            </h2>
            <p className="mt-3 text-muted-foreground text-center">
              Clear answers to the most common questions about moving in Croydon and nearby CR postcodes.
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

      {/* 11. Final Call to Action */}
      <section className="container-page my-24">
        <Reveal className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-white shadow-lift">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />
          </div>
          <div className="relative grid lg:grid-cols-[1.3fr_auto] items-center gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Ready to Move?
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                Book Your Croydon Move Today
              </h2>
              <p className="mt-4 text-white/85 text-lg max-w-2xl leading-relaxed">
                Plan your Croydon move with confidence. Contact our move coordination team today on{" "}
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="underline font-semibold hover:text-accent">
                  {SITE.phone}
                </a>{" "}
                to discuss your dates, or complete our straightforward online quote form. Our New Malden
                office is open Monday to Friday 07:00–19:00, Saturday 08:00–17:00, and Sunday by appointment.
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
