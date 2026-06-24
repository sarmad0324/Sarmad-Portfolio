"use client";

import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiOpenai,
  SiExpo,
} from "react-icons/si";
import { Sparkles, Bot, TerminalSquare, Workflow, BrainCircuit, LucideIcon } from "lucide-react";
import Marquee from "@/components/magicui/marquee";

type Item = { label: string; Icon: IconType | LucideIcon; ai?: boolean };

const tools: Item[] = [
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "React Native", Icon: SiReact },
  { label: "Expo", Icon: SiExpo },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "Express", Icon: SiExpress },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "Claude", Icon: Sparkles, ai: true },
  { label: "Cursor", Icon: TerminalSquare, ai: true },
  { label: "GitHub Copilot", Icon: Bot, ai: true },
  { label: "OpenAI", Icon: SiOpenai, ai: true },
  { label: "AI Agents", Icon: BrainCircuit, ai: true },
  { label: "LLM / RAG", Icon: Workflow, ai: true },
];

function Pill({ label, Icon, ai }: Item) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border px-4 py-2.5 whitespace-nowrap transition-colors ${
        ai
          ? "border-primary/25 bg-primary/[0.06] text-textSecondary hover:border-primary/40 hover:text-textPrimary"
          : "border-border bg-surface text-textSecondary hover:border-primary/30 hover:text-textPrimary"
      }`}
    >
      <Icon className={`text-lg ${ai ? "text-primary" : "text-textMuted"}`} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="px-6 py-10 md:py-12 border-y border-border/60 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-textMuted mb-7">
          Product engineering — accelerated by AI-assisted, agentic workflows
        </p>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:38s] [--gap:0.9rem]">
            {tools.map((t, i) => (
              <Pill key={`${t.label}-${i}`} {...t} />
            ))}
          </Marquee>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-bg to-transparent" />
        </div>
      </div>
    </section>
  );
}
