import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Product execution work across fintech, logistics, recovery platforms, and digital commerce. Featured projects from Sarmad Irfan.",
  openGraph: {
    title: `Case Studies | ${BRAND.name}`,
    description:
      "Product execution across fintech, logistics, and platform delivery. Case studies from product engineer and technical partner.",
    url: `${SITE_URL}/case-studies`,
    siteName: BRAND.name,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${BRAND.name} - Case Studies`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies | ${BRAND.name}`,
    description: "Product execution work across fintech, logistics, and platform delivery.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <main className="px-6 pt-28 pb-16 md:pb-20 bg-bg min-h-screen">
      <section className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-textPrimary">
            Case <span className="text-primary">Studies</span>
          </h1>
          <p className="text-textSecondary mt-3 max-w-2xl mx-auto">
            Product execution work across fintech, logistics, and platform delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <article key={project.slug} className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image src={project.imageUrl} fill alt={project.title} className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-textPrimary">{project.title}</h2>
                <p className="text-sm text-textSecondary mt-2">
                  {project.homepageSummary ?? project.description}
                </p>
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
                >
                  View Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
