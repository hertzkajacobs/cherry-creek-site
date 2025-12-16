import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function Insurance() {
  return (
    <>
      <PageHero title="Insurance & Payment" subtitle="We’ll help you verify benefits and understand your options." />
      <Prose>
        <p>
          We work with many insurance plans and also accept Kansas Medicaid. Coverage can vary by plan and level of care.
          Call us and we’ll walk you through benefits verification and next steps.
        </p>
        <h2>What we can do on the call</h2>
        <ul>
          <li>Verify insurance and estimate costs when possible</li>
          <li>Explain recommended level of care</li>
          <li>Help schedule an assessment or admission</li>
        </ul>
        <CTAInline />
      </Prose>
    </>
  );
}
