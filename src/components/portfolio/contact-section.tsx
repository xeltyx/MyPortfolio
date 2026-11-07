import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { Section } from "./section";

const emailAddress = "eriko.ferdian15@gmail.com";
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

const socialLinks = [
  { Icon: Github, label: "GitHub", href: "https://github.com/xeltyx" },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eriko-ferdian-796497230/",
  },
  { Icon: Mail, label: "Email", href: emailComposeUrl },
];

export function ContactSection() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy email. Please copy it manually.");
    }
  };

  return (
    <Section id="contact" label="05 — Contact" variant="fade">
      <Reveal>
        <div className="contact-card rounded-3xl border p-6 shadow-sm sm:p-10 lg:p-14">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
            Have a project in mind?
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Let's build something
            <br />
            <span className="text-accent">great together.</span>
          </h2>
          <div className="mt-7 flex flex-col items-start gap-3 text-sm text-muted-foreground">
            <Button
              type="button"
              variant="ghost"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="link-underline h-auto w-fit max-w-full justify-start whitespace-normal break-all rounded-none p-0 text-left text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground"
            >
              <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
              {emailAddress}
            </Button>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              Sidoarjo, Indonesia
            </span>
          </div>
          <div className="mt-8 flex gap-3">
            {socialLinks.map(({ Icon, label, href }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="icon"
                className="size-11 rounded-full bg-background/70 hover:bg-secondary hover:text-foreground"
              >
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                  <Icon />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
