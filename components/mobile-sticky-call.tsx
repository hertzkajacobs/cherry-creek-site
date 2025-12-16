"use client";

export function MobileStickyCall({ phone }: { phone: string }) {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden">
      <a
        href={`tel:${phone}`}
        className="mx-4 w-full max-w-md rounded-2xl bg-ink px-5 py-4 text-center text-base font-semibold text-white no-underline shadow-lg"
      >
        Call Admissions: (316) 330-7126
      </a>
    </div>
  );
}
