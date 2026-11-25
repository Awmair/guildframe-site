# SEO and AEO pass, 25 Nov 2026: shared brief for every agent

Umair approved this whole pass. The redesign ("launch board", petrol and coral) is live. Your job is content and on-page SEO only. Do not change layout, motion, the homepage design, analytics, the contact form or anything under `app/components/home`, `app/components/world`, `app/world/*.css` (except `app/world/pages/guides.css` if your task says so).

Read first: `docs/seo-pass-2026-11-25/gsc_baseline.md` (Google data), `bing_baseline.md`, `CONTRIBUTING.md`, `docs/SEARCH_INTENT_MAP.md`.

## Facts you may use (nothing else)

- Guildframe: independent tabletop crowdfunding launch studio for Kickstarter and Gamefound, led by Umair (founder, campaign designer, paid advertising specialist). Categories: board games, card games and TCGs, TTRPGs, miniatures, STLs, terrain, dice and accessories.
- Services: launch planning, prelaunch pages and email, campaign page design and copy, campaign creative (renders, motion, ad variants), paid advertising, live campaign management, post-campaign support, Kickstarter to Shopify and store setup (supporting offer).
- Prices (current, Nov 25 2026): campaign page package **$1,800**; full campaign support **$5,900**. Ad spend, software, platform fees and external production are separate. Free opening mockup: one opening campaign section using the creator's artwork, no payment or obligation.
- Proof: case studies ScentedRealms, FutureProof Terrain, Quiver Time, Cryptic Explorers (see `app/case-studies.ts`; take wording from there, never invent results). Ten years of campaign design before Guildframe, 252 client reviews averaging 5.0 (as on the homepage). Never mention Fiverr or link to it.
- The free launch kit is gone. Never link `/resources/tabletop-kickstarter-launch-kit`.
- Booking and enquiry: `/buy` and the page's `#start-project` section. Service hubs: `/kickstarter-launch-services`, `/kickstarter-prelaunch-marketing`, `/campaign-design`, `/gamefound-launch-services`, `/post-campaign-support`, `/kickstarter-advertising`, `/kickstarter-campaign-management`, `/campaign-creative`.

External facts (platform fees, tariffs, feature launches, event dates): check them on the primary source with WebSearch or WebFetch today, and add that source to the page's `sources` array. If you cannot verify a figure, leave it out. A live site cannot carry `[TK]`.

## Five pillars (each page links up to its hub with the hub's phrase)

1. Planning and costs: hub `/kickstarter-launch-services` ("Kickstarter launch services for tabletop games")
2. Prelaunch: hub `/kickstarter-prelaunch-marketing`
3. Campaign page: hub `/campaign-design`
4. Platforms: hub `/gamefound-launch-services`
5. After funding: hub `/post-campaign-support` (Shopify guides sit here as supporting content)

## Voice (Guildframe, using the house writing pipeline)

- Answer the searcher's question in the first two sentences (the `answer` field and the first paragraph).
- First person plural for how Guildframe works ("we check", "we build"). "You" for what the creator brings or decides. Never a run of bare commands.
- Each section opens with a framing sentence and closes on a takeaway. A list always has a lead-in sentence.
- Sentences 8 to 25 words, up to 30 when it reads easily aloud. Plain connectors: so, then, next, that's why, because.
- Specific nouns (reward tiers, pledge manager, stretch goal graphic, add-on) over category words.
- Cut: delve, leverage, utilize, streamline, robust, cutting-edge, game-changing, transformative, elevate, unlock, seamless, synergy, solutions, "in today's", "it's not X, it's Y" stacks, colon reveals, throat clearing.
- Build toward the offer: we do this for a living, the honest limit of doing it yourself, what our service includes, a fair FAQ, then the ask.
- Hard rules the test suite enforces: **no em dash, no en dash, no visible hyphenated compound** in rendered copy (write "post campaign", "first time", "fixed price"). Meta descriptions 90 to 160 characters. Titles under about 60 characters, main phrase first.
- Read every section once aloud as Umair explaining it to a creator on a call. Fix anything that sounds like a manual.

## Infographics (required on every page you touch)

Use `app/components/GuideVisual.tsx`. Data guides take a `visual` on a section (`LaunchSection.visual`), rendered right after the paragraphs. Custom pages import `GuideVisual` and pass `data` directly. Kinds: `steps`, `compare`, `bars`, `stats`, `timeline`, `split`, `checklist`. At least one per page, two for pillar pages and new pages. Every number in a visual must come from the page's sources or be clearly labelled as an illustrative example ("Example: a $40 game"). Titles state the finding, not the topic. Keep labels short.

