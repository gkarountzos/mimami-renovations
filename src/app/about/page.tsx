import { AboutPageContent } from "@/src/components/sections/about/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σχετικά με Εμάς | ΜιΜαΜι Renovations",
  description:
    "Γνωρίστε την ομάδα της ΜιΜαΜι Renovations. Εξειδίκευση στην ολική ανακαίνιση διαμερισμάτων με διαφάνεια και ποιότητα.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
