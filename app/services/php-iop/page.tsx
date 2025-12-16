import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function StepDown() {
  return (
    <>
      <PageHero title="PHP & IOP" subtitle="Step-down care to maintain momentum after inpatient or to start outpatient support." />
      <Prose>
        <p>
          Partial Hospitalization (PHP) and Intensive Outpatient (IOP) offer structured therapy while you rebuild routines.
          We help you choose the right level and schedule based on clinical needs and daily responsibilities.
        </p>
        <ul>
          <li>Structured therapy multiple days per week</li>
          <li>Skill-building and relapse prevention</li>
          <li>Care coordination and continuing support</li>
        </ul>
        <CTAInline />
      </Prose>
    </>
  );
}
