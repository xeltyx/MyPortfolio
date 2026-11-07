import { useEffect, useRef, type ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "fade";

export function Reveal({
  children,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      { threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal"
      data-reveal={variant}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
