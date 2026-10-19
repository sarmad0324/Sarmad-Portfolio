/**
 * SEO & metadata branding constants.
 * Do not use SarmadIrfan.com as site name anywhere — use "Sarmad Irfan".
 */
/** Canonical origin. The apex domain 301-redirects to www, so canonicals must use www. */
export const SITE_URL = "https://www.sarmadirfan.com";

export const BRAND = {
  name: "Sarmad Irfan",
  title: "Sarmad Irfan — Technical Partner & Fractional CTO for Early-Stage Founders",
  role: "Technical Partner for Early-Stage Founders",
  email: "sarmad@sarmadirfan.com",
  github: "https://github.com/sarmad0324",
  linkedin: "https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/",
  calendly: "https://calendly.com/sarmad-sarmadirfan/30min",
  location: { city: "Lahore", country: "PK" },
} as const;

/** OG image for social sharing. Must exist in public folder (e.g. 1200x630). */
export const DEFAULT_OG_IMAGE = "/hero-profile-2.jpeg";

/** One-sentence summary reused in meta descriptions, JSON-LD, and llms.txt. */
export const SITE_DESCRIPTION =
  "Sarmad Irfan is a technical partner and fractional CTO for non-technical, early-stage founders. He takes ownership of stalled, fragile, or half-built web and mobile products and gets them shipping again — starting with a fixed-price Technical Audit.";

/** Target search phrases (founder intent first, then capability/stack terms). */
export const KEYWORDS = [
  "technical partner for startups",
  "fractional CTO",
  "fractional CTO for startups",
  "technical co-founder alternative",
  "CTO as a service",
  "hire a technical co-founder",
  "technical audit",
  "startup technical audit",
  "code audit for startups",
  "software architecture review",
  "rescue stalled software project",
  "fix failing MVP",
  "MVP development for non-technical founders",
  "product rescue",
  "technical due diligence",
  "outsourced CTO",
  "startup product development",
  "React Native developer",
  "Next.js developer",
  "Node.js developer",
  "full-stack developer",
  "AI product strategy",
  "fractional CTO Pakistan",
  "fractional CTO Lahore",
  "Sarmad Irfan",
];

/** Service catalogue — mirrors the offers section; used for Service / Offer JSON-LD. */
export const SERVICES = [
  {
    name: "Technical Audit & Roadmap",
    description:
      "Fixed-price, 2–3 week written diagnosis of what is blocking delivery: technical risk map, architecture assessment, bottleneck analysis, and a prioritized 30/60/90-day roadmap.",
    price: "1500",
    priceLabel: "$1,500 fixed",
  },
  {
    name: "Product Sprint (Build & Stabilize)",
    description:
      "Scoped 3–6 week full-stack execution across web, mobile, backend, and integrations to stabilize a stalled product or ship a focused v1, with weekly demos.",
    price: "4000",
    priceLabel: "from $4,000",
  },
  {
    name: "Technical Partner / Fractional CTO Retainer",
    description:
      "Ongoing technical ownership without a full-time hire: weekly technical leadership, roadmap ownership, architecture oversight, and delivery coordination.",
    price: "3000",
    priceLabel: "from $3,000 / month",
  },
] as const;

/** FAQ — rendered visibly on the homepage and mirrored as FAQPage JSON-LD (they must match). */
export const FAQS = [
  {
    q: "What is a technical partner for a startup?",
    a: "A technical partner is a senior engineer who takes accountable ownership of your product's technology — architecture, roadmap, and delivery — without you having to give away co-founder equity or hire a full-time CTO. I work with non-technical founders who need one person responsible for getting the product shipped.",
  },
  {
    q: "How is this different from hiring a freelancer or an agency?",
    a: "Freelancers and agencies usually execute tickets you define. I own the technical decisions: what to build, in what order, what to fix, and what to leave alone. You get a single accountable technical lead rather than hourly output.",
  },
  {
    q: "What does the Technical Audit include and how much does it cost?",
    a: "The Technical Audit is a fixed $1,500 engagement over 2–3 weeks. You receive a technical risk map, an architecture assessment, a product and delivery bottleneck analysis, a prioritized 30/60/90-day roadmap, an executive findings document, and a 60-minute findings call.",
  },
  {
    q: "Can you rescue a stalled or failing MVP?",
    a: "Yes. Most of my work starts with products that are stuck, fragile, or half-built. I diagnose what is actually blocking delivery, stabilize critical flows, and take ownership through release — usually without a full rewrite.",
  },
  {
    q: "Do you work as a fractional CTO?",
    a: "Yes. The Technical Partner retainer starts from $3,000 per month and covers weekly technical leadership, roadmap ownership, architecture oversight, and delivery coordination. Broader fractional CTO engagements (hiring, governance, executive cadence) are available when the product needs them.",
  },
  {
    q: "Which technologies do you work with?",
    a: "Web (React, Next.js), mobile (React Native, plus native Android and iOS assessment), backend (Node.js, .NET, REST APIs, MySQL/Postgres), cloud deployment, and AI-powered features such as search, retrieval, and assistants.",
  },
  {
    q: "Where are you based, and do you work with international founders?",
    a: "I'm based in Lahore, Pakistan, and work remotely with founders internationally, with overlap across US, UK, and European time zones available.",
  },
] as const;
