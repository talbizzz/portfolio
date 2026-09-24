# Milestone 3: Full Roadmap — All Locations & Environments

## Goal

Deliver the complete 3D career roadmap — all current milestones (education, both projects, current role, contact) represented as visually distinct, fully populated locations on the hub map.

## Context

Milestone 2 proved the core mechanic (character select, movement, camera, proximity, overlay) on a single prototype node. This milestone reuses that mechanic and scales it to the full set of real milestones from Aziz's career, drawing on the content already defined in Milestone 1's `content/*.ts` files (extend them here if additional detail is needed for node framing). Each location must look genuinely different from the others — different terrain/environment, not a reskinned repeat — per the project's explicit requirement to differentiate from "one repeated scene reused with different labels."

## Scope

### In Scope

- Build 4 additional environment components (education, project 1, project 2, current role), alongside the existing prototype environment from Milestone 2, each with a distinct terrain/theme. Exact themes are the executing agent's creative call, constrained only by "must look distinct from the others" (e.g., education could read as a campus/library setting, current role as an office/workspace setting, each project themed around its own subject matter).
- Source/curate additional free CC0 low-poly asset packs as needed for each new environment's visual identity.
- Extend `content/nodes.ts` to a complete `RoadmapNode[]` array covering all 5 locations, each pointing at real content via `contentRef`.
- Place all 5 node markers across the hub map with sensible spacing so environments don't visually overlap — reachable in any order (non-sequential, per the project's requirements).
- Extend `NodeOverlay` to correctly render each `RoadmapNodeType`'s content shape (project write-up, experience entry, education entry, contact info).
- Run an asset compression pass (Draco/gltf-transform) on all newly added models/textures, establishing the pipeline future additions will reuse.

### Out of Scope

- Mobile controls / smart-default detection (Milestone 4).
- Dedicated performance tuning and cross-device QA across the whole scene (Milestone 5) — basic compression happens here, but a full performance pass is later.
- Any additional projects beyond the 2 that currently exist.

## Technical Specification

### Components to Build

- `components/roadmap/environments/EducationEnvironment.tsx`, `ProjectOneEnvironment.tsx`, `ProjectTwoEnvironment.tsx`, `CurrentRoleEnvironment.tsx` (use real project names/slugs where natural) — each a self-contained R3F component with its own terrain, scenery, and node marker, following the structural pattern of Milestone 2's prototype environment.
- Update `RoadmapCanvas` to render all 5 environments positioned across a shared hub map space, rather than the single environment from Milestone 2.
- Extend `NodeOverlay`'s content rendering to branch on `RoadmapNodeType` ('education' | 'project' | 'experience' | 'contact'), since each content shape displays differently (a project has tech stack/links, an education entry has institution/degree/dates, etc.).

### Data Model Changes

`content/nodes.ts` becomes a full array of 5 entries, e.g.:

```ts
export const nodes: RoadmapNode[] = [
  { id: 'education', type: 'education', title: 'Education', position: [-10, 0, 0], environment: 'education', contentRef: 'education' },
  { id: '<project-one-slug>', type: 'project', title: '<Project 1 Name>', position: [-5, 0, -8], environment: 'project-one', contentRef: '<project-one-slug>' },
  { id: '<project-two-slug>', type: 'project', title: '<Project 2 Name>', position: [5, 0, -8], environment: 'project-two', contentRef: '<project-two-slug>' },
  { id: 'current-role', type: 'experience', title: '<Current Company>', position: [10, 0, 0], environment: 'current-role', contentRef: 'current-role' },
  { id: 'contact', type: 'contact', title: 'Contact', position: [0, 0, 8], environment: 'contact', contentRef: 'contact' },
];
```

Positions are illustrative — actual layout is the executing agent's call, spaced so environments don't visually overlap.

### API Contracts

Not applicable.

### Environment & Configuration

No new environment variables. If an asset optimization CLI (e.g. `gltf-transform`) is added as a dev dependency, document the compression command as a `package.json` script (e.g. `compress-assets`) so it's repeatable for future content additions.

## Implementation Order

1. Decide the 4 remaining environment themes and identify/download matching CC0 asset packs.
2. Build one new environment at a time, verifying each renders correctly and looks visually distinct from the others as it's added.
3. Update `content/nodes.ts` incrementally as each environment is built.
4. Update `RoadmapCanvas`'s spatial layout once 2–3 environments exist, to validate spacing/scale early rather than at the end.
5. Extend `NodeOverlay`'s per-type rendering once multiple content shapes exist to test against.
6. Run the compression pass on all assets once the full set is in place.
7. Full playtest: enter the map, visit all 5 nodes in a non-sequential order, verify every overlay shows correct real content.

## Done Criteria

- [ ] All 5 locations exist on the map with visually distinct environments — reviewed side-by-side to confirm none reads as a reskin of another.
- [ ] All 5 nodes are reachable in any order, with no progression gating.
- [ ] Each node's overlay shows correct, real content matching its type.
- [ ] `content/nodes.ts` contains exactly 5 well-formed `RoadmapNode` entries.
- [ ] All new 3D assets have been run through the compression pipeline.
- [ ] Full playtest completed on the live Cloudflare Pages deployment.

## Known Risks & Watch-Outs

- Visual distinctiveness is subjective — get a second opinion (even informal) on whether the 5 environments actually read as different before considering this milestone done.
- Watch total scene payload size as environments accumulate — if load time balloons, consider loading environments on-demand (only the active/nearby one) rather than all 5 at once, instead of waiting until Milestone 5 to discover a performance problem.
- Asset pack licensing must be verified per pack for each new pack introduced.
