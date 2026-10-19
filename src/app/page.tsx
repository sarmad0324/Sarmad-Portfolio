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
import Faq from "@/components/faq";
import JsonLd from "@/components/json-ld";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE, FAQS } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: BRAND.title },
  description:
    "Technical partner and fractional CTO for non-technical founders. I rescue stalled or fragile MVPs, own architecture through release, and start with a fixed-price $1,500 Technical Audit.",
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
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <JsonLd data={faqJsonLd} />
      <Hero />
      <TrustBar />
      <WhenFoundersBringMeIn />
      <CaseStudies />
      <Offers />
      <HowItWorks />
      <ProofSection />
      <FitFor />
      <AboutPartner />
      <Faq />
      <FinalCtaBand />
      <Contact />
    </main>
  );
}
