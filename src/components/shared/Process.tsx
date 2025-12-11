"use client";

import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              Διαδικασία
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {content.process.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">
              {content.process.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          {content.process.steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              delay={index * 150}
              className="relative"
            >
              <div className="flex flex-col">
                {/* Number */}
                <div className="flex flex-row items-center ">
                  <span className="font-serif text-6xl lg:text-7xl font-bold text-accent/20">
                    {step.number}
                  </span>
                  {index < content.process.steps.length - 1 && (
                    <div className=" w-1/2 mx-auto mt-4 right-0  h-px bg-linear-to-r from-transparent via-border to-transparent -z-10" />
                  )}
                </div>
                {/* Title */}
                <div className="flex gap-2 items-center pt-2 mb-3">
                  <h3 className="font-semibold text-sm text-foreground ">
                    {step.title}
                  </h3>
                  {step.highlight && (
                    <span className="px-2 py-0.5 text-xs font-light tracking-wide bg-accent text-accent-foreground uppercase">
                      {step.highlight}
                    </span>
                  )}
                </div>
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector Line (desktop) */}
            </AnimatedSection>
          ))}
        </div>

        {/* Promise */}
        <AnimatedSection delay={800} className="mt-16 lg:mt-24">
          <div className="p-8 lg:p-12 bg-primary text-primary-foreground text-center">
            <p className="font-serif text-xl lg:text-2xl font-medium">
              {content.process.promise}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
