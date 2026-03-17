import type { Metadata } from "next";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import CaseStudies from "@/components/case-studies";
import EngagementModels from "@/components/engagement-models";
import AboutPartner from "@/components/about-partner";
import ProofSection from "@/components/proof-section";
import FinalCtaBand from "@/components/final-cta-band";
import Contact from "@/components/Contact";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: BRAND.title,
  description:
    "I help startups build, fix, and scale digital products. Hands-on product execution across web, mobile, backend, and AI-powered workflows for founders and lean teams.",
  openGraph: {
    title: BRAND.title,
    description:
      "I help startups build, fix, and scale digital products. Hands-on execution across web, mobile, backend, and AI-powered workflows.",
    url: SITE_URL,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.title,
    description: "I help startups build, fix, and scale digital products. Product engineer and technical partner for founders and lean teams.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Offers />
      <CaseStudies />
      <EngagementModels />
      <AboutPartner />
      <ProofSection />
      <FinalCtaBand />
      <Contact />
    </main>
  );
}
