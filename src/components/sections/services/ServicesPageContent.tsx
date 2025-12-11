import { ServicesDetailed } from "@/src/components/sections/services/ServicesDetailed";
import { ServicesHero } from "@/src/components/sections/services/ServicesHero";
import { CTA } from "@/src/components/shared/Cta";
import { Process } from "@/src/components/shared/Process";

export function ServicesPageContent() {
  return (
    <main>
      <ServicesHero />
      <ServicesDetailed />
      <Process />
      <CTA />
    </main>
  );
}
