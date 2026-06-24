import type { Metadata } from "next";
import Hero from "@/components/hero";
import TechMarquee from "@/components/tech-marquee";
import WhenFoundersBringMeIn from "@/components/when-founders-bring-me-in";
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
    "The technical partner founders bring in when the product has to ship. I work with early-stage founders without a technical co-founder — starting with a paid Technical Audit, then building, fixing, and scaling across web, mobile, backend, and AI-powered workflows.",
  openGraph: {
    title: BRAND.title,
    description:
      "The technical partner founders bring in when the product has to ship. Audit-first engagements, then hands-on execution and ongoing technical leadership.",
    url: SITE_URL,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.title,
    description: "The technical partner founders bring in when the product has to ship. Start with a paid Technical Audit, leave with a roadmap and someone who can execute it.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TechMarquee />
      <WhenFoundersBringMeIn />
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
