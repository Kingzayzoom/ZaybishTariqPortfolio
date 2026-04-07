"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="section-shell py-20">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Selected Projects</p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Curated <span className="magenta-accent">work</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            A selection of projects that best show how I think through product, engineering, and measurable impact.
          </p>
        </div>
        <Link href="/projects" className="secondary-button w-fit shrink-0">
          All projects <ArrowRight size={15} />
        </Link>
      </div>

      <div className="space-y-4">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col gap-0 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[linear-gradient(160deg,rgba(20,20,24,0.96),rgba(11,11,13,0.98))] transition-all duration-300 hover:border-white/[0.16] hover:shadow-[0_8px_48px_rgba(120,80,255,0.09)] lg:grid lg:grid-cols-[88px_minmax(0,1fr)_260px]"
            >
              {/* Number column */}
              <div className="flex items-center justify-between px-6 pt-6 pb-0 lg:flex-col lg:items-start lg:justify-start lg:px-6 lg:py-8">
                <span className="font-mono text-[2.8rem] font-semibold leading-none tracking-tight text-white/[0.06] transition-colors duration-300 group-hover:text-white/[0.12]">
                  {project.number}
                </span>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-slate-600 lg:mt-3">{project.date}</p>
              </div>

              {/* Main content */}
              <div className="flex flex-col justify-center gap-5 px-6 py-6 lg:py-8 lg:pr-8">
                <div className="space-y-2.5">
                  <p className="eyebrow !text-[0.62rem]">{project.category}</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white transition-colors group-hover:text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 7).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] text-slate-400 transition-colors group-hover:border-white/[0.12] group-hover:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors group-hover:text-white">
                  View project
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Accent card */}
              <div
                className={`project-cover relative hidden overflow-hidden rounded-[1.75rem] bg-gradient-to-br lg:block ${project.accent}`}
              >
                <div className="interactive-grid absolute inset-0" />
                {/* Sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />

                <div className="relative flex h-full min-h-[200px] flex-col justify-between p-6">
                  {/* Metric */}
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-black/50">
                      {project.metric.label}
                    </p>
                    <p className="mt-1.5 text-[3.2rem] font-semibold leading-none tracking-[-0.06em] text-slate-950">
                      {project.metric.value}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/15 px-2.5 py-1 text-[11px] font-medium text-slate-900/75 backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-950/70 transition group-hover:text-slate-950">
                      Open project
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
