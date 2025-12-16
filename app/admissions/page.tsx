import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { ContactForm } from "@/components/contact-form";

export default function Admissions() {
  return (
    <>
      <PageHero title="Admissions" subtitle="Call now or send a confidential message — our team will respond quickly." />
      <Prose>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2>Call Admissions</h2>
            <p className="text-lg">
              <a className="font-semibold text-ink underline" href="tel:3163307126">
                (316) 330-7126
              </a>
            </p>
            <p className="mt-4">
              If this is an emergency, call 911. If you or someone you love is in crisis, you can also call or text 988.
            </p>

            <h3 className="mt-8">What we’ll ask</h3>
            <ul>
              <li>Basic contact info</li>
              <li>What you’re seeking help for</li>
              <li>Insurance information (if available)</li>
              <li>Best next step: detox, residential, PHP/IOP, or outpatient</li>
            </ul>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Prose>
    </>
  );
}
