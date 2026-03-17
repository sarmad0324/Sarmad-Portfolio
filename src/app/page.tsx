import Hero from "@/components/hero";
import Offers from "@/components/offers";
import CaseStudies from "@/components/case-studies";
import EngagementModels from "@/components/engagement-models";
import AboutPartner from "@/components/about-partner";
import ProofSection from "@/components/proof-section";
import FinalCtaBand from "@/components/final-cta-band";
import Contact from "@/components/Contact";

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
