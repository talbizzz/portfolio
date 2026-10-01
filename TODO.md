# TODO — Aziz's Portfolio

## Milestone 1: Foundation, Content Layer & Classic Version (Live)

> ✅ Completed. Classic site live at aziztalbi.com (Cloudflare Workers static assets, deployed from github.com/talbizzz/portfolio, auto-deploys on push to `main`). Mobile responsiveness accepted as good-enough for v1 per Aziz; a full design/accessibility pass is planned for Milestone 5.

- [x] Scaffold Next.js + TypeScript + Tailwind project
- [x] Configure static export (`next.config.ts`)
- [x] Build shared content types (`lib/types.ts`)
- [x] Build content data files with real content
- [x] Build all classic pages with real content
- [x] Add resume download & contact links
- [x] Push repo to GitHub (github.com/talbizzz/portfolio)
- [x] Connect Cloudflare Pages to the GitHub repo
- [x] Attach aziztalbi.com custom domain in Cloudflare

## Milestone 2: 3D Core Mechanics — First Playable Node

> ⚠️ Reverted 2026-10-01 — mechanic worked, visuals didn't clear the bar. All 3D code removed from the repo (recoverable from `dev` branch git history). See the note at the top of Milestone-2-3D-Core-Mechanics.md. To be redone from scratch.

- [ ] Set up R3F Canvas & /roadmap route
- [ ] Build character selection screen
- [ ] Implement desktop movement & camera controls
- [ ] Build one prototype environment + node
- [ ] Wire proximity detection & content overlay
- [ ] Add persistent VersionToggle
- [ ] Add WebGL-unsupported fallback

## Milestone 3: Full Roadmap — All Locations & Environments

> ⚠️ Reverted 2026-10-01 along with Milestone 2 — see the note at the top of Milestone-3-Full-Roadmap.md. `content/nodes.ts` is back to an empty array. To be redone from scratch.

- [ ] Curate real assets or decide on an art direction for 5 locations
- [ ] Build all 5 distinct environments
- [ ] Populate full node list with real content
- [ ] Extend overlay to handle all content types
- [ ] Full playtest of all 5 locations

## Milestone 4: Mobile Detection & Touch Controls

- [ ] Build device capability detection hook
- [ ] Add mobile/coarse-pointer opt-in interstitial
- [ ] Implement tap-to-move controls
- [ ] Implement auto-follow camera
- [ ] Verify contact/resume reachable on all paths
- [ ] Test on a real mobile device

## Milestone 5: Polish, Performance, SEO & Production Hardening

- [ ] Performance pass on 3D experience
- [ ] Accessibility pass on classic version
- [ ] Add SEO metadata, sitemap, robots.txt
- [ ] Cross-browser & cross-device QA
- [ ] Final content proofread
- [ ] Final production deploy & walkthrough
