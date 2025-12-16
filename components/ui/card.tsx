import Link from "next/link";

export function Card({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <Link href={href} className="group rounded-3xl border bg-white p-6 no-underline shadow-sm hover:shadow-md transition">
      <p className="text-lg font-bold text-ink">{title}</p>
      <p className="mt-2 text-sm text-slate-700">{text}</p>
      <p className="mt-4 text-sm font-semibold text-ink group-hover:underline">Learn more →</p>
    </Link>
  );
}
