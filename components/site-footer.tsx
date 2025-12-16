import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-mist">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-ink">Cherry Creek Treatment Center</p>
            <p className="mt-2 text-sm text-slate-700">
              Wichita, Kansas
              <br />
              Admissions:{" "}
              <a className="font-semibold text-ink underline" href="tel:3163307126">
                (316) 330-7126
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Quick Links</p>
            <div className="mt-2 grid gap-2 text-sm">
              <Link className="no-underline hover:underline" href="/admissions">
                Admissions
              </Link>
              <Link className="no-underline hover:underline" href="/insurance">
                Insurance & Payment
              </Link>
              <Link className="no-underline hover:underline" href="/services/detox">
                Medical Detox
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Important</p>
            <p className="mt-2 text-xs text-slate-600">
              If you or someone else is in immediate danger, call 911. If you are in crisis, call or text 988.
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-600">
          © {new Date().getFullYear()} Cherry Creek Treatment Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
