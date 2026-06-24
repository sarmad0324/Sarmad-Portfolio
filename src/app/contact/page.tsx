import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sarmad Irfan for a Technical Audit, a Build & Stabilize sprint, or an ongoing technical partner / fractional CTO engagement. Book a 20-min fit call or send a message.",
  openGraph: {
    title: `Contact | ${BRAND.name}`,
    description:
      "Discuss your product. Book a 20-min fit call or reach out via email. Technical partner and fractional CTO for early-stage founders.",
    url: `${SITE_URL}/contact`,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${BRAND.name}`,
    description: "Get in touch to discuss your product. Book a call or send a message.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main className="pt-20 bg-bg min-h-screen">
      <Contact />
    </main>
  );
}
