import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE, SERVICES } from "@/lib/site";

export interface SitemapItem {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
  lastmod?: string;
}

const DEFAULT_LASTMOD = "2026-11-12";

export function getSitemapItems(): SitemapItem[] {
  return [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: DEFAULT_LASTMOD },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: DEFAULT_LASTMOD },
    ...SERVICES.map((s) => ({
      path: `/services/${s.slug}`,
      changefreq: "monthly" as const,
      priority: "0.9",
      lastmod: DEFAULT_LASTMOD,
    })),
    { path: "/products", changefreq: "weekly", priority: "0.8", lastmod: DEFAULT_LASTMOD },
    { path: "/quote", changefreq: "weekly", priority: "0.9", lastmod: DEFAULT_LASTMOD },
    { path: "/product-quote", changefreq: "monthly", priority: "0.8", lastmod: DEFAULT_LASTMOD },
    { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: DEFAULT_LASTMOD },
    { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: DEFAULT_LASTMOD },
    { path: "/removals-croydon", changefreq: "weekly", priority: "0.9", lastmod: DEFAULT_LASTMOD },
    { path: "/removals-mitcham", changefreq: "weekly", priority: "0.9", lastmod: DEFAULT_LASTMOD },
    { path: "/terms", changefreq: "yearly", priority: "0.5", lastmod: DEFAULT_LASTMOD },
    { path: "/privacy", changefreq: "yearly", priority: "0.5", lastmod: DEFAULT_LASTMOD },
  ];
}

export function generateSitemapXml(baseUrl: string = SITE.url): string {
  const cleanBase = baseUrl.replace(/\/+$/, "");
  const items = getSitemapItems();

  const urlBlocks = items.map((item) => {
    const loc = item.path === "/" ? `${cleanBase}/` : `${cleanBase}${item.path}`;
    const lastmod = item.lastmod || DEFAULT_LASTMOD;
    return [
      `  <url>`,
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
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
