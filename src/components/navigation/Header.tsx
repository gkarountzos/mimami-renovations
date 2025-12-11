"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import content from "@/data/content.json";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                {content.brand.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {content.navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide uppercase transition-colors duration-300",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300",
                    pathname === item.href
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              {content.navigation.cta}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {content.navigation.items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-3xl font-serif font-medium transition-all duration-500",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-8 py-4 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground transition-all duration-500"
            style={{
              transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
              transform: isMobileMenuOpen
                ? "translateY(0)"
                : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            {content.navigation.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
