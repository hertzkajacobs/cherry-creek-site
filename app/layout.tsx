import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCall } from "@/components/mobile-sticky-call";

export const metadata: Metadata = {
  title: "Cherry Creek Treatment Center | Wichita, KS",
  description:
    "Cherry Creek Treatment Center provides residential treatment, medical detox, PHP, IOP, and outpatient services for substance use recovery in Wichita, Kansas.",
  metadataBase: new URL("https://www.cherrycreektreatmentcenter.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCall phone="3163307126" />
      </body>
    </html>
  );
}
