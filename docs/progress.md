# Progress

Track what's done, what's in flight, and what's next for the instafluff.tv rebuild.

*Last updated: 2026-03-02*

---

## Current State

Phases 0–5 are complete. The site is a fully functional personal home base with blog, projects, about page, and all polish. Ready for content and deploy.

**Stack:** Next.js 15 (App Router, static export) → GitHub Pages
**Vision:** Portfolio/blog now, comfy.network social platform later
**Build:** 17 static pages, zero errors

## Rebuild Phases

See [tasks/redesign-site.md](../tasks/redesign-site.md) for the full plan.

| Phase | Status | Notes |
|-------|--------|-------|
| 0. Next.js Bootstrap | **Done** | Project init, design tokens, root layout, nav, footer, GitHub Actions |
| 1. Blog Foundation | **Done** | MDX pipeline, post layout, listing, RSS, tags, 2 sample posts |
| 2. Homepage | **Done** | Hero, featured blog posts, featured projects, social links |
| 3. Projects Page | **Done** | Categories, featured section, 16 projects, status badges |
| 4. About Page | **Done** | Full bio, profile header, timeline, fun facts, connect links |
| 5. Nav & Polish | **Done** | Active links, RSS in footer, sitemap, robots.txt, favicon, SEO meta, skip-to-content |
| 6. Nice-to-haves | Not started | Dark mode, newsletter, search |
| 7. Comfy Network | Future | Auth, profiles, social features, comfy.network domain |

## What's Done

- ✅ Identified repo and current state
- ✅ Set up agents (Planner, Developer, Designer, Reviewer, Writer)
- ✅ Created redesign plan with phases
- ✅ Decided stack: Next.js static export + GitHub Pages (with future API server for comfy.network)
- ✅ Created `develop` branch for rebuild work
- ✅ **Phase 0:** Next.js 15 bootstrap, design tokens, root layout, GitHub Actions
- ✅ **Phase 1:** MDX blog pipeline with gray-matter + next-mdx-remote, blog listing with tag filters, individual post pages with prose styles, tag pages, RSS feed (/feed.xml), reading time, 2 sample blog posts
- ✅ **Phase 2:** Homepage with hero section, latest blog posts grid, featured projects cards, social connect section
- ✅ **Phase 3:** Projects page with 16 projects across 5 categories (Open Source, Side Business, Game, Twitch Tool, Other), featured section, status badges, project cards
- ✅ **Phase 4:** About page with profile header + avatar, full bio, timeline (2017–2026), fun facts, connect links grid
- ✅ **Phase 5:** Nav active link highlighting, RSS link in footer, sitemap.xml, robots.txt, favicon, enhanced SEO (Open Graph, Twitter cards), skip-to-content link

## What's Next

Phase 6: Nice-to-haves — dark mode toggle, newsletter signup, blog search, project filtering. These are optional enhancements that need design decisions.
