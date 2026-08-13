# Guildframe Cloudflare Pages deployment

Last reviewed: 2026-08-13

Guildframe is a static Next.js export deployed through the existing Cloudflare
Pages Git integration. GitHub stores the source, Cloudflare builds `main`, and
GitHub Actions is not used for deployment.

## Current production configuration

| Variable | Production state | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Configured as `https://guildframe.com` | Canonicals, Open Graph URLs, sitemap entries and schema identifiers |
| `NEXT_PUBLIC_CHECKOUT_URL` | Inactive while checkout is closed | Final HTTPS payment or product URL |
| `NEXT_PUBLIC_GUIDE_CHECKOUT_ENABLED` | Effective value `false` | Keeps `/buy` in its honest checkout-pending state |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Configured | Loads the production GA4 stream |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | HTML verification token; unnecessary when Search Console uses DNS verification |

The live homepage currently confirms the production origin and GA4 loader. Do
not replace working Cloudflare values with placeholders from `.env.example`.
All `NEXT_PUBLIC_*` values are embedded in public output, so none may contain a
secret.

## Pages project settings

Verify the existing Cloudflare Pages project retains these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build:pages` |
| Build output directory | `out` |
| Root directory | `/` |
| Node version environment variable | `NODE_VERSION=22.13.0` |

Cloudflare runs `preflight --strict` through `npm run build:pages`, builds the
static site and publishes `out/`. Other branches may create preview deployments
without changing production.

The canonical origin must remain `https://guildframe.com` in both Production
and Preview build settings. Keep the Build Guide checkout disabled in both
environments until the guide, package and final purchase URL are ready.

## Local release verification

Create `.env.local` from `.env.example` only when production-equivalent local
checks are needed. Never commit `.env.local`, and use the real production values
rather than the example placeholders.

```bash
npm run lint
npm run typecheck
npm test
npm run preflight
npm run build:pages:local
```

`npm run preflight` reads values available to the current shell. A local warning
does not mean the Cloudflare production environment is unconfigured.

To test strict preflight locally, make the documented values available to the
process before running:

```bash
npm run preflight:strict
```

The deployable output is `out/`, which must not be committed.

## Release path

Use `RELEASE.md` for review, validation, scoped staging, commit and push. A push
to `main` starts the production deployment automatically. Wait for the Pages
deployment to succeed, then verify the live site before closing the release.

## Custom domain

The active production domain is `guildframe.com` over HTTPS. In the Pages
project, confirm the custom domain stays active and that the canonical origin
does not fall back to a `pages.dev` URL.

If the custom domain or DNS configuration changes:

1. Confirm HTTPS is active.
2. Confirm `NEXT_PUBLIC_SITE_URL` still matches the intended public origin.
3. Trigger a new production deployment.
4. Recheck the homepage canonical, sitemap, robots file and schema identifiers.

## GA4 and conversion verification

Production already loads GA4 through `NEXT_PUBLIC_GA_MEASUREMENT_ID`. The site
records page views, AI referrals and labelled commercial interactions. Build
Guide checkout redirect events appear only after checkout is enabled and a real
purchase URL exists.

After a release:

1. Open the live site in a private browser window.
2. Confirm a page view in GA4 Realtime or DebugView.
3. Test the free preview form and the relevant service, guide or Care Plan call
   to action.
4. When Build Guide checkout eventually opens, confirm the redirect reaches the
   intended live product and its event arrives in GA4.

Cloudflare Web Analytics may remain enabled as an independent traffic view, but
GA4 is the conversion source.

## Google Search Console

Use the existing Domain property and DNS TXT verification in Cloudflare DNS.
DNS verification avoids embedding a verification token in the site build.

After a material route or metadata release:

1. Confirm `https://guildframe.com/sitemap.xml` remains accepted.
2. Inspect the homepage and changed commercial, guide or reference routes.
3. Request indexing only after the production deployment is stable.
4. Review Page indexing, Core Web Vitals and Enhancements after recrawl.

## Final live checks

- Homepage, `/buy`, service pages, guides and references return successfully.
- Unknown URLs show the branded 404 page.
- Legacy routes redirect to current destinations.
- Canonicals, Open Graph URLs, sitemap and robots.txt use
  `https://guildframe.com`.
- GA4 loads and receives a controlled event.
- `/buy` keeps the $79 Build Guide checkout closed until the product is ready.
- The $2,500 service, 50 SKU limit, $99 monthly post-build Care Plan and free
  tailored preview within 72 hours appear consistently.
- Guildframe is not presented as a Shopify theme; third-party theme editorial
  pages remain clearly independent comparisons.
- Mobile, tablet and desktop layouts have no horizontal overflow.

If a bad release reaches production, use **Workers & Pages → Deployments** to
roll back to the prior successful deployment, then fix forward through
`RELEASE.md`.
