"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <div className="space-y-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="group grid gap-6 rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-border sm:grid-cols-[auto_1fr_auto]"
          >
            {/* Number */}
            <div className="font-mono text-5xl font-black text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
              {project.number}
            </div>

            {/* Content */}
            <div>
              <Badge variant="secondary" className="mb-3 text-xs">
                {project.category}
              </Badge>
              <h2 className="mb-2 text-2xl font-bold tracking-tight">{project.title}</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border/50 px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric + Arrow */}
            <div className="flex flex-col items-end justify-between">
              {project.metricValue && (
                <div className="text-right">
                  <p
                    className={`bg-gradient-to-br ${project.accentColor} bg-clip-text text-3xl font-black text-transparent`}
                  >
                    {project.metricValue}
                  </p>
                  <p className="text-xs text-muted-foreground">{project.metricLabel}</p>
                </div>
              )}
              <ArrowRight
                size={18}
                className="text-muted-foreground transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
