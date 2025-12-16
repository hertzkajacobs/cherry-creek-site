import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white">
  <div className="container py-12 md:py-20 grid gap-8 md:grid-cols-2 items-center">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-ink">
        You don’t have to do this alone
      </h2>
      <p className="mt-4 text-slate-700">
        Recovery begins with feeling supported, understood, and safe. Our team
        meets you with compassion, respect, and evidence-based care—every step
        of the way.
      </p>
    </div>

    <img
      src="/supportive-care.png"
      alt="Supportive care and compassion during addiction recovery"
      className="rounded-2xl shadow-sm w-full h-auto object-cover"
    />
  </div>
</section>
<section className="bg-white">
  <div className="container py-16 md:py-24">
    <h2 className="text-2xl md:text-3xl font-bold text-ink text-center">
      Levels of care
    </h2>
    <p className="mt-4 text-slate-700 text-center max-w-2xl mx-auto">
      Whether you need stabilization, structured residential care, or flexible step-down support,
      we’ll help you find the right level of care.
    </p>

  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {/* Social Detox */}
      <a
        href="/services/detox"
        className="rounded-2xl border bg-mist p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-bold text-ink">Social Detox</h3>
        <p className="mt-2 text-sm text-slate-700">
          24/7 support and monitoring to help you stabilize and take the next step safely.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink underline">
          Learn more
        </p>
      </a>

      {/* Inpatient / Residential */}
      <a
        href="/services/residential"
        className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-bold text-ink">Inpatient / Residential</h3>
        <p className="mt-2 text-sm text-slate-700">
          Structured, supportive care with therapy, groups, and recovery planning.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink underline">
          Learn more
        </p>
      </a>

      {/* PHP */}
      <a
        href="/services/php-iop"
        className="rounded-2xl border bg-mist p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-bold text-ink">PHP</h3>
        <p className="mt-2 text-sm text-slate-700">
          A structured day program that provides intensive support as you step down.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink underline">
          Learn more
        </p>
      </a>

      {/* IOP */}
      <a
        href="/services/php-iop"
        className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-bold text-ink">IOP</h3>
        <p className="mt-2 text-sm text-slate-700">
          Flexible care with therapy and groups while returning to work, school, and life.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink underline">
          Learn more
        </p>
      </a>

      {/* OP */}
      <a
        href="/services/outpatient"
        className="rounded-2xl border bg-mist p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-bold text-ink">Outpatient (OP)</h3>
        <p className="mt-2 text-sm text-slate-700">
          Ongoing support with counseling and accountability to maintain recovery.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink underline">
          Learn more
        </p>
      </a>
    </div>
  </div>
</section>

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
      </Section>{/* Levels of Care section ends */}



<Section
  title="A full continuum of care"
  ...
>

{/* WAVE INTO INSURANCE */}
<div className="relative overflow-hidden">
  <svg
    viewBox="0 0 1440 80"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-20 text-mist"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,32 C120,48 240,64 360,64 C480,64 600,48 720,40 C840,32 960,32 1080,40 C1200,48 1320,64 1440,64 L1440,0 L0,0 Z"
    />
  </svg>
</div>

<div className="bg-mist">
  <Section
    title="Insurance & payment options"
    subtitle="We work with many insurance plans and also accept Kansas Medicaid. Call us and we’ll help you understand coverage and next steps."
  >
    <div className="mt-20 md:mt-24">
      <img
        src="/insurance-logos.png"
        alt="Insurance providers accepted including KanCare, Sunflower Health Plan, UnitedHealthcare, Ambetter, Aetna, Healthy Blue, and Carelon Behavioral Health"
        className="mx-auto w-full max-w-6xl h-auto opacity-100"
      />
    </div>

    <div className="mt-20">
      <CTA />
    </div>
  </Section>
</div>


    </>
  );
}
