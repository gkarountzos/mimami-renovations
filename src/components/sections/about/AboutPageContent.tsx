import { AboutHero } from "@/src/components/sections/about/AboutHero";
import { AboutStats } from "@/src/components/sections/about/AboutStats";
import { AboutValues } from "@/src/components/sections/about/AboutValues";
import { CTA } from "@/src/components/shared/Cta";

export function AboutPageContent() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutStats />
      <CTA />
    </main>
  );
}
