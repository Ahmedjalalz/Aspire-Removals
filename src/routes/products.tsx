import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Moving Boxes & Packing Supplies UK | Aspire Removals" },
      {
        name: "description",
        content:
          "Order premium packing supplies and moving materials in the UK: double-wall cardboard boxes, bubble wrap, heavy-duty tape, shrink wrap, and wardrobe boxes.",
      },
      { property: "og:title", content: "Moving Boxes & Packing Supplies UK | Aspire Removals" },
      {
        property: "og:description",
        content:
          "Order premium packing supplies and moving materials in the UK: double-wall boxes, bubble wrap, tape, shrink wrap, and wardrobe boxes.",
      },
      { property: "og:url", content: `${SITE.url}/products` },
      { property: "og:image", content: `${SITE.url}/Large%20Boxes.jpeg` },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      {
        property: "og:image:alt",
        content: "Aspire Removals double-wall cardboard moving boxes and packing supplies",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Moving Boxes & Packing Supplies UK | Aspire Removals" },
      {
        name: "twitter:description",
        content:
          "Order premium packing supplies and moving materials in the UK: double-wall boxes, bubble wrap, tape, shrink wrap, and wardrobe boxes.",
      },
      { name: "twitter:image", content: `${SITE.url}/Large%20Boxes.jpeg` },
      {
        name: "twitter:image:alt",
        content: "Aspire Removals double-wall cardboard moving boxes and packing supplies",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/products` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ItemList",
              "@id": `${SITE.url}/products#itemlist`,
              name: "Moving Products & Packing Materials",
              description:
                "Professional packing products and moving materials supplied by Aspire Removals & Transport.",
              itemListElement: PRODUCTS.map((p, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                item: {
                  "@type": "Product",
                  name: p.title,
                  description: p.desc,
                  image: p.img.startsWith("http") ? p.img : `${SITE.url}${p.img}`,
                  url: `${SITE.url}/products`,
                  brand: {
                    "@type": "Brand",
                    name: "Aspire Removals & Transport",
                  },
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "GBP",
                    availability: "https://schema.org/InStock",
                    url: `${SITE.url}/product-quote?selected=${p.id}`,
                  },
                },
              })),
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
                  name: "Products",
                  item: `${SITE.url}/products`,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Professional packing products & materials</>}
        subtitle="Everything you need for a clean, safe move — supplied and delivered by our team. We only stock materials we'd use on our own moves."
      />

      <section className="container-page mt-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 40}>
              <article className="h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden card-lift shadow-soft">
                <div className="aspect-[4/3] bg-white overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground flex-1">{p.desc}</p>
                  <Link
                    to="/product-quote"
                    search={{ selected: p.id }}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground btn-glow"
                  >
                    Request Quote
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page my-24">
        <Reveal className="rounded-3xl gradient-brand-soft border border-border p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl text-navy font-bold">Need a custom bundle?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Tell us what you're moving and we'll put together a materials pack sized to your home.
          </p>
          <Link
            to="/product-quote"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground btn-glow-accent"
          >
            Request a materials quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}
