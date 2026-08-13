# Contributing

## Before editing

1. Create a branch from `main`.
2. Run `npm install` when dependencies changed.
3. Copy `.env.example` to `.env.local` for local production-equivalent checks.

## Development

```bash
npm run dev
```

Public routes live under `app/`. Shared SEO page structures are in
`app/components/`, and reusable solution-page copy is in
`app/landing-content.ts`.

## Required checks

```bash
npm run lint
npm run typecheck
npm test
```

`npm test` creates and verifies the same static output shape used by Cloudflare
Pages. Do not add a GitHub Actions workflow for deployment. Cloudflare Pages
builds directly from the connected repository.

## Adding an article

1. Check `docs/SEARCH_INTENT_MAP.md` first. If an existing page already owns the
   intent, expand that page instead of adding one.
2. Add `app/guides/<slug>/page.tsx` using `SeoArticlePage`, or
   `app/resources/<slug>/page.tsx` for a reference.
3. Add the date to `app/content-dates.ts` and read both `published` and
   `updated` from it. Never write a date as a string literal in a page.
4. Add its metadata with a canonical path and a description between 90 and 160
   characters.
5. Add it to `app/guides/page.tsx` or `app/resources/page.tsx`.
6. Add the route to `app/sitemap.ts`, `public/llms.txt` and
   `docs/SEARCH_INTENT_MAP.md`.
7. Add the route to the page list and the date map in
   `tests/static-output.test.mjs`.
8. Add contextual internal links from the pages whose readers need it.

The test suite fails if any of these is missed, which is the point.

## Adding a solution page

1. Add the content object to `app/landing-content.ts`.
2. Add `app/<slug>/page.tsx` using `SeoLandingPage`.
3. Add it to the sitemap, content dates, `llms.txt`, the intent map, navigation
   where useful, and the static output test.

## Copy

- No em dash, no en dash and no visible hyphenated compound in rendered copy. A
  test enforces this across source and output.
- Keep tabletop vocabulary. Avoid Shopify and developer vocabulary in
  customer facing copy: readers are game creators, not developers.
- No invented customers, testimonials, reviews, ratings or results.
- Prices come from `app/site-config.ts` and `app/product-data.ts`. Never hardcode
  one in a page.

## Media

- Put optimized public assets under `public/images/`.
- Prefer JPEG for photographic imagery and PNG only when transparency is needed.
- Include useful alt text, plus `width` and `height`, on every image.
- Lazy load anything below the fold. Only the hero should be eager.
- Do not commit unused source exports or generated build directories. A test
  fails if an unreferenced image ships in `out/`.
