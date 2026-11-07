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
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function PortfolioPage() {
  return (
    <div className="w-full px-5 sm:px-8 lg:px-12">
      <PortfolioCursor />
      <header className="sticky top-0 z-10 -mx-5 flex h-[4.5rem] items-center justify-between gap-4 border-b bg-background/85 px-5 shadow-sm shadow-black/[0.02] backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
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
          <details className="group relative">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="size-10 rounded-full bg-card [&::-webkit-details-marker]:hidden"
            >
              <summary aria-label="Open navigation menu" className="list-none">
                <Menu aria-hidden="true" />
              </summary>
            </Button>
            <div className="absolute right-0 top-full z-50 mt-2 hidden min-w-44 rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg group-open:block">
              {navigationLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) =>
                    event.currentTarget.closest("details")?.removeAttribute("open")
                  }
                  className="block rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
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
