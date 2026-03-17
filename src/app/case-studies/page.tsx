import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";

export default function CaseStudiesPage() {
  return (
    <main className="px-6 pt-28 pb-16 md:pb-20 bg-darkBlack min-h-screen">
      <section className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Case <span className="text-primary">Studies</span>
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Product execution work across fintech, logistics, and platform delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <article key={project.slug} className="rounded-2xl border border-darkGray3 bg-darkGray1/70 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image src={project.imageUrl} fill alt={project.title} className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-white">{project.title}</h2>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2.5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
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
