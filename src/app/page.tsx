import type { Metadata } from "next";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import WhenFoundersBringMeIn from "@/components/when-founders-bring-me-in";
import CaseStudies from "@/components/case-studies";
import Offers from "@/components/offers";
import HowItWorks from "@/components/how-it-works";
import ProofSection from "@/components/proof-section";
import FitFor from "@/components/fit-for";
import AboutPartner from "@/components/about-partner";
import FinalCtaBand from "@/components/final-cta-band";
import Contact from "@/components/Contact";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: BRAND.title,
  description:
    "Technical Partner for early-stage founders. I help non-technical founders take ownership of stalled or fragile products and get them shipping again — starting with a paid Technical Audit.",
  openGraph: {
    title: BRAND.title,
    description:
      "I step into stalled, fragile, or half-built products, find what's blocking delivery, and take technical ownership from roadmap through release.",
    url: SITE_URL,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.title,
    description:
      "Technical Partner for founders with a product that needs to move. Start with a paid Technical Audit.",
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
      <CaseStudies />
      <Offers />
      <HowItWorks />
      <ProofSection />
      <FitFor />
      <AboutPartner />
      <FinalCtaBand />
      <Contact />
    </main>
  );
}
