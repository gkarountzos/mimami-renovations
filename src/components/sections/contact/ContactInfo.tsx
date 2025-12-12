"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { AnimatedSection } from "@/src/components/ui/animated-section";
import { TContactInfo } from "@/src/types/contact";

interface IContactInfoProps {
  content: TContactInfo;
}
export function ContactInfo({ content }: IContactInfoProps) {
  return (
    <AnimatedSection delay={200}>
      <div className="h-full flex flex-col">
        {/* Contact Details */}
        <div className="space-y-8 mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            {content.contactDetails}
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary shrink-0">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{content.address}</p>
                <p className="text-muted-foreground mt-1">{content.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{content.phone}</p>
                <a
                  href={`tel:${content.phone}`}
                  className="text-muted-foreground mt-1 hover:text-accent transition-colors duration-300"
                >
                  {content.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary shrink-0">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{content.email}</p>
                <a
                  href={`mailto:${content.email}`}
                  className="text-muted-foreground mt-1 hover:text-accent transition-colors duration-300"
                >
                  {content.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary shrink-0">
                <Clock size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">{content.hours}</p>
                <p className="text-muted-foreground mt-1">{content.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 min-h-75 bg-secondary relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.8887614947793!2d23.74982!3d38.03333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1985c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sMikras%20Asias%2010%2C%20Nea%20Ionia!5e0!3m2!1sen!2sgr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ΜιΜαΜι Renovations Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
