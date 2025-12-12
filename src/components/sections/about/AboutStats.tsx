"use client";

import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";
import { TAboutContent } from "@/src/types/about";

interface IAboutStatsProps {
  content: TAboutContent["stats"];
}

export function AboutStats({ content }: IAboutStatsProps) {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {content.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 150}>
              <div className="text-center">
                <span className="font-serif text-6xl lg:text-7xl font-bold text-accent">
                  {stat.value}
                </span>
                <p className="mt-4 text-lg font-medium tracking-wide uppercase text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
