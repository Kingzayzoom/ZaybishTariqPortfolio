import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies in full-stack product engineering, machine learning, and developer tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <div className="section-shell pt-32">
        <div className="mb-16 max-w-3xl space-y-5">
          <p className="eyebrow">Case Studies</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Work that blends product thinking with technical depth.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            These projects show how I like to build: clear user problems, strong engineering foundations, and enough
            ambition to make the final product worth remembering.
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </div>
  );
}
