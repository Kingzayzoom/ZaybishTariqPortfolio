import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Virginia Tech CS student, Full Stack Developer & ML Engineer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <AboutContent />
      </div>
    </div>
  );
}
