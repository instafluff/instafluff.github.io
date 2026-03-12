# Task: Pixel Art Gallery Page

## Context

Raphael has a large collection of pixel art and animations in `D:\GitHub\PixelArts`. These should be showcased on the site as a gallery page at `/pixel-art`. The collection includes animated pet portraits (Pixel Pups, Pixel Kittens), fun standalone pieces, community-commissioned art, stream overlay effects, game sprites, and emotes. Only web-friendly formats (GIF, PNG, MP4) should be copied — no `.aseprite` source files.

## Status: Not Started

## Acceptance Criteria

- [ ] New `/pixel-art` route with gallery page
- [ ] Non-aseprite assets copied from `D:\GitHub\PixelArts` into `public/assets/pixel-art/` organized by category subfolder
- [ ] Gallery displays images in a responsive grid (3-4 columns desktop, 2 mobile, 1 small mobile)
- [ ] Category filter buttons at the top (like blog tag filters)
- [ ] Categories: Pixel Pups, Pixel Kittens, Pixel Fun, Community Redeems, Icons & Effects, Game Sprites, Emotes
- [ ] GIF animations play on hover or auto-play (lightweight, no heavy JS)
- [ ] Clicking an image opens a lightbox/modal with the full-size image and a caption
- [ ] Each piece has a display name (derived from filename, cleaned up — e.g. "0001-ChihuahuaGirlv1.gif" → "Chihuahua Girl")
- [ ] Nav updated: Home, Blog, Projects, **Pixel Art**, About
- [ ] Page has proper SEO meta (title, description, Open Graph)
- [ ] Matches the Instafluff brand (warm amber, Bubblegum Sans headers, comfy vibe)
- [ ] Static export compatible — no server-side features

## Asset Copy Plan

Copy from `D:\GitHub\PixelArts` → `public/assets/pixel-art/` with these mappings:

| Source | Destination Folder | Include |
|--------|-------------------|---------|
| `Pixel Pups/*.gif` | `pixel-pups/` | All 38 GIFs only |
| `Pixel Kittens/*.gif` | `pixel-kittens/` | All 3 GIFs only |
| `Pixel Fun/*.gif`, `*.png` (not .aseprite) | `pixel-fun/` | Finished pieces only (GIF + PNG) |
| `Pixel Redeems/*.gif` | `community-redeems/` | All GIFs (not .aseprite) |
| `Icons/*.png` (4x versions + Preview) | `icons-effects/` | 4x PNGs and Preview PNGs for best quality |
| `Game Sprites/*.gif`, `*.png` | `game-sprites/` | GIFs and PNGs only |
| `Emotes/*.gif`, `*.png` | `emotes/` | GIFs and PNGs only |
| Root: `BongoCat.gif`, `BirdMarch.gif`, `Fluffington.gif`, `TurboCat.png`, `pedro-raccoon.gif`, `MrMeowgi-StephenBallBall.gif` | `pixel-fun/` | Merge with pixel-fun |

### Exclude Entirely
- All `.aseprite` files
- `Lessons/` — tutorial reference GIFs (not original art)
- `Palettes/` — color palette references
- `Practice/` — WIP/learning
- All `.jpg` files at root level — reference photos of real pets
- `.mp4` files (chihuahuagirl.mp4, delilah.mp4) — skip for now
- `Lessons/PedroMedeiros/` — these are someone else's tutorials

## Data Model

Create a pixel art data file (`src/lib/pixel-art.ts`) with an array of art pieces:

```ts
type PixelArt = {
  id: string;           // unique slug
  name: string;         // display name
  category: Category;
  src: string;          // path relative to public/
  thumbnail?: string;   // optional smaller version
  animated: boolean;    // true for GIFs
};
```

The gallery data can be a static array (like projects) — no need for MDX or dynamic loading.

## Files Likely Touched

- `public/assets/pixel-art/**` — all copied assets (new)
- `src/app/pixel-art/page.tsx` — gallery page (new)
- `src/app/pixel-art/page.module.scss` — gallery styles (new)
- `src/lib/pixel-art.ts` — art data and types (new)
- `src/components/Nav/Nav.tsx` — add Pixel Art nav link
- `src/components/Gallery/` — reusable gallery grid + lightbox components (new)
- `src/app/layout.tsx` — may need meta updates

## Commands

```powershell
# Copy assets (run from workspace root)
# See the asset copy plan above — use robocopy or PowerShell Copy-Item
# Exclude all .aseprite files

# After creating the page:
npm run build  # verify static export still works
```

## Design Notes

- Use the existing warm amber card style (rounded corners, brown-tinted shadows)
- Category filter pills should match the blog tag pill style
- The grid should feel like a cozy art gallery, not a sterile photo dump
- Consider a subtle parallax or stagger animation on scroll
- GIFs are small pixel art — render them at 2x-4x with `image-rendering: pixelated` so they look crisp, not blurry
- Lightbox should have a dark overlay with the amber accent color for close button

## Don't Do

- Don't include `.aseprite` source files
- Don't include the Lessons/PedroMedeiros tutorial GIFs (not original art)
- Don't include reference photos (.jpg of real dogs)
- Don't use a heavy gallery library — keep it simple with CSS grid + a small modal
- Don't use server-side features (must work with static export)
- Don't lazy-load all GIFs at once — consider pagination or "load more" if performance is an issue with 80+ animated GIFs
- Don't auto-play all GIFs simultaneously — consider showing first frame and animating on hover, or load in viewport only
