"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site-config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  return (
    <section className="section-shell pt-28">
      <div className="hero-horizon" />

      <div className="mt-16 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="panel-card px-7 py-10 sm:px-10 sm:py-12"
        >
          <div className="max-w-4xl space-y-6">
            <p className="eyebrow">Pakistani-American Software Engineer | DMV Based</p>

            <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Building strong software
              <span className="magenta-accent"> with product depth</span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">{siteConfig.heroSubtitle}</p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/projects" className="primary-button">
                View My Work <ArrowRight size={16} />
              </Link>
              <a href={`mailto:${siteConfig.socials.email}`} className="secondary-button">
                <Mail size={16} /> Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button !px-4 !py-2.5"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button !px-4 !py-2.5"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="panel-card px-7 py-8 sm:px-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 soft-glow">
                <Image
                  src="/images/headshot.jpg"
                  alt="Portrait of Zaybish Tariq"
                  width={112}
                  height={112}
                  className="h-24 w-24 object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-slate-300">
                  {siteConfig.title} <span className="text-slate-500">|</span> AI Engineer when needed
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">{siteConfig.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              {siteConfig.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between border-b border-white/8 py-2 text-sm last:border-b-0"
                >
                  <span className="text-slate-400">{fact.label}</span>
                  <span className="font-medium text-white">{fact.value}</span>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              Award-winning builder with experience across full-stack applications, internships, externships, and
              communities shaping the next generation of software engineers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
