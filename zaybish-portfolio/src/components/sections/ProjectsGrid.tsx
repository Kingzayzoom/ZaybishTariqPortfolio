"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <div className="space-y-8 pb-10">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="group grid gap-8 rounded-[2rem] border border-border/60 bg-card/75 p-7 transition hover:border-foreground/15 hover:bg-card/95 lg:grid-cols-[90px_minmax(0,1fr)_300px]"
          >
            <div className="flex items-start justify-between lg:block">
              <p className="font-mono text-4xl text-muted-foreground/40">{project.number}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{project.date}</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <p className="eyebrow !text-[0.66rem]">{project.category}</p>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{project.title}</h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{project.shortDescription}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground">
                Read the full breakdown <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className={`project-cover rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent} p-5 text-slate-950`}
            >
              <div className="relative flex h-full min-h-52 flex-col justify-between rounded-[1.2rem] border border-white/20 bg-white/12 p-5 backdrop-blur">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-900/70">{project.metric.label}</p>
                  <p className="mt-3 text-5xl font-semibold tracking-[-0.06em]">{project.metric.value}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-full bg-slate-950/10 px-2.5 py-1 text-[11px] text-slate-900/80">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-900/75">{project.summary}</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
