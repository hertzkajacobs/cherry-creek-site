export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">{title}</h2>
          {subtitle ? <p className="mt-3 text-lg text-slate-700">{subtitle}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
