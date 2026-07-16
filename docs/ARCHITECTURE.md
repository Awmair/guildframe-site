# Architecture

Guildframe is a static Next.js App Router website. It exports plain files to
`out/`, which Cloudflare Pages serves globally without a server, database or
runtime binding.

## Main surfaces

- `app/page.tsx`: interactive marketing homepage
- `app/buy/page.tsx`: stable purchase route and checkout handoff
- `app/components/SeoLandingPage.tsx`: shared solution-page structure
- `app/components/SeoArticlePage.tsx`: shared article and AEO structure
- `app/landing-content.ts`: structured solution-page content
- `app/site-config.ts`: domain, checkout, analytics and shared metadata settings
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`: search and browser files
- `public/_headers`, `public/_redirects`: Cloudflare Pages behavior
- `scripts/launch-preflight.mjs`: blocks incomplete production configuration
- `scripts/optimize-pages-output.mjs`: removes unreferenced assets from `out/`
- `tests/static-output.test.mjs`: verifies the actual deployable output

## Deployment model

GitHub stores source only. Cloudflare Pages connects directly to `main`, runs
`npm run build:pages`, and publishes `out/`. There are no GitHub Actions,
release artifacts or server functions in this design.

## Configuration

Public build-time settings are documented in `.env.example`. They are entered
in Cloudflare Pages for Production and Preview environments. Secrets should not
be added to `NEXT_PUBLIC_*` variables; these values are intentionally embedded
in the public website.

## Content growth

Articles and solution pages are file-based and share common shells. New pages
should preserve one clear H1, unique metadata, a canonical URL, structured data,
internal links, sitemap inclusion and mobile-safe layout.
