"use client";

import {
  Bath,
  ChefHat,
  Zap,
  Droplet,
  Grid3X3,
  Paintbrush,
  Check,
} from "lucide-react";
import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";
import { MagneticButton } from "@/src/components/ui/magnetic-button";

const iconMap = {
  bath: Bath,
  kitchen: ChefHat,
  zap: Zap,
  droplet: Droplet,
  grid: Grid3X3,
  paintbrush: Paintbrush,
};

export function ServicesDetailed() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Bath;
            const details =
              content.servicesDetails[
                service.id as keyof typeof content.servicesDetails
              ] || [];
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection
                key={service.id}
                delay={100}
                direction={isEven ? "left" : "right"}
              >
                <div
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary mb-6">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className="w-5 h-5 flex items-center justify-center bg-accent/10">
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <MagneticButton href="/contact" variant="primary">
                      Ζήτησε Προσφορά
                    </MagneticButton>
                  </div>

                  {/* Image */}
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-4/3">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('/service-${service.id}-renovation.jpg')`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
