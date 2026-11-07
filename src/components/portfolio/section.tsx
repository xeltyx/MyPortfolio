import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="portfolio-section scroll-mt-24 border-t py-20 sm:py-24">
      <Reveal>
        <p className="portfolio-section-label mb-9 font-mono text-[10px] uppercase text-muted-foreground sm:text-xs">
          {label}
        </p>
      </Reveal>
      {children}
    </section>
  );
}
