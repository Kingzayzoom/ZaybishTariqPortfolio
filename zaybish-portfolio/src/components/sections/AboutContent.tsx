"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site-config";

export function AboutContent() {
  return (
    <div className="grid gap-14 pb-10 lg:grid-cols-[0.95fr_1.4fr]">
      <motion.aside
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-6"
      >
        <div className="glass-panel overflow-hidden p-5">
          <div className="rounded-[1.75rem] border border-border/60 bg-[radial-gradient(circle_at_top_left,rgba(54,142,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,154,0.16),transparent_30%),rgba(255,255,255,0.04)] p-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Zaybish Tariq"
                width={900}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em]">{siteConfig.name}</h1>
            <p className="mt-2 text-base text-muted-foreground">{siteConfig.title}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={15} />
              {siteConfig.location}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{siteConfig.availability}</p>
          </div>
        </div>

        <div className="glass-panel p-6">
          <p className="eyebrow">Quick Context</p>
          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Background</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteConfig.identity.background}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Started With</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteConfig.identity.origin}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Based In</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteConfig.identity.base}</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6">
          <p className="eyebrow">Links</p>
          <div className="mt-5 space-y-3 text-sm">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground transition hover:text-foreground"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground transition hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/45 px-4 py-3 text-muted-foreground transition hover:text-foreground"
            >
              Email
              <Mail size={15} />
            </a>
          </div>
        </div>
      </motion.aside>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="space-y-12"
      >
        <section className="space-y-5">
          <p className="eyebrow">About</p>
          <h2 className="text-balance text-5xl font-semibold tracking-[-0.05em]">
            I started coding by solving a problem at home.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="glass-panel p-6">
            <p className="eyebrow">What Drives Me</p>
            <p className="mt-5 text-xl font-semibold tracking-[-0.04em]">
              Building software that creates real movement for real people.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I care about useful products, strong engineering, and work that feels grounded in an actual need rather
              than a throwaway demo.
            </p>
          </article>

          <article className="glass-panel p-6">
            <p className="eyebrow">Community</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {siteConfig.communities.map((community) => (
                <span
                  key={community}
                  className="rounded-full border border-border/60 bg-background/45 px-3 py-1 text-xs text-muted-foreground"
                >
                  {community}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Community has been a big part of how I grow as an engineer and how I want to show up for others.
            </p>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-6">
            <p className="eyebrow">Skills</p>
            <div className="mt-6 space-y-5">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-3 border-b border-border/50 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[150px_1fr]"
                >
                  <p className="text-sm font-medium">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/60 bg-background/45 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6">
            <p className="eyebrow">Education</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{siteConfig.education.school}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.education.degree} · {siteConfig.education.gpa} · {siteConfig.education.graduation}
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.education.coursework.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/45 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
