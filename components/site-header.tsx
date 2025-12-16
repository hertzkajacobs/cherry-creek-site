"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Programs", href: "/#programs", children: [
    { label: "Adults", href: "/programs/adults" },
    { label: "Adolescents", href: "/programs/adolescents" },
  ]},
  { label: "Services", href: "/#services", children: [
    { label: "Residential", href: "/services/residential" },
    { label: "Medical Detox", href: "/services/detox" },
    { label: "PHP & IOP", href: "/services/php-iop" },
  ]},
  { label: "Insurance", href: "/insurance" },
  { label: "Admissions", href: "/admissions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/logo.png" alt="Cherry Creek Treatment Center" width={220} height={60} priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link className="no-underline text-sm font-semibold text-slate-800 hover:text-ink" href={item.href}>
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full mt-2 w-52 rounded-2xl border bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-xl px-3 py-2 text-sm no-underline hover:bg-mist"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            href="tel:3163307126"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
          >
            Call (316) 330-7126
          </a>
        </nav>

        <button
          className="md:hidden rounded-xl border px-3 py-2 text-sm font-semibold"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3">
            <div className="grid gap-2">
              {nav.map((item) => (
                <div key={item.label} className="grid gap-1">
                  <Link
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-semibold no-underline hover:bg-mist"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-3 grid gap-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="rounded-xl px-3 py-2 text-sm no-underline hover:bg-mist"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <a
                href="tel:3163307126"
                className="mt-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white no-underline"
                onClick={() => setOpen(false)}
              >
                Call (316) 330-7126
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
