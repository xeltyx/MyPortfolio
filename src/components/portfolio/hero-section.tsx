import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeWorkbench } from "./code-workbench";
import { Typer } from "./typer";

export function HeroSection() {
  return (
    <section className="hero-layout relative grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_1.05fr] md:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="hero-digital-rain" aria-hidden="true">
        <span>0100101101010011011001010100101101010010</span>
        <span>1011010010010110100101011010010010110100</span>
        <span>0110100101101001010010110100101101001011</span>
        <span>1100101001011010010110100100101101001010</span>
        <span>0101101001001011010010101101001010010110</span>
        <span>1010010110100101101001010010110100101101</span>
        <span>0110100100101101001011010010100101101001</span>
        <span>1001011010010110100100101101001010010110</span>
        <span>0100101101001011010010010110100101101001</span>
        <span>1010011010010110100101101001011010010110</span>
        <span>0010110100101101001011010010010110100101</span>
        <span>1101001010010110100101101001010010110100</span>
        <span>0101101001011010010010110100101101001011</span>
        <span>1010010110100100101101001011010010110100</span>
        <span>0110100101101001011010010010110100101101</span>
        <span>1001011010010100101101001011010010110100</span>
        <span>0100101101001011010010110100100101101001</span>
        <span>1100101001011010010110100100101101001011</span>
      </div>
      <div className="relative z-10 min-w-0">
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
            <Typer words={["WEB & MOBILE DEVELOPER"]} />
          </span>
        </h2>
        <p
          className="animate-rise mt-6 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
          style={{ animationDelay: "240ms" }}
        >
          Passionate programmer with 2+ years of experience in web development and 6 months of
          experience in UI/UX design and mobile development. I build responsive applications with
          React, TypeScript, and Flutter.
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
        className="animate-rise relative z-10 mx-auto w-full min-w-0"
        style={{ animationDelay: "300ms" }}
      >
        <CodeWorkbench />
      </div>
      <a
        href="#services"
        aria-label="Scroll to expertise"
        className="absolute bottom-4 left-0 z-10 hidden items-center gap-2 font-mono text-xs text-muted-foreground md:flex"
      >
        <ArrowDown className="size-3" /> Expertise
      </a>
    </section>
  );
}
