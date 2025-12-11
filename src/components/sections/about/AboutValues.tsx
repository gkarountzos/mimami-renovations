"use client";

import { Shield, Award, Clock } from "lucide-react";
import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";

const iconMap = {
  Διαφάνεια: Shield,
  Ποιότητα: Award,
  Αξιοπιστία: Clock,
};

export function AboutValues() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              {content.aboutValues.subtitle}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {content.aboutValues.heading}
            </h2>
          </AnimatedSection>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.about.values.map((value, index) => {
            const Icon = iconMap[value.title as keyof typeof iconMap] || Shield;
            return (
              <AnimatedSection key={value.title} delay={index * 150}>
                <div className="text-center p-8 lg:p-12 bg-secondary">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-background mb-6">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
