import { ServicesDetailed } from "@/src/components/sections/services/ServicesDetailed";
import { ServicesHero } from "@/src/components/sections/services/ServicesHero";
import { CTA } from "@/src/components/shared/Cta";
import ProcessSection from "@/src/components/shared/process/ProcessSection";
import { ctaContent } from "@/src/constants/content";
import { servicesContent } from "@/src/constants/services-content";

export function ServicesPageContent() {
  return (
    <main>
      <ServicesHero content={servicesContent} />
      <ServicesDetailed
        content={servicesContent}
        ctaRequestQuote={ctaContent.requestQuote}
      />
      <ProcessSection />
      <CTA content={ctaContent} />
    </main>
  );
}
