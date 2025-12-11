import { ContactPageContent } from "@/src/components/sections/contact/ContactPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επικοινωνία | ΜιΜαΜι Renovations",
  description:
    "Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση του έργου σας. Μικράς Ασίας 10, Νέα Ιωνία. Δευτέρα–Σάββατο: 09:00–19:00.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
