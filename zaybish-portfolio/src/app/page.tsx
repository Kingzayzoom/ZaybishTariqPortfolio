import { Hero } from "@/components/sections/Hero";
import { HomePanels } from "@/components/sections/HomePanels";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function HomePage() {
  return (
    <div className="page-shell pb-8">
      <Hero />
      <HomePanels />
      <FeaturedProjects />
    </div>
  );
}
