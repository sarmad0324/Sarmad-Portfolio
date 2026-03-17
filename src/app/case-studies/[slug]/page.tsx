import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import { BRAND, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

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
  const desc =
    project.homepageSummary ?? project.subtitle ?? project.description;
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

  if (!project) {
    notFound();
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/case-studies/${project.slug}` },
    ],
  };

  const hasFullCaseStudy = !!(
    project.overview ||
    project.challenge ||
    project.whatIOwned ||
    project.whatIBuilt
  );

  return (
    <main className="px-6 pt-28 pb-20 md:pb-24 bg-bg min-h-screen">
      <Script id="breadcrumb-ld" type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <article className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-textSecondary text-lg mt-3 leading-relaxed">{project.subtitle}</p>
          )}
        </header>

        {project.imageUrl && (
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-10 border border-border">
            <Image
              src={project.imageUrl}
              fill
              alt={project.title}
              className="object-cover"
            />
          </div>
        )}

        {hasFullCaseStudy ? (
          <div className="space-y-10 text-textSecondary leading-relaxed">
            {project.overview && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-3">Overview</h2>
                <p>{project.overview}</p>
              </section>
            )}

            {project.challenge && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-3">Challenge</h2>
                <p>{project.challenge}</p>
              </section>
            )}

            {project.whatIOwned && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-3">What I Owned</h2>
                <p>{project.whatIOwned}</p>
              </section>
            )}

            {project.whatIBuilt && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-3">What I Built</h2>
                <p>{project.whatIBuilt}</p>
              </section>
            )}

            {project.outcome && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-3">Outcome</h2>
                <p>{project.outcome}</p>
              </section>
            )}

            {project.proofBullets && project.proofBullets.length > 0 && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-3">Proof</h2>
                <ul className="space-y-2">
                  {project.proofBullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.capabilityLine && (
              <p className="text-sm text-textMuted border-t border-border pt-6">
                {project.capabilityLine}
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-6 text-textSecondary leading-relaxed">
            {project.context && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-2">Context</h2>
                <p>{project.context}</p>
              </section>
            )}
            {project.problem && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-2">Challenge</h2>
                <p>{project.problem}</p>
              </section>
            )}
            {project.ownership && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-2">What I Owned</h2>
                <p>{project.ownership}</p>
              </section>
            )}
            {project.outcome && (
              <section>
                <h2 className="text-textPrimary font-bold text-lg mb-2">Outcome</h2>
                <p>{project.outcome}</p>
              </section>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-12">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200"
            >
              {project.linkLabel ?? "View Project"}
            </a>
          )}
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-5 py-3 border border-border text-textPrimary rounded-lg font-semibold hover:bg-surface transition-colors"
          >
            Back to Case Studies
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200"
          >
            Discuss Your Product
          </Link>
        </div>
      </article>
    </main>
  );
}
