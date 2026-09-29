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

> ✅ Completed and verified in the browser: character select, WASD/arrow movement, orbit camera, and the Contact node's proximity-triggered overlay all work end-to-end locally.

- [x] Set up R3F Canvas & /roadmap route
- [x] Build character selection screen
- [x] Implement desktop movement & camera controls
- [x] Build one prototype environment + node
- [x] Wire proximity detection & content overlay
- [x] Add persistent VersionToggle
- [x] Add WebGL-unsupported fallback

## Milestone 3: Full Roadmap — All Locations & Environments

> ✅ Completed locally and verified in the browser (all 5 zones render distinctly). Scope adjustment: used procedural primitive geometry instead of downloaded CC0 packs (see note at top of Milestone-3 file) — no asset compression step was needed as a result. Still pending: verifying on the live aziztalbi.com deployment once this is merged from `dev` to `main`.

- [x] ~~Curate CC0 asset packs for 4 remaining locations~~ (superseded — used procedural geometry instead)
- [x] Build all 4 remaining distinct environments
- [x] Populate full node list with real content
- [x] Extend overlay to handle all content types
- [x] ~~Compress all 3D assets~~ (not applicable — no downloaded assets)
- [x] Full playtest of all 5 locations (local)

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
