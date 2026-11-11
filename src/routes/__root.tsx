import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground btn-glow"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground btn-glow"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { title: "Aspire Removals & Transport | UK Home & Office Movers" },
      {
        name: "description",
        content:
          "Aspire Removals & Transport — reliable, fully-insured house removals, office relocation, packing services and furniture transport across the UK.",
      },
      { name: "author", content: "Aspire Removals & Transport" },
      { name: "theme-color", content: "#005F86" },
      { property: "og:site_name", content: "Aspire Removals & Transport" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Aspire Removals & Transport | UK Home & Office Movers" },
      {
        property: "og:description",
        content:
          "Reliable UK removals and transport. House moves, office relocation, packing and furniture delivery — trust us to take you home.",
      },
      {
        property: "og:image",
        content: `${SITE.url}/Hero-Section-Image.png`,
      },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      {
        property: "og:image:alt",
        content: "Aspire Removals & Transport modern fleet vehicle ready for UK removals",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aspire Removals & Transport | UK Home & Office Movers" },
      {
        name: "twitter:description",
        content: "Premium UK removals — house, office, packing and transport.",
      },
      {
        name: "twitter:image",
        content: `${SITE.url}/Hero-Section-Image.png`,
      },
      {
        name: "twitter:image:alt",
        content: "Aspire Removals & Transport modern fleet vehicle ready for UK removals",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MovingCompany",
              "@id": `${SITE.url}/#organization`,
              name: "Aspire Removals & Transport",
              url: SITE.url,
              logo: `${SITE.url}/Aspire-nav-logo.png`,
              image: `${SITE.url}/Hero-Section-Image.png`,
              description:
                "UK removals and transport company offering house removals, office relocation, packing services and furniture transport.",
              telephone: SITE.phone,
              email: SITE.email,
              priceRange: "££",
              currenciesAccepted: "GBP",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "20A Reynolds Road",
                addressLocality: "New Malden",
                addressRegion: "Greater London",
                postalCode: "KT3 5NG",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "51.3995",
                longitude: "-0.2548",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/aspireremovals",
                "https://www.instagram.com/aspireremovals",
                "https://twitter.com/aspireremovals",
                "https://www.linkedin.com/company/aspire-removals",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              url: SITE.url,
              name: "Aspire Removals & Transport",
              description: "UK removals, house moves, office relocations, packing and storage.",
              publisher: {
                "@id": `${SITE.url}/#organization`,
              },
              inLanguage: "en-GB",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lift focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
