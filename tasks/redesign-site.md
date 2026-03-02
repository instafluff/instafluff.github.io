# Task: Rebuild Instafluff.tv

## Goal
Rebuild instafluff.tv from the ground up with Next.js — transforming it from a Twitch-era landing page into a modern personal home base (portfolio, blog, projects) that will eventually grow into comfy.network.

## Status: Not Started

## Context
- Current site is Astro 5.x, very Twitch-focused (Twitch embed, "Coding Cafe", limited projects)
- Replacing it entirely with a Next.js App Router site using static export
- Deployed to GitHub Pages (same as before)
- Architecture should be future-proofed for comfy.network (auth, social features, API server)
- Old blog posts from 2018-2021 in the legacy Gatsby repo (D:\GitHub\Website) can be dropped

## Phases

### Phase 0: Next.js Bootstrap
- [ ] Initialize Next.js project with TypeScript and App Router
- [ ] Configure `output: 'export'` for static generation
- [ ] Set up GitHub Actions to build and deploy to GitHub Pages
- [ ] Set up CSS/SCSS modules with brand design tokens (colors, fonts)
- [ ] Import Bubblegum Sans + Open Sans fonts
- [ ] Create root layout with basic nav shell and footer
- [ ] Verify the CNAME (www.instafluff.tv) works with the new build
- [ ] Ensure develop → master merge flow works with deploy

### Phase 1: Blog Foundation
- [ ] Set up MDX content pipeline (read `.mdx` files from `src/content/` at build time)
- [ ] Create blog post layout/template with proper typography
- [ ] Create blog listing page with pagination
- [ ] Add RSS feed generation (static XML at build time)
- [ ] Support tags/categories for posts
- [ ] Use `generateStaticParams()` for post routes

### Phase 2: Homepage
- [ ] New hero section — introduce Raphael/Instafluff as a builder, engineer, creator, entrepreneur
- [ ] Featured/latest blog posts section
- [ ] Featured projects section (highlight top projects + side businesses)
- [ ] Quick links to Discord, GitHub, socials
- [ ] Keep warm amber/golden color scheme and Bubblegum Sans headers

### Phase 3: Projects & Tools Page
- [ ] Projects page with categories: Open Source, Side Businesses, Games (PixelPlush), Twitch Tools, Other
- [ ] Add descriptions, links, and status for each project
- [ ] Featured/highlighted projects at the top
- [ ] Include side businesses: ComfySend, MediaOptimizer, LooThru, Approvals.to, etc.

### Phase 4: About Page
- [ ] Full bio — Microsoft Principal Engineer, Prague, entrepreneur, pilot, community builder, cookbook author
- [ ] Timeline or journey highlights
- [ ] Links to socials, Discord, GitHub sponsor
- [ ] This is the page people land on from LinkedIn/socials — make it personal and memorable

### Phase 5: Navigation & Polish
- [ ] Updated nav: Home, Blog, Projects, About
- [ ] Modernized footer with all links
- [ ] Mobile-responsive everything
- [ ] SEO meta tags, Open Graph images
- [ ] 404 page with personality

### Phase 6: Nice-to-Haves
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
