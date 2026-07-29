import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { NAV_SERVICES } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasDropdown: true as const },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Aspire Removals home">
          <Logo className="h-10 md:h-12 w-auto" invert={!solid} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) =>
            item.hasDropdown ? (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    solid ? "text-navy hover:text-primary" : "text-white/90 hover:text-white",
                  )}
                  activeProps={{
                    className: cn(
                      "inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md",
                      solid ? "text-primary" : "text-white",
                    ),
                  }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <ServicesDropdown />
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  solid ? "text-navy hover:text-primary" : "text-white/90 hover:text-white",
                )}
                activeProps={{
                  className: cn(
                    "px-3 py-2 text-sm font-semibold rounded-md",
                    solid ? "text-primary" : "text-white",
                  ),
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground btn-glow-accent"
          >
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md",
              solid ? "text-navy" : "text-white",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-page py-4 flex flex-col" aria-label="Mobile">
            {NAV.map((item) =>
              item.hasDropdown ? (
                <div key={item.to} className="border-b border-border/60 pb-2 mb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      className="py-3 text-base font-medium text-navy hover:text-primary"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      aria-label="Toggle services submenu"
                      className="p-2 text-navy"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileServicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <ul className="pl-3 pb-2 space-y-1">
                      {NAV_SERVICES.map((s) => (
                        <li key={s.label}>
                          <Link
                            to={s.to}
                            className="block py-2 text-sm font-medium text-navy hover:text-primary"
                          >
                            {s.label}
                          </Link>
                          {s.children && (
                            <ul className="pl-4 border-l border-border/60 ml-1 space-y-1">
                              {s.children.map((c) => (
                                <li key={c.label}>
                                  <Link
                                    to={c.to}
                                    className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                                  >
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3 text-base font-medium text-navy hover:text-primary"
                  activeProps={{ className: "py-3 text-base font-semibold text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              className="mt-3 inline-flex justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-accent-foreground"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ServicesDropdown() {
  return (
    <div
      className={cn(
        "invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100",
        "absolute left-0 top-full pt-3 transition-all duration-150 z-50",
      )}
    >
      <ul className="w-72 rounded-2xl bg-white border border-border shadow-lift py-2">
        {NAV_SERVICES.map((s) => (
          <li key={s.label} className="relative group/sub">
            <Link
              to={s.to}
              className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium text-navy hover:bg-section hover:text-primary"
            >
              <span>{s.label}</span>
              {s.children && <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-muted-foreground" />}
            </Link>
            {s.children && (
              <div className="invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 absolute left-full top-0 pl-2 transition-all duration-150">
                <ul className="w-64 rounded-2xl bg-white border border-border shadow-lift py-2">
                  {s.children.map((c) => (
                    <li key={c.label}>
                      <Link
                        to={c.to}
                        className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-section hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
