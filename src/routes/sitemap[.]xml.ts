import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE, SERVICES } from "@/lib/site";

export interface SitemapItem {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

export function getSitemapItems(): SitemapItem[] {
  return [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "weekly", priority: "0.9" },
    ...SERVICES.map((s) => ({
      path: `/services/${s.slug}`,
      changefreq: "monthly" as const,
      priority: "0.9",
    })),
    { path: "/products", changefreq: "weekly", priority: "0.8" },
    { path: "/quote", changefreq: "weekly", priority: "0.9" },
    { path: "/product-quote", changefreq: "monthly", priority: "0.8" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/contact", changefreq: "monthly", priority: "0.8" },
    { path: "/terms", changefreq: "yearly", priority: "0.5" },
    { path: "/privacy", changefreq: "yearly", priority: "0.5" },
  ];
}

export function generateSitemapXml(baseUrl: string = SITE.url): string {
  const cleanBase = baseUrl.replace(/\/+$/, "");
  const items = getSitemapItems();

  const urlBlocks = items.map((item) => {
    const loc = item.path === "/" ? `${cleanBase}/` : `${cleanBase}${item.path}`;
    return [
      `  <url>`,
      `    <loc>${loc}</loc>`,
      `    <changefreq>${item.changefreq}</changefreq>`,
      `    <priority>${item.priority}</priority>`,
      `  </url>`,
    ].join("\n");
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urlBlocks,
    `</urlset>`,
    ``,
  ].join("\n");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl =
          (typeof process !== "undefined" && (process.env.SITE_URL || process.env.VITE_SITE_URL)) ||
          SITE.url;
        const xml = generateSitemapXml(baseUrl);

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
          },
        });
      },
    },
  },
});
