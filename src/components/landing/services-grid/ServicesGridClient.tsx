"use client";

import Link from "next/link";
import { Bath, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/src/components/ui/animated-section";
import { TServicesContent } from "@/src/types/services";
import { servicesIconMap } from "@/src/constants/data";

interface ServicesGridClientProps {
  content: TServicesContent;
}

export default function ServicesGridClient({
  content,
}: ServicesGridClientProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              {content.heading}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.services.short.map((service, index) => {
            const Icon =
              servicesIconMap[service.icon as keyof typeof servicesIconMap] ||
              Bath;
            return (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative flex flex-col h-full min-h-70 p-8 lg:p-10 bg-card border border-border hover:border-accent/50 transition-all duration-500"
                >
                  {/* Icon and Arrow Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-secondary">
                      <Icon size={24} className="text-foreground" />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-accent transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
