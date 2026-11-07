import { ArrowUpRight, Code2, Gamepad2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project, type ProjectScreenshot } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { useEffect, useState } from "react";

const categoryIcons: Record<string, typeof Code2> = {
  "Mobile app": Smartphone,
  "Game development": Gamepad2,
  "Web application": Code2,
  "Corporate banking": Code2,
};

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const hasProjectLinks = Boolean(
    activeProject?.deploymentLink || (activeProject?.link && activeProject?.linkLabel),
  );

  return (
    <Section id="projects" label="04 — Projects" variant="scale">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = categoryIcons[project.category] ?? Code2;

          return (
            <Reveal key={project.title} delay={index * 70}>
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="job-card group flex h-full w-full flex-col rounded-2xl border bg-card/70 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card hover:shadow-xl hover:shadow-black/[0.05] focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4 sm:p-6"
                aria-label={`View ${project.title} project details`}
              >
                <span className="mb-6 flex w-full items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl border bg-secondary/60 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                    <ArrowUpRight className="size-4 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">
                  {project.category}
                </span>
                <span className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                  {project.title}
                </span>
                <span className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </span>
                <span className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-background/70 px-2.5 py-1 font-mono text-[10px] text-muted-foreground sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
                <span className="mt-5 font-mono text-[10px] text-accent sm:text-xs">
                  View project details
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="hide-scrollbar max-h-[90dvh] overflow-y-auto rounded-2xl p-6 sm:max-w-2xl sm:p-8">
          {activeProject && (
            <div className="flex flex-col gap-6">
              <ProjectGallery project={activeProject} />
              <DialogHeader className="gap-2">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {activeProject.category}
                </p>
                <DialogTitle className="font-display text-2xl tracking-tight">
                  {activeProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-7">
                  {activeProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                  Skills &amp; tools
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-secondary/60 px-3.5 py-1.5 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {hasProjectLinks && (
                <div className="flex flex-wrap gap-3">
                  {activeProject.link && activeProject.linkLabel && (
                    <Button
                      asChild
                      variant={activeProject.deploymentLink ? "outline" : "default"}
                      className="h-11 w-fit rounded-full px-5"
                    >
                      <a href={activeProject.link} target="_blank" rel="noreferrer">
                        {activeProject.linkLabel}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  )}
                  {activeProject.deploymentLink && (
                    <Button asChild className="h-11 w-fit rounded-full px-5">
                      <a href={activeProject.deploymentLink} target="_blank" rel="noreferrer">
                        View deployment
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const fallbackImage: ProjectScreenshot = {
    src: project.image,
    alt: project.imageAlt,
    width: project.imageDimensions.width,
    height: project.imageDimensions.height,
  };
  const images =
    project.screenshots && project.screenshots.length > 0 ? project.screenshots : [fallbackImage];

  if (images.length > 1) {
    return <ProjectCarousel images={images} />;
  }

  const image = images[0];
  if (!image) return null;

  return (
    <div
      className={`flex w-full items-center justify-center ${
        project.displayAspectRatio
          ? "aspect-video overflow-hidden rounded-lg"
          : "h-[min(42dvh,28rem)]"
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={
          project.displayAspectRatio
            ? "h-full w-full object-fill"
            : "max-h-full max-w-full rounded-lg object-contain"
        }
        style={
          project.displayAspectRatio
            ? { aspectRatio: project.displayAspectRatio }
            : {
                aspectRatio: `${image.width} / ${image.height}`,
                height: "auto",
                width: "auto",
              }
        }
        width={image.width}
        height={image.height}
      />
    </div>
  );
}

function ProjectCarousel({ images }: { images: ProjectScreenshot[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActiveSlide = () => setActiveSlide(api.selectedScrollSnap());
    updateActiveSlide();
    api.on("select", updateActiveSlide);

    return () => {
      api.off("select", updateActiveSlide);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "center" }}
      aria-label="Project screenshots"
      className="mx-auto w-full max-w-sm"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.src}>
            <div className="flex h-[min(42dvh,28rem)] items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-full max-w-full rounded-lg object-contain"
                width={image.width}
                height={image.height}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        aria-label="Previous screenshot"
        className="left-2 border-0 bg-background/90 shadow-md"
      />
      <CarouselNext
        aria-label="Next screenshot"
        className="right-2 border-0 bg-background/90 shadow-md"
      />
      <p className="mt-2 text-center font-mono text-xs text-muted-foreground" aria-live="polite">
        {activeSlide + 1} / {images.length}
      </p>
    </Carousel>
  );
}
