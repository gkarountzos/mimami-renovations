"use client";

import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const baseStyles = cn(
    "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 ease-out overflow-hidden group",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90":
        variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80":
        variant === "secondary",
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground":
        variant === "outline",
    },
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}
