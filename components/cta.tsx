import Link from "next/link";

export function CTA() {
  return (
    <div className="rounded-3xl border bg-white p-6 md:p-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-2xl font-extrabold text-ink">Talk to Admissions</p>
          <p className="mt-2 text-slate-700">
            Call now and we’ll help with next steps, benefits verification, and scheduling.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            href="tel:3163307126"
            className="rounded-2xl bg-ink px-6 py-4 text-center font-semibold text-white no-underline hover:opacity-90"
          >
            Call (316) 330-7126
          </a>
          <Link
            href="/admissions"
            className="rounded-2xl border bg-mist px-6 py-4 text-center font-semibold text-ink no-underline hover:bg-white"
          >
            Start Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}
