import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="border-t border-border/50 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Available for opportunities
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
