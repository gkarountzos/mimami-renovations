"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/src/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { TPricingContent } from "@/src/types/pricing";

interface IPricingClientProps {
  content: TPricingContent;
}

export default function PricingClient({ content }: IPricingClientProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              Τιμοκατάλογος
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {content.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">
              {content.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.packages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={index * 150}>
              <div
                className={cn(
                  "relative flex flex-col p-8 lg:p-10 h-full border transition-all duration-500",
                  pkg.featured
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-card-foreground border-border hover:border-accent/50"
                )}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-medium tracking-wide uppercase">
                    {content.featured}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-bold">{pkg.name}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      pkg.featured
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {pkg.ideal}
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={cn(
                        "mt-0.5 shrink-0",
                        pkg.featured ? "text-accent" : "text-accent"
                      )}
                    />
                    <p
                      className={cn(
                        "leading-relaxed",
                        pkg.featured
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      )}
                    >
                      {pkg.includes}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300",
                    pkg.featured
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Ζήτησε Προσφορά
                  <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimatedSection delay={500} className="mt-12">
          <p className="text-center text-sm text-muted-foreground">
            {content.disclaimer}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
