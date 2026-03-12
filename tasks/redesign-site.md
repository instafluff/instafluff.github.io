# Task: Rebuild Instafluff.tv

## Goal
Rebuild instafluff.tv from the ground up with Next.js — transforming it from a Twitch-era landing page into a modern personal home base (portfolio, blog, projects) that will eventually grow into comfy.network.

## Status: In Progress — Phases 0–5 Complete

## Context
- Current site is Astro 5.x, very Twitch-focused (Twitch embed, "Coding Cafe", limited projects)
- Replacing it entirely with a Next.js App Router site using static export
- Deployed to GitHub Pages (same as before)
- Architecture should be future-proofed for comfy.network (auth, social features, API server)
- Old blog posts from 2018-2021 in the legacy Gatsby repo (D:\GitHub\Website) can be dropped

## Phases

### Phase 0: Next.js Bootstrap ✅
- [x] Initialize Next.js project with TypeScript and App Router
- [x] Configure `output: 'export'` for static generation
- [x] Set up GitHub Actions to build and deploy to GitHub Pages
- [x] Set up CSS/SCSS modules with brand design tokens (colors, fonts)
- [x] Import Bubblegum Sans + Open Sans fonts
- [x] Create root layout with basic nav shell and footer
- [x] Verify the CNAME (www.instafluff.tv) works with the new build
- [ ] Ensure develop → master merge flow works with deploy

### Phase 1: Blog Foundation ✅
- [x] Set up MDX content pipeline (read `.mdx` files from `src/content/` at build time)
- [x] Create blog post layout/template with proper typography
- [x] Create blog listing page with tag filters
- [x] Add RSS feed generation (static XML at build time)
- [x] Support tags/categories for posts
- [x] Use `generateStaticParams()` for post routes

### Phase 2: Homepage ✅
- [x] New hero section — introduce Raphael/Instafluff as a builder, engineer, creator, entrepreneur
- [x] Featured/latest blog posts section
- [x] Featured projects section (highlight top projects + side businesses)
- [x] Quick links to Discord, GitHub, socials
- [x] Keep warm amber/golden color scheme and Bubblegum Sans headers

### Phase 3: Projects & Tools Page ✅
- [x] Projects page with categories: Open Source, Side Businesses, Games (PixelPlush), Twitch Tools, Other
- [x] Add descriptions, links, and status for each project
- [x] Featured/highlighted projects at the top
- [x] Include side businesses: ComfySend, MediaOptimizer, LooThru, Approvals.to, etc.

### Phase 4: About Page ✅
- [x] Full bio — Microsoft Principal Engineer, Prague, entrepreneur, pilot, community builder, cookbook author
- [x] Timeline or journey highlights
- [x] Links to socials, Discord, GitHub sponsor
- [x] This is the page people land on from LinkedIn/socials — make it personal and memorable

### Phase 5: Navigation & Polish ✅
- [x] Updated nav: Home, Blog, Projects, About
- [x] Modernized footer with all links (including RSS)
- [x] Mobile-responsive everything
- [x] SEO meta tags, Open Graph, Twitter cards
- [x] 404 page with personality
- [x] Active link highlighting in nav
- [x] sitemap.xml, robots.txt, favicon
- [x] Skip-to-content accessibility link

### Phase 6: Nice-to-Haves
- [ ] **Pixel Art Gallery** — `/pixel-art` page showcasing 80+ pixel art pieces from PixelArts repo (see [tasks/pixel-art-gallery.md](pixel-art-gallery.md))
- [ ] Dark mode toggle
- [ ] Newsletter signup (when platform is chosen)
- [ ] Search for blog posts
- [ ] Project filtering/search
- [ ] Devlog-specific post type

### Phase 7: Comfy Network Foundation (Future)
- [ ] Separate API server (Node/Express or similar)
- [ ] Auth system (NextAuth or custom)
- [ ] User profiles
- [ ] comfy.network domain setup
- [ ] Social features TBD

## Brand Constraints
- Keep Instafluff branding — colors (#FFB927, #FFAD15, #FFDF65), Bubblegum Sans, warm/comfy vibe
- Don't make it look corporate or sterile
- Should feel fun, personal, approachable — like the person behind it actually has personality
- This is where Raphael points people from socials — it's his public home

## Don't Do
- Don't use server-only Next.js features (must work with `output: 'export'`)
- Don't add a database or auth yet — that's comfy.network phase
- Don't import the old Gatsby blog posts
- Don't over-abstract — keep it simple, it's a personal site
