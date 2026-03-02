# Instafluff.tv — Copilot Instructions

## About This Repository

This is the source code for [instafluff.tv](https://www.instafluff.tv) — Raphael (Sung Tark) Mun's personal website, also known as Instafluff. Built with Astro, deployed to GitHub Pages.

## Current State (March 2026)

The site is a holdover from Twitch streaming days — "Welcome to the Comfy Corner" branding, Twitch embed, limited project showcase. It needs a full redesign to reflect who Raphael is now: a Principal Software Engineer at Microsoft, entrepreneur building multiple side businesses, licensed pilot, community builder, and creator — not just a Twitch streamer.

## The Redesign Vision

Transform instafluff.tv from a Twitch landing page into a **personal home base** with:
- **Blog / Devlog** — the primary content hub (building in public, project updates, thoughts)
- **Projects & Tools** — proper showcase of hundreds of open source projects, side businesses, and games
- **About** — updated bio reflecting current life (Microsoft, Prague, side businesses, flying, etc.)
- **Community** — Discord, links, ways to connect

### Design Principles
- **Keep the Instafluff brand** — warm golden/amber colors (#FFB927, #FFAD15, #FFDF65), Bubblegum Sans headers, "comfy" vibe
- **Modernize** — cleaner layout, better typography, responsive, fast
- **Blog-first** — the blog/devlog is the centerpiece, not Twitch
- **Show the full picture** — projects, businesses, games, open source, cookbook, everything
- **Remove Twitch-centricity** — no more Twitch embed as the hero, no "Coding Cafe" section. Twitch is still a link but not the identity.

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
- **Framework:** Astro 5.x
- **Styling:** SCSS
- **Deployment:** GitHub Pages via GitHub Actions (deploys from `master` branch)
- **Domain:** www.instafluff.tv (CNAME)

## Key Files
- `src/pages/` — Page routes (index, about, posts, tools)
- `src/layouts/Layout.astro` — Main layout with nav and footer
- `src/styles/global.scss` — Theme variables and global styles
- `src/components/` — Reusable components
- `src/assets/` — Images and static assets
- `public/` — Public files (CNAME, icons)
- `astro.config.mjs` — Astro configuration

## Content Guidelines
- Voice must match the Instafluff brand — warm, fun, approachable, real
- No corporate jargon or overly polished tone
- Refer to MyNotebook repo's `docs/voice-and-brand-guide.md` for full voice guide
- Blog posts should support markdown with YAML frontmatter

## Git
- Main branch: `master`
- Deploy happens automatically on push to `master`
- Use branches for larger redesign work
