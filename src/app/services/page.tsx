import type { Metadata } from "next";
import { ServicesPageContent } from "@/src/components/sections/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Υπηρεσίες | ΜιΜαΜι Renovations",
  description:
    "Ανακαινίσεις μπάνιου, κουζίνας, ηλεκτρολογικές και υδραυλικές εγκαταστάσεις, δάπεδα και βάψιμο. Ολοκληρωμένες λύσεις ανακαίνισης.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
