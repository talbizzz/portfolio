# Portfolio

## Summary

A personal portfolio website for Aziz, a full stack product engineer, built to support an active job search. It ships two ways to experience the same content: a classic, fast, text/image-based portfolio site for time-pressed recruiters and search engines, and an alternate "career roadmap" 3D experience — an explorable hub map (built with React Three Fiber / Three.js) where a character travels between distinct locations, each representing a career milestone (education, a project, current role, contact, etc.). The two versions are always mutually reachable via a persistent toggle. The goal is a portfolio that is fast and legible for a quick skim, but also memorable and distinctive for anyone who explores further — without ever gating essential information (contact, resume) behind gameplay.

## Problem Statement

Aziz is currently applying for full stack product engineer roles. A generic portfolio (or none at all) blends in among the many similar-looking developer portfolios recruiters and hiring engineers see. The problem isn't lack of experience or projects — he has real work to show — it's standing out and being memorable in a stack of applications, for two different audiences with different needs: recruiters who skim in seconds, and engineers/tech leads who will dig into the details if given a reason to.

## Target Users

- **Recruiters / non-technical hiring staff**: need to quickly understand who Aziz is, what he does, and how to contact him. Time-constrained, likely on mobile or a locked-down work laptop.
- **Hiring engineers / tech leads**: willing to spend more time, want to see real project depth, code quality signals, and technical judgment. More likely to appreciate (and technically evaluate) the 3D experience.
- **Aziz himself**: the site must be something he can confidently link in applications today, not a perpetual work-in-progress.

## Proposed Solution

Two entry points into the same underlying content:

1. **Classic version**: a standard, fast, SEO-friendly portfolio — About, Experience/Career, Education, Projects (starting with 2, more to be added over time), Skills, Contact, resume download. This is the default/safe path and the one most likely to be indexed and skimmed quickly.
2. **"Career roadmap" 3D version**: an explorable, non-sequential hub map built with React Three Fiber. A character (chosen by the user) can travel freely, in any order, to distinct locations on the map, each representing a milestone: education, a specific project, current role, contact, etc. Locations are visually distinct from one another (different terrain/environment per area, not one repeated scene reused with different labels) so exploring the map doesn't feel repetitive. Entering a location opens the relevant content (as an overlay/panel), without requiring the user to "complete" anything to unlock the next one — there is no progression gate.

A persistent, always-visible control lets the user switch to the classic version at any time from within the 3D experience, and key actions (viewing contact info, downloading the resume) are never locked behind gameplay.

The map/node system is data-driven (a list of {title, type, position/environment, content}) so new milestones (e.g. future projects) can be added without redesigning the scene.

## Technical Approach

- **Framework**: Next.js, TypeScript, React.
- **3D**: React Three Fiber / Three.js for the roadmap experience. Aziz has minor prior experience with R3F — not assumed to be a blocker, but a real learning curve to budget for.
- **Hosting/domain**: deployed to a custom domain (registrar/host not yet chosen — open to planning agent, Vercel is a natural fit given Next.js).
- **No hard third-party dependencies** currently known (no auth, no payments, no external data sources) — this is a static/content-driven site, not an app with user accounts.
- Open to the planning agent: exact folder/repo structure, content/CMS approach for adding future projects, character/environment asset sourcing (free low-poly asset packs vs. custom-made).

## Competitive Landscape

The most direct comparison is **Bruno Simon's portfolio** (bruno-simon.com) — a well-known, near-iconic Three.js portfolio where the user drives a car around a 3D world to explore sections. Aziz is aware of it and deliberately chose a different concept to avoid reading as a copy:

- Different core metaphor: a non-sequential "career roadmap" hub map with visually distinct locations per milestone, rather than a single open driving world.
- Different framing: explicitly tied to his identity as a *product engineer* (a roadmap/milestone structure), not a generic explorable town.
- Structural differentiator most competitors in this space lack: a persistent, always-available "switch to classic version" escape hatch, so the 3D version never becomes a barrier to essential information — the fun version is additive, not a gate.

Weakness to be honest about: "3D portfolio game" as a category is not novel, and execution quality (polish, distinct environments, performance) will matter more than the concept itself in differentiating this from other attempts in the same genre.

## Risks & Open Questions

- **Scope of visual variety**: each map location needs a genuinely distinct look (different terrain/environment, not palette-swapped reuse) to avoid feeling repetitive — this meaningfully increases 3D art/asset scope beyond a minimal single-scene hub map. Asset sourcing strategy (free asset packs, low-poly custom builds, procedural variation) is not yet decided.
- **R3F/Three.js learning curve**: Aziz has only minor prior experience. Not time-critical (see Scope), but should be planned for.
- **Mobile/touch support for the 3D version**: 3D scene navigation is hard to get right on mobile. Needs a decision — full touch controls, or default-to-classic-version on mobile/low-power devices.
- **SEO**: 3D/canvas content is not crawlable. The classic version should carry the primary SEO burden; this needs to be an explicit technical requirement, not an afterthought.
- **Content readiness**: only 2 projects and general career/education info exist today; more projects are in progress. Content needs to be finalized (copy, project write-ups, resume) alongside development.
- **Domain name**: not yet chosen.

## Scope & Constraints

- **v1 includes**: both the classic version and the 3D career-roadmap version, fully built (not a prototype), deployed live on a custom domain, populated with real current content (2 projects, career history, education, contact, resume).
- **v1 explicitly does not require**: user accounts, backend/database, payments, or any content-management backend beyond what's needed to add future projects as data.
- **Solo project**, built by Aziz.
- **Timeline**: not urgent/time-boxed — Aziz is already actively applying using his existing CV in parallel, so there is room to build both versions properly rather than rushing a cut-down v1.

## Success Criteria

- Both the classic and 3D versions are live and deployed on a custom domain.
- All current content (2 projects, experience, education, contact, resume) is present and accurate in both versions.
- The 3D version's map has at least a few visually distinct, non-repetitive locations, with a persistent, working "switch to classic version" control.
- No essential information (contact, resume) is gated behind gameplay in the 3D version.
- The site is something Aziz is confident linking directly in job applications.

## Requirements

**Functional**
- Classic version: About, Experience/Career, Education, Projects (extensible list, starting with 2), Skills, Contact, downloadable resume.
- 3D version: character selection, free-roam (non-sequential) hub map, distinct environment per location/node, click/enter-to-open content overlay per node, persistent always-visible toggle to the classic version.
- Node/location data is structured (not hardcoded per-scene) so new milestones can be added without redesigning the map.
- Contact info and resume download must be reachable without any gameplay prerequisite, from both versions.

**Non-functional**
- Classic version must be fast-loading and SEO-indexable (primary discoverability path).
- 3D version must degrade gracefully (or explicitly redirect to classic) on mobile/low-power devices if full 3D navigation isn't feasible there.
- Reasonable accessibility on the classic version at minimum (semantic HTML, keyboard navigation, alt text).
- Custom domain, production deployment (not a staging/prototype link).

## Expected Final Result

A recruiter or engineer visiting the custom domain lands on a fast, clean classic portfolio by default — they can read about Aziz, browse his projects, and get his resume/contact info within seconds. A visible option invites them into an alternate 3D experience: they pick a character and freely explore a small, visually varied "career roadmap" world, driving/walking to distinct locations representing his education, projects, current role, and contact info, opening each as they reach it, in any order they like. At any point, a persistent control lets them drop back to the classic version. Both versions are fully live, deployed, and ready to be sent out in job applications today.
