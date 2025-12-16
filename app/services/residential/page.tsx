import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function Residential() {
  return (
    <>
      <PageHero title="Residential Treatment" subtitle="24/7 structured care in a supportive environment." />
      <Prose>
        <p>
          Residential treatment provides a stable setting to focus on recovery away from daily triggers.
          You’ll participate in therapy, build skills, and develop a plan for continued progress after discharge.
        </p>
        <ul>
          <li>Daily groups and individual sessions</li>
          <li>Recovery education and relapse prevention</li>
          <li>Medication support when needed</li>
          <li>Discharge planning and referrals</li>
        </ul>
        <CTAInline />
      </Prose>
    </>
  );
}
