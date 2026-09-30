# Guildframe website

Reviewed: 2026-09-30

Static Next.js website for direct-customer Kickstarter and Gamefound campaign design.

Campaign design is $975 USD. A free opening section mockup is requested through the existing Formspree endpoint. Public contact is umair@guildframe.com. Formspree controls the recipient inbox; source code does not configure or verify that external setting.

Playful Precision identity: cream, coral, petrol and mint; Manrope typography; an ImageGen logo and six ImageGen game visuals. Images are original illustrative concepts, not client campaigns. See docs/CAMPAIGN_REBRAND.md for the visual brief, asset provenance and content map.

46 public routes: 7 new campaign service/category pages, 8 new launch articles, and the 31 existing routes retained with revised branding and commercial links. Former paid-guide and Shopify build promotions have been retired. Existing Shopify guidance remains after-funding editorial material.

## Development and validation

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
NEXT_PUBLIC_SITE_URL=https://guildframe.com npm run preflight:strict
```

`npm test` verifies the actual static export. `npm run build:pages` is the existing production build, exported to out/ and deployed by Cloudflare Pages from GitHub main. No GitHub Actions deployment is used.

## Copy and claims

Use direct, natural language. Do not publish invented clients, reviews, funding results or turnaround guarantees. Pricing, scope, schema, metadata and llms.txt must agree. Keep a unique canonical, title and description for each indexable page. Cite primary documentation for platform facts. Generated sample imagery must remain labelled as concepts.

## Motion and access

Motion uses transform and opacity with one-time scroll reveals and brief hover/press feedback. Content is readable before JavaScript. Reduced motion disables movement. Glass panels have reduced-transparency and increased-contrast fallbacks. Mobile inputs use 16px text to prevent focus zoom.
