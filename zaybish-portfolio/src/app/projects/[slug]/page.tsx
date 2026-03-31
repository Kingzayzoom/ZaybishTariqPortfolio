import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-muted-foreground">{project.number}</span>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">{project.shortDescription}</p>
        </div>

        {/* Hero card */}
        <div
          className={`mb-10 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br ${project.accentColor} text-white`}
        >
          {project.metricValue && (
            <div className="text-center">
              <p className="text-5xl font-black">{project.metricValue}</p>
              <p className="mt-1 text-sm font-medium opacity-80">{project.metricLabel}</p>
            </div>
          )}
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Overview
          </h2>
          <p className="leading-relaxed text-muted-foreground">{project.fullDescription}</p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Key Results
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <GithubIcon size={15} /> View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
