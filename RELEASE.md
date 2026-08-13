# Release runbook

Everything you need to pick this repository up cold and push it live.

Nothing in the current working tree has been staged or committed. `HEAD` is
`d9b6143` on `main`.

---

## What is uncommitted right now

The site has been repositioned from a Shopify theme, which was never built, to
the **$79 Guildframe Build Guide**. Offers now are:

| Offer | Price |
| --- | --- |
| Done for you Shopify store, up to 50 product SKUs | $2,500 |
| Guildframe Build Guide, checkout not open yet | $79 one time |
| Care Plan, after a build | $99 per month |
| Free store preview within 72 hours | Free |

Two routes were added, taking the site to 31: a free guide at
`/guides/build-a-tabletop-shopify-store-with-ai` and a reference at
`/resources/tabletop-shopify-metafield-schema`.

Twenty stale files were deleted: 18 unreferenced images totalling about 6 MB,
and two superseded documents. They will show as deletions in `git status`.

Full current state is in `docs/RELEASE_AUDIT.md`. What is still outstanding is
in `docs/OPEN_ACTIONS.md`.

---

## Step 1. Validate

Do not commit if any of these fail.

```bash
cd "/Users/umair/Documents/Guildframe website" && npm run lint && npm run typecheck && npm test && npm run preflight
```

Expected: lint silent, typecheck silent, `# pass 132` and `# fail 0`, and
preflight listing `NEXT_PUBLIC_SITE_URL is not set` plus three warnings. Those
are expected locally and do not block a commit.

## Step 2. Look at the site

```bash
cd "/Users/umair/Documents/Guildframe website" && npm run dev
```

Open `http://localhost:3000`. Worth checking: the homepage pricing block and the
`#build-it-yourself` section, `/buy`, and the two new pages.

If a CSS change ever appears to do nothing locally, the Next cache is stale.
Stop the server, `rm -rf .next`, and start it again. Restarting alone is not
enough.

## Step 3. Review the diff

```bash
cd "/Users/umair/Documents/Guildframe website" && git status --short && git diff --check && git diff --stat
```

`output/` and `outreach/` are private working folders. They must stay untracked.

## Step 4. Stage

Explicit paths only. **Never `git add .` or `git add -A`**, because either would
stage `output/` and `outreach/`.

```bash
cd "/Users/umair/Documents/Guildframe website" && git add -A -- app public scripts tests docs README.md CONTRIBUTING.md RELEASE.md
```

`-A` is safe here because every path is named explicitly, and it picks up the
file deletions as well as the edits.

## Step 5. Confirm what is staged

```bash
cd "/Users/umair/Documents/Guildframe website" && git status --short
```

`output/` and `outreach/` must still show `??`. If either shows as staged, stop:

```bash
cd "/Users/umair/Documents/Guildframe website" && git restore --staged output outreach
```

Then read the staged diff:

```bash
cd "/Users/umair/Documents/Guildframe website" && git diff --cached
```

## Step 6. Commit

```bash
cd "/Users/umair/Documents/Guildframe website" && git commit -m "Replace the theme offer with the Guildframe Build Guide"
```

Fuller message if you prefer:

```bash
cd "/Users/umair/Documents/Guildframe website" && git commit -m "Replace the theme offer with the Guildframe Build Guide" -m "Retire the unbuilt theme and sell a build guide for creators using AI coding tools. Adds a free AI build guide and a tabletop metafield schema reference. Fixes date integrity across the trust pages, connects the structured data graph, adds Dataset markup, keeps static export payload files out of the search index, and removes 6 MB of unreferenced assets. Test suite 68 to 132 checks."
```

## Step 7. Push

Pull with rebase only after the commit exists.

```bash
cd "/Users/umair/Documents/Guildframe website" && git pull --rebase origin main
```

**Pushing to `main` triggers a Cloudflare Pages production build and publishes
the site.**

```bash
cd "/Users/umair/Documents/Guildframe website" && git push origin main
```

## Step 8. Confirm

```bash
cd "/Users/umair/Documents/Guildframe website" && git status --short && git log -1 --stat
```

Expected: a clean tree apart from `output/` and `outreach/`, and your commit at
`HEAD`.

---

## The deploy will fail until you set one value

Cloudflare Pages runs `npm run build:pages`, which calls `preflight --strict`.
That **refuses to build** while `NEXT_PUBLIC_SITE_URL` is unset.

Set it to `https://guildframe.com` for Production and Preview in the Cloudflare
Pages dashboard before pushing, or expect the first build to fail. Steps are in
`CLOUDFLARE_PAGES_DEPLOY.md`.

## Check by hand once live

1. `/robots.txt` shows `Disallow: /*.txt$` and `Allow: /llms.txt`.
2. `/llms.txt` lists all 31 routes and states that Guildframe does not sell a
   theme.
3. `/buy` shows the $79 build guide and `Secure checkout link pending`.
4. The two new routes resolve and appear in `/sitemap.xml`.
5. No page mentions $349, Rune Single or Saga Studio.
6. `/resources/kickstarter-tabletop-games-benchmark` validates as a `Dataset` in
   a structured data testing tool.

## Before you sell the guide

`/buy` advertises a product that does not exist yet. `docs/BUILD_GUIDE_SPEC.md`
is the outline to write against, and `docs/OPEN_ACTIONS.md` item 2 lists what
has to happen before checkout opens.
