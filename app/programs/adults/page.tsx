import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function AdultsProgram() {
  return (
    <>
      <PageHero title="Adults Program" subtitle="Structured, supportive care designed for long-term recovery." />
      <Prose>
        <p>
          Our adult programming combines evidence-based therapy, recovery education, and individualized planning.
          Treatment is tailored to your clinical needs and your life outside of treatment — work, family, and long-term supports.
        </p>
        <ul>
          <li>Individual and group therapy</li>
          <li>Relapse prevention and coping skills</li>
          <li>Medication management when appropriate</li>
          <li>Discharge planning and continuing care</li>
        </ul>
        <CTAInline />
      </Prose>
    </>
  );
}
