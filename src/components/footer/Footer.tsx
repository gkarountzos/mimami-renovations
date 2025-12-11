import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import content from "@/data/content.json";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-tight">
                {content.brand.name}
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-md">
              {content.hero.subtitle}
            </p>
            <p className="mt-6 text-sm text-primary-foreground/50">
              {content.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">
              {content.footer.navigation}
            </h4>
            <nav className="flex flex-col gap-4">
              {content.navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">
              {content.footer.footerContact}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  {content.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/70">
                  {content.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/70">
                  {content.contact.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-accent" />
                <span className="text-primary-foreground/70">
                  {content.contact.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
