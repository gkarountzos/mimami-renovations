import HeroSection from "@/src/components/landing/hero/HeroSection";
import PortfolioSection from "@/src/components/landing/portfolio/PortfolioSection";
import PricingSection from "@/src/components/landing/pricing/PricingSection";
import ServicesGridSection from "@/src/components/landing/services-grid/ServicesGridSection";
import TestimonialsSection from "@/src/components/landing/testimonials/TestimonialsSection";
import { CTA } from "@/src/components/shared/Cta";
import ProcessSection from "@/src/components/shared/process/ProcessSection";
import { ctaContent } from "@/src/constants/content";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGridSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <CTA content={ctaContent} />
    </main>
  );
}
