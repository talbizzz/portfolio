# Milestone 1: Foundation, Content Layer & Classic Version (Live)

## Goal

Ship a fully live, deployed classic portfolio on the custom domain, backed by a reusable, typed content layer that the 3D version will read from in later milestones.

## Context

This is the first milestone — nothing exists yet beyond the project plan. Build a single Next.js (App Router) + TypeScript + Tailwind CSS app from scratch, configured for full static export (`output: 'export'`), and deploy it to Cloudflare Pages using the domain already purchased through Cloudflare. All later milestones (the 3D roadmap experience) are built inside this same app and will consume the content layer (`content/*.ts`) established here — its shape must serve both the classic pages now and the 3D node overlays later, per the `RoadmapNode` type defined below. There is no backend, database, or auth anywhere in this project. Contact is `mailto:` + social links only — no contact form.

## Scope

### In Scope

- Project scaffold: Next.js (App Router) + TypeScript + Tailwind CSS, configured for static export.
- Shared content data layer: `content/projects.ts`, `content/experience.ts`, `content/education.ts`, `content/site-config.ts`, and a `content/nodes.ts` stub (an empty or single placeholder array — it's fully populated in Milestone 3, but the type must exist now).
- `lib/types.ts` with all shared TypeScript interfaces (see Data Model below).
- Classic pages, populated with real current content (Aziz's actual bio, both real projects, real experience/education history — no placeholder text):
  - `/` (home/landing)
  - `/about`
  - `/projects` and `/projects/[slug]`
  - `/experience`
  - `/education`
  - `/skills`
  - `/contact`
- Shared components: `Nav`, `Footer`.
- Resume PDF added to `/public/resume.pdf`, downloadable from the site.
- Cloudflare Pages project created, connected to the git repo, build configured for static export, custom domain attached and DNS verified.
- Basic per-page Next.js metadata (title, description) — full SEO hardening (OpenGraph, sitemap, robots.txt) is Milestone 5's job, but every page needs a correct `<title>` and meta description now.

### Out of Scope

- The `/roadmap` 3D route and any React Three Fiber code (Milestone 2).
- The `VersionToggle` component — it has nothing to link to yet. Do not add a link to `/roadmap` anywhere; it doesn't exist until Milestone 2, and a dead link would ship on the live site.
- Full SEO hardening: sitemap.xml, robots.txt, OpenGraph images (Milestone 5).
- Full accessibility audit (Milestone 5 does the dedicated pass), though pages should still use semantic HTML from the start.
- Analytics of any kind.

## Technical Specification

### Components to Build

- **RootLayout** (`app/layout.tsx`): wraps all pages — `<html lang="en">`, global Tailwind styles/fonts, `Nav`, `Footer`.
- **Nav** (`components/shared/Nav.tsx`): links to About, Projects, Experience, Education, Contact.
- **Footer** (`components/shared/Footer.tsx`): social links, copyright.
- Classic page components as needed per route (project cards, timeline entries, etc.) — structure is the executing agent's call, styled with Tailwind.

### Data Model Changes

Define in `lib/types.ts`:

```ts
export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  techStack: string[];
  links?: { label: string; url: string }[];
  image?: string;
  featured?: boolean;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  startDate: string; // "YYYY-MM"
  endDate: string | 'present';
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  resumePath: string; // "/resume.pdf"
  social: { label: string; url: string }[];
}

export type RoadmapNodeType = 'education' | 'project' | 'experience' | 'contact';

export interface RoadmapNode {
  id: string;
  type: RoadmapNodeType;
  title: string;
  position: [number, number, number];
  environment: string;
  contentRef: string; // resolves against projects.ts / experience.ts / education.ts / 'contact'
}
```

`content/projects.ts`, `content/experience.ts`, `content/education.ts`, `content/site-config.ts` export real data typed against these interfaces. `content/nodes.ts` exports `export const nodes: RoadmapNode[] = [];` (or one placeholder) for now.

### API Contracts

Not applicable — fully static site, no runtime network calls, no backend.

### Environment & Configuration

- No secrets or environment variables required.
- `next.config.ts`: set `output: 'export'` and `images: { unoptimized: true }` (required — the default Next.js image optimization server isn't available under static export).
- Cloudflare Pages project settings: build command `npm run build` (i.e. `next build`), output directory `out`, Node version pinned (e.g. via `.nvmrc` or the Pages dashboard) to a current LTS version.
- Custom domain: attach the existing Cloudflare-purchased domain to the Pages project directly in the Cloudflare dashboard (Pages project → Custom domains) — no external DNS changes needed since both live in Cloudflare.

## Implementation Order

1. Scaffold Next.js + TypeScript + Tailwind; verify local dev server runs.
2. Configure `next.config.ts` for static export; verify `next build` produces a working `out/` directory.
3. Define `lib/types.ts`.
4. Write `content/*.ts` files with real content.
5. Build `RootLayout`, `Nav`, `Footer`.
6. Build classic pages one at a time: `/`, `/about`, `/projects` + `/projects/[slug]`, `/experience`, `/education`, `/contact`.
7. Add `resume.pdf` to `/public` and wire the download link.
8. Add per-page metadata (title, description).
9. Push to git, connect the repo to Cloudflare Pages, verify the build succeeds there.
10. Attach the custom domain in Cloudflare Pages settings; verify HTTPS and correct domain resolution.
11. Full QA pass: every link works, resume downloads, contact info is correct, layout is responsive on a mobile viewport.

## Done Criteria

- [ ] `next build` succeeds with `output: 'export'` and produces a working static `out/` directory with no errors.
- [ ] All classic pages render real, accurate content — no placeholder/lorem ipsum text.
- [ ] Resume is downloadable as a real PDF.
- [ ] Contact page provides a working `mailto:` link and correct social links.
- [ ] Site is deployed and live on the custom Cloudflare domain over HTTPS.
- [ ] Every page has a distinct, correct `<title>` and meta description.
- [ ] Site is usable and responsive at mobile viewport widths.
- [ ] `lib/types.ts` defines `Project`, `ExperienceEntry`, `EducationEntry`, `SiteConfig`, `RoadmapNodeType`, and `RoadmapNode` exactly as specified above, ready for Milestone 2 to consume.

## Known Risks & Watch-Outs

- Static export requires `images.unoptimized = true` in `next.config.ts` — omitting it will break the build when using `next/image`.
- Don't assume Cloudflare Pages auto-detects the framework correctly — verify the build command and output directory (`out`) explicitly in the Pages project settings.
- If final copy for About/Projects/Experience isn't fully ready, don't block the whole milestone on "perfect" text — ship accurate, if brief, real content and iterate, since the point of this milestone is to get something live and linkable quickly.
- Do not wire any link to `/roadmap` yet — it doesn't exist until Milestone 2.
