import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function AdolescentProgram() {
  return (
    <>
      <PageHero title="Adolescent Program" subtitle="Age-appropriate treatment with family support and a focus on stability." />
      <Prose>
        <p>
          Adolescents face unique stressors and risks. Our teen-focused programming provides a safe, structured environment
          with evidence-based therapy, skills training, and family involvement when it supports the client’s recovery.
        </p>
        <ul>
          <li>Teen-focused groups and counseling</li>
          <li>Family sessions and education</li>
          <li>Skills for stress, cravings, and emotions</li>
          <li>Coordination for step-down care</li>
        </ul>
        <CTAInline />
      </Prose>
    </>
  );
}
