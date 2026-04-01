"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site-config";

const skillColors = [
  {
    dot: "bg-violet-400",
    pill: "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/18 hover:border-violet-400/50",
  },
  {
    dot: "bg-cyan-400",
    pill: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/18 hover:border-cyan-400/50",
  },
  {
    dot: "bg-emerald-400",
    pill: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/18 hover:border-emerald-400/50",
  },
  {
    dot: "bg-fuchsia-400",
    pill: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 hover:bg-fuchsia-500/18 hover:border-fuchsia-400/50",
  },
  {
    dot: "bg-amber-400",
    pill: "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/18 hover:border-amber-400/50",
  },
  {
    dot: "bg-sky-400",
    pill: "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/18 hover:border-sky-400/50",
  },
];

export function AboutContent() {
  return (
    <div className="pb-10 space-y-10">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-10 lg:grid-cols-[1fr_1.5fr] items-start"
      >
        {/* Photo + extras column */}
        <div className="space-y-4">
          {/* Photo card */}
          <div className="panel-card overflow-hidden p-0">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Zaybish Tariq"
                width={900}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-white/70">{siteConfig.title}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/55">
                  <MapPin size={13} />
                  {siteConfig.location}
                </div>
              </div>
            </div>
          </div>

          {/* Affiliations */}
          <div className="panel-card p-5">
            <p className="eyebrow mb-4">Affiliated With</p>
            <div className="flex items-center gap-4">
              {[
                { src: "/images/virginia-tech-logo.png", alt: "Virginia Tech" },
                { src: "/images/colorstack-logo.jpg", alt: "ColorStack" },
                { src: "/images/mlt-logo.jpg", alt: "MLT" },
              ].map(({ src, alt }) => (
                <div
                  key={alt}
                  className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1"
                >
                  <Image src={src} alt={alt} width={40} height={40} className="h-full w-full object-contain" />
                </div>
              ))}
              <div className="ml-1 space-y-0.5">
                <p className="text-xs font-medium text-white/80">Virginia Tech</p>
                <p className="text-xs text-muted-foreground">ColorStack · MLT Fellow</p>
              </div>
            </div>
          </div>

          {/* Fun facts */}
          <div className="panel-card p-5">
            <p className="eyebrow mb-4">Outside the Terminal</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { emoji: "🏋️", label: "Lifting" },
                { emoji: "🥊", label: "UFC" },
                { emoji: "🏂", label: "Snowboarding" },
                { emoji: "⚔️", label: "Anime" },
              ].map(({ emoji, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
                >
                  <span className="text-lg">{emoji}</span>
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">
              I started coding by solving a problem at home.
            </h1>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Links row */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button !px-4 !py-2.5 text-sm"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="secondary-button !px-4 !py-2.5 text-sm"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="secondary-button !px-4 !py-2.5 text-sm"
            >
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Drive + Community + Education row ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="grid gap-6 md:grid-cols-3"
      >
        <article className="panel-card p-6">
          <p className="eyebrow">What Drives Me</p>
          <p className="mt-5 text-xl font-semibold tracking-[-0.04em] leading-snug">
            Building software that creates real movement for real people.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I care about useful products, strong engineering, and work grounded in an actual need — not a throwaway demo.
          </p>
        </article>

        <article className="panel-card p-6">
          <p className="eyebrow">Community</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.communities.map((community) => (
              <span
                key={community}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300"
              >
                {community}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Community has shaped how I think about growth, leadership, and creating room for other engineers to win.
          </p>
        </article>

        <article className="panel-card p-6">
          <p className="eyebrow">Education</p>
          <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">{siteConfig.education.school}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.education.degree}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{siteConfig.education.gpa}</span>
            <span className="h-px w-4 bg-white/15" />
            <span>{siteConfig.education.graduation}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.education.coursework.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </motion.div>

      {/* ── Skills ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.14 }}
        className="panel-card p-7"
      >
        <p className="eyebrow mb-8">Skills</p>
        <div className="space-y-7">
          {skillGroups.map((group, i) => {
            const color = skillColors[i % skillColors.length];
            return (
              <div key={group.label} className="grid gap-3 sm:grid-cols-[160px_1fr]">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full shrink-0 ${color.dot}`} />
                  <p className="text-sm font-medium text-white/80">{group.label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 cursor-default ${color.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
