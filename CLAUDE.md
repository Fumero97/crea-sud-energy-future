# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (Vite, localhost:5173)
npm run build      # production build
npm run lint       # ESLint
npm run test       # run tests once (Vitest)
npm run test:watch # watch mode
npm run preview    # preview production build
```

## Architecture

This is a multi-page React site for the **CREA-SUD** PNRR research project (reversible fuel cells / hydrogen energy). Built with Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui.

**Routing** (`src/App.tsx`): React Router v6 with routes for `/`, `/progetto`, `/obiettivi`, `/obiettivi/:id`, `/pubblicazioni`, `/contatti`. Each route maps to a page component in `src/pages/`.

**Layout pattern**: every page wraps its content in `<Layout>` (`src/components/Layout.tsx`), which composes `<Navbar>` + `<main>` + `<Footer>`. Pages are responsible for importing and using Layout themselves.

**Styling**: light theme only, no dark mode. Two custom brand colors defined as CSS variables — `--flame` (orange, mapped to `primary`) and `--aqua` (blue, mapped to `secondary`). Two fonts: Merriweather (serif, used for headings via `font-serif`) and Source Sans 3 (sans, body). The utility class `section-padding` is defined in `index.css` for consistent vertical spacing.

**UI components**: shadcn/ui components live in `src/components/ui/` — treat these as library code, avoid editing them directly. Custom components go in `src/components/`.

**Path alias**: `@/` maps to `src/`.

**Content language**: Italian — all user-facing text is in Italian.
