import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell">
      <div className="section-shell pb-10 pt-32">
        <Link href="/projects" className="secondary-button !px-4 !py-2.5">
          <ArrowLeft size={15} />
          Back to Projects
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="eyebrow">{project.category}</p>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">{project.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

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

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="primary-button">
                  View GitHub
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="secondary-button">
                  Live Project
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          <div className={`project-cover rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-6 text-slate-950`}>
            <div className="relative flex h-full min-h-72 flex-col justify-between rounded-[1.6rem] border border-white/20 bg-white/12 p-6 backdrop-blur">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-900/70">{project.metric.label}</p>
                <p className="text-5xl font-semibold tracking-[-0.06em]">{project.metric.value}</p>
                <p className="text-sm text-slate-900/75">{project.date}</p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-900/75">{project.shortDescription}</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="glass-panel p-6">
            <p className="eyebrow">The Problem</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{project.problem}</p>
          </article>

          <article className="glass-panel p-6">
            <p className="eyebrow">Key Result</p>
            <p className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{project.metric.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{project.metric.label}</p>
          </article>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="glass-panel p-6">
            <p className="eyebrow">My Approach</p>
            <ul className="mt-5 space-y-4">
              {project.approach.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/80" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-panel p-6">
            <p className="eyebrow">Technical Details</p>
            <ul className="mt-5 space-y-4">
              {project.technicalDetails.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/80" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-6">
          <article className="glass-panel p-6">
            <p className="eyebrow">Key Results</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.results.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-border/60 bg-background/45 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
