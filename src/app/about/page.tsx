import type { Metadata } from "next";
import AboutPartner from "@/components/about-partner";
import FinalCtaBand from "@/components/final-cta-band";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sarmad Irfan — technical partner and fractional CTO for early-stage founders without a technical co-founder. Founder-level ownership of product execution across web, mobile, backend, and AI-powered workflows.",
  openGraph: {
    title: `About | ${BRAND.name}`,
    description:
      "Technical partner and fractional CTO focused on owning product execution. Experience across logistics, fintech, recovery platforms, and digital commerce.",
    url: `${SITE_URL}/about`,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${BRAND.name}`,
    description: "Technical partner and fractional CTO for early-stage founders. Founder-level ownership across web, mobile, backend, and AI workflows.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main className="pt-20 bg-bg min-h-screen">
      <AboutPartner />
      <FinalCtaBand />
    </main>
  );
}
