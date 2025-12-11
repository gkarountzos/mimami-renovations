import { AboutHero } from "@/src/components/sections/about/AboutHero";
import { AboutStats } from "@/src/components/sections/about/AboutStats";
import { AboutValues } from "@/src/components/sections/about/AboutValues";
import { CTA } from "@/src/components/shared/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σχετικά με Εμάς | ΜιΜαΜι Renovations",
  description:
    "Γνωρίστε την ομάδα της ΜιΜαΜι Renovations. Εξειδίκευση στην ολική ανακαίνιση διαμερισμάτων με διαφάνεια και ποιότητα.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutStats />
      <CTA />
    </main>
  );
}
