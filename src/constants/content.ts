import { TBrandContent } from "@/src/types/brand";
import { TCTA } from "@/src/types/cta";
import { TFooter } from "@/src/types/footer";
import { TNavigation } from "@/src/types/navigation";

// Brand Content
export const brandContent: TBrandContent = {
  name: "ΜιΜαΜι",
  tagline: "Renovations",
  fullName: "ΜιΜαΜι Renovations",
  slogan: "Μικρές και Μαζικές Μετατροπές χώρων",
  description: "Ολική Ανακαίνιση Διαμερισμάτων",
};

// CTA Content
export const ctaContent: TCTA = {
  title: "Έτοιμοι να ξεκινήσετε;",
  subtitle:
    "Επικοινωνήστε μαζί μας σήμερα για μια δωρεάν εκτίμηση του έργου σας.",
  requestQuote: "Ζήτησε Προσφορά",
  cta: "Κλείσε Ραντεβού",
};

// Navigation Content
export const navigationContent: TNavigation = {
  items: [
    { label: "Αρχική", href: "/" },
    { label: "Σχετικά", href: "/about" },
    { label: "Υπηρεσίες", href: "/services" },
    { label: "Επικοινωνία", href: "/contact" },
  ],
  cta: "Κλείσε Ραντεβού",
};

// Footer Content
export const footerContent: TFooter = {
  navigation: "Πλοήγηση",
  footerContact: "Επικοινωνία",
  copyright: "© 2025 ΜιΜαΜι Renovations. Με επιφύλαξη παντός δικαιώματος.",
  tagline: "Ολική Ανακαίνιση Διαμερισμάτων • Νέα Ιωνία",
};
