"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BUDGETS = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k+"];

const EMAIL = "anasgoraya99@gmail.com";
const WHATSAPP = "https://wa.me/923327402501";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/AnasGoraya", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/anasgoraya", Icon: Linkedin },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry — ${name}`);
    const body = encodeURIComponent(
      `Hi Anas,\n\n${message}\n\n— ${name} (${email})\nBudget: ${budget}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent/60";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Neon base glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-80 w-full -translate-x-1/2 bg-[radial-gradient(600px_circle_at_50%_100%,hsl(var(--accent)/0.12),transparent_65%)]"
      />

      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something exceptional"
          description="Have a project in mind, a role to fill, or just want to talk systems? My inbox is open."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Info / socials */}
          <ScrollReveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card/70 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Email me</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-medium text-foreground hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-accent"
                  >
                    +92 332 7402501
                  </a>
                </div>
              </div>

              <div className="mt-auto flex gap-3 pt-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Inquiry form */}
          <ScrollReveal className="lg:col-span-3" variant="scaleGlow">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/70 p-7 backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  aria-label="Your name"
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Your email"
                  className={inputClass}
                />
              </div>

              {/* Budget selector */}
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  Estimated budget
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        budget === b
                          ? "border-accent bg-accent/15 text-accent"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project…"
                aria-label="Project details"
                rows={4}
                className={`${inputClass} resize-none`}
              />

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-emerald to-neon-cyan px-7 py-3.5 text-sm font-semibold text-[#05070a] shadow-[0_0_24px_rgba(43,242,163,0.35)] transition-shadow hover:shadow-[0_0_36px_rgba(43,242,163,0.55)] sm:w-auto"
                >
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
