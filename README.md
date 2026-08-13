# Guildframe website

Last reviewed: 2026-08-13

Static Next.js site for Guildframe: Shopify design and development for tabletop
creators, plus a build guide for creators who build the store themselves.

31 public routes covering the offers, 13 guides, 6 references and the trust
pages.

## Offers

| Offer | Price |
| --- | --- |
| Done for you Shopify store, up to 50 product SKUs | $2,500 |
| Guildframe Build Guide, checkout not open yet | $79 one time |
| Care Plan, after a Guildframe build | $99 per month |
| Free tailored store preview within 72 hours | Free |

Guildframe does not sell a Shopify theme.

## Local review

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If a CSS change appears to do nothing, stop the
server, `rm -rf .next`, and start it again.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run preflight
```

- `npm test` builds the real static output and checks metadata, structured data,
  dates, internal links, the sitemap, `llms.txt`, robots, accessibility and
  shipped assets.
- `npm run build:pages:local` writes the Cloudflare Pages output to `out/`.
- `npm run preflight` checks the settings in the current local shell.
- `npm run preflight:strict` blocks a production-equivalent build when required
  local settings are missing. A local warning does not describe the current
  Cloudflare Pages configuration.

## Deployment

Cloudflare Pages builds directly from `main`. No GitHub Actions workflow is used
or wanted.

**[RELEASE.md](./RELEASE.md) is the runbook**: validate, review, stage, commit
and push, plus what to check once the site is live.

Dashboard settings are in
[CLOUDFLARE_PAGES_DEPLOY.md](./CLOUDFLARE_PAGES_DEPLOY.md).

## Documentation

| Document | What it holds |
| --- | --- |
| [Release audit](./docs/RELEASE_AUDIT.md) | The current state of the site, technical and editorial |
| [Open actions](./docs/OPEN_ACTIONS.md) | What still needs a decision, an account or real data |
| [Page inventory](./docs/PAGE_INVENTORY.csv) | Every route with its intent, reader, schema and link counts |
| [Search intent map](./docs/SEARCH_INTENT_MAP.md) | Which page owns which query family. Authority when adding a page |
| [Keyword and SERP research](./docs/KEYWORD_AND_SERP_RESEARCH.md) | Query families, competition and gaps |
| [Build guide spec](./docs/BUILD_GUIDE_SPEC.md) | The outline for the $79 guide, which is not written yet |
| [Architecture](./docs/ARCHITECTURE.md) | How the site is built and what to update when adding a page |
| [Crawler and AI policy](./docs/CRAWLER_AND_AI_POLICY.md) | Robots rules and why each exists |
| [AI search baseline](./docs/AI_SEARCH_BASELINE.md) | Discovery setup and the fixed answer engine test set |
| [AI visibility measurement](./docs/AI_VISIBILITY_MEASUREMENT.md) | What to measure monthly, and how |
| [Entity and outreach brief](./docs/ENTITY_AND_OUTREACH_BRIEF.md) | Canonical facts and linkable assets |

## Conventions

- Dates live in `app/content-dates.ts` and nowhere else. The visible date, the
  schema date and the sitemap date must always agree, and a test enforces it.
- Prices live in `app/site-config.ts` and `app/product-data.ts`.
- Rendered copy uses no em dash, no en dash and no visible hyphenated compound.
  A test enforces it.
- Adding a page means updating the sitemap, content dates, `llms.txt`, the
  intent map and the test page list.
