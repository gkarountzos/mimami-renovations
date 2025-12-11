"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";

const portfolioImages = [
  {
    id: 1,
    title: "Ανακαίνιση Μπάνιου",
    location: "Νέα Ιωνία",
    category: "Μπάνιο",
    image: "/modern-bathroom-renovation-marble-tiles-luxury-des.jpg",
  },
  {
    id: 2,
    title: "Μεταμόρφωση Κουζίνας",
    location: "Μαρούσι",
    category: "Κουζίνα",
    image: "/luxury-kitchen-renovation-white-cabinets-modern-ap.jpg",
  },
  {
    id: 3,
    title: "Ολική Ανακαίνιση",
    location: "Ηράκλειο",
    category: "Ολική Ανακαίνιση",
    image: "/complete-apartment-renovation-modern-living-room-e.jpg",
  },
  {
    id: 4,
    title: "Σύγχρονο Μπάνιο",
    location: "Γαλάτσι",
    category: "Μπάνιο",
    image: "/contemporary-bathroom-design-dark-tiles-minimalist.jpg",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="text-sm font-medium tracking-widest uppercase text-accent">
                Portfolio
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {content.portfolio.title}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.portfolio.subtitle}
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap gap-3">
              {content.portfolio.categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 text-sm font-medium tracking-wide bg-secondary text-secondary-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioImages.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 150}>
              <Link
                href="/services"
                className="group relative block overflow-hidden aspect-4/3"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-medium tracking-widest uppercase text-border">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-primary-foreground mt-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-foreground/70 mt-1">
                        {item.location}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="text-primary-foreground"
                    />
                  </div>
                </div>
                {/* Static Label (visible before hover) */}
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="px-3 py-1.5 text-xs font-medium tracking-wide uppercase bg-background/90 text-foreground backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Areas */}
        <AnimatedSection delay={600} className="mt-16 lg:mt-24">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            <span className="text-sm text-muted-foreground">Εξυπηρετούμε:</span>
            {content.portfolio.areas.map((area) => (
              <span key={area} className="text-sm font-medium text-foreground">
                {area}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
