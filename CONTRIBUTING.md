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

1. Add `app/guides/<slug>/page.tsx` using `SeoArticlePage`.
2. Add its metadata with a canonical path and publication dates.
3. Add it to `app/guides/page.tsx`.
4. Add the route to `app/sitemap.ts`.
5. Add the route to `tests/static-output.test.mjs`.
6. Add relevant internal links from existing solution pages or guides.

## Adding a solution page

1. Add the content object to `app/landing-content.ts`.
2. Add `app/<slug>/page.tsx` using `SeoLandingPage`.
3. Add it to the sitemap, navigation where useful, and the static output test.

## Media

- Put optimized public assets under `public/images/`.
- Prefer JPEG for photographic imagery and PNG only when transparency is needed.
- Include useful alt text for informative images.
- Do not commit unused source exports or generated build directories.
