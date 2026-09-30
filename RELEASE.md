# Release runbook

Last reviewed: 2026-09-30

Use this runbook for every production release. GitHub `main` is connected
directly to Cloudflare Pages. A successful push triggers `npm run build:pages`
and publishes `out/`; there is no GitHub Actions deployment workflow.

## Current commercial facts

Campaign design: $975 USD per agreed Kickstarter or Gamefound project. Free opening section mockup. Contact: umair@guildframe.com. Exact deliverables and timing are confirmed in the brief. Existing after-funding articles remain editorial references.

## 1. Confirm the release scope

Start from the repository root and inspect the full working tree:

```bash
cd "/Users/umair/Documents/Guildframe website"
git status --short
git diff --check
git diff --stat
```

`output/` and `outreach/` are private local working folders. They must remain
untracked and must not be included in a release.

## 2. Validate

Do not commit if lint, type checking or tests fail:

```bash
npm run lint
npm run typecheck
npm test
npm run preflight
```

`npm test` builds and checks the same static output shape used by Cloudflare
Pages. `npm run preflight` reads the current local shell, so missing local
values do not mean the deployed Cloudflare environment is missing them.

For a production-equivalent local build, provide the values documented in
`CLOUDFLARE_PAGES_DEPLOY.md`, then run:

```bash
npm run preflight:strict
npm run build:pages:local
```

## 3. Review locally

```bash
npm run dev
```

Open `http://localhost:3000` and review the pages affected by the diff. For any
commercial change, also check the homepage, `/buy`,
`/done-for-you-shopify-store` and the three category solution pages.

The visible offer, metadata, structured data and analytics labels must agree.
The Build Guide must remain unavailable for checkout until the guide and final
purchase URL are ready.

## 4. Stage only reviewed files

Never run `git add .` or an unscoped `git add -A` in this repository. Stage the
exact reviewed paths, then inspect the staged result:

```bash
git add -- README.md
git status --short
git diff --cached --check
git diff --cached
```

Replace the example with every exact path reviewed for the release. Confirm that
`output/` and `outreach/` still show as untracked and that no environment file,
generated output or unrelated local work is staged.

## 5. Commit and synchronize

Use an imperative message that describes the actual release:

```bash
git commit -m "<release summary>"
git pull --rebase origin main
```

If the rebase brings in remote changes, rerun the validation commands and
review the resulting diff before continuing.

## 6. Publish

Pushing `main` starts the Cloudflare Pages production deployment:

```bash
git push origin main
```

Wait for the Cloudflare build to succeed before treating the release as live.
The current Pages settings are listed in `CLOUDFLARE_PAGES_DEPLOY.md`.

## 7. Verify production

Check the deployed HTML, not only the source tree:

1. The homepage and every changed route return successfully.
2. Canonicals, Open Graph URLs, schema identifiers, the sitemap and robots file
   use `https://guildframe.com`.
3. GA4 loads and a controlled page view reaches Realtime or DebugView.
4. The homepage states the $2,500 service limit of 50 product SKUs, the $99
   monthly Care Plan after a Guildframe build and the free tailored preview
   within 72 hours.
5. `/buy` shows the $79 Build Guide with checkout not open.
6. No Guildframe page presents Guildframe as a Shopify theme. The independent
   theme comparison remains an editorial comparison of third-party options.
7. `/resources/kickstarter-tabletop-games-benchmark` still presents the 2024
   benchmark and its downloadable data.

Finish with:

```bash
git status --short
git log -1 --stat
```

If production is broken, use the Cloudflare Pages deployment history to roll
back to the previous successful deployment, then fix forward through this same
runbook.

## Before opening Build Guide checkout

The guide, its download package and the final HTTPS purchase URL must exist.
Then set `NEXT_PUBLIC_CHECKOUT_URL` and
`NEXT_PUBLIC_GUIDE_CHECKOUT_ENABLED=true`, run the full validation sequence and
verify the live checkout handoff. Until then, keep the guide checkout disabled.
