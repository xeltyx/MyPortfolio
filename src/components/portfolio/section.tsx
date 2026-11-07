import type { ReactNode } from "react";
import { Reveal, type RevealVariant } from "./reveal";

export function Section({
  id,
  label,
  children,
  variant,
}: {
  id: string;
  label: string;
  children: ReactNode;
  variant: RevealVariant;
}) {
  return (
    <section id={id} className="portfolio-section scroll-mt-24 border-t py-20 sm:py-24">
      <Reveal variant={variant}>
        <p className="portfolio-section-label mb-9 font-mono text-[10px] uppercase text-muted-foreground sm:text-xs">
          {label}
        </p>
        {children}
      </Reveal>
    </section>
  );
}
