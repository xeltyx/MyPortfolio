import { useState, type FormEvent } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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
  const [isSending, setIsSending] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy email. Please copy it manually.");
    }
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error ?? "Could not send your message. Please try again.");
      }

      form.reset();
      toast.success("Message sent. I'll get back to you soon!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not send your message. Please try again.",
      );
    } finally {
      setIsSending(false);
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
          <form onSubmit={sendMessage} className="contact-form mt-9">
            <div className="contact-form__fields">
              <label className="contact-form__field">
                <span>Name</span>
                <input
                  autoComplete="name"
                  maxLength={100}
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="contact-form__field">
                <span>Email</span>
                <input
                  autoComplete="email"
                  maxLength={254}
                  name="email"
                  placeholder="you@email.com"
                  required
                  type="email"
                />
              </label>
              <label className="contact-form__field contact-form__field--message">
                <span>Message</span>
                <textarea
                  maxLength={5000}
                  name="message"
                  placeholder="Tell me about the project or opportunity..."
                  required
                  rows={5}
                />
              </label>
            </div>
            <label className="contact-form__honeypot" aria-hidden="true">
              Leave this field empty
              <input autoComplete="off" name="website" tabIndex={-1} />
            </label>
            <div className="contact-form__footer">
              <p>Reply-to is set automatically — I'll respond directly.</p>
              <Button
                type="submit"
                variant="ghost"
                disabled={isSending}
                className="contact-form__submit"
              >
                {isSending ? "Sending..." : "Send message"}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <Button
              type="button"
              variant="ghost"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="link-underline h-auto max-w-full justify-start whitespace-normal break-all rounded-none p-0 text-left text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground"
            >
              <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
              {emailAddress}
            </Button>
            <a
              href="tel:+6281289770909"
              className="link-underline inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
              081289770909
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              Sidoarjo, Indonesia
            </span>
          </div>
          <div className="mt-6 flex gap-3">
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
