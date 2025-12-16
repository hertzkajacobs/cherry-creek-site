import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <>
      <PageHero title="Contact" subtitle="Reach out — we’re here to help." />
      <Prose>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2>Admissions Phone</h2>
            <p className="text-lg">
              <a className="font-semibold text-ink underline" href="tel:3163307126">
                (316) 330-7126
              </a>
            </p>
            <p className="mt-4">
              For general questions or to start the admissions process, call or send a message using the form.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Prose>
    </>
  );
}
