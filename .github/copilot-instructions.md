# Instafluff.tv — Copilot Instructions

## About This Repository

This is the source code for [instafluff.tv](https://www.instafluff.tv) — Raphael (Sung Tark) Mun's personal website, also known as Instafluff. Being rebuilt with Next.js (static export), deployed to GitHub Pages.

## Current State (March 2026)

The old site is an Astro/Twitch-era landing page being replaced with a full Next.js rebuild. The new site is Raphael's **personal home base** — portfolio, blog, stories, project showcase, and the public face of everything Instafluff.

## The Vision

### Phase 1: Personal Home Base (Now)
Transform instafluff.tv into a modern portfolio and content hub:
- **Blog / Devlog** — the primary content hub (building in public, project updates, thoughts)
- **Projects & Tools** — proper showcase of hundreds of open source projects, side businesses, and games
- **About** — updated bio reflecting current life (Microsoft, Prague, side businesses, flying, etc.)
- **Community** — Discord, links, ways to connect
- **Portfolio** — the place to point people to from socials and vice-versa

### Phase 2: Comfy Network (Future)
Raphael also owns **comfy.network** — the long-term vision is to expand the site into a mini social network / community platform:
- User auth and login
- Community profiles and interactions
- Integration with existing Instafluff community (Discord, PixelPlush, etc.)
- Could become the hub connecting all Instafluff properties

The architecture should be **designed for this future** — keep the static site clean now, but structure the codebase so adding an API server, auth, and dynamic features later is natural, not a rewrite.

### Design Principles
- **Keep the Instafluff brand** — warm golden/amber colors (#FFB927, #FFAD15, #FFDF65), Bubblegum Sans headers, "comfy" vibe
- **Modernize** — cleaner layout, better typography, responsive, fast
- **Blog-first** — the blog/devlog is the centerpiece, not Twitch
- **Show the full picture** — projects, businesses, games, open source, cookbook, everything
- **Remove Twitch-centricity** — no more Twitch embed as the hero. Twitch is still a link but not the identity.
- **Future-proof** — architecture that grows into comfy.network without a rewrite

### Brand Colors
- Primary background: `#FFB927` (warm amber/golden)
- Nav/accent: `#FFAD15`
- Light section BG: `#FFDF65`
- Header text: `#544323`
- Body text: `#635028`
- Link text: `#26547C`

### Typography
- Headers: `Bubblegum Sans` (cursive) — keep this, it's core to the brand
- Body: `Open Sans` — clean and readable

## Tech Stack
- **Framework:** Next.js (React) with static export (`output: 'export'`)
- **Styling:** CSS Modules or SCSS Modules (TBD — keep it simple)
- **Content:** MDX for blog posts (markdown + React components)
- **Deployment:** GitHub Pages via GitHub Actions (static export, deploys from `master` branch)
- **Domain:** www.instafluff.tv (CNAME)
- **Future:** Separate API server for auth/social features when comfy.network phase begins

## Key Files (New Structure)
- `src/app/` — Next.js App Router pages
- `src/components/` — Reusable React components
- `src/styles/` — Global styles and theme variables
- `src/content/` — Blog posts (MDX files)
- `src/lib/` — Utility functions, content helpers
- `public/` — Static assets (CNAME, images, icons)
- `next.config.js` — Next.js configuration (static export)

## Content Guidelines
- Voice must match the Instafluff brand — warm, fun, approachable, real
- No corporate jargon or overly polished tone
- Refer to MyNotebook repo's `docs/voice-and-brand-guide.md` for full voice guide
- Blog posts are MDX with YAML frontmatter in `src/content/`

## Git
- Main branch: `master`
- Deploy happens automatically on push to `master`
- Use `develop` branch for redesign work
- Push freely — Raphael will revert if needed
