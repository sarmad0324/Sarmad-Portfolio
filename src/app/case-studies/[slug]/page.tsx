import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyDetailPage({ params }: Props) {
  const project = projectsData.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 pt-28 pb-16 md:pb-20 bg-darkBlack min-h-screen">
      <article className="max-w-4xl mx-auto rounded-2xl border border-darkGray3 bg-darkGray1/70 p-7 md:p-9">
        <p className="text-primary text-sm font-semibold">{project.role || "Case Study"}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">{project.title}</h1>
        <p className="text-gray-300 mt-4">{project.context || project.description}</p>

        {project.problem && (
          <section className="mt-7">
            <h2 className="text-white font-bold text-lg">Challenge</h2>
            <p className="text-gray-300 mt-2">{project.problem}</p>
          </section>
        )}

        {project.solution && (
          <section className="mt-6">
            <h2 className="text-white font-bold text-lg">Approach</h2>
            <p className="text-gray-300 mt-2">{project.solution}</p>
          </section>
        )}

        {project.ownership && (
          <section className="mt-6">
            <h2 className="text-white font-bold text-lg">What I Owned</h2>
            <p className="text-gray-300 mt-2">{project.ownership}</p>
          </section>
        )}

        {project.outcome && (
          <section className="mt-6">
            <h2 className="text-white font-bold text-lg">Outcome</h2>
            <p className="text-gray-300 mt-2">{project.outcome}</p>
          </section>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {project.linkLabel || "View Project"}
          </a>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-5 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Back to Case Studies
          </Link>
        </div>
      </article>
    </main>
  );
}
