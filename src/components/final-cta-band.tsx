"use client";

export default function FinalCtaBand() {
  return (
    <section className="px-6 py-14 bg-bg">
      <div className="max-w-7xl mx-auto rounded-2xl border border-border bg-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-textPrimary">Let&apos;s review what&apos;s blocked and what needs to move next.</h3>
          <p className="text-textSecondary mt-2 text-sm md:text-base">
            Get clarity on the bottleneck, scope, and next steps. No pressure — just a direct conversation.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/#contact" className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200">
            Discuss Your Project
          </a>
          <a href="https://calendly.com/sarmadirfan78/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
