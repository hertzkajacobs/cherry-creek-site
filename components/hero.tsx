import Link from "next/link";
import { Check } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="bg-mist">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Compassionate care for drug & alcohol recovery
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              A supportive, structured environment with evidence-based treatment. Call our admissions team to take the next step.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:3163307126"
                className="rounded-2xl bg-ink px-6 py-4 text-center font-semibold text-white no-underline hover:opacity-90"
              >
                Call (316) 330-7126
              </a>
              <Link
                href="/admissions"
                className="rounded-2xl border bg-white px-6 py-4 text-center font-semibold text-ink no-underline hover:bg-mist"
              >
                Start Admissions
              </Link>
            </div>

            <div className="mt-8 grid gap-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <Check />
                <span>Confidential help for you or a loved one</span>
              </div>
              <div className="flex items-start gap-2">
                <Check />
                <span>We work with many insurance plans and accept Kansas Medicaid</span>
              </div>
              <div className="flex items-start gap-2">
                <Check />
                <span>Adults and adolescent programming</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-ink">Need help today?</p>
            <p className="mt-2 text-sm text-slate-700">
              Call now and we’ll guide you through the next steps. If this is an emergency, call 911. In crisis, call/text 988.
            </p>
            <div className="mt-5 rounded-2xl bg-mist p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">Admissions</p>
              <p className="mt-1 text-2xl font-extrabold text-ink">(316) 330-7126</p>
              <a
                href="tel:3163307126"
                className="mt-4 inline-block w-full rounded-2xl bg-ink px-5 py-3 text-center font-semibold text-white no-underline hover:opacity-90"
              >
                Tap to Call
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-600">
              By contacting us you agree to receive a response from our team. (You can replace this with your preferred wording.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
