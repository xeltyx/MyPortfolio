import { Code2, Palette, Smartphone } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const services = [
  {
    Icon: Palette,
    title: "UI/UX Design",
    description:
      "I turn requirements into clear user flows and polished interfaces, balancing usability, accessibility, and visual consistency across every screen and interaction.",
    number: "01",
  },
  {
    Icon: Code2,
    title: "Web Development",
    description:
      "I build responsive web experiences with thoughtful interactions, maintainable code, and reliable integrations, keeping performance and accessibility in mind.",
    number: "02",
  },
  {
    Icon: Smartphone,
    title: "Mobile Development",
    description:
      "I develop mobile applications with intuitive workflows, polished interfaces, and dependable features that make everyday tasks easier.",
    number: "03",
  },
];

export function ServicesSection() {
  return (
    <Section id="services" label="01 — Expertise" variant="up">
      <Reveal>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How I can help
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            From shaping an idea into a user-friendly design to building and refining the finished
            product, I can help at every step.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map(({ Icon, title, description, number }, index) => (
          <Reveal key={title} delay={index * 90}>
            <article className="job-card group h-full rounded-2xl border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card hover:shadow-xl hover:shadow-black/[0.05] sm:p-6">
              <div className="mb-7 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border bg-secondary/60 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
