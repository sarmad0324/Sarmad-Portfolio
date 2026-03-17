import type { Metadata } from "next";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Access Sarmad Irfan's resume for product engineer and technical partner roles. Hands-on execution across web, mobile, backend, and AI workflows.",
  openGraph: {
    title: `Resume | ${BRAND.name}`,
    description:
      "Resume for product engineer and technical partner roles. Experience across logistics, fintech, and digital platforms.",
    url: `${SITE_URL}/resume`,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - ${BRAND.role}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${BRAND.name}`,
    description: "Resume for product engineer and technical partner roles.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/resume` },
};

export default function ResumePage() {
  return (
    <main className="px-6 pt-28 pb-16 bg-bg min-h-screen">
      <section className="max-w-3xl mx-auto rounded-2xl border border-border bg-surface p-8 md:p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-textPrimary">Resume</h1>
        <p className="text-textSecondary mt-3">
          Access my latest resume for product engineer and technical partner roles.
        </p>
        <a
          href="https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200"
        >
          Open Resume
        </a>
      </section>
    </main>
  );
}
