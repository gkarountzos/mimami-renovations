"use client";

import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm font-medium tracking-widest uppercase text-accent">
                {content.about.subtitle}
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                {content.about.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                {content.about.description}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="mt-8 flex items-center gap-6">
                <div className="w-16 h-px bg-accent" />
                <span className="text-sm font-medium tracking-wide uppercase text-accent">
                  {content.brand.fullName}
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection delay={400} direction="right">
            <div className="relative aspect-4/5 lg:aspect-square">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/renovation-team-working-professional.jpg')`,
                }}
              />
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-full h-full border-2 border-accent -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
