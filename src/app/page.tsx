import { Hero } from "@/src/components/landing/Hero";
import { Portfolio } from "@/src/components/landing/Portfolio";
import { Pricing } from "@/src/components/landing/Pricing";
import { ServicesGrid } from "@/src/components/landing/ServicesGrid";
import { Testimonials } from "@/src/components/landing/testimonials";
import { CTA } from "@/src/components/shared/Cta";
import { Process } from "@/src/components/shared/Process";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
}
