import { projectsData } from "@/lib/data";
import { BRAND, FAQS, SERVICES, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/** llms.txt (https://llmstxt.org) — a plain-text site summary for AI assistants and answer engines. */
export function GET() {
  const body = [
    `# ${BRAND.name}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `${BRAND.name} works with early-stage, non-technical founders who have a live or partially built product that is stuck, fragile, or moving too slowly. Based in ${BRAND.location.city}, Pakistan; works remotely with founders internationally. Contact: ${BRAND.email}. Book a 20-minute fit call: ${BRAND.calendly}`,
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => `- [${s.name}](${SITE_URL}/#offers) (${s.priceLabel}): ${s.description}`),
    "",
    "## Case studies",
    "",
    ...projectsData.map(
      (p) => `- [${p.title}](${SITE_URL}/case-studies/${p.slug}): ${p.homepageSummary ?? p.subtitle ?? p.description}`
    ),
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}/): Technical partner and fractional CTO services overview`,
    `- [About](${SITE_URL}/about): Background and approach`,
    `- [Case Studies](${SITE_URL}/case-studies): All projects`,
    `- [Contact](${SITE_URL}/contact): Book a fit call or send a message`,
    `- [Resume](${SITE_URL}/resume): Resume`,
    "",
    "## FAQ",
    "",
    ...FAQS.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Profiles",
    "",
    `- [LinkedIn](${BRAND.linkedin})`,
    `- [GitHub](${BRAND.github})`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
