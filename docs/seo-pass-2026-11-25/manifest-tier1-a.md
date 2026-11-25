# Manifest: tier1-a (Tier 1 pages, Google positions 5 to 21)

Branch `wt-tier1-a`. No new slugs. Seven existing pages revised. Facts checked on primary sources on 25 Nov 2026.

## Files changed

- `app/resources/kickstarter-tabletop-games-benchmark/page.tsx` (custom page)
- `app/guides/backerkit-vs-shopify-vs-gamefound/page.tsx` (custom page)
- `app/guides/what-happens-after-kickstarter-is-funded/page.tsx` (custom page)
- `app/launch-growth-guides.ts` (referral tags guide object rewritten in place)
- `app/launch-guides-new.ts` (stretch goals and review timeline guides rewritten; `guide()` helper now accepts an optional `updated`; new `releaseNotes` source constant)
- `app/launch-guide-revisions.ts` (graphics guide section replacements plus a new `guideOverrides` map for metadata and FAQs, because its object sits in the lead owned array in `app/launch-guides.ts`; `reviseLaunchGuide` now keeps a guide's own `updated` when it is later than the shared review date. No existing guide changes date from this, checked by evaluating the compiled array.)
- `app/components/InlineLinks.tsx` (new): renders `[label](/path)` in data guide paragraphs as internal `Link`s. Only site relative paths are linked.
- `app/guides/[slug]/page.tsx`: one line, paragraphs now go through `withInlineLinks`. Other agents may touch the same line; merge by keeping the `withInlineLinks(p)` call.

## Pages, titles and pillars

| Route | seoTitle (title tag before " \| Guildframe") | H1 | Description (chars) | Category | Pillar and servicePath |
| --- | --- | --- | --- | --- | --- |
| /resources/kickstarter-tabletop-games-benchmark | Highest Funded Tabletop Kickstarters of 2024 | Highest Funded Tabletop Kickstarters of 2024: Benchmark Data | The ten highest funded tabletop Kickstarters of 2024, with funding and backers, plus Kickstarter's 6,646 launches and 80% success rate in one sourced table. (156) | Tabletop crowdfunding data | Planning and costs, links `/kickstarter-launch-services` and `/buy` |
| /guides/kickstarter-referral-tags-tracking | How to Track Kickstarter Traffic: Referral Tags and UTMs | How to Track Kickstarter Traffic with Referral Tags and UTMs | How to track Kickstarter traffic with referral tags, GA4 and Meta Pixel IDs, UTMs on your landing page, and a report that keeps clicks and pledges apart. (153) | Campaign measurement | Prelaunch (inline link to `/kickstarter-prelaunch-marketing`); servicePath `/kickstarter-advertising` |
| /guides/backerkit-vs-shopify-vs-gamefound | BackerKit vs Shopify vs Gamefound in 2026 | BackerKit vs Shopify vs Gamefound in 2026: What Each Does After Crowdfunding | BackerKit vs Shopify vs Gamefound in 2026, plus Kickstarter's own Pledge Manager: what each handles after funding, what changed this year and how to choose. (156) | Platform comparison | Platforms, closing CTA links `/gamefound-launch-services`, `/post-campaign-support`, `/buy` |
| /guides/kickstarter-campaign-graphics-mobile-readability | Kickstarter Campaign Graphics: Mobile Readability Guide | Kickstarter Campaign Graphics That Read on a Phone | Make Kickstarter campaign graphics readable on a phone: one job per graphic, labels that survive compression, and a quick image size reference. (143) | Design review | Campaign page, servicePath `/campaign-design` |
| /guides/what-happens-after-kickstarter-is-funded | What Happens After Your Kickstarter Is Funded? (unchanged) | unchanged | What happens after a Kickstarter is funded: a dated timeline for payment collection, payout, the pledge manager, production, delivery and new sales. (148) | After Kickstarter funding | After funding, closing CTA links `/post-campaign-support` and `/buy` |
| /guides/kickstarter-stretch-goals-planning | Kickstarter Stretch Goals: Card and Board Game Examples | Kickstarter Stretch Goals: Examples and a Planning Guide | Kickstarter stretch goal examples for card and board games, from card expansions to upgraded components, with unlock rules, eligible rewards and cost checks. (157) | Stretch goals | Campaign page, servicePath `/campaign-design` |
| /guides/kickstarter-review-launch-timeline | How Long Does Kickstarter Take to Approve a Project? | Kickstarter Review Time and Your Launch Timeline | Kickstarter review takes up to 3 business days, plus 3 more if changes are requested. Plan review, revisions and the manual launch with a buffer. (145) | Review & launch | Planning, servicePath `/kickstarter-launch-services` |

Infographics added: benchmark 2 (funding bars, pledged per backer bars); referral 3 (steps, compare, bars); BackerKit 2 (2026 compare, 2026 Pledge Manager timeline); graphics 2 (stats, steps); after funding 2 (dated timeline, 2026 feature checklist); stretch goals 2 (card game unlock timeline, stretch goal vs add on compare); review 1 (review timeline). FAQs: 5, 6, 7, 5, 6, 6, 6.

The graphics guide now targets mobile readability. Image size intent moves to the new `/guides/kickstarter-image-sizes` (linked from the first section, related guides and the stats visual). It keeps a short size section and the 700 pixels and 50 MB copy the test asserts.

## Lead actions

### content-dates keys (`app/content-dates.ts`)

Set to `"2026-11-25"`: `kickstarterTabletopBenchmark`, `backerkitVsShopifyVsGamefound`, `whatHappensAfterKickstarter`. The four data guides carry `updated: "2026-11-25"` on the guide object and flow into the sitemap through `g.updated`.

### tests/static-output.test.mjs

Page list entries to update:
- `/resources/kickstarter-tabletop-games-benchmark`: title `Highest Funded Tabletop Kickstarters of 2024 | Guildframe`, phrase `6,646` still valid
- `/guides/kickstarter-referral-tags-tracking`: title `How to Track Kickstarter Traffic: Referral Tags and UTMs | Guildframe`, phrase `How to Track Kickstarter Traffic`
- `/guides/backerkit-vs-shopify-vs-gamefound`: title `BackerKit vs Shopify vs Gamefound in 2026 | Guildframe`, phrase `BackerKit vs Shopify vs Gamefound` still valid
- `/guides/kickstarter-campaign-graphics-mobile-readability`: title `Kickstarter Campaign Graphics: Mobile Readability Guide | Guildframe`, phrase `Kickstarter Campaign Graphics That Read on a Phone`
- `/guides/kickstarter-stretch-goals-planning`: title `Kickstarter Stretch Goals: Card and Board Game Examples | Guildframe`, phrase `Kickstarter Stretch Goals` still valid
- `/guides/kickstarter-review-launch-timeline`: title `How Long Does Kickstarter Take to Approve a Project? | Guildframe`, phrase `Kickstarter Review Time`
- `/guides/what-happens-after-kickstarter-is-funded`: unchanged

`datedPages`: set all seven routes above to `2026-11-25` (after the existing loops, which currently force guides to 10-28, 11-05 or 11-06).

### Index entries

- `app/resources/page.tsx` benchmark card: title `Highest Funded Tabletop Kickstarters of 2024`, copy `The ten highest funded tabletop campaigns of 2024 with Kickstarter's category totals, our calculations and a CSV.`
- `app/guides/page.tsx` BackerKit card: title `BackerKit vs Shopify vs Gamefound in 2026`, copy `Compare BackerKit, Gamefound, Shopify and Kickstarter's own Pledge Manager after funding.`
- `app/guides/page.tsx` after funding card: copy `A dated timeline for payment collection, payout, the pledge manager, production and new sales.`

### public/llms.txt

- `- [Highest Funded Tabletop Kickstarters of 2024](https://guildframe.com/resources/kickstarter-tabletop-games-benchmark)`
- `- [How to Track Kickstarter Traffic: Referral Tags and UTMs](https://guildframe.com/guides/kickstarter-referral-tags-tracking): Kickstarter's built in referral tag tracker, GA4 and Meta Pixel in the Promotion tab, UTMs for your own pages and a report that keeps clicks and pledges apart.`
- `- [BackerKit vs Shopify vs Gamefound in 2026](https://guildframe.com/guides/backerkit-vs-shopify-vs-gamefound)`
- `- [Kickstarter Campaign Graphics That Read on a Phone](https://guildframe.com/guides/kickstarter-campaign-graphics-mobile-readability)`
- `- [Kickstarter Stretch Goals: Card and Board Game Examples](https://guildframe.com/guides/kickstarter-stretch-goals-planning)`
- `- [How Long Does Kickstarter Take to Approve a Project?](https://guildframe.com/guides/kickstarter-review-launch-timeline)`

### docs/SEARCH_INTENT_MAP.md

- `/resources/kickstarter-tabletop-games-benchmark`: highest funded tabletop Kickstarters 2024, tabletop Kickstarter statistics
- `/guides/kickstarter-referral-tags-tracking`: how to track Kickstarter traffic, Kickstarter tracker, referral tags, UTMs
- `/guides/backerkit-vs-shopify-vs-gamefound`: BackerKit, BackerKit vs Gamefound vs Shopify, Kickstarter Pledge Manager vs BackerKit
- `/guides/kickstarter-campaign-graphics-mobile-readability`: mobile readable campaign graphics (image sizes now owned by `/guides/kickstarter-image-sizes`)
- `/guides/what-happens-after-kickstarter-is-funded`: what happens after funding, payout timing, pledge manager timing
- `/guides/kickstarter-stretch-goals-planning`: stretch goals, stretch goal examples, card expansion stretch goals (also the French query "cartes extension stretch goal")
- `/guides/kickstarter-review-launch-timeline`: how long does Kickstarter take to approve a project, Kickstarter review time

## Sources verified today and added to `sources`

- Kickstarter release notes (pages 1 to 3): Mar 12, Mar 31, Apr 13, May 6 (edit survey responses; link to story sections such as Stretch Goals), Jun 1, Aug 20, Sep 25, Oct 13 (dropped pledges in Backer Source data), Oct 28 2026.
- updates.kickstarter.com "Bringing the Kickstarter Pledge Manager to all creators", published May 8 2025.
- Kickstarter Help: project review (up to 3 business days, plus 3 for changes, longer at high volume), launching after approval (manual, cannot be scheduled), duration (1 to 60 days, 30 or fewer recommended, cannot change after launch), Pledge Manager (no upfront cost, usual fees, after launch only, end Late Pledges first, open 3 weeks minimum, review up to 5 business days), payout (14 day collection window, then 3 to 14 business days, check at 28 days), referral tags (Promotion tab or dashboard, 20,000 limit), GA4 and Meta Pixel setup, story and reward image specs.
- Gamefound Help: stretch goals (manual and automatic; backers, funds, campaign day), description images (840 to 1200 px, WebP, 20 MB).
- apps.shopify.com/kickstarter: Kickstarter app, free, "Launched July 31, 2026".
- PR Newswire, Gamefound acquires Indiegogo, July 24 2025.

## Not verified, left out

- BackerKit current fees: its public pricing page is dated April 2021, so no BackerKit fee appears.
- Kickstarter project cover image dimensions: not stated in Kickstarter's help article, so not used.
- Brief item "pledging with only an email (Oct 14)": the release note title says that, but the text describes logging in without a redirect. Not used.
- Kickstarter's Aug 18 2026 post still called the Shopify app "in beta" while the Shopify listing says launched July 31 2026. Copy says "listed on the Shopify App Store since July 31, 2026".
- Cyberpunk TCG total: secondary sources disagree, nothing on Kickstarter's own site found, not used.
- I couldn't run the build or tests here. `tsc` shows no errors in the changed files apart from the missing module types the whole project shows. I compiled the guide data to JS and checked it: every section source index resolves, and every inline link and related slug exists except `kickstarter-image-sizes`, which shows up once the new guide is registered.
