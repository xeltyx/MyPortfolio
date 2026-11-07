import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeWorkbench } from "./code-workbench";
import { Typer } from "./typer";

export function HeroSection() {
  return (
    <section className="hero-layout relative grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1.1fr_1fr] md:gap-10">
      <div className="min-w-0">
        <h1
          className="animate-rise font-semibold leading-[1.06] tracking-tight"
          style={{ animationDelay: "120ms" }}
        >
          <span className="mb-2 block font-sans text-lg font-medium text-muted-foreground sm:text-xl">
            Hi, I&apos;m
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl">
            Eriko Ferdian<span className="text-accent">.</span>
          </span>
        </h1>
        <h2
          className="animate-rise mt-4 text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-[2.1rem]"
          style={{ animationDelay: "180ms" }}
        >
          <span className="block">
            <Typer words={["WEB & APP DEVELOPER"]} />
          </span>
        </h2>
        <p
          className="animate-rise mt-6 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
          style={{ animationDelay: "240ms" }}
        >
          Passionate programmer who enjoys turning ideas into thoughtful digital experiences. I
          build responsive web and mobile applications with React, TypeScript, and Flutter.
        </p>
        <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
          <Button asChild className="group h-12 rounded-full px-6 shadow-md shadow-primary/10">
            <a
              href="https://drive.google.com/file/d/1QvBhzOCdPeKX-sgUzmtO4_1DAiCIl-vO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV{" "}
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full px-6 hover:bg-secondary hover:text-foreground"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
      <div
        className="animate-rise relative mx-auto w-full max-w-lg"
        style={{ animationDelay: "300ms" }}
      >
        <CodeWorkbench />
      </div>
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-4 left-0 hidden items-center gap-2 font-mono text-xs text-muted-foreground md:flex"
      >
        <ArrowDown className="size-3" /> Services
      </a>
    </section>
  );
}
