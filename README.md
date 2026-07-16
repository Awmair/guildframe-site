# Guildframe website

Launch website for Guildframe, including the homepage, solution pages, purchase
route, four tabletop ecommerce guides, trust pages and a citable reference library.

## Local review

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm test
npm run build:pages:local
npm run preflight
```

- `npm test` verifies rendered pages, metadata, structured data, sitemap and key
  conversion routes.
- `npm run build:pages:local` creates the static Cloudflare Pages output in
  `out/`.
- `npm run preflight` reports production settings that still need to be added.
- `npm run preflight:strict` blocks a production build when the final domain,
  checkout or analytics settings are missing.

## Deployment

The production target is Cloudflare Pages connected directly to GitHub. No
GitHub Actions workflow is used or required.

Follow [CLOUDFLARE_PAGES_DEPLOY.md](./CLOUDFLARE_PAGES_DEPLOY.md) for the exact
dashboard settings and launch sequence.

## Search and answer-engine operations

- [Crawler and AI policy](./docs/CRAWLER_AND_AI_POLICY.md)
- [Search intent map](./docs/SEARCH_INTENT_MAP.md)
- [Keyword research](./docs/KEYWORD_RESEARCH_2026-07-17.md)
- [AI search baseline](./docs/AI_SEARCH_BASELINE.md)
- [Latest release audit](./docs/RELEASE_AUDIT_2026-07-17.md)

Update the per-page dates in `app/content-dates.ts` only when the corresponding
public page changes. The sitemap uses these values as truthful `lastmod` signals.
