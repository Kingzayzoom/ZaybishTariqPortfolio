"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { getTechIconData } from "@/components/ui/tech-icons";

export function HomePanels() {
  const featuredProject = projects[0];

  return (
    <section className="section-shell py-8">
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div whileHover={{ y: -4 }} className="panel-card min-h-[24rem] overflow-hidden">
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-4">
              <p className="eyebrow">What I Do</p>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Software engineering first. AI engineering where it creates leverage.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                My goal is to become an exceptional software engineer. I like building clean web products, scalable
                backend systems, and stepping into AI-heavy work when it clearly improves the product.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <BriefcaseBusiness className="mt-0.5 text-slate-200" />
                <div>
                  <p className="text-sm font-medium text-white">End-to-end ownership</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    I enjoy shipping complete systems, from polished UI to backend architecture and deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <Sparkles className="mt-0.5 text-slate-200" />
                <div>
                  <p className="text-sm font-medium text-white">Product-minded execution</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    I care about software that feels intentional, performs well, and solves a real need.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <BrainCircuit className="mt-0.5 text-slate-200" />
                <div>
                  <p className="text-sm font-medium text-white">AI as an advantage, not a crutch</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    I work with ML, NLP, OCR, and retrieval systems when they create real product value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          className="panel-card min-h-[24rem]"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow">Featured Project</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white">
                The project that best represents my work
              </h2>
            </div>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition hover:bg-white/10 sm:flex"
            >
              <ArrowRight size={18} />
            </Link>
          </div>

          <Link href={`/projects/${featuredProject.slug}`} className="group block">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`project-cover relative mt-8 rounded-[1.6rem] border border-white/8 bg-gradient-to-br ${featuredProject.accent} p-5 text-slate-950`}
            >
              <div className="interactive-grid rounded-[1.3rem]" />
              <motion.div
                animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="interactive-orb"
              />

              <div className="relative rounded-[1.3rem] border border-white/20 bg-white/12 p-5 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-900/65">
                      {featuredProject.category}
                    </p>
                    <p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{featuredProject.title}</p>
                  </div>
                  <div className="hidden rounded-full border border-slate-900/15 bg-white/25 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-900/70 sm:block">
                    Project
                  </div>
                </div>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-900/75">{featuredProject.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.tech.slice(0, 4).map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.26, delay: index * 0.05 }}
                      className="rounded-full border border-slate-900/12 bg-white/18 px-3 py-1 text-[11px] text-slate-900/80"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-4xl font-semibold tracking-[-0.05em]">{featuredProject.metric.value}</p>
                    <p className="text-sm text-slate-900/75">{featuredProject.metric.label}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="hidden text-sm font-medium text-slate-900/75 sm:block">Open project</p>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 text-slate-950 transition group-hover:bg-white/30">
                      <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <motion.div whileHover={{ y: -4 }} className="panel-card mt-4">
        <div className="max-w-3xl">
          <p className="eyebrow">Skills & Tools</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Built with the stack I actually use
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            A fuller view of the languages, frameworks, AI libraries, OCR tools, and workflow tooling I use across
            projects, internships, and externships.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: groupIndex * 0.05 }}
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{group.label}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => {
                  const iconData = getTechIconData(skill);

                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: groupIndex * 0.04 + skillIndex * 0.015 }}
                      className="skill-pill"
                    >
                      <span
                        className="skill-pill-icon"
                        style={{
                          color: iconData.color,
                          borderColor: iconData.glow,
                          boxShadow: `0 0 0 1px ${iconData.glow} inset, 0 0 18px ${iconData.glow}`,
                        }}
                      >
                        {iconData.icon}
                      </span>
                      <span>{skill}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
