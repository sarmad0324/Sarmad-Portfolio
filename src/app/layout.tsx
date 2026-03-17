import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import Script from "next/script";
import MobileCta from "@/components/mobile-cta";
import Footer from "@/components/footer";
import { SITE_URL, BRAND, DEFAULT_OG_IMAGE } from "@/lib/seo";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: { default: BRAND.title, template: `%s | ${BRAND.name}` },
  description:
    "Hands-on product execution across web, mobile, backend, and AI-powered workflows for founders and lean teams.",
  keywords:
    "product engineer, technical partner, React, React Native, Next.js, Node.js, PostgreSQL, MVP build, app stabilization, fractional technical partner",
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: "index, follow",
  verification: {
    google: "FGaNKbTbKnR33p0Pq9aVSamdAX0bYwTsERX1dZBjCrA",
  },
  openGraph: {
    title: BRAND.title,
    description:
      "I help startups build, fix, and scale digital products. Hands-on execution across web, mobile, backend, and AI-powered workflows.",
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
      "I help startups build, fix, and scale digital products. Product engineer and technical partner for founders and lean teams.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark !scroll-smooth">
        <body className={`${inter.variable} font-Inter flex flex-col bg-bg text-textSecondary relative antialiased`}>
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
          <Script id="structured-data-person" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: BRAND.name,
              url: SITE_URL,
              email: BRAND.email,
              jobTitle: BRAND.role,
              sameAs: [BRAND.github, BRAND.calendly],
              worksFor: { "@type": "Organization", name: "SyntaxLeap" },
            })}
          </Script>
          <Script id="structured-data-website" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: BRAND.title,
              url: SITE_URL,
              publisher: { "@type": "Person", name: BRAND.name },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            })}
          </Script>
          <Providers>
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