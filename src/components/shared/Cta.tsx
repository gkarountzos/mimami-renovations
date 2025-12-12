"use client";

import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/src/components/ui/animated-section";
import { MagneticButton } from "@/src/components/ui/magnetic-button";
import { TCTA } from "@/src/types/cta";

interface ICTAProps {
  content: TCTA;
}

export function CTA({ content }: ICTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-primary p-12 lg:p-20">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  {content.title}
                </h2>
                <p className="text-lg text-primary-foreground/70 max-w-xl">
                  {content.subtitle}
                </p>
              </div>
              <MagneticButton
                href="/contact"
                variant="secondary"
                className="shrink-0"
              >
                <span className="flex items-center gap-2">
                  {content.cta}
                  <ArrowRight size={18} />
                </span>
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
