/**
 * SEO & metadata branding constants.
 * Do not use SarmadIrfan.com as site name anywhere — use "Sarmad Irfan".
 */
/** Canonical origin. The apex domain 301-redirects to www, so canonicals must use www. */
export const SITE_URL = "https://www.sarmadirfan.com";

export const BRAND = {
  name: "Sarmad Irfan",
  title: "Sarmad Irfan — Technical Partner | AI Systems Integration & Product Rescue",
  role: "Technical Partner · AI Systems Integration · Product Rescue",
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
  "Technical partner and product engineer with 5+ years of production experience. I help founders and software-driven businesses rescue products, integrate AI into real workflows, and own technical execution end to end.";

/** Target search phrases (founder intent first, then capability/stack terms). */
export const KEYWORDS = [
  "technical partner for startups",
  "AI systems integration",
  "product rescue",
  "fractional CTO",
  "technical co-founder alternative",
  "technical audit",
  "startup technical audit",
  "rescue stalled software project",
  "fix failing MVP",
  "production AI integration",
  "LLM workflow automation",
  "document intelligence",
  "software architecture review",
  "technical due diligence",
  "React Native developer",
  "Next.js developer",
  "Node.js developer",
  "full-stack developer",
  "fractional CTO Pakistan",
  "fractional CTO Lahore",
  "Sarmad Irfan",
];

/** Service catalogue — mirrors the offers section; used for Service / Offer JSON-LD. */
export const SERVICES = [
  {
    name: "Product Rescue & Production Hardening",
    description:
      "Stabilize stalled, fragile or rapidly built systems: architecture, production issues, technical debt, security and reliability hardening across web, mobile, backend and infrastructure.",
    price: "4000",
    priceLabel: "from $4,000",
  },
  {
    name: "AI Systems Integration",
    description:
      "Production AI features connected to existing APIs, databases, documents and operational workflows — including automation, document intelligence, human approval loops and monitoring.",
    price: "3000",
    priceLabel: "from $3,000",
  },
  {
    name: "Technical Partner Retainer",
    description:
      "Senior technical ownership without a full-time hire: roadmap, architecture, delivery, production oversight and developer/vendor coordination.",
    price: "3000",
    priceLabel: "from $3,000 / month",
  },
  {
    name: "Technical Audit & Roadmap",
    description:
      "Fixed-price, 2–3 week written diagnosis when the problem is unclear: product/architecture review, priorities and an execution roadmap.",
    price: "1500",
    priceLabel: "$1,500 fixed",
  },
] as const;

/** FAQ — rendered visibly on the homepage and mirrored as FAQPage JSON-LD (they must match). */
export const FAQS = [
  {
    q: "What is a technical partner for a startup?",
    a: "A technical partner is a senior engineer who takes accountable ownership of your product's technology — architecture, roadmap, and delivery — without you having to give away co-founder equity or hire a full-time CTO. I work with founders and software-driven businesses that need one person responsible for getting the product shipped, stabilized, or extended with AI.",
  },
  {
    q: "How is this different from hiring a freelancer or an agency?",
    a: "Freelancers and agencies usually execute tickets you define. I own the technical decisions: what to build, in what order, what to fix, and what to leave alone. You get a single accountable technical lead rather than hourly output.",
  },
  {
    q: "What does the Technical Audit include and how much does it cost?",
    a: "The Technical Audit is a fixed $1,500 engagement over 2–3 weeks when the problem is unclear. You receive a written diagnosis of the product, architecture and delivery situation, priorities, and an execution roadmap. The audit is an entry point — not the identity of the business.",
  },
  {
    q: "Can you rescue a stalled or failing product?",
    a: "Yes. Product Rescue & Production Hardening starts from $4,000 fixed scope. I diagnose what is actually broken, stabilize architecture and delivery, and take ownership of getting the product moving again — usually without a full rewrite.",
  },
  {
    q: "Do you integrate AI into existing products?",
    a: "Yes. AI Systems Integration starts from $3,000 fixed scope. I connect models to real APIs, databases, documents and operational workflows — with human approval loops, evaluation and production rollout — not demo chatbots.",
  },
  {
    q: "Do you work as an ongoing technical partner?",
    a: "Yes. The Technical Partner retainer starts from $3,000 per month and covers roadmap, architecture, delivery ownership, production oversight and developer/vendor coordination, with direct access to me.",
  },
  {
    q: "Where are you based, and do you work with international clients?",
    a: "I'm based in Lahore, Pakistan, and work remotely with founders and software-driven businesses internationally, with overlap across US, UK, and European time zones available.",
  },
] as const;
