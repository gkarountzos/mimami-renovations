import {
  Award,
  Bath,
  ChefHat,
  Clock,
  Droplet,
  Grid3X3,
  Paintbrush,
  Shield,
  Zap,
} from "lucide-react";

export const portfolioImages = [
  {
    id: 1,
    title: "Ανακαίνιση Μπάνιου",
    location: "Νέα Ιωνία",
    category: "Μπάνιο",
    image: "/modern-bathroom-renovation-marble-tiles-luxury-des.jpg",
  },
  {
    id: 2,
    title: "Μεταμόρφωση Κουζίνας",
    location: "Μαρούσι",
    category: "Κουζίνα",
    image: "/luxury-kitchen-renovation-white-cabinets-modern-ap.jpg",
  },
  {
    id: 3,
    title: "Ολική Ανακαίνιση",
    location: "Ηράκλειο",
    category: "Ολική Ανακαίνιση",
    image: "/complete-apartment-renovation-modern-living-room-e.jpg",
  },
  {
    id: 4,
    title: "Σύγχρονο Μπάνιο",
    location: "Γαλάτσι",
    category: "Μπάνιο",
    image: "/contemporary-bathroom-design-dark-tiles-minimalist.jpg",
  },
];

export const servicesIconMap = {
  bath: Bath,
  kitchen: ChefHat,
  zap: Zap,
  droplet: Droplet,
  grid: Grid3X3,
  paintbrush: Paintbrush,
};

export const aboutIconMap = {
  Διαφάνεια: Shield,
  Ποιότητα: Award,
  Αξιοπιστία: Clock,
};
