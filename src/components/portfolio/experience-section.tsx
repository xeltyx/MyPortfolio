import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { jobs, type Job } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function ExperienceSection() {
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  return (
    <Section id="experience" label="03 — Experience">
      <div className="grid gap-4">
        {jobs.map((job, index) => (
          <Reveal key={job.company} delay={index * 80}>
            <Button
              variant="ghost"
              onClick={() => setActiveJob(job)}
              className="job-card group h-auto w-full justify-start gap-5 whitespace-normal rounded-2xl border bg-card/70 p-4 text-left transition-all duration-300 hover:bg-card hover:text-foreground sm:gap-7 sm:p-5 lg:p-6"
            >
              <div className="min-w-0 flex-1">
                <p className="mb-2 font-mono text-[10px] font-normal uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {job.period}
                </p>
                <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-accent sm:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium">{job.company}</p>
                <p className="mt-3 max-w-lg text-sm font-normal leading-6 text-muted-foreground">
                  {job.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] font-normal text-secondary-foreground sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border bg-background/70 text-muted-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowUpRight />
              </span>
            </Button>
          </Reveal>
        ))}
      </div>
      <Dialog open={!!activeJob} onOpenChange={(open) => !open && setActiveJob(null)}>
        <DialogContent className="max-h-[90dvh] overflow-y-auto rounded-2xl p-6 sm:max-w-2xl sm:p-8">
          {activeJob && (
            <div className="flex flex-col gap-6">
              <DialogHeader className="gap-2">
                <p className="font-mono text-xs text-muted-foreground">
                  {activeJob.period} · {activeJob.location}
                </p>
                <DialogTitle className="font-display text-2xl tracking-tight">
                  {activeJob.role}
                </DialogTitle>
                <DialogDescription>{activeJob.company}</DialogDescription>
              </DialogHeader>
              <ul className="space-y-4 text-sm leading-7">
                {activeJob.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
                  Skills &amp; tools
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {activeJob.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-secondary/60 px-3.5 py-1.5 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
