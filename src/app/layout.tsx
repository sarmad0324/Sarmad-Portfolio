import type { Metadata } from "next";
import { Sora } from "next/font/google"
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import ThemeContextProvider from "@/components/theme-context";
import Script from "next/script";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "Sarmad Irfan - Web & App Developer Portfolio",
  description: "Explore the official portfolio of Sarmad Irfan, featuring professional web and mobile app development projects built with React, Next.js, and modern technologies.",
  keywords: "Sarmad Irfan, Developer Portfolio, Web Development, App Development, React Developer, Next.js Developer, Full Stack Developer",
  authors: [{ name: "Sarmad Irfan" }],
  creator: "Sarmad Irfan",
  publisher: "Sarmad Irfan",
  robots: "index, follow",
  verification: {
    google: "FGaNKbTbKnR33p0Pq9aVSamdAX0bYwTsERX1dZBjCrA",
  },
  openGraph: {
    title: "Sarmad Irfan - Web & App Developer Portfolio",
    description: "Explore the official portfolio of Sarmad Irfan, featuring professional web and mobile app development projects built with React, Next.js, and modern technologies.",
    url: "https://sarmadirfan.com",
    siteName: "Sarmad Irfan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarmad Irfan - Web & App Developer Portfolio",
    description: "Explore the official portfolio of Sarmad Irfan, featuring professional web and mobile app development projects built with React, Next.js, and modern technologies.",
  },
  alternates: {
    canonical: "https://sarmadirfan.com",
  },
  metadataBase: new URL("https://sarmadirfan.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" >
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
      "jobTitle": "Web & App Developer",
      "worksFor": {
        "@type": "Software Agency",
        "name": "Freelance / Sarmad Irfan Agency"
      }
    }
  `}
</Script>
<Script id="site-structured-data" type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sarmad Irfan",
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
        <body
          className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90  antialiased`}
        >
          <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" ></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]  " ></div>
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
