export function CTAInline() {
  return (
    <div className="mt-10 rounded-3xl border bg-mist p-6">
      <p className="text-lg font-bold text-ink">Ready to talk?</p>
      <p className="mt-1 text-slate-700">
        Call our admissions team at{" "}
        <a className="font-semibold text-ink underline" href="tel:3163307126">
          (316) 330-7126
        </a>
        .
      </p>
      <a
        href="tel:3163307126"
        className="mt-4 inline-block rounded-2xl bg-ink px-5 py-3 font-semibold text-white no-underline hover:opacity-90"
      >
        Call Now
      </a>
    </div>
  );
}
