# Task: Expand Projects Catalog

## Context
The projects page currently has 16 projects across 5 categories. This is missing dozens of tools and projects Raphael has built, especially from the Instafluff GitHub org. The "200+ projects built live on stream" claim needs to be backed up with a much more comprehensive catalog.

## Status: Done

## Acceptance Criteria
- [x] Research and add all notable missing projects from github.com/instafluff
- [x] Include Comfy-series tools: ComfyKit, ComfyLights, ComfyStreamChat, ComfyAI, ComfyTypes, ComfyAnon, ComfySheets, ComfyTwitch2
- [x] Include Twitch tools: TwitchPaint, TrickOrTreatBot, InstaBot, EarlyBirdBot, ChompSquad, TwitchCardsBot, BitsToSpeech, FollowerTrain, ClippyAssistant
- [x] Include community projects: InsatfluffHQ projects, hackathon entries, community games
- [x] Include notable npm packages and libraries
- [x] Consider adding a new category "Community Project" or "Hackathon" for stream-built projects
- [x] Each project needs: name, accurate description, correct URL, category, status
- [x] Update the homepage featured projects if any new additions deserve the spotlight
- [x] Verify all project URLs are valid (GitHub repos exist, domains resolve)

## Files Likely Touched
- `src/lib/projects.ts` — main project catalog (bulk of changes)
- `src/app/page.tsx` — if featured projects change
- `src/lib/projects.ts` types — may need new categories

## Don't Do
- Don't include trivial/joke repos or empty repos
- Don't guess at descriptions — check the actual repo README or site
- Don't change the Projects page layout/design (that's the design-polish task)
- Don't add projects Raphael didn't actually build