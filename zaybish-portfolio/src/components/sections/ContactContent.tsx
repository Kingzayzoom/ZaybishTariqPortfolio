"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

const links = [
  {
    label: "Email",
    value: siteConfig.socials.email,
    href: `mailto:${siteConfig.socials.email}`,
    icon: <Mail size={17} />,
    description: "Fastest way to reach me",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zaybishtariq",
    href: siteConfig.socials.linkedin,
    icon: <LinkedinIcon size={17} />,
    description: "Professional profile & history",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/kingzayzoom",
    href: siteConfig.socials.github,
    icon: <GithubIcon size={17} />,
    description: "Code, projects, and contributions",
    external: true,
  },
];

const lookingFor = [
  "Full-time software engineering roles (SWE, backend, full-stack)",
  "Summer 2026 internships",
  "Selective freelance projects with real product scope",
  "Research or open-source collaboration",
];

export function ContactContent() {
  return (
    <div className="pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-14 max-w-3xl space-y-5"
      >
        <p className="eyebrow">Contact</p>
        <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          Let&apos;s build something worth remembering.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m open to internships, full-time SWE roles, and interesting freelance projects.
          Send a message — I respond within 24 hours.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-4"
        >
          {/* Email hero card */}
          <a
            href={`mailto:${siteConfig.socials.email}`}
            className="group glass-panel block overflow-hidden p-7 transition hover:border-white/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200">
                  <Mail size={20} />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</p>
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white transition group-hover:text-slate-100">
                  {siteConfig.socials.email}
                </p>
                <p className="text-sm text-muted-foreground">Fastest way to reach me — I check daily.</p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white">
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>

          {/* LinkedIn + GitHub */}
          <div className="grid grid-cols-2 gap-4">
            {links.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group glass-panel flex flex-col gap-4 p-5 transition hover:border-white/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300">
                    {link.icon}
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{link.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{link.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="glass-panel flex items-center gap-3 px-5 py-4 text-sm text-muted-foreground">
            <MapPin size={15} className="shrink-0" />
            <span>{siteConfig.location} · US Citizen · Open to relocation</span>
          </div>
        </motion.div>

        {/* Right — what I'm looking for */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="space-y-4"
        >
          <div className="glass-panel h-full p-7">
            <p className="eyebrow mb-6">What I&apos;m Looking For</p>

            <div className="space-y-3">
              {lookingFor.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Response Time</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Within 24 hrs</p>
              <p className="mt-1 text-sm text-muted-foreground">
                I take every message seriously. If it&apos;s a fit, I&apos;ll say so clearly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
