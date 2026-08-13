# Guildframe release audit

Last reviewed: 2026-08-09

This describes the site as it stands today. It is not a change log. When
something changes, update this file rather than adding a new dated one.

## Offers

| Offer | Price | Status |
| --- | --- | --- |
| Done for you Shopify store, up to 50 product SKUs | $2,500 | Live, enquiry through the site form |
| Guildframe Build Guide | $79 one time | Page published, **checkout not open**, guide not yet written |
| Care Plan, after a Guildframe build | $99 per month | Live, enquiry through the site form |
| Free store preview within 72 hours | Free | Live, enquiry through the site form |

Guildframe does not sell a Shopify theme. Nothing on the site may present the
build guide as one.

Prices are declared once in `app/site-config.ts` and `app/product-data.ts` and
flow everywhere else. The test suite asserts both the visible price and the
price in structured data, so neither can change quietly.

## Site shape

| Measure | Value |
| --- | --- |
| Canonical routes | 31 |
| Sitemap entries | 31 |
| Exported HTML pages, including 404 | 33 |
| Automated checks | 132 |
| Static export size | 13 MB |
| Files in `out/` | 352 |
| JSON-LD blocks across canonical routes | 119 |
| Distinct schema types | 23 |

Full per route detail is in `PAGE_INVENTORY.csv`.

## Structure

- **Commercial:** `/`, `/buy`, `/done-for-you-shopify-store`,
  `/kickstarter-to-shopify`, and three category pages for board games, TTRPG
  and miniatures.
- **Editorial:** `/guides` plus 13 guides.
- **Reference:** `/resources` plus 6 references, including the 2024 Kickstarter
  benchmark with a downloadable CSV and the tabletop metafield schema.
- **Trust:** `/about`, `/editorial-policy`, `/authors/guildframe`.

Every query family has exactly one primary page. Ownership is recorded in
`SEARCH_INTENT_MAP.md`, which is the authority when adding or changing a page.

## Technical state

**Metadata.** Every route has a unique title, a unique description between 90
and 160 characters, a self referencing canonical, matching `og:url`, Open Graph
and Twitter cards, and exactly one `<h1>`. No heading level is skipped. Only
the 404 route carries `noindex`.

**Structured data.** One `Organization` and one `WebSite` node in the layout.
One `Product` at `/buy#product` reused by the homepage and all three category
pages. One `Service` at `/done-for-you-shopify-store#service` reused by
`/kickstarter-to-shopify`. One author entity at
`/authors/guildframe#editorial-team` used as both `author` and `reviewedBy` on
every guide and reference. Every page level node carries a stable `@id` and
connects through `isPartOf`, `breadcrumb` and `mainEntityOfPage`. Article
citations are `CreativeWork` objects with a name and publisher. The benchmark
publishes `Dataset` and `DataDownload` markup.

**Dates.** `app/content-dates.ts` is the single source of truth. The visible
review date, the `datetime` attribute, the schema `dateModified` and the
sitemap `lastmod` are asserted to be identical on every dated page. Update that
file only when the corresponding page actually changes.

**Robots.** `/` allowed for everything, explicit allow for `OAI-SearchBot` and
`ChatGPT-User`, explicit block for training crawlers, one sitemap line, and
`Disallow: /*.txt$` with `Allow: /llms.txt` so the static export payload files
are not crawled. Policy detail in `CRAWLER_AND_AI_POLICY.md`.

**`llms.txt`** lists all 31 canonical routes plus the benchmark CSV, states that
Guildframe does not sell a theme, and states that checkout is not open. A test
fails if a route is added without updating it.

**Headers.** `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
and `X-Frame-Options` sitewide. Immutable caching on `/_next/static/*`, 30 day
caching on `/images/*`, `/brand/*`, `/data/*` and the social image.

**Redirects.** Eight legacy paths in `public/_redirects`, including `/styles`
and `/customization` which point at destinations that still exist.

**Assets.** Every image in `public/` is referenced by something that ships.
`scripts/optimize-pages-output.mjs` prunes anything unreferenced from `out/` at
build time and currently finds nothing, which is the intended steady state.

## Accessibility

Skip link on every page including 404, confirmed by keyboard to move into view
on focus with a visible focus ring. Global `:focus-visible` outline. Complete
`prefers-reduced-motion` handling. Comparison tables sit in a focusable
`role="region"` with an accessible name, a visible caption and `scope="col"`
headers. Every image carries `alt`, `width` and `height`. Form fields use
wrapping labels with a polite live region for status. Footer link targets are
21 pixels tall on a 34 pixel pitch, which meets the WCAG 2.2 target size
spacing exception.

Verified with no horizontal overflow at 390, 768 and 1440 pixels, no broken
images, and no browser console output.

## Content standards

Every guide and reference opens with a direct answer, lists the primary sources
reviewed with a truthful review date, and ends with the shared choice block.
Sources are primary: Shopify, Kickstarter, BackerKit, Gamefound, Etsy,
Google Search Central and europa.eu.

The benchmark separates figures reported by Kickstarter from ratios derived by
Guildframe, shows the calculation for each, labels the top ten total as a lower
bound, and states what the data does not measure.

No invented customers, testimonials, reviews, ratings, project results or
testing appears anywhere. No FAQ markup exists for a question the page does not
visibly ask and answer.

The rendered copy convention holds: no em dash, no en dash, no visible
hyphenated compound. A test enforces it across all source and all rendered
pages.

## Validation

Run before every push:

```bash
npm run lint && npm run typecheck && npm test && npm run preflight
```

`npm test` builds the real static output and asserts against it. Current state:
lint clean, typecheck clean, **132 of 132 checks passing**, preflight passing
with the expected launch warnings.

`npm run preflight:strict` blocks a production build until the launch values in
`OPEN_ACTIONS.md` are set. Cloudflare Pages runs it as part of
`npm run build:pages`.

## Known open items

See `OPEN_ACTIONS.md`. The two that gate a real launch are the missing
`NEXT_PUBLIC_SITE_URL` and the fact that the build guide is sold on the site but
not yet written.
