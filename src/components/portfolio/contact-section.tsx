import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

const emailAddress = "eriko.ferdian15@gmail.com";

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
    <section id="contact" className="portfolio-section scroll-mt-24 border-t py-20 sm:py-24">
      <Reveal variant="fade">
        <div className="contact-card">
          <div className="contact-layout">
            <div className="contact-main">
              <p className="portfolio-section-label mb-6 font-mono text-[10px] uppercase text-muted-foreground sm:text-xs">
                05 — Contact
              </p>
              <header className="contact-heading">
                <h2>
                  Let’s make it
                  <br />
                  <span>happen.</span>
                </h2>
                <p className="contact-heading__copy">
                  Have an idea, an opportunity, or just want to say hello? My inbox is open.
                </p>
              </header>

              <form onSubmit={sendMessage} className="contact-form">
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
                      rows={4}
                    />
                  </label>
                </div>
                <label className="contact-form__honeypot" aria-hidden="true">
                  Leave this field empty
                  <input autoComplete="off" name="website" tabIndex={-1} />
                </label>
                <div className="contact-form__footer">
                  <p>Your details are only used to reply to your message.</p>
                  <Button type="submit" disabled={isSending} className="contact-form__submit">
                    {isSending ? "Sending..." : "Send message"}
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </div>
            <aside className="contact-aside" aria-label="Direct contact">
              <p className="contact-aside__label">Direct contact</p>
              <div className="contact-aside__links">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="contact-aside__link"
                >
                  <Mail aria-hidden="true" />
                  <span>{emailAddress}</span>
                </Button>
                <span className="contact-aside__link">
                  <MapPin aria-hidden="true" />
                  <span>Sidoarjo, Indonesia</span>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
