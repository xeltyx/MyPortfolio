import { Code2, Palette, Smartphone } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const services = [
  {
    Icon: Palette,
    title: "UI/UX Design",
    description:
      "I turn product requirements into clear user flows, wireframes, and interactive prototypes in Figma. I design consistent interfaces around the needs of their users, then refine layouts and interactions to make each screen intuitive and easy to navigate.",
    number: "01",
  },
  {
    Icon: Code2,
    title: "Front-End Development",
    description:
      "I turn UI designs into responsive, interactive web interfaces using React and TypeScript. I build maintainable components, connect the interface to REST APIs, and work directly with backend and QA teams to resolve issues and deliver a reliable experience across screen sizes.",
    number: "02",
  },
  {
    Icon: Smartphone,
    title: "Mobile App Development",
    description:
      "I build mobile applications with Flutter and Dart, from implementing screens and app flows to integrating REST APIs. My project experience includes loyalty features, barcode functionality, and learning-app content with animation and voice-over support.",
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
            I contribute to digital products from designing clear user experiences to building
            responsive web interfaces and mobile applications, with a focus on usability,
            maintainability, and reliable integrations.
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
