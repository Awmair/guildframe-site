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
cd "/path/to/your/guildframe-checkout"
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
There is no active Build Guide checkout.

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
git -c http.postBuffer=524288000 push origin main
```

Wait for the Cloudflare build to succeed before treating the release as live.
The current Pages settings are listed in `CLOUDFLARE_PAGES_DEPLOY.md`.

## 7. Verify production

Check the deployed HTML, not only the source tree:

1. The homepage and every changed route return successfully.
2. Canonicals, Open Graph URLs, schema identifiers, the sitemap and robots file
   use `https://guildframe.com`.
3. GA4 loads and a controlled page view reaches Realtime or DebugView.
4. The homepage and service pages state $975 USD for campaign design, with a free opening mockup.
5. Past work links to the three verified Kickstarter campaigns. Concept mockups stay labelled separately.
6. Client quotes match the verified delivery reviews and are preserved verbatim.
7. The project form uses the configured endpoint. Recipient delivery needs verification in the owner’s account.
8. The 2024 tabletop benchmark and its downloadable data remain available.

Finish with:

```bash
git status --short
git log -1 --stat
```

If production is broken, use the Cloudflare Pages deployment history to roll
back to the previous successful deployment, then fix forward through this same
runbook.
