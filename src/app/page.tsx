import type { Metadata } from "next";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import WhenFoundersBringMeIn from "@/components/when-founders-bring-me-in";
import Offers from "@/components/offers";
import CaseStudies from "@/components/case-studies";
import ProofSection from "@/components/proof-section";
import AboutPartner from "@/components/about-partner";
import FinalCtaBand from "@/components/final-cta-band";
import Contact from "@/components/Contact";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: BRAND.title,
  description:
    "Fractional CTO and technical partner for founders without a technical co-founder. Start with a paid Technical Audit, then ship with hands-on execution.",
  openGraph: {
    title: BRAND.title,
    description:
      "I own the technical side so founders can ship. Audit-first engagements, then sprints or ongoing technical partnership.",
    url: SITE_URL,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.title,
    description:
      "I own the technical side so founders can ship. Book a strategy call — most engagements start with a paid Technical Audit.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TrustBar />
      <WhenFoundersBringMeIn />
      <Offers />
      <CaseStudies />
      <ProofSection />
      <AboutPartner />
      <FinalCtaBand />
      <Contact />
    </main>
  );
}
