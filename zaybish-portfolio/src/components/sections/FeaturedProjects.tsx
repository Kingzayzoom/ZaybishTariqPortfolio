"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-border sm:flex-row sm:items-center"
            >
              {/* Number + gradient accent */}
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.accentColor} text-white`}
              >
                <span className="font-mono text-xs font-bold">{project.number}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {project.shortDescription}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded border border-border/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {project.metricValue && (
                <div className="shrink-0 text-right">
                  <p className="text-2xl font-black">{project.metricValue}</p>
                  <p className="text-xs text-muted-foreground">{project.metricLabel}</p>
                </div>
              )}

              <ArrowRight
                size={16}
                className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
