# Milestone 4: Mobile Detection & Touch Controls

## Goal

Make the 3D experience safe and usable (or gracefully avoided) across devices — desktop users get the full experience uninterrupted, mobile/touch users get a fast default to classic with a genuine opt-in path using tap-to-move controls, and devices without WebGL never see a broken page.

## Context

Milestone 3 delivered the complete 5-location roadmap with desktop-only controls (keyboard + mouse, from Milestone 2). This milestone adds a device-detection and alternate-input layer without changing the environments or content themselves. It implements the "smart default + opt-in" decision made during planning: mobile/coarse-pointer devices default to classic, but can opt into 3D, where movement is tap-to-move with an auto-follow camera rather than a virtual joystick — chosen because the hub map's discrete-destination shape fits point-and-click navigation naturally, keeping mobile input scope small.

## Scope

### In Scope

- Finalize WebGL capability detection at the top of `app/roadmap/page.tsx`: if WebGL is unavailable, show a message and a link to classic — no opt-in possible (Milestone 2 built a stub; this milestone finalizes it).
- Mobile/coarse-pointer detection (e.g. `matchMedia('(pointer: coarse)')` combined with a viewport-width check) run on `/roadmap` load.
- Opt-in interstitial: when the smart-default condition is met, show a lightweight screen — "This experience is built for desktop" with **Continue to classic version** (default/primary) and **Try the 3D experience anyway** (secondary).
- Tap-to-move input scheme for the mobile opt-in path: tapping the ground or a node marker moves the character in a straight line (or simple obstacle-avoiding path) to that point; the camera auto-follows the character, with no manual camera control required.
- Ensure existing desktop keyboard/mouse controls remain untouched and fully functional — the new input scheme is additive/conditional, not a replacement.
- Final verification that contact info and resume are reachable within 1–2 interactions from both the classic version and the 3D opt-in interstitial.

### Out of Scope

- Any changes to environment visuals or node content (Milestone 3 territory).
- Interstitial animation/visual polish beyond basic usability (Milestone 5).
- Support for game controllers or other non-standard input devices.

## Technical Specification

### Components to Build

- **useDeviceCapability** (`lib/useDeviceCapability.ts`): client-side hook returning `{ hasWebGL: boolean; isCoarsePointer: boolean; isSmallViewport: boolean }`, computed on mount.
- **RoadmapGate** (`components/roadmap/RoadmapGate.tsx`): top-level logic component rendered by `app/roadmap/page.tsx`. Uses `useDeviceCapability` to decide whether to render: (a) a hard "WebGL not supported" message with a classic link, (b) the opt-in interstitial, or (c) `RoadmapCanvas` directly (desktop case). Replaces the direct `RoadmapCanvas` render from Milestones 2/3.
- **MobileOptInInterstitial** (`components/roadmap/MobileOptInInterstitial.tsx`): the two-choice screen described above.
- **TapToMoveController** (`components/roadmap/TapToMoveController.tsx`, or a mode flag integrated into `Character.tsx`): handles pointer/tap events on the Canvas, raycasts to the ground plane, sets a target position for the character to walk toward each frame, and drives the camera to follow the character's position instead of using `OrbitControls`.

### Data Model Changes

None — this milestone is purely interaction/detection logic, no content or node schema changes.

### API Contracts

Not applicable.

### Environment & Configuration

No new environment variables.

## Implementation Order

1. Build `useDeviceCapability` and verify its three flags report correctly on a real phone, a real tablet, and a desktop browser — not just emulation.
2. Build `RoadmapGate` and wire it into `app/roadmap/page.tsx`.
3. Build the hard WebGL-unavailable message path first (simplest case).
4. Build `MobileOptInInterstitial` and wire both choices.
5. Build `TapToMoveController`: start with tap-to-set-target-position and straight-line movement, verify it works before adding camera follow.
6. Add camera auto-follow tied to character position in tap-to-move mode.
7. Test the full mobile opt-in path end-to-end on a real or emulated touch device: land on `/roadmap` → see interstitial → tap "try anyway" → tap around the map → reach multiple nodes → open overlays → confirm the contact node is reachable.
8. Regression-test that the desktop path is unaffected.

## Done Criteria

- [ ] A browser/device without WebGL sees a graceful fallback message and a working link to classic — verified, not assumed.
- [ ] A touch/small-viewport device landing on `/roadmap` sees the opt-in interstitial by default, with classic as the primary/default choice.
- [ ] Choosing "try anyway" on a touch device enters the 3D scene with tap-to-move working — tapping the ground or a node moves the character there, camera follows automatically.
- [ ] All 5 nodes are reachable via tap-to-move, including contact.
- [ ] Desktop keyboard/mouse controls from Milestones 2/3 are unaffected by this milestone's changes.
- [ ] Verified on at least one real mobile device (not just browser emulation) before considering this done.

## Known Risks & Watch-Outs

- Browser device emulation (Chrome DevTools) doesn't perfectly replicate real touch/WebGL performance — test on an actual phone before marking this complete.
- Raycasting from a 2D tap coordinate to a 3D ground plane requires care with camera projection math — use drei/three's built-in raycaster utilities rather than hand-rolling projection math.
- `pointer: coarse` can misreport on hybrid devices (e.g. touchscreen laptops) — treat it as a heuristic default, not a hard guarantee, which is exactly why it's paired with an opt-in rather than a hard block.
