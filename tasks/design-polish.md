# Task: Design Polish — Make It Feel Comfy

## Context
The site is functionally complete (Phases 0–5) but visually flat. It looks like a standard developer starter template painted amber. The "comfy" brand identity isn't coming through — we need visual warmth, playfulness, depth, and whimsy. This task covers all design improvements across the entire site.

## Status: Done

## Acceptance Criteria
- [x] Warm shadows everywhere (replace all `rgba(0,0,0,...)` with brown-tinted `rgba(84,67,35,...)`)
- [x] Bouncy hover transitions on cards (spring easing, slight rotation/tilt)
- [x] Nav upgraded: glass blur effect, pill-shaped active states, warmer feel
- [x] Hero section: text shadow on title for 3D pop, rounder CTA buttons
- [x] Section transitions: rounded "islands" instead of harsh horizontal zebra stripes
- [x] Footer: wave or organic shape separator, less harsh dark-to-light transition
- [x] Card border-radius increased (24px+) for softer, bubbly feel
- [x] Tags: bright backgrounds (white/brand overlay) instead of grey-tinted
- [x] Featured project cards: offset shadow treatment instead of gradient
- [x] About page: avatar with warm offset shadow, timeline hover animations
- [x] New design tokens: shadow scale, bouncy transitions, z-index scale, focus outlines
- [x] Consistent max-width strategy across pages (normalize container jumps)

## Files Likely Touched
- `src/styles/_tokens.scss` — add shadow tokens, spring transition, z-index
- `src/styles/globals.scss` — global shadow/transition updates
- `src/app/page.module.scss` — hero, section islands, card styles
- `src/app/projects/page.module.scss` — featured card treatment, shadows
- `src/app/about/page.module.scss` — avatar, timeline animations
- `src/app/blog/page.module.scss` — section styling
- `src/components/Nav/Nav.module.scss` — glass effect, pill active states
- `src/components/Footer/Footer.module.scss` — wave separator
- `src/components/PostCard/PostCard.module.scss` — warm shadows, bright tags

## Don't Do
- Don't change the brand colors (keep #FFB927, #FFAD15, #FFDF65)
- Don't change fonts (Bubblegum Sans + Open Sans stay)
- Don't add new dependencies
- Don't restructure components or page layouts — only CSS/SCSS changes
- Don't add dark mode (that's a separate task)