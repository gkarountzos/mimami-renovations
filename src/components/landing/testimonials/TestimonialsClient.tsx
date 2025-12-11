"use client";

import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/src/components/ui/animated-section";
import { TTestimonialsContent } from "@/src/types/testimonials";

interface TestimonialsClientProps {
  content: TTestimonialsContent;
}

export default function TestimonialsClient({
  content,
}: TestimonialsClientProps) {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">
              Μαρτυρίες
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {content.title}
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.items.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 150}>
              <div className="relative p-8 lg:p-10 bg-card border border-border h-full">
                {/* Quote Icon */}
                <Quote
                  size={32}
                  className="absolute top-8 right-8 text-accent/20"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
