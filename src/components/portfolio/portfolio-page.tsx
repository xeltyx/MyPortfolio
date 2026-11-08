import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
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

const socialLinks = [
  { Icon: Github, label: "GitHub", href: "https://github.com/xeltyx" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eriko-ferdian-796497230/",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/riko_ferdian15/",
  },
];

type DockPosition = {
  left: number;
  top: number;
};

export function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dockPosition, setDockPosition] = useState<DockPosition | null>(null);
  const [isDockDragging, setIsDockDragging] = useState(false);
  const [dockOrientation, setDockOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [dockEdges, setDockEdges] = useState<string[]>([]);
  const dockOrientationRef = useRef<"horizontal" | "vertical">("horizontal");
  const menuRef = useRef<HTMLDivElement>(null);
  const socialDockRef = useRef<HTMLElement>(null);
  const dockDragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    left: number;
    top: number;
    moved: boolean;
  } | null>(null);
  const suppressDockClickRef = useRef(false);

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

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const drag = dockDragRef.current;
      const dock = socialDockRef.current;
      if (!drag || !dock || event.pointerId !== drag.pointerId) return;

      const deltaX = event.clientX - drag.startX;
      const deltaY = event.clientY - drag.startY;
      if (!drag.moved && Math.hypot(deltaX, deltaY) < 5) return;

      drag.moved = true;
      const bounds = dock.getBoundingClientRect();
      const currentLeft = drag.left + deltaX;
      const currentTop = drag.top + deltaY;
      const sideDistance = Math.min(currentLeft, window.innerWidth - currentLeft - bounds.width);
      const horizontalEdgeDistance = Math.min(
        currentTop,
        window.innerHeight - currentTop - bounds.height,
      );
      const isVertical =
        sideDistance / window.innerWidth < horizontalEdgeDistance / window.innerHeight;
      const orientationChanged = isVertical !== (dockOrientationRef.current === "vertical");
      const dockWidth = orientationChanged ? bounds.height : bounds.width;
      const dockHeight = orientationChanged ? bounds.width : bounds.height;
      const centeredLeft = currentLeft + bounds.width / 2 - dockWidth / 2;
      const centeredTop = currentTop + bounds.height / 2 - dockHeight / 2;
      const maxLeft = Math.max(0, window.innerWidth - dockWidth);
      const maxTop = Math.max(0, window.innerHeight - dockHeight);
      const boundedLeft = Math.max(0, Math.min(maxLeft, centeredLeft));
      const boundedTop = Math.max(0, Math.min(maxTop, centeredTop));
      const left = boundedLeft < 24 ? 0 : maxLeft - boundedLeft < 24 ? maxLeft : boundedLeft;
      const top = boundedTop < 24 ? 0 : maxTop - boundedTop < 24 ? maxTop : boundedTop;
      const edges = [];
      if (left === 0) edges.push("left");
      if (left === maxLeft) edges.push("right");
      if (top === 0) edges.push("top");
      if (top === maxTop) edges.push("bottom");

      dockOrientationRef.current = isVertical ? "vertical" : "horizontal";
      setDockOrientation(dockOrientationRef.current);
      setDockEdges(edges);
      setDockPosition({
        left,
        top,
      });
    };

    const handlePointerUp = (event: PointerEvent) => {
      const drag = dockDragRef.current;
      if (!drag || event.pointerId !== drag.pointerId) return;

      if (drag.moved) {
        suppressDockClickRef.current = true;
        window.setTimeout(() => {
          suppressDockClickRef.current = false;
        }, 0);
      }
      dockDragRef.current = null;
      setIsDockDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  const startDockDrag = (event: ReactPointerEvent<HTMLElement>) => {
    if (!event.isPrimary || event.button !== 0 || !socialDockRef.current) return;

    const bounds = socialDockRef.current.getBoundingClientRect();
    dockDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: bounds.left,
      top: bounds.top,
      moved: false,
    };
    setDockEdges([]);
    setIsDockDragging(true);
  };

  return (
    <div className="w-full px-5 sm:px-8 lg:px-12">
      <PortfolioCursor />
      <nav
        ref={socialDockRef}
        className="social-sidebar"
        aria-label="Social links"
        title="Drag to move"
        data-orientation={dockOrientation}
        data-dragging={isDockDragging}
        data-positioned={dockPosition !== null}
        data-edge={dockEdges.join(" ") || undefined}
        onPointerDown={startDockDrag}
        onClickCapture={(event) => {
          if (suppressDockClickRef.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        style={
          dockPosition
            ? {
                left: dockPosition.left,
                top: dockPosition.top,
                bottom: "auto",
              }
            : undefined
        }
      >
        {socialLinks.map(({ Icon, label, href }) => (
          <Button
            key={label}
            asChild
            variant="outline"
            size="icon"
            className="social-sidebar__link"
          >
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <Icon aria-hidden="true" />
            </a>
          </Button>
        ))}
      </nav>
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
                isMenuOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible pointer-events-none opacity-0 -translate-y-1",
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
