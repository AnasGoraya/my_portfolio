import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/923327402501", Icon: MessageCircle },
  { label: "GitHub", href: "https://github.com/AnasGoraya", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/anasgoraya", Icon: Linkedin },
  { label: "Email", href: "mailto:anasgoraya99@gmail.com", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60 py-10">
      <div className="container-narrow flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-mono text-sm font-bold text-foreground">
            {"</>"} Anas Nazir
          </span>
          <p className="text-xs text-muted-foreground">
            Full-Stack Developer &amp; Software Engineer
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Socials + back-to-top */}
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container-narrow mt-8 border-t border-border pt-5 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anas Nazir. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
