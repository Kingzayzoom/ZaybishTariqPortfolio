import type { Metadata } from "next";
import { ExperienceContent } from "@/components/sections/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internships, fellowships, and education that shaped Zaybish Tariq as an engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="page-shell">
      <div className="section-shell pt-32">
        <ExperienceContent />
      </div>
    </div>
  );
}
