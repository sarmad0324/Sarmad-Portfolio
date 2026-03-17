"use client";

export default function FinalCtaBand() {
  return (
    <section className="px-6 py-12 bg-bg">
      <div className="max-w-7xl mx-auto rounded-2xl border border-border bg-surface p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-textPrimary">Need hands-on product execution?</h3>
          <p className="text-textSecondary mt-2 text-sm md:text-base">
            Let&apos;s review your bottleneck and map the next shipping steps.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200">
            Discuss Your Product
          </a>
          <a href="/case-studies" className="inline-flex items-center justify-center px-5 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
