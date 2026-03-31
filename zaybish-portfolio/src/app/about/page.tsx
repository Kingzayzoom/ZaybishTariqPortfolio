import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, and skills behind the products Zaybish Tariq builds.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="section-shell pt-32">
        <AboutContent />
      </div>
    </div>
  );
}
