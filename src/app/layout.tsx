import type { Metadata } from "next";
import { Sora } from "next/font/google"
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import ThemeContextProvider from "@/components/theme-context";
import Script from "next/script";
import AnimatedCursor from '@/components/AnimatedCursor';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
});

export const metadata: Metadata = {
  title: "Sarmad Irfan – Software Engineer & AI Specialist",
  description: "Explore the official portfolio of Sarmad Irfan, CEO of SyntexLeap, showcasing web and mobile app development projects built with React, React-Native, Next.js, and modern technologies.",
  keywords: "Sarmad Irfan, SyntexLeap, Software Engineer, Web Development, App Development, React, Next.js",
  authors: [{ name: "Sarmad Irfan" }],
  creator: "Sarmad Irfan",
  publisher: "Sarmad Irfan",
  robots: "index, follow",
  verification: {
    google: "FGaNKbTbKnR33p0Pq9aVSamdAX0bYwTsERX1dZBjCrA",
  },
  openGraph: {
    title: "Sarmad Irfan – Software Engineer & AI Specialist",
    description: "Explore the official portfolio of Sarmad Irfan, CEO of SyntexLeap, showcasing web and mobile app development projects built with React, React-Native, Next.js, and modern technologies.",
    url: "https://sarmadirfan.com",
    siteName: "Sarmad Irfan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarmad Irfan – Software Engineer & AI Specialist",
    description: "Explore the official portfolio of Sarmad Irfan, CEO of SyntexLeap, showcasing web and mobile app development projects built with React, React-Native, Next.js, and modern technologies.",
  },
  alternates: {
    canonical: "https://sarmadirfan.com",
  },
  metadataBase: new URL("https://sarmadirfan.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
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
              "name": "Sarmad",
              "url": "https://sarmadirfan.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sarmadirfan.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeContextProvider>
        <body className={`${sora.variable} font-Sora flex flex-col bg-light1 text-light4 relative dark:bg-darkBlack dark:text-darkGray3 antialiased`}>
          <AnimatedCursor />
          <Providers>
            <Navbar />
            {children}
            <ThemeSwitch />
          </Providers>
        </body>
      </ThemeContextProvider>
    </html>
  );
}