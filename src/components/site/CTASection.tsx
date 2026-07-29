import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="container-page my-24">
      <Reveal className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-white shadow-lift">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />
        </div>
        <div className="relative grid md:grid-cols-[1.4fr_auto] items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Move?</h2>
            <p className="mt-4 text-white/85 text-lg max-w-xl">
              Get a transparent, no-obligation quotation in minutes. Our team is ready to plan a
              stress-free move that fits your schedule and your budget.
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground btn-glow-accent"
          >
            Get Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
