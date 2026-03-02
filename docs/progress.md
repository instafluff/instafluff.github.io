# Progress

Track what's done, what's in flight, and what's next for the instafluff.tv rebuild.

*Last updated: 2026-03-02*

---

## Current State

Next.js bootstrap is complete. The site builds and exports cleanly as static HTML with all core pages scaffolded.

**Stack:** Next.js 15 (App Router, static export) → GitHub Pages
**Vision:** Portfolio/blog now, comfy.network social platform later

## Rebuild Phases

See [tasks/redesign-site.md](../tasks/redesign-site.md) for the full plan.

| Phase | Status | Notes |
|-------|--------|-------|
| 0. Next.js Bootstrap | **Done** | Project init, design tokens, root layout, nav, footer, GitHub Actions |
| 1. Blog Foundation | Not started | MDX pipeline, post layout, listing, RSS, tags |
| 2. Homepage | Not started | Hero, featured posts, featured projects |
| 3. Projects Page | Not started | Categories, side businesses, full catalogue |
| 4. About Page | Not started | Full bio, timeline, links |
| 5. Nav & Polish | Not started | Updated nav, footer, mobile, SEO, 404 |
| 6. Nice-to-haves | Not started | Dark mode, newsletter, search |
| 7. Comfy Network | Future | Auth, profiles, social features, comfy.network domain |

## What's Done

- ✅ Identified repo and current state
- ✅ Set up agents (Planner, Developer, Designer, Reviewer, Writer)
- ✅ Created redesign plan with phases
- ✅ Decided stack: Next.js static export + GitHub Pages (with future API server for comfy.network)
- ✅ Created `develop` branch for rebuild work
- ✅ **Phase 0 complete:** Replaced Astro with Next.js 15 (App Router, static export)
  - next.config.js with `output: 'export'`
  - TypeScript configured
  - SCSS Modules with brand design tokens (_tokens.scss)
  - Google Fonts: Bubblegum Sans + Open Sans
  - Root layout with sticky Nav (responsive, mobile hamburger) and Footer
  - Pages: Home, Blog, Projects, About, 404
  - GitHub Actions workflow updated for Next.js build → GitHub Pages deploy
  - CNAME preserved (www.instafluff.tv)
  - Clean build: 7 pages, zero errors

## What's Next

Phase 1: Blog Foundation — set up MDX content pipeline, blog post layout, listing page, RSS feed, and tags.
