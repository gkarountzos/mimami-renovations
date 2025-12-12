"use client";

import { AnimatedSection } from "@/src/components/ui/animated-section";
import { TContactForm } from "@/src/types/contact";

interface IContactHero {
  content: TContactForm;
}

export function ContactHero({ content }: IContactHero) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-secondary">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              {content.title}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {content.heroText}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              {content.heroDescription}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
