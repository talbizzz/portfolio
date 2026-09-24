# Aziz's Portfolio — Project Plan

## Technical Decisions

### Tech Stack

- **TypeScript** across the entire codebase — one type system covers the shared content model consumed by both the classic and 3D versions.
- **Next.js (App Router) + React**, built as a full **static export** (`output: 'export'`) — the project has no server-side requirements (no auth, no database, no contact form), so a pure static build is the simplest, most robust option.
- **Tailwind CSS** for the classic version's styling — fast to build a clean, consistent UI solo.
- **React Three Fiber + drei + Three.js** for the 3D career-roadmap experience — drei's helpers (camera controls, GLTF loading) reduce boilerplate given limited prior R3F experience.
- **3D assets: free/CC0 low-poly packs** (e.g., Kenney.nl, Quaternius), compressed via Draco/gltf-transform — visual distinctiveness per location comes from arrangement, lighting, and color treatment rather than custom-modeled art.
- **No backend, database, or auth** — all content (projects, experience, education, roadmap nodes) lives in versioned TypeScript data files in the repo. Adding future content is a data-file edit, not a CMS operation.
- **Contact: plain `mailto:` + social links** — no contact form, no email-sending service, no serverless functions.
- **Hosting: Cloudflare Pages**, using the domain already purchased through Cloudflare — domain and hosting live in one dashboard, with Cloudflare's CDN serving the 3D version's asset payloads globally.

### Repository Structure

Single repository, single Next.js app — no monorepo. There's one deployable static site with no separate backend service and nothing shared with another project, so multiple packages would only add tooling overhead. The classic and 3D experiences are two route trees inside the same app, sharing one content layer.

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # classic home ("/")
│   ├── about/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── experience/page.tsx
│   ├── education/page.tsx
│   ├── skills/page.tsx
│   ├── contact/page.tsx
│   └── roadmap/page.tsx        # 3D experience ("/roadmap")
├── components/
│   ├── classic/
│   ├── roadmap/
│   │   └── environments/
│   └── shared/                 # VersionToggle, Nav, etc.
├── content/                    # single source of truth
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── nodes.ts                # RoadmapNode[] data
│   └── site-config.ts
├── lib/
│   ├── types.ts
│   └── utils.ts
├── public/
│   ├── resume.pdf
│   ├── images/
│   ├── models/
│   └── textures/
├── next.config.ts              # output: 'export'
├── tailwind.config.ts
└── package.json
```

### Architecture Overview

Fully static architecture — no server runs at request time. `content/*.ts` is read at build time by both the classic routes (rendered to static HTML) and the `/roadmap` route (a client-hydrated R3F Canvas). Both share the same content layer, so there's no data to sync between versions.

Inside the 3D experience, the Canvas renders the hub map and character controller; reaching a node's position triggers a DOM-based `NodeOverlay` (not 3D-rendered UI), keeping content legible and accessible. A persistent `VersionToggle` is a plain client-side link between `/` and `/roadmap` — no shared state needed.

No backend, API, background jobs, or real-time layer. Content updates are edit → commit → push → Cloudflare Pages auto-rebuild.

**Device handling:** WebGL capability is checked first (hard fallback to classic if unsupported, no opt-in possible). Mobile/coarse-pointer devices get a **smart default to classic** with a non-blocking **opt-in** to try the 3D version. On opt-in, mobile uses **tap-to-move** (tap the ground or a node to walk there) with an **auto-follow camera** — no virtual joystick or manual touch-camera controls, since the hub map's discrete-destination shape fits point-and-click navigation naturally and this keeps mobile input scope small.

## Milestones

| # | Name | Goal | Depends On |
|---|------|------|------------|
| 1 | Foundation, Content Layer & Classic Version (Live) | Ship a fully live classic portfolio on the custom domain, backed by the shared typed content layer. | — |
| 2 | 3D Core Mechanics — First Playable Node | Prove the full 3D interaction loop (select, move, camera, proximity, overlay) end-to-end on one location. | Milestone 1 |
| 3 | Full Roadmap — All Locations & Environments | Build all 5 visually distinct locations with real content, fully data-driven. | Milestone 2 |
| 4 | Mobile Detection & Touch Controls | Add WebGL/mobile detection, smart-default + opt-in, and tap-to-move controls. | Milestone 3 |
| 5 | Polish, Performance, SEO & Production Hardening | Harden performance, accessibility, and SEO; final production deploy. | Milestones 1–4 |

## What's Out of Scope for v1

- User accounts, backend, database, payments, or any CMS beyond in-repo TypeScript data files.
- An in-page contact form or email-sending service — plain `mailto:` + social links only.
- A full manual touch control scheme (virtual joystick, drag-camera) — superseded by tap-to-move + auto-follow-camera.
- Bespoke/custom-modeled 3D art — free CC0 asset packs only.
- More than the 2 current projects — future projects are a later data-file addition.
- Analytics of any kind (Cloudflare Web Analytics is a natural future add, not v1).

## Open Technical Risks

- **R3F learning curve** — mitigated by Milestone 2 deliberately scoping down to one node before Milestone 3 scales to full content.
- **Asset variety from free packs** — finding genuinely distinct-looking CC0 packs for 5 locations may take real curation time; budget for it in Milestone 3.
- **Cloudflare Pages + Next.js static export compatibility** — should work out of the box, but verify with a real deploy early (Milestone 1), not late.
- **Tap-to-move pathing** — keep movement simple (straight-line or basic obstacle avoidance); real pathfinding/nav-mesh tooling is scope creep for a portfolio site.
- **Asset payload/performance** — compression needs to be an ongoing discipline across Milestones 2–3, not a one-time fix in Milestone 5.
- **Content readiness** — final copy/project write-ups/resume must be finalized in parallel with development; could block Milestone 1's done criteria if copy isn't ready.
