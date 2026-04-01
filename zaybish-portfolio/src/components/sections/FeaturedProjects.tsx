"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="section-shell py-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Case Studies</p>
          <h2 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Curated <span className="magenta-accent">work</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            A selection of projects that best show how I think through product, engineering, and measurable impact.
          </p>
        </div>
        <Link href="/projects" className="secondary-button w-fit">
          See more projects <ArrowRight size={16} />
        </Link>
      </div>

      <div className="space-y-6">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.06, type: "spring", stiffness: 180, damping: 18 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,20,0.92),rgba(13,13,15,0.97))] p-6 transition hover:border-white/20 lg:grid-cols-[90px_minmax(0,1fr)_300px]"
            >
              <div className="flex items-start justify-between lg:block">
                <p className="font-mono text-4xl text-slate-600">{project.number}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">{project.date}</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="eyebrow !text-[0.66rem]">{project.category}</p>
                  <h3 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-relaxed text-slate-300">{project.shortDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 8).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`project-cover relative rounded-[1.5rem] border border-white/8 bg-gradient-to-br ${project.accent} p-5 text-slate-950`}>
                <div className="interactive-grid rounded-[1.2rem]" />
                <div className="relative flex h-full min-h-52 flex-col justify-between rounded-[1.2rem] border border-white/20 bg-white/12 p-5 backdrop-blur">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-900/65">{project.metric.label}</p>
                    <p className="mt-3 text-5xl font-semibold tracking-[-0.06em]">{project.metric.value}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-900/75">{project.summary}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-900/75">
                      View project <ArrowRight size={15} className="transition group-hover:translate-x-1" />
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
