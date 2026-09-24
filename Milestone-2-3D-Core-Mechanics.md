# Milestone 2: 3D Core Mechanics — First Playable Node

## Goal

Prove out the entire 3D interaction loop — character selection, movement, camera, node entry, content overlay — end-to-end for a single location, establishing the technical foundation the rest of the roadmap will scale on top of.

## Context

Milestone 1 delivered a live classic site with a typed content layer (`lib/types.ts`, `content/*.ts`) and a working Cloudflare Pages deployment pipeline. This milestone adds the first version of the `/roadmap` route and its supporting R3F scene, plus the `VersionToggle` component connecting the two versions (not built in Milestone 1, since `/roadmap` didn't exist yet). Only **one** real milestone node needs to be playable end-to-end here — building out the remaining 4 locations with fully distinct environments is Milestone 3's job. This milestone is deliberately scoped small because React Three Fiber is new technology for the developer: the goal is a working, if visually minimal, proof of the mechanic, not final art.

## Scope

### In Scope

- New `/roadmap` route (`app/roadmap/page.tsx`) rendering a full-screen R3F `<Canvas>`.
- Character selection screen shown before movement begins (DOM overlay or in-scene selection — developer's choice).
- One environment (pick the simplest node type to prototype — developer's choice) with basic ground/terrain and a single node marker.
- Desktop controls: arrow keys/WASD move the character; mouse drag/orbit controls the camera.
- Proximity detection: reaching the node's position triggers node "entry."
- `NodeOverlay` component: a DOM overlay (not 3D-rendered) shown on node entry, displaying that node's real content pulled from the shared content layer via `contentRef`, dismissible to resume exploring.
- One real entry in `content/nodes.ts` matching the `RoadmapNode` interface from Milestone 1.
- `VersionToggle` component (`components/shared/VersionToggle.tsx`), added to both the classic layout and `/roadmap`, switching between `/` and `/roadmap`.
- WebGL feature-detection stub: if WebGL is entirely unsupported, `/roadmap` shows a message and a link back to classic instead of crashing. (Full mobile/low-power policy is Milestone 4 — this milestone only needs the hard "no WebGL at all" case handled.)

### Out of Scope

- The other 4 locations / distinct environments (Milestone 3).
- Mobile smart-default detection, opt-in interstitial, and tap-to-move controls (Milestone 4) — desktop-only controls for now.
- Visual polish, lighting design, final art direction (Milestone 3/5).
- Asset compression pipeline / performance tuning (Milestone 3/5).

## Technical Specification

### Components to Build

- **RoadmapCanvas** (`components/roadmap/RoadmapCanvas.tsx`): mounts `<Canvas>` from `@react-three/fiber`, sets up lighting and camera, renders the environment + character.
- **CharacterSelect** (`components/roadmap/CharacterSelect.tsx`): pre-scene UI for picking a character model; selection held in local component state only.
- **Character** (`components/roadmap/Character.tsx`): renders the selected model, exposes position state, consumes keyboard input for movement.
- **Environment** (`components/roadmap/environments/<Name>Environment.tsx`): this milestone's single prototype environment — ground geometry, scenery, and the node marker mesh.
- **NodeOverlay** (`components/roadmap/NodeOverlay.tsx`): DOM overlay rendered as a sibling of the Canvas (positioned absolutely over it); takes a `RoadmapNode` prop, resolves `contentRef` against the content layer, renders content + a close control.
- **VersionToggle** (`components/shared/VersionToggle.tsx`): persistent link between `/` and `/roadmap`, added to `RootLayout` and to the `/roadmap` page.
- A proximity hook (e.g. `lib/useProximity.ts`): computes distance between character and node positions each frame, fires an "enter" event past a threshold.

### Data Model Changes

Populate `content/nodes.ts` with one real entry, matching the `RoadmapNode` shape from Milestone 1, e.g.:

```ts
export const nodes: RoadmapNode[] = [
  {
    id: 'contact',
    type: 'contact',
    title: 'Contact',
    position: [0, 0, 5],
    environment: 'contact',
    contentRef: 'contact',
  },
];
```

Exact `id`/`type`/`position`/`environment` values are the executing agent's call, based on which location is prototyped.

### API Contracts

Not applicable — no network calls, fully client-side state.

### Environment & Configuration

- No new environment variables.
- Any component touching `@react-three/fiber`, `@react-three/drei`, or `three` must be a client component (`'use client'`) — this code cannot run during the static build.

## Implementation Order

1. Install `@react-three/fiber`, `@react-three/drei`, `three`, and relevant type packages.
2. Build a minimal `RoadmapCanvas` (ground plane + light) and verify it renders inside `app/roadmap/page.tsx` behind a `'use client'` boundary.
3. Add `Character` with basic keyboard-driven movement (a placeholder box/capsule is fine initially).
4. Add camera controls (drei's `OrbitControls` or a custom follow-camera).
5. Add `CharacterSelect`, gating entry into the scene.
6. Add the single node marker and the proximity hook.
7. Build `NodeOverlay`, wired to `content/nodes.ts` and the relevant content file via `contentRef`.
8. Swap placeholder geometry for a real free low-poly character model and basic environment dressing.
9. Add the WebGL-unsupported fallback check at the top of `app/roadmap/page.tsx`.
10. Add `VersionToggle` to both `RootLayout` and the roadmap page; deploy and verify the full loop works on the live Cloudflare Pages URL, not just locally.

## Done Criteria

- [ ] `/roadmap` loads a 3D scene with a selectable character.
- [ ] Character moves via keyboard on desktop; camera is controllable via mouse.
- [ ] Walking to the prototyped node's position triggers an overlay showing real content from the shared content layer (not hardcoded/duplicated text).
- [ ] Overlay can be dismissed and exploration resumes.
- [ ] `VersionToggle` is visible and functional on both `/` and `/roadmap`, in both directions.
- [ ] A browser/device with no WebGL support sees a graceful message and a working link back to classic, not a crash or blank screen.
- [ ] Verified working on the live Cloudflare Pages deployment, not just local dev.

## Known Risks & Watch-Outs

- Every component touching React Three Fiber/Three.js needs `'use client'` — missing this breaks the static export build.
- If using `next/dynamic` to lazy-load the Canvas (recommended, to avoid SSR issues with Three.js), verify it still works correctly under `output: 'export'`.
- Keep the first environment intentionally simple — this milestone proves the mechanic, not the final visuals. Resist polishing before Milestone 3.
- Verify any downloaded free asset's license permits commercial/portfolio use (most CC0/Kenney/Quaternius packs do, but confirm per pack).
