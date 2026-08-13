# Open actions

Last reviewed: 2026-08-13

Everything here needs a decision, an account, real data, or work outside this
repository. Remove an item when it is done rather than marking it complete.

## Before Build Guide checkout can open

### 1. The build guide is offered on the site but not written

`/buy` presents the $79 Guildframe Build Guide with the checkout marked
pending. That is honest about availability, but the product does not exist yet.

What has to happen before checkout opens:

- Write the guide. The outline is in `BUILD_GUIDE_SPEC.md`.
- Run every prompt in it and record what each one got wrong. The failure notes
  are the part buyers cannot get anywhere else.
- Package it as a download: the guide, a flat prompt file and the example store.
- Create the Gumroad product and set `NEXT_PUBLIC_CHECKOUT_URL`, then set
  `NEXT_PUBLIC_GUIDE_CHECKOUT_ENABLED=true`.

Until then, keep checkout disabled and describe availability plainly.

## Operational verification

### 2. Analytics

GA4 is configured and loading on the production site. After material releases,
send a controlled page view and commercial interaction, then confirm both in
Realtime or DebugView. The measurement plan is in
`AI_VISIBILITY_MEASUREMENT.md`.

## Needs verification or real data

### 3. One cited source points at an EU acceptance environment

`app/guides/selling-miniatures-internationally-vat-ioss/page.tsx` cites a URL on
`webgate.acceptance.ec.europa.eu`. That is a pre production host: it can change,
require credentials or disappear. The URL appears in the visible source list and
in the page's citation markup, on the page that carries the site's only tax and
customs statements.

Find the published equivalent on the EU taxation and customs site, confirm it
still supports the sentence it is attached to, and replace the `href`. Do not
substitute a guessed URL.

### 4. Search volumes are unmeasured

`KEYWORD_AND_SERP_RESEARCH.md` records which pages rank for the target query
families and where the gaps are. It contains no volumes, because no keyword tool
was available and nothing was estimated.

Pull Search Console and Bing Webmaster Tools data before adding any further
page. `SEARCH_INTENT_MAP.md` already requires this.

Two specific checks once data exists:

- Eight titles run past 60 characters. Every one front loads its keyword, so
  truncation removes the brand suffix rather than meaning. Shorten only the ones
  that actually underperform on impressions and clicks.
- Watch whether any single query returns two Guildframe URLs with alternating
  positions, particularly across the board game category page and the theme
  comparison guide. Act only on evidence.

## Performance, optional

### 5. The homepage is a single large client component

`app/page.tsx` runs under `"use client"`, so copy that never changes ships as
client JavaScript because a few pieces of scroll and tab state live at the top
of the tree.

Extracting the process stepper and the scroll driven nav state into their own
client components would let the rest render as server output. Treat it as
separate, measured work rather than a quick edit: it touches the approved
animation behaviour and the existing tests do not cover it.

## Copy claims worth a conscious review

Neither is verifiable from inside this repository and both are existing business
claims, so both were left as written.

- "Guildframe is the first Shopify agency to build a tailored store preview
  within 72 hours at no cost" on the homepage. A first claim invites challenge.
  Keep evidence for it, or soften it to a claim about the offer rather than
  about priority.
- "Shopify Partner" in the footer of every page. Make sure the status stays
  current, since it appears sitewide.

## Known dead CSS variables

`app/globals.css` uses `var(--muted)` in four rules and `var(--font-display)` in
eight, and defines neither. Those declarations are inert, so the affected text
inherits charcoal and the body font. Nothing looks wrong and contrast is higher
than intended rather than lower.

Defining them would change the appearance of existing approved sections, so it
is a design decision rather than a fix. Either define them deliberately or
remove the declarations.
