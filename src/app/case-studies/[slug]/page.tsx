import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import { BRAND, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projectsData.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  const desc = project.homepageSummary ?? project.subtitle ?? project.description;
  const pageUrl = `${SITE_URL}/case-studies/${project.slug}`;
  const ogImage = project.imageUrl.startsWith("http") ? project.imageUrl : `${SITE_URL}${project.imageUrl}`;
  return {
    title: project.title,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    openGraph: {
      title: `${project.title} | Case Study | ${BRAND.name}`,
      description: desc,
      url: pageUrl,
      siteName: BRAND.name,
      type: "article",
      images: [{ url: ogImage, alt: project.title, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study | ${BRAND.name}`,
      description: desc,
      images: [ogImage],
    },
    alternates: { canonical: pageUrl },
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/case-studies/${project.slug}` },
    ],
  };

  const hasFullCaseStudy = !!(project.overview || project.challenge || project.whatIOwned || project.whatIBuilt);

  return (
    <main className="min-h-screen pt-20 pb-24">
      <Script id="breadcrumb-ld" type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </Script>

      {/* Hero image */}
      {project.imageUrl && (
        <div className="relative h-56 md:h-80 w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            fill
            alt={project.title}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-textMuted mb-8 mt-8">
          <Link href="/" className="hover:text-textSecondary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/case-studies" className="hover:text-textSecondary transition-colors">Case Studies</Link>
          <span>/</span>
          <span className="text-textSecondary">{project.title}</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.role && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {project.role}
              </span>
            )}
            {project.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface2 border border-border text-textMuted">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora mb-3">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-textSecondary text-lg leading-relaxed">{project.subtitle}</p>
          )}
        </header>

        {/* Outcome callout */}
        {(project.outcomeShort ?? project.outcome) && (
          <div className="mb-10 rounded-xl border border-primary/20 bg-primary/[0.07] px-5 py-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">What changed</p>
            <p className="text-textPrimary font-medium text-sm leading-relaxed">
              {project.outcomeShort ?? project.outcome}
            </p>
          </div>
        )}

        {/* Case study content */}
        {hasFullCaseStudy ? (
          <div className="space-y-10 text-textSecondary leading-relaxed">
            {project.overview && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Context
                </h2>
                <p className="text-base leading-relaxed">{project.overview}</p>
              </section>
            )}

            {(project.challenge || project.problem) && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  What Was Going Wrong
                </h2>
                <p className="text-base leading-relaxed">{project.challenge ?? project.problem}</p>
              </section>
            )}

            {(project.whatIOwned || project.ownership) && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  What I Owned
                </h2>
                <p className="text-base leading-relaxed">{project.whatIOwned ?? project.ownership}</p>
              </section>
            )}

            {project.whatIBuilt && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Technical Delivery
                </h2>
                <p className="text-base leading-relaxed">{project.whatIBuilt}</p>
              </section>
            )}

            {project.outcome && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-success inline-block" />
                  What Changed
                </h2>
                <p className="text-base leading-relaxed">{project.outcome}</p>
              </section>
            )}

            {project.proofBullets && project.proofBullets.length > 0 && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Proof Points
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.proofBullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl bg-surface border border-border px-4 py-3">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      <span className="text-sm text-textSecondary">{bullet}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {(project.capabilityLine || project.tags?.length) && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Stack & Systems
                </h2>
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.capabilityLine && (
                  <p className="text-sm text-textMuted mt-3">{project.capabilityLine}</p>
                )}
              </section>
            )}
          </div>
        ) : (
          <div className="space-y-8 text-textSecondary leading-relaxed">
            {project.context && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Context
                </h2>
                <p>{project.context}</p>
              </section>
            )}
            {project.problem && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  What Was Going Wrong
                </h2>
                <p>{project.problem}</p>
              </section>
            )}
            {project.ownership && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  What I Owned
                </h2>
                <p>{project.ownership}</p>
              </section>
            )}
            {project.outcome && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-success inline-block" />
                  What Changed
                </h2>
                <p>{project.outcome}</p>
              </section>
            )}
            {project.tags?.length > 0 && (
              <section>
                <h2 className="text-textPrimary font-bold text-xl font-Sora mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Stack & Systems
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Bottom actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-14 pt-10 border-t border-border">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primaryHover transition-all duration-200 text-sm shadow-lg shadow-primary/20"
            >
              {project.linkLabel ?? "View Project"}
              <FiExternalLink className="text-xs" />
            </a>
          )}
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-textSecondary rounded-xl font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 transition-all duration-200 text-sm"
          >
            <FiArrowLeft className="text-xs" />
            All Case Studies
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-200 text-sm"
          >
            Discuss Your Project
            <FiArrowRight className="text-xs" />
          </Link>
        </div>
      </article>
    </main>
  );
}
