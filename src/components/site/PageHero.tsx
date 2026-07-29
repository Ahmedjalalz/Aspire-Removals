import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative gradient-brand pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-secondary/40 blur-3xl animate-float-blob" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl animate-float-blob" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="container-page relative">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
