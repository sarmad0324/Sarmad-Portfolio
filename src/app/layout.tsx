import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import Script from "next/script";
import MobileCta from "@/components/mobile-cta";
import Footer from "@/components/footer";
import { ScrollProgress } from "@/components/ui/motion-bits";
import JsonLd from "@/components/json-ld";
import { SITE_URL, BRAND, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, KEYWORDS, SERVICES } from "@/lib/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: BRAND.title, template: `%s | ${BRAND.name}` },
  description: SITE_DESCRIPTION,
  applicationName: BRAND.name,
  keywords: KEYWORDS,
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "FGaNKbTbKnR33p0Pq9aVSamdAX0bYwTsERX1dZBjCrA",
  },
  openGraph: {
    title: BRAND.title,
    description:
      "I step into stalled, fragile, or half-built products, find what's blocking delivery, and take technical ownership from roadmap through release.",
    url: SITE_URL,
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: `${BRAND.name} - ${BRAND.role}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.title,
    description:
      "Technical partner and fractional CTO for founders with a product that needs to move. Start with a paid Technical Audit.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: "/",
  },
};

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: BRAND.name,
      url: SITE_URL,
      email: `mailto:${BRAND.email}`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      jobTitle: "Technical Partner & Fractional CTO",
      description: SITE_DESCRIPTION,
      address: { "@type": "PostalAddress", addressLocality: BRAND.location.city, addressCountry: BRAND.location.country },
      sameAs: [BRAND.github, BRAND.linkedin],
      worksFor: { "@id": BUSINESS_ID },
      knowsAbout: [
        "Fractional CTO services",
        "Technical audits",
        "Software architecture",
        "MVP development",
        "Product rescue and stabilization",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        ".NET",
        "AI product strategy",
        "Search and retrieval systems",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: BRAND.name,
      url: SITE_URL,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description: SITE_DESCRIPTION,
      founder: { "@id": PERSON_ID },
      email: BRAND.email,
      address: { "@type": "PostalAddress", addressLocality: BRAND.location.city, addressCountry: BRAND.location.country },
      areaServed: "Worldwide",
      priceRange: "$1,500 – $4,000+",
      sameAs: [BRAND.linkedin, BRAND.github],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technical partner services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          price: service.price,
          priceCurrency: "USD",
          description: service.priceLabel,
          url: `${SITE_URL}/#offers`,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@id": PERSON_ID },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BRAND.name,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${dmSans.variable} ${syne.variable} font-Inter bg-bg text-textSecondary relative antialiased`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-05BX1H3XYB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-05BX1H3XYB');
          `}
        </Script>
        <JsonLd data={siteJsonLd} />
        <Providers>
          <ScrollProgress />
          <Navbar />
          <div className="relative z-10">
            {children}
          </div>
          <Footer />
          <MobileCta />
        </Providers>
      </body>
    </html>
  );
}
