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

type Item = { label: string; Icon: IconType | LucideIcon };

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
  { label: "Claude", Icon: Sparkles },
  { label: "Cursor", Icon: TerminalSquare },
  { label: "GitHub Copilot", Icon: Bot },
  { label: "OpenAI", Icon: SiOpenai },
  { label: "AI Agents", Icon: BrainCircuit },
  { label: "LLM / RAG", Icon: Workflow },
];

export default function TechMarquee() {
  return (
    <section className="py-8 border-b border-border/60">
      <div className="relative max-w-7xl mx-auto">
        <p className="sr-only">Technologies and tools</p>
        <Marquee pauseOnHover className="[--duration:42s] [--gap:2.5rem]">
          {tools.map((t, i) => (
            <div
              key={`${t.label}-${i}`}
              className="flex items-center gap-2.5 text-textMuted whitespace-nowrap"
            >
              <t.Icon className="text-base opacity-70" />
              <span className="text-sm font-medium tracking-wide">{t.label}</span>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
