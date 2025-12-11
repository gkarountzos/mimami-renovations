import { ContactForm } from "@/src/components/sections/contact/ContactForm";
import { ContactHero } from "@/src/components/sections/contact/ContactHero";
import { ContactInfo } from "@/src/components/sections/contact/ContactInfo";

export function ContactPageContent() {
  return (
    <main>
      <ContactHero />
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
