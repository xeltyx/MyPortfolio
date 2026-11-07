import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { PortfolioCursor } from "./portfolio-cursor";
import { ProjectsSection } from "./projects-section";
import { ServicesSection } from "./services-section";
import { ThemeToggle } from "./theme-toggle";

const navigationLinks = [
  { label: "Expertise", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="w-full px-5 sm:px-8 lg:px-12">
      <PortfolioCursor />
      <header className="sticky top-0 z-50 -mx-5 flex h-[4.5rem] items-center justify-between gap-4 border-b bg-background/85 px-5 shadow-sm shadow-black/[0.02] backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <a
          href="#top"
          aria-label="Eriko Ferdian home"
          className="shrink-0 font-display text-base font-bold tracking-tight sm:text-lg"
        >
          ERIKO <span className="text-accent">FERDIAN</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 text-xs font-medium text-muted-foreground sm:gap-7 sm:text-sm md:flex"
        >
          {navigationLinks.map(({ label, href }) => (
            <a key={href} href={href} className="link-underline py-2 hover:text-foreground">
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <div className="relative" ref={menuRef}>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="size-10 rounded-full bg-card"
            >
              <Menu aria-hidden="true" />
            </Button>
            <div
              className={[
                "absolute right-[-0.5rem] top-full z-50 mt-3 min-w-52 rounded-2xl border bg-popover p-2 text-popover-foreground shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition-all duration-200",
                isMenuOpen ? "visible opacity-100 translate-y-0" : "invisible pointer-events-none opacity-0 -translate-y-1",
              ].join(" ")}
            >
              {navigationLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-foreground outline-none transition-colors hover:bg-accent/10 hover:text-foreground focus-visible:bg-accent/10 focus-visible:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="scroll-mt-20">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="flex flex-wrap justify-between gap-3 border-t py-7 font-mono text-xs text-muted-foreground">
        <span>© 2026 Eriko Ferdian</span>
      </footer>
    </div>
  );
}
