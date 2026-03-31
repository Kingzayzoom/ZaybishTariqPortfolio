"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site-config";

export function AboutContent() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
      {/* Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-4xl font-black text-white">
          ZT
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">Zaybish Tariq</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer &amp; ML Engineer</p>
        </div>

        <div className="flex gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={`mailto:${siteConfig.socials.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground space-y-1">
          <p>Crozet, Virginia</p>
          <p>US Citizen</p>
          <p>Available for SWE roles</p>
        </div>
      </motion.aside>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-14"
      >
        {/* Bio */}
        <section>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">About</p>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Zaybish — a CS student at Virginia Tech who got into programming because I wanted to build
              things that actually work for people, not just pass tests.
            </p>
            <p>
              My sweet spot is the intersection of full-stack development and machine learning. At SEO in NYC last
              summer, my team built an AI-powered fitness platform that won Best Overall Project out of 28 teams —
              and the part I&apos;m most proud of is the recommendation engine that actually got smarter the more
              people used it.
            </p>
            <p>
              I write Python and JavaScript most days, but I&apos;ve shipped code in everything from Rust to Swift.
              When I&apos;m not coding, I&apos;m probably exploring a new city or figuring out how to optimize
              something that doesn&apos;t need optimizing.
            </p>
            <p>I&apos;m looking for full-time SWE roles and interesting freelance projects. Let&apos;s build something.</p>
          </div>
        </section>

        <Separator />

        {/* Experience & Education */}
        <section>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">Experience &amp; Education</p>
          <div className="relative space-y-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border">
            {experiences.map((exp) => (
              <div key={exp.company + exp.role} className="pl-6 relative">
                <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[4.5px] rounded-full bg-border ring-2 ring-background" />
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <Badge variant="outline" className="text-xs">
                    {exp.type}
                  </Badge>
                </div>
                <p className="mb-1 text-sm text-muted-foreground">
                  {exp.company} &middot; {exp.location}
                </p>
                <p className="mb-3 font-mono text-xs text-muted-foreground">{exp.date}</p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      {b}
                    </li>
                  ))}
                </ul>
                {exp.tech && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">Skills</p>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid grid-cols-[120px_1fr] gap-4 items-start">
                <span className="text-xs font-medium text-muted-foreground pt-1">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
