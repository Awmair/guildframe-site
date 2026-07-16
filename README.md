# Guildframe website

Launch website for Guildframe, including the homepage, solution pages, purchase
route and four tabletop ecommerce guides.

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
