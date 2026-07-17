# Guildframe release audit

Audit date: 2026-07-17

## Automated release checks

- Static production build: passed
- TypeScript: passed
- ESLint: passed
- Search, schema and routing tests: 29 passed
- Public pages checked: 23
- Mobile and tablet page checks: 38
- Horizontal overflow: none after the tablet footer correction
- H1 count: one per public page
- Broken production images: none detected
- Empty interactive names: none detected

## Lighthouse template checks

Run against the local production static export with Lighthouse mobile defaults.

| Template | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: |
| Homepage | 100 | 100 | 100 |
| Purchase page | 100 | 100 | 100 |
| Guide article | 100 | 100 | 100 |

Performance scores on the throttled local run ranged from 64 to 84. The main
remaining opportunity is responsive delivery for the image-heavy homepage.
This is recorded as a performance improvement, not an indexing blocker.

## Structured-data checks

- One consistent Guildframe Product entity and USD 419 Offer
- `InStock` preserved across the offer schema
- OnlineStore and WebSite entities connected by stable IDs
- Articles include ISO publication and modification dates
- Articles expose the visible primary sources through `citation`
- Breadcrumb, Product, Article, TechArticle and organization data matches visible content
- Obsolete FAQ rich-result markup removed while useful visible questions remain
- Article structured data names the stable author and reviewer entity

## Trust and reference expansion

- AboutPage, editorial policy and ProfilePage author entities added
- Five source-backed TechArticle references published under `/resources`
- Public sitemap expanded from 19 to 23 canonical pages
- Author URLs now point to the Guildframe Editorial Team profile
- Reference pages use CSS artwork instead of two large decorative images
- Reference-page Lighthouse: 84 performance, 100 accessibility, 100 best
  practices and 100 SEO in the local static build
- New pages pass phone and tablet overflow, single-H1 and accessible-name checks

## AI visibility and citation release

- Added a source-backed Kickstarter tabletop benchmark with transparent derived metrics
- Added a downloadable CSV containing Kickstarter's published top-ten campaign figures
- Added distinct launch-timeline, preorder and catalog-architecture guides
- Added direct definitions and accessible table captions to the four original guides
- AI referral source now persists into CTA and checkout events within the same session
- Added a monthly AI citation, referral and answer-accuracy measurement specification
- Verified the homepage at 390 by 844 and 768 by 1024 with no horizontal overflow
- Verified benchmark tables remain keyboard-focusable and horizontally scrollable on mobile
