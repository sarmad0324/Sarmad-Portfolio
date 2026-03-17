"use client";

export default function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[999]">
      <a
        href="/#contact"
        className="w-full inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold shadow-sm hover:bg-primaryHover transition-colors"
      >
        Discuss Your Project
      </a>
    </div>
  );
}
