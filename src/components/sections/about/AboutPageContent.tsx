import { AboutHero } from "@/src/components/sections/about/AboutHero";
import { AboutStats } from "@/src/components/sections/about/AboutStats";
import { AboutValues } from "@/src/components/sections/about/AboutValues";
import { CTA } from "@/src/components/shared/Cta";
import { aboutContent } from "@/src/constants/about-content";
import { brandContent, ctaContent } from "@/src/constants/content";

export function AboutPageContent() {
  return (
    <main>
      <AboutHero content={aboutContent} brandName={brandContent.name} />
      <AboutValues content={aboutContent.valuesSection} />
      <AboutStats content={aboutContent.stats} />
      <CTA content={ctaContent} />
    </main>
  );
}
