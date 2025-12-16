import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        title="A full continuum of care"
        subtitle="Whether you’re taking the first step or returning to treatment, our team meets you where you are — with structure, compassion, and clinical support."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="Residential Treatment"
            text="24/7 supportive environment with individual and group therapy, skills building, and recovery planning."
            href="/services/residential"
          />
          <Card
            title="Medical Detox"
            text="Medically monitored stabilization and comfort-focused care to help you begin recovery safely."
            href="/services/detox"
          />
          <Card
            title="Step-Down Programs"
            text="PHP and IOP to keep momentum after inpatient — structured care while rebuilding daily life."
            href="/services/php-iop"
          />
        </div>
      </Section>

      <Section
        title="Adults and Adolescents"
        subtitle="Age-appropriate programming, evidence-based treatment, and family involvement when it helps."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Adults Program"
            text="Treatment plans built around clinical needs, goals, and long-term recovery support."
            href="/programs/adults"
          />
          <Card
            title="Adolescent Program"
            text="Specialized care for teens with a focus on safety, school/life balance, and family support."
            href="/programs/adolescents"
          />
        </div>
      </Section>

      <Section
        title="Insurance & payment options"
        subtitle="We work with many insurance plans and also accept Kansas Medicaid. Call us and we’ll help you understand coverage and next steps."
      >
        <CTA />
      </Section>
    </>
  );
}
