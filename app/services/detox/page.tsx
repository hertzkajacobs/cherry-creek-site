import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function Detox() {
  return (
    <>
      <PageHero title="Medical Detox" subtitle="Safe, medically monitored stabilization to begin recovery." />
      <Prose>
        <p>
          Detox is often the first step. During medical detox, you’re monitored by clinical staff while your body stabilizes.
          Our goal is safety, comfort, and a clear plan for what comes next.
        </p>
        <h2>What you can expect</h2>
        <ul>
          <li>Clinical monitoring and support</li>
          <li>Symptom management as appropriate</li>
          <li>Hydration, nutrition, and rest</li>
          <li>Transition planning into residential or step-down care</li>
        </ul>
        <CTAInline />
      </Prose>
    </>
  );
}
