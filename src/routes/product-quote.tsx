import { useState } from "react";
import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { sendEmail } from "@/lib/send-email-client";
import { PRODUCTS } from "@/lib/products";
import { CheckCircle2, PackageCheck, Plus, Minus, ShoppingBag } from "lucide-react";

interface SearchParams {
  selected?: string;
}

export const Route = createFileRoute("/product-quote")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      selected: typeof search.selected === "string" ? search.selected : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Get a Product Quote | Aspire Removals & Transport" },
      { name: "description", content: "Request a custom quote for packing boxes, bubble wrap, tape and moving materials." },
      { property: "og:title", content: "Product Quote | Aspire Removals" },
      { property: "og:description", content: "Custom packing materials quote — replied to within 24 hours." },
      { property: "og:url", content: "/product-quote" },
    ],
    links: [{ rel: "canonical", href: "/product-quote" }],
  }),
  component: ProductQuote,
});

function ProductQuote() {
  const search = useSearch({ from: "/product-quote" });

  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    PRODUCTS.forEach((p) => {
      initial[p.id] = p.id === search.selected ? 1 : 0;
    });
    return initial;
  });

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending">("idle");
  const [error, setError] = useState<string | null>(null);

  const selectedCount = Object.values(quantities).filter((q) => q > 0).length;

  const toggleProduct = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? 0 : 1,
    }));
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const setExactQuantity = (id: string, val: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, val),
    }));
  };

  return (
    <>
      <PageHero
        eyebrow="Products Quote"
        title={<>Request a quote for moving products</>}
        subtitle="Select the packing materials and boxes you need. We'll send a custom quote to your email within 24 hours."
      />

      <section className="container-page mt-16 mb-24 max-w-4xl">
        <Reveal>
          {submitted ? (
            <div className="rounded-3xl bg-card border border-border p-10 md:p-14 shadow-soft text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-brand text-white shadow-lift">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy">Product quote request sent!</h2>
              <p className="mt-3 text-muted-foreground text-base max-w-md mx-auto">
                Thanks for your request! We'll prepare your custom materials pricing and get back to you within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground btn-glow"
                >
                  <ShoppingBag className="h-4 w-4" /> Back to Products
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-section border border-border px-7 py-3 text-sm font-semibold text-navy hover:bg-background transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError(null);

                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);

                const name = formData.get("name")?.toString().trim() ?? "";
                const email = formData.get("email")?.toString().trim() ?? "";
                const phone = formData.get("phone")?.toString().trim() ?? "";
                const message = formData.get("message")?.toString().trim() ?? "";

                if (!name || !email) {
                  setError("Please fill in your name and email address.");
                  return;
                }

                const details: Record<string, string> = {
                  "Quote Type": "Packing Products & Materials",
                };

                let hasSelectedProducts = false;
                PRODUCTS.forEach((p) => {
                  const qty = quantities[p.id] || 0;
                  if (qty > 0) {
                    details[p.title] = `${qty} unit${qty > 1 ? "s" : ""}`;
                    hasSelectedProducts = true;
                  }
                });

                if (!hasSelectedProducts) {
                  setError("Please select at least one product and quantity for your quote.");
                  return;
                }

                setStatus("pending");

                try {
                  await sendEmail({
                    type: "quote",
                    name,
                    email,
                    phone,
                    message: message || "Product Quote Request",
                    details,
                  });
                  form.reset();
                  setSubmitted(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } catch (err) {
                  setStatus("idle");
                  setError(err instanceof Error ? err.message : "Unable to send product quote request. Please try again.");
                }
              }}
              className="rounded-3xl bg-card border border-border p-7 md:p-10 shadow-soft"
            >
              <div className="border-b border-border pb-6">
                <h2 className="text-xl md:text-2xl font-bold text-navy">Select Moving Products & Quantities</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Check the products you need and specify the quantity for each.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {PRODUCTS.map((p) => {
                  const qty = quantities[p.id] || 0;
                  const isSelected = qty > 0;

                  return (
                    <div
                      key={p.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border bg-background hover:border-border/80"
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <input
                          type="checkbox"
                          id={`product-${p.id}`}
                          checked={isSelected}
                          onChange={() => toggleProduct(p.id)}
                          className="h-5 w-5 rounded border-input text-primary focus:ring-primary cursor-pointer accent-primary"
                        />
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-14 w-14 rounded-xl object-cover border border-border bg-white shrink-0"
                        />
                        <label htmlFor={`product-${p.id}`} className="min-w-0 cursor-pointer">
                          <p className="text-base font-semibold text-navy hover:text-primary transition-colors">
                            {p.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{p.desc}</p>
                        </label>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <span className="text-xs text-muted-foreground font-medium">Qty:</span>
                        <div className="flex items-center rounded-xl border border-input bg-card p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(p.id, -1)}
                            disabled={qty === 0}
                            className="grid h-8 w-8 place-items-center rounded-lg hover:bg-section text-navy disabled:opacity-30 transition-colors cursor-pointer"
                            aria-label={`Decrease quantity of ${p.title}`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={qty}
                            onChange={(e) => setExactQuantity(p.id, parseInt(e.target.value) || 0)}
                            className="w-12 text-center text-sm font-semibold text-navy bg-transparent outline-none border-none focus:ring-0"
                          />
                          <button
                            type="button"
                            onClick={() => updateQuantity(p.id, 1)}
                            className="grid h-8 w-8 place-items-center rounded-lg hover:bg-section text-navy transition-colors cursor-pointer"
                            aria-label={`Increase quantity of ${p.title}`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-navy">Your Contact Details</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Where should we send your custom product quote?
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-navy">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Smith"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="e.g. 07123 456789"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy">Additional notes or delivery address</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Any specific requirements, delivery preferences, or move dates..."
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  {selectedCount > 0
                    ? `${selectedCount} product${selectedCount > 1 ? "s" : ""} selected for quote`
                    : "No products selected yet"}
                </p>
                <button
                  type="submit"
                  disabled={status === "pending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground btn-glow disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  {status === "pending" ? "Sending Request..." : "Request Product Quote"}{" "}
                  <PackageCheck className="h-4 w-4" />
                </button>
              </div>

              {error && <p className="mt-4 text-sm text-destructive text-center font-medium">{error}</p>}
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
