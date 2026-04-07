import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Lightbulb, TrendingUp, Layers, Code2, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="page-shell">
      <div className="section-shell pb-16 pt-32">
        <Link href="/projects" className="secondary-button !px-4 !py-2.5">
          <ArrowLeft size={15} />
          Back to Projects
        </Link>

        {/* ── Hero ── */}
        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="eyebrow">{project.category}</p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="primary-button">
                  View GitHub <ArrowUpRight size={15} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="secondary-button">
                  Live Project <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          <div className={`project-cover rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-6 text-slate-950`}>
            <div className="relative flex h-full min-h-48 flex-col justify-between rounded-[1.6rem] border border-white/20 bg-white/12 p-6 backdrop-blur lg:min-h-72">
              <div className="space-y-2">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-slate-900/60">
                  {project.metric.label}
                </p>
                <p className="text-5xl font-semibold tracking-[-0.06em]">{project.metric.value}</p>
                <p className="text-sm text-slate-900/65">{project.date}</p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-900/70">{project.shortDescription}</p>
            </div>
          </div>
        </section>

        {/* ── Problem + Key Result ── */}
        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Problem */}
          <article className="relative overflow-hidden rounded-[1.75rem] border border-amber-500/20 bg-[linear-gradient(160deg,rgba(30,24,14,0.97),rgba(18,14,8,0.99))] p-7 shadow-[0_0_40px_rgba(245,158,11,0.06)]">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-amber-400 via-orange-400/60 to-transparent" />
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/[0.07] blur-2xl" />
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/20 text-amber-300">
                <Lightbulb size={17} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-400/80">The Problem</p>
            </div>
            <p className="text-base leading-relaxed text-slate-200">{project.problem}</p>
          </article>

          {/* Key Result */}
          <article className="relative overflow-hidden rounded-[1.75rem] border border-emerald-500/20 bg-[linear-gradient(160deg,rgba(10,28,20,0.97),rgba(6,18,12,0.99))] p-7 shadow-[0_0_40px_rgba(16,185,129,0.07)]">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-emerald-400 via-teal-400/60 to-transparent" />
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/[0.09] blur-2xl" />
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/20 text-emerald-300">
                <TrendingUp size={17} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-400/80">Key Result</p>
            </div>
            <p className="text-6xl font-semibold tracking-[-0.06em] text-white">{project.metric.value}</p>
            <p className="mt-2 text-sm text-emerald-300/70">{project.metric.label}</p>
          </article>
        </section>

        {/* ── Approach + Technical ── */}
        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Approach */}
          <article className="relative overflow-hidden rounded-[1.75rem] border border-violet-500/20 bg-[linear-gradient(160deg,rgba(18,12,30,0.97),rgba(11,8,20,0.99))] p-7 shadow-[0_0_40px_rgba(139,92,246,0.07)]">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-violet-400 via-purple-400/60 to-transparent" />
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/[0.09] blur-2xl" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/20 text-violet-300">
                <Layers size={17} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400/80">My Approach</p>
            </div>
            <ol className="space-y-4">
              {project.approach.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed text-slate-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/20 font-mono text-[10px] font-bold text-violet-300">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>

          {/* Technical Details */}
          <article className="relative overflow-hidden rounded-[1.75rem] border border-sky-500/20 bg-[linear-gradient(160deg,rgba(8,18,30,0.97),rgba(5,12,22,0.99))] p-7 shadow-[0_0_40px_rgba(14,165,233,0.07)]">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-sky-400 via-cyan-400/60 to-transparent" />
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-500/[0.09] blur-2xl" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/20 text-sky-300">
                <Code2 size={17} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-400/80">Technical Details</p>
            </div>
            <ol className="space-y-4">
              {project.technicalDetails.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed text-slate-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/20 font-mono text-[10px] font-bold text-sky-300">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </section>

        {/* ── Results ── */}
        <section className="mt-5">
          <article className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-500/20 bg-[linear-gradient(160deg,rgba(24,10,30,0.97),rgba(16,6,20,0.99))] p-7 shadow-[0_0_40px_rgba(217,70,239,0.07)]">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 via-pink-400/60 to-transparent" />
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-500/[0.09] blur-2xl" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/20 text-fuchsia-300">
                <CheckCircle2 size={17} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-fuchsia-400/80">Key Results</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.results.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.2rem] border border-fuchsia-500/15 bg-fuchsia-500/[0.06] p-4"
                >
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-fuchsia-400" />
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
