import { ServicesDetailed } from "@/src/components/sections/services/ServicesDetailed";
import { ServicesHero } from "@/src/components/sections/services/ServicesHero";
import { CTA } from "@/src/components/shared/Cta";
import { Process } from "@/src/components/shared/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Υπηρεσίες | ΜιΜαΜι Renovations",
  description:
    "Ανακαινίσεις μπάνιου, κουζίνας, ηλεκτρολογικές και υδραυλικές εγκαταστάσεις, δάπεδα και βάψιμο. Ολοκληρωμένες λύσεις ανακαίνισης.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesDetailed />
      <Process />
      <CTA />
    </main>
  );
}
