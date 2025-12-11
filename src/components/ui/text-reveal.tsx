"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Component = "span",
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={
        ref as React.RefObject<
          HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement
        >
      }
      className={cn("overflow-hidden", className)}
    >
      <span
        className="inline-block"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      >
        {children}
      </span>
    </Component>
  );
}
