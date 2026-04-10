import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { BRAND, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { FiArrowRight } from "react-icons/fi";

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
    <main className="px-6 pt-28 pb-16 md:pb-20 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            All projects
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-textPrimary font-Sora">
            Case Studies
          </h1>
          <p className="text-textSecondary mt-3 max-w-xl text-base">
            Real business and product interventions — what was broken, what I owned, and what changed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <article
              key={project.slug}
              className="group rounded-2xl border border-border bg-surface overflow-hidden flex flex-col hover:border-primary/25 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
                {project.role && (
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                      {project.role}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-textPrimary font-Sora mb-2">{project.title}</h2>
                <p className="text-sm text-textSecondary leading-relaxed flex-1 mb-4">
                  {project.homepageSummary ?? project.description}
                </p>
                {(project.outcomeShort ?? project.outcome) && (
                  <p className="text-xs text-primary font-medium mb-4 border-l-2 border-primary/40 pl-3">
                    {project.outcomeShort ?? project.outcome}
                  </p>
                )}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-surface2 border border-border text-textMuted font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primaryHover transition-colors group/link"
                >
                  Read Case Study
                  <FiArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-textSecondary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
