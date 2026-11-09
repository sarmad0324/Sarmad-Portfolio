import type { Metadata } from "next";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import WhenFoundersBringMeIn from "@/components/when-founders-bring-me-in";
import Offers from "@/components/offers";
import CaseStudies from "@/components/case-studies";
import HowItWorks from "@/components/how-it-works";
import AboutPartner from "@/components/about-partner";
import ProofSection from "@/components/proof-section";
import FinalCtaBand from "@/components/final-cta-band";
import Contact from "@/components/Contact";
import Faq from "@/components/faq";
import JsonLd from "@/components/json-ld";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE, FAQS, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: BRAND.title },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: BRAND.title,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.title,
    description: SITE_DESCRIPTION,
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
      <Offers />
      <CaseStudies />
      <HowItWorks />
      <AboutPartner />
      <ProofSection />
      <Faq />
      <FinalCtaBand />
      <Contact />
    </main>
  );
}
