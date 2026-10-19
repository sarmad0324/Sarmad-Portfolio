/**
 * Server-rendered JSON-LD. Unlike next/script, this lands in the static HTML,
 * so crawlers and AI agents that don't execute JavaScript can read it.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
