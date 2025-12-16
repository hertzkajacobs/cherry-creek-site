export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="prose prose-slate max-w-none prose-headings:text-ink prose-a:text-ink">
          {children}
        </div>
      </div>
    </section>
  );
}
