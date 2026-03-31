import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack and ML projects by Zaybish Tariq.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Selected Work
        </p>
        <h1 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <ProjectsGrid />
      </div>
    </div>
  );
}