## Every page ends with a call to action

Guide pages already end with the shared article CTA (`SeoArticlePage`). For each page you touch, make sure the `servicePath` and `serviceLabel` point to the right hub and the last section closes by pointing to it. Custom pages and landing pages must finish with a visible CTA block linking to `/buy` or the relevant service hub.

## SEO on every page you touch

- `seoTitle` with the target phrase first, under 60 characters.
- `answer` that answers the target question in one or two sentences.
- Visible updated date: set the guide's `updated` to `"2026-11-25"` (add a key to `app/content-dates.ts` only if your task owns that file; otherwise put the date string on the guide object if the type allows, or list it in your manifest).
- FAQ: 4 to 7 real creator questions (see question list in the research below), answers matching the visible text.
- Internal links: 2 or more contextual links to related guides, one to the pillar hub.

## How to work without breaking each other

- You run in your own git worktree. Commit your work there with a clear message. Do not push. Do not touch `main`.
- `npm` cannot install packages here (no network), so you cannot build. Be careful with TypeScript: match existing types exactly, keep JSON-like objects valid, close every bracket. Run `node --check` is not useful for TS; instead reread your diff. `tsc` exists globally but without project types; you may run `tsc --noEmit -p . 2>&1 | grep <your files>` and ignore "Cannot find module" errors.
- Shared registration files belong to the lead: `app/sitemap.ts`, `app/content-dates.ts`, `app/guides/page.tsx`, `app/resources/page.tsx`, `public/llms.txt`, `docs/SEARCH_INTENT_MAP.md`, `tests/static-output.test.mjs`, `app/launch-guides.ts` (the array). **Do not edit them** unless your task says so. New guides go in their own file `app/guides-new/<slug>.ts` exporting `const guide: LaunchGuide` (import the type from `../launch-guides`).
- When done, write `docs/seo-pass-2026-11-25/manifest-<your-agent-name>.md` listing: files changed, new slugs with title, seoTitle, description, category and pillar, any content-dates keys you need, guides/resources index entries, llms.txt lines, intent map lines, tests entries, and any fact you could not verify.
- Final message back: 10 lines max, what you changed and anything the lead must do.

## Research already done (use it)

Creator questions and dated hooks (24 Nov research):
- Prelaunch: how many followers before launch, follower to backer conversion, should I advertise prelaunch, day 2 go or cancel, relaunch after failure.
- Page: what a page should include, video length, design without a designer, mobile reading, paid previews, stretch goals.
- Ads: are Facebook ads worth it, daily test budget, Meta pixel, Adfound vs own ads, Adfound fees (help.gamefound.com/article/415-adfound-fees-and-billing), Kickstarter and Jellop, agency or not, scam red flags.
- Platform: Gamefound or Kickstarter for a first game, Gamefound bought Indiegogo (Jul 24 2025), late pledges, BackerKit for small RPGs.
- Costs: campaign cost, funding goal, Kickstarter fees, shipping more than the game, tariffs: Supreme Court struck down IEEPA tariffs 6 to 3 on Feb 20 2026; Section 301 tariffs at 12.5% on goods from China from Jul 24 2026; de minimis suspended since Aug 29 2025, postal rule Jul 24 2026, exemption ends by law Jul 1 2027; Kickstarter Tariff Manager Apr 28 2025. Verify each before use.
- Kickstarter features 2026: VAT flexibility (Apr 13), TTRPG and STL subcategories (May 8), official Shopify app (Jul 31, apps.shopify.com/kickstarter), backer self serve add-ons (Aug 20), dropped pledge view (Oct 13), pledging with only an email (Oct 14), editing backer orders (Oct 28). Source: start.kickstarter.com/kickstarter-release-notes.
- Events: PAX Unplugged Philadelphia Dec 4 to 6 2026; Zinetopia Feb 2 to 19 2027 (apply by Jan 4); UK Games Expo Jun 4 to 6 2027; Gen Con Aug 5 to 8 2027; SPIEL Essen Oct 21 to 24 2027.
- Competitor pricing that is public: BoostYourCampaign packages $3,499 to $6,997 (boostyourcampaign.com pricing 2026 page); Hero Time consultant list with hourly rates.
- Cyberpunk TCG passed $15M on Kickstarter (Mar 2026, updates.kickstarter.com).
