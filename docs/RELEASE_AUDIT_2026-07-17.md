# Guildframe release audit

Audit date: 2026-07-17

## Automated release checks

- Static production build: passed
- TypeScript: passed
- ESLint: passed
- Search, schema and routing tests: 25 passed
- Public pages checked: 19
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
- Breadcrumb and FAQ data matches visible page content

## Trust and reference expansion

- AboutPage, editorial policy and ProfilePage author entities added
- Four source-backed TechArticle references added under `/resources`
- Public sitemap expanded from 11 to 19 canonical pages
- Author URLs now point to the Guildframe Editorial Team profile
- Reference pages use CSS artwork instead of two large decorative images
- Reference-page Lighthouse: 84 performance, 100 accessibility, 100 best
  practices and 100 SEO in the local static build
- New pages pass phone and tablet overflow, single-H1 and accessible-name checks
