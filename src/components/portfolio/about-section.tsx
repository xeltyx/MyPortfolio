import { profileImage, skills } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function AboutSection() {
  return (
    <Section id="about" label="02 — About">
      <div className="grid items-start gap-10 md:grid-cols-[240px_1fr] lg:gap-16">
        <Reveal>
          <div className="profile-frame relative w-48 overflow-hidden rounded-2xl border border-border/70 p-1.5 shadow-lg shadow-black/[0.08] md:w-full">
            <img
              src={profileImage}
              alt="Eriko Ferdian"
              width={338}
              height={338}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[0.85rem] object-cover object-top"
            />
          </div>
          <p className="mt-5 font-display text-xl font-semibold tracking-tight">Eriko Ferdian</p>
          <p className="mt-1 text-sm text-muted-foreground">Sidoarjo, East Java</p>
        </Reveal>
        <Reveal delay={150}>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Passionate about programming and creating digital products that are useful, intuitive,
            and enjoyable to use. With a background in Informatics Engineering and experience across
            web and mobile development, I enjoy learning new technologies and turning ideas into
            polished user experiences.
          </p>
          <div className="mt-8 rounded-xl border bg-card/70 p-5 text-sm shadow-sm">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="font-medium">Institut Sains dan Teknologi Terpadu Surabaya</span>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">2019 — 2024</span>
            </div>
            <p className="mt-2 leading-6 text-muted-foreground">Bachelor of Computer Science</p>
          </div>
          <p className="mb-4 mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
            Toolkit
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border bg-card/70 px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mb-4 mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
            Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {["Indonesian", "English"].map((language) => (
              <span
                key={language}
                className="rounded-full border bg-card/70 px-3.5 py-2 text-xs text-muted-foreground sm:text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
