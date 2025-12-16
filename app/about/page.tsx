import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { CTAInline } from "@/components/cta-inline";

export default function About() {
  return (
    <>
      <PageHero title="About Cherry Creek" subtitle="Care built on compassion, structure, and evidence-based treatment." />
      <Prose>
        <p>
          Cherry Creek Treatment Center provides substance use treatment services in Wichita, Kansas.
          Our approach is person-centered and grounded in clinical best practices — helping clients take meaningful steps
          toward long-term recovery.
        </p>
        <p>
          We offer residential treatment, medically monitored detox, and step-down services including PHP and IOP.
        </p>
        <CTAInline />
      </Prose>
    </>
  );
}
