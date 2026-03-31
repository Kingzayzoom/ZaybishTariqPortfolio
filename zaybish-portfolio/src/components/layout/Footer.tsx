import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <>
      <section className="section-shell pb-8 pt-6">
        <div className="panel-card p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="eyebrow">From Concept To Creation</p>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Let&apos;s make it happen.
              </h2>
              <p className="text-base text-slate-300 sm:text-lg">
                I&apos;m available for internships, full-time software engineering roles, and selective freelance
                projects.
              </p>
            </div>
            <Link href="/contact" className="primary-button w-fit">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-white/8 py-3">
        <div className="marquee-track">
          <span>Open to Work</span>
          <span>Full Stack + ML</span>
          <span>Virginia Tech CS</span>
          <span>Open to Work</span>
          <span>Full Stack + ML</span>
          <span>Virginia Tech CS</span>
        </div>
      </div>

      <footer className="section-shell py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-lg font-medium tracking-tight text-white">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-slate-300">
              {siteConfig.title}. Thanks for checking out my site.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 transition-colors hover:text-white"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 transition-colors hover:text-white"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              aria-label="Email"
              className="text-slate-300 transition-colors hover:text-white"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
