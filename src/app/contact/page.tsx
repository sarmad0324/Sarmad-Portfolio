import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sarmad Irfan for product engineering, MVP builds, app stabilization, or fractional technical partnership. Book a call or send a message.",
  openGraph: {
    title: `Contact | ${BRAND.name}`,
    description:
      "Discuss your product. Book a call or reach out via email. Product engineer and technical partner for startups and lean teams.",
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
