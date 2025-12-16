export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-mist border-b">
      <div className="container py-14">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-lg text-slate-700">{subtitle}</p> : null}
      </div>
    </section>
  );
}
