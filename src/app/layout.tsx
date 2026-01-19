import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import ThemeContextProvider from "@/components/theme-context";
import Script from "next/script";
import AnimatedCursor from '@/components/AnimatedCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Sarmad Irfan – Software Engineer & AI Specialist",
  description: "Transform your business with AI-powered web and mobile solutions. Full-stack development, AI integration, and automation services for businesses and startups. Get a quote today.",
  keywords: "AI web development, mobile app development, business solutions, startup development, AI integration, automation, custom software development, React, Next.js, React Native",
  authors: [{ name: "Sarmad Irfan" }],
  creator: "Sarmad Irfan",
  publisher: "Sarmad Irfan",
  robots: "index, follow",
  verification: {
    google: "FGaNKbTbKnR33p0Pq9aVSamdAX0bYwTsERX1dZBjCrA",
  },
  openGraph: {
    title: "Sarmad Irfan – Software Engineer & AI Specialist",
    description: "AI-powered web & mobile solutions for businesses and startups. Explore case studies, services, and how I help teams ship fast, scalable products.",
    url: "https://sarmadirfan.com",
    siteName: "Sarmad Irfan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero-profile-2.jpeg",
        alt: "Sarmad Irfan – Software Engineer & AI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarmad Irfan – Software Engineer & AI Specialist",
    description: "AI-powered web & mobile solutions for businesses and startups. Explore case studies, services, and how I help teams ship fast, scalable products.",
    images: ["/hero-profile-2.jpeg"],
  },
  alternates: {
    canonical: "https://sarmadirfan.com",
  },
  metadataBase: new URL("https://sarmadirfan.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <ThemeContextProvider>
        <body className={`${inter.variable} font-Inter flex flex-col bg-bgWarm text-textDark relative dark:bg-darkBlack dark:text-darkGray3 antialiased`}>
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
          <Script id="structured-data" type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Sarmad Irfan",
                "url": "https://sarmadirfan.com",
                "sameAs": [
                  "https://www.linkedin.com/in/sarmad-irfan",
                  "https://github.com/sarmad0324"
                ],
                "jobTitle": "Software Engineer & CEO",
                "worksFor": {
                  "@type": "Organization",
                  "name": "SyntexLeap"
                }
              }
            `}
          </Script>
          <Script id="site-structured-data" type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Sarmad Irfan – Software Engineer",
                "url": "https://sarmadirfan.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://sarmadirfan.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            `}
          </Script>
          <AnimatedCursor />
          <Providers>
            <Navbar />
            <div className="relative z-10">
              {children}
            </div>
            <ThemeSwitch />
          </Providers>
        </body>
      </ThemeContextProvider>
    </html>
  );
}