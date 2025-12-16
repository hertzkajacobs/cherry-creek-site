"use client";

import { useState } from "react";

/**
 * Simple “mailto” fallback (works immediately without backend).
 * Later we can upgrade to:
 * - Formspree
 * - Basin
 * - Make/Zapier webhook
 * - Your own HIPAA-compliant intake workflow
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border bg-mist p-6">
        <p className="text-lg font-bold text-ink">Thank you — we received your message.</p>
        <p className="mt-2 text-slate-700">
          One of our team members will contact you shortly. If you need immediate help, call{" "}
          <a className="font-semibold text-ink underline" href="tel:3163307126">
            (316) 330-7126
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border bg-white p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className="text-lg font-bold text-ink">Confidential Message</p>
      <p className="mt-1 text-sm text-slate-600">
        For emergencies call 911. In crisis, call or text 988.
      </p>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm font-semibold">Full Name</span>
          <input className="rounded-xl border px-3 py-3" required name="name" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-semibold">Phone</span>
          <input className="rounded-xl border px-3 py-3" required name="phone" inputMode="tel" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-semibold">Email</span>
          <input className="rounded-xl border px-3 py-3" name="email" type="email" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-semibold">How can we help?</span>
          <textarea className="min-h-[120px] rounded-xl border px-3 py-3" name="message" />
        </label>

        <button className="mt-2 rounded-2xl bg-ink px-5 py-3 font-semibold text-white hover:opacity-90" type="submit">
          Submit
        </button>

        <p className="text-xs text-slate-600">
          This form is for general inquiries and admissions help. Please do not include highly sensitive medical details.
        </p>
      </div>
    </form>
  );
}
