"use client";

import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/src/components/ui/animated-section";
import { MagneticButton } from "@/src/components/ui/magnetic-button";
import { THeroContent } from "@/src/types/hero";

interface IHeroClientProps {
  content: THeroContent;
}

export default function HeroClient({ content }: IHeroClientProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/modern-luxury-apartment-interior-renovation-living.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Main Title */}
          <AnimatedSection delay={200}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
              {content.title}
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={400}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {content.subtitle}
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={600}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/contact" variant="primary">
                <span className="flex items-center gap-2">
                  {content.cta}
                  <ArrowRight size={18} />
                </span>
              </MagneticButton>
              <MagneticButton href="/services" variant="outline">
                {content.viewServices}
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <AnimatedSection delay={800}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">
              {content.scroll}
            </span>
            <div className="w-px h-12 bg-linear-to-b from-muted-foreground to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
