"use client";

import { AnimatedSection } from "@/src/components/ui/animated-section";
import { TServicesContent } from "@/src/types/services";

interface IServicesHeroProps {
  content: TServicesContent;
}

export function ServicesHero({ content }: IServicesHeroProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/renovation-tools-workspace-professional.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              {content.heading}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {content.title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              {content.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
