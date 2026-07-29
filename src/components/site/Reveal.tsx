import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const anim =
    direction === "left" ? "animate-fade-left" : direction === "right" ? "animate-fade-right" : "animate-fade-up";

  const Comp = Tag as unknown as React.ElementType;
  return (
    <Comp
      ref={ref as never}
      className={cn(className, shown ? anim : "opacity-0")}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
