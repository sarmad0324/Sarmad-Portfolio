# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Static export build → writes to out/
npm run lint     # next lint (eslint-config-next)
```

There is no test suite. The `export` npm script is obsolete — `next.config.js` sets `output: 'export'`, so `build` already produces the static `out/` directory.

## Architecture

Static-exported **Next.js 14 App Router** portfolio for "Sarmad Irfan" (sarmadirfan.com). Key consequences of `output: 'export'`:
- No server runtime. Everything must be statically generatable — no API routes, no server actions, no dynamic SSR. `images.unoptimized: true` is required (use `next/image` but it serves raw files).
- Dynamic routes need `generateStaticParams`. The only dynamic route, `src/app/case-studies/[slug]/page.tsx`, enumerates its params from `projectsData`.

Despite the README (CRA boilerplate text) mentioning Vercel, deployment is **Netlify** (`netlify.toml`, `@netlify/plugin-nextjs`).

### Single sources of truth

- **`src/lib/data.ts`** — all site content: `projectsData` (case studies, typed as `ProjectInfo`) and `links` (nav items). Adding a case study here automatically creates its static `/case-studies/[slug]` page. Adding a nav link here propagates to the navbar **and** to the `SectionName` type.
- **`src/lib/seo.ts`** — `BRAND`, `SITE_URL`, `DEFAULT_OG_IMAGE`. All metadata, JSON-LD, and links pull from here. Note the in-file rule: never use "SarmadIrfan.com" as the site name — use "Sarmad Irfan".
- **`src/lib/types.ts`** — `SectionName` is derived from `links` (`(typeof links)[number]["hash"]`), so nav hashes and the active-section type stay in sync automatically.

### Page composition

`src/app/page.tsx` is the homepage — a flat stack of section components from `src/components/` (Hero, WhenFoundersBringMeIn, Offers, CaseStudies, EngagementModels, AboutPartner, ProofSection, FinalCtaBand, Contact). Section order is defined by their order in this file. `layout.tsx` wraps everything with `Providers`, `Navbar`, `Footer`, `MobileCta`, plus Google Analytics (gtag) and JSON-LD structured-data `<Script>` tags.

### Active-section tracking

`src/containers/active-section.tsx` is a client context provider (`useActiveSectionContext`) holding the current scroll section and last-click timestamp, used to highlight the navbar. Section components mark themselves active via `react-intersection-observer` (see `src/lib/useInView.ts` / `StarWrapper` in `src/hoc/`). It is the only React context, wired in through `src/containers/providers.tsx`.

### Styling

Tailwind with `darkMode: "class"`. Custom color tokens (`bg`, `surface`, `primary`, `textPrimary`, etc. in `tailwind.config.ts`) map to **CSS variables** defined in `src/app/globals.css` — change theme colors there, not in the Tailwind config. Fonts: Inter via `next/font` plus local Geist fonts in `src/app/fonts/`.

### Notable libraries

- **3D**: `@react-three/fiber` + `@react-three/drei` — see `src/components/canvas/` (`Ball`, `Earth`) and `src/components/magicui/globe.tsx`.
- **UI/animation**: `framer-motion`, `magicui` components (`src/components/magicui/`), `swiper`, `react-awesome-reveal`, `sweetalert2`.
- **Contact form**: `Contact.jsx` posts via `@emailjs/browser` with hardcoded EmailJS service/template/public-key IDs (these are client-side public keys by design).

### Mixed JS/TS

The codebase mixes `.tsx`/`.ts` with legacy `.jsx`/`.js` files (e.g. `skills.jsx`, `lib/utils.js`, `canvas/*.jsx`). `tsconfig.json` has `allowJs: true` and explicitly lists some `.jsx`/`.js` files in `include`. Prefer TypeScript for new files. Import alias: `@/*` → `src/*`.
