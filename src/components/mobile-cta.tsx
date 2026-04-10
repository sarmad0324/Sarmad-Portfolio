"use client";

export default function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[998]">
      <a
        href="https://calendly.com/sarmad-sarmadirfan/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:bg-primaryHover transition-colors text-sm"
      >
        Book a Free Call
      </a>
    </div>
  );
}
