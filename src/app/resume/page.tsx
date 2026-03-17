export default function ResumePage() {
  return (
    <main className="px-6 pt-28 pb-16 bg-darkBlack min-h-screen">
      <section className="max-w-3xl mx-auto rounded-2xl border border-darkGray3 bg-darkGray1/70 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">Resume</h1>
        <p className="text-gray-300 mt-3">
          Access my latest resume for startup technical partner and product engineering roles.
        </p>
        <a
          href="https://drive.google.com/file/d/12sBGdNtcSZqLIlianFkNjwE3FBS-TY5m/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Open Resume
        </a>
      </section>
    </main>
  );
}
