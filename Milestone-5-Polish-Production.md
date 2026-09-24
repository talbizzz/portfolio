# Milestone 5: Polish, Performance, SEO & Production Hardening

## Goal

Take the fully-functional site from Milestones 1–4 to production-grade quality — fast, accessible, discoverable, and something Aziz is confident linking in live job applications.

## Context

By the end of Milestone 4, both the classic version and the complete, device-aware 3D roadmap are functionally complete and live on the custom domain. This milestone doesn't add new features — it hardens what exists: performance, accessibility, SEO, and cross-device/browser QA, plus a final content proofread pass.

## Scope

### In Scope

- Performance pass on the 3D experience: verify frame rate is acceptable on a mid-range device, re-run asset compression on anything added since Milestone 3, and consider on-demand loading of environments if payload size is a problem (per Milestone 3's watch-out).
- Accessibility pass on the classic version: semantic HTML structure (heading hierarchy, landmarks), full keyboard navigability (tab order, visible focus states), and alt text on every image.
- SEO hardening on the classic version: per-page Next.js metadata review, OpenGraph tags (title/description/image) for link previews, `sitemap.xml`, `robots.txt`, and verification that classic pages are crawlable. The `/roadmap` route should be excluded from the sitemap / marked noindex, since it's canvas content and isn't meant to carry SEO weight.
- Cross-device/browser QA: test classic + 3D on Chrome, Safari, and Firefox on desktop, plus at least one real iOS and one real Android device.
- Final content proofread across both versions: no placeholder text remains; all dates, titles, and links are accurate and current.
- Final production deploy and domain verification: confirm HTTPS, confirm no console errors on any page, confirm resume download and mailto links work from the live production URL.

### Out of Scope

- Any new features, environments, or content beyond what Milestones 1–4 established.
- Analytics setup (explicitly deferred during planning).

## Technical Specification

### Components to Build

None new — this milestone modifies existing components/pages for polish (metadata, alt text, focus styles) rather than building new ones.

### Data Model Changes

None.

### API Contracts

Not applicable.

### Environment & Configuration

- Add `app/sitemap.ts` and `app/robots.ts` (Next.js supports generating these under `output: 'export'`) referencing the production domain.
- Confirm the production domain is set as a constant in `content/site-config.ts`, used as the base for OpenGraph URLs and sitemap entries.

## Implementation Order

1. Run a Lighthouse audit (or equivalent) on both the classic version and `/roadmap` on the live production deployment to get a baseline.
2. Fix accessibility issues on the classic version first (alt text, heading structure, focus states).
3. Add SEO metadata, OpenGraph tags, sitemap, and robots.txt to classic pages.
4. Address any performance issues found in the 3D experience (compression, on-demand loading) per the Lighthouse/manual frame-rate check.
5. Run the cross-browser/cross-device QA pass, logging and fixing any issues found.
6. Final full-site content proofread (every page, every overlay).
7. Final deploy, then a fresh end-to-end walkthrough of the live production site as a recruiter would experience it, then again as an engineer exploring the 3D version.

## Done Criteria

- [ ] Lighthouse (or equivalent) audit on the classic version shows no major flagged issues in Performance, Accessibility, or SEO categories.
- [ ] Every image on the classic version has appropriate alt text; heading hierarchy and keyboard navigation verified manually.
- [ ] `sitemap.xml` and `robots.txt` exist and correctly reference the production domain; classic pages are crawlable, `/roadmap` is excluded/noindexed.
- [ ] Site tested and working on Chrome, Safari, Firefox (desktop) and at least one real iOS and one real Android device.
- [ ] No placeholder/lorem ipsum content remains anywhere on the live site.
- [ ] Final production walkthrough completed on the live custom domain with no console errors, broken links, or dead ends.
- [ ] Aziz has personally reviewed the live site end-to-end and confirmed he's comfortable linking it in job applications.

## Known Risks & Watch-Outs

- Don't let SEO/OpenGraph work regress the static export config — verify `next build` still succeeds after adding `sitemap.ts`/`robots.ts` under `output: 'export'`.
- Real-device testing matters most here, especially for the 3D experience's performance and the mobile opt-in flow — budget time to test on a physical phone, not just emulation.
- Resist scope creep: this milestone hardens what exists, it doesn't add anything new, even if new ideas surface during QA — capture those as future backlog items instead.
