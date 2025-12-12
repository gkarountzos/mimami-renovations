import { TContactContent } from "@/src/types/contact";

export const contactContent: TContactContent = {
  address: "Μικράς Ασίας 10, Νέα Ιωνία",
  phone: "(+30) 210 XXX XXXX",
  email: "info@mimami.gr",
  hours: "Δευτέρα–Σάββατο: 09:00–19:00",
  contactForm: {
    title: "Επικοινωνία",
    heroText: "Ας μιλήσουμε για το έργο σας",
    heroDescription:
      "Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας για μια δωρεάν εκτίμηση.",
    labels: {
      name: "Ονοματεπώνυμο *",
      phone: "Τηλέφωνο *",
      email: "Email",
      service: "Τύπος Υπηρεσίας",
      message: "Μήνυμα *",
    },
    placeholders: {
      name: "Το όνομά σας",
      phone: "69X XXX XXXX",
      email: "email@example.com",
      service: "Επιλέξτε υπηρεσία",
      message: "Περιγράψτε το έργο σας...",
    },
    serviceOptions: [
      { value: "bathroom", label: "Ανακαίνιση Μπάνιου" },
      { value: "kitchen", label: "Ανακαίνιση Κουζίνας" },
      { value: "full", label: "Ολική Ανακαίνιση" },
      { value: "electrical", label: "Ηλεκτρολογικές Εργασίες" },
      { value: "plumbing", label: "Υδραυλικές Εργασίες" },
      { value: "flooring", label: "Δάπεδα & Πλακάκια" },
      { value: "painting", label: "Βαφή" },
      { value: "other", label: "Άλλο" },
    ],
    infoContent: {
      contactDetails: "Στοιχεία Επικοινωνίας",
      address: "Διεύθυνση",
      phone: "Τηλέφωνο",
      email: "Email",
      hours: "Ώρες Λειτουργίας",
    },
    submitButton: "Αποστολή Μηνύματος",
    submitting: "Αποστολή...",
    successTitle: "Ευχαριστούμε!",
    successMessage:
      "Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.",
  },
};
