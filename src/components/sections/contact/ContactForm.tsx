"use client";

import type React from "react";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import content from "@/data/content.json";
import { AnimatedSection } from "@/src/components/ui/animated-section";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center text-center p-12 bg-secondary h-full min-h-125">
          <CheckCircle size={64} className="text-accent mb-6" />
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            {content.contactForm.successTitle}
          </h3>
          <p className="text-muted-foreground max-w-md">
            {content.contactForm.successMessage}
          </p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {content.contactForm.labels.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent transition-all duration-300"
              placeholder={content.contactForm.placeholders.name}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {content.contactForm.labels.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent transition-all duration-300"
              placeholder={content.contactForm.placeholders.phone}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {content.contactForm.labels.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder={content.contactForm.placeholders.email}
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {content.contactForm.labels.service}
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-secondary border-0 text-foreground focus:ring-2 focus:ring-accent transition-all duration-300"
          >
            <option value="">{content.contactForm.placeholders.service}</option>
            {content.contactForm.serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {content.contactForm.labels.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
            placeholder={content.contactForm.placeholders.message}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span>{content.contactForm.submitting}</span>
          ) : (
            <>
              <span>{content.contactForm.submitButton}</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </AnimatedSection>
  );
}
