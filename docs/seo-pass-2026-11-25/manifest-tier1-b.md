# Manifest: tier1-b (Tier 1 pages, Google positions 11 to 21)

No new slugs. Seven existing pages edited.

## Files changed

- `app/campaign-pages.ts`: /campaign-design description (shown in hero and meta) now carries the $1,800 price and the free opening mockup; intro rewritten to name the package and the free mockup; two infographics added (`visuals`: package checklist, five step project flow).
- `app/components/CampaignServicePage.tsx`: optional `visuals` on `CampaignPage`, rendered with `GuideVisual` at the end of the scope section. No layout or CSS change.
- `app/guides/[slug]/page.tsx`: guide paragraphs now render `[label](/internal-path)` as a real `<Link>`. Only internal paths starting with `/` are converted. This is how the contextual links below are written.
- `app/launch-guide-revisions.ts` and `app/launch-guides.ts` (last line only): a guide whose own `updated` is later than the shared review date keeps it. All other guides render the same dates as before (checked: 2026-10-28, 2026-11-05, 2026-11-06 unchanged).
- `app/launch-growth-guides.ts`: funding goal guide.
- `app/launch-marketing-guides.ts`: live campaign updates guide.
- `app/launch-guides-new.ts`: Gamefound launch checklist guide.
- `app/launch-decision-guides.ts`: agency guide.
- `app/launch-guides.ts`: Kickstarter vs Gamefound page design guide (content of the existing entry only).
- `app/layout.tsx`: homepage meta description only.

## Pages

| Path | seoTitle | Description | Pillar / servicePath | Visuals | FAQs |
|---|---|---|---|---|---|
| /campaign-design | unchanged: Kickstarter Campaign Designer: Copy & Graphics | Kickstarter campaign page design for tabletop games at a fixed $1,800. Copy, graphics and reward tiers from your artwork. Try a free opening mockup first. | Campaign page hub | checklist, steps | unchanged |
| /guides/board-game-kickstarter-funding-goal | Kickstarter Funding Goal Calculator for Board Games | Set a board game Kickstarter funding goal from factory minimums, fees, fulfillment and a reserve. Includes a calculator and a worked example. | Planning and costs, /kickstarter-launch-services | steps (illustrative goal math), split (illustrative $60 pledge) | 5 |
| /guides/kickstarter-live-campaign-updates | Kickstarter Campaign Updates: How Often and What to Post | How often to post Kickstarter campaign updates, a 30 day update rhythm, a delay update template and the monthly minimum Kickstarter expects after funding. | /kickstarter-campaign-management, links to /post-campaign-support | timeline (labelled Guildframe recommendation) | 6 |
| /guides/gamefound-launch-page-checklist | Gamefound Launch Checklist: Page, Tester Mode and Adfound | Gamefound launch checklist for tabletop creators. Check stages, sections, rewards and Tester Mode, and budget for Adfound fees before backers arrive. | Platforms, servicePath changed to /gamefound-launch-services | stats (Adfound fees), checklist | 5 |
| /guides/choose-board-game-kickstarter-marketing-agency | Board Game Marketing Agency: Costs, Red Flags & Hiring | How to choose a board game marketing agency for Kickstarter. Compare fixed fee, retainer and commission pricing, spot scam red flags and check real proof. | Planning and costs, /kickstarter-launch-services | compare (pricing models) | 7 (5 base + 2 buyer revision) |
| /guides/kickstarter-vs-gamefound-campaign-page-design | Campaign Page Design on Kickstarter vs Gamefound | How campaign page design differs on Kickstarter and Gamefound, from story sections and reward layouts to stages and previews, for creators who have picked one. | Campaign page, servicePath changed to /campaign-design | compare (platform page build) | 5 |
| / (metadata only) | unchanged: Kickstarter Agency for Board Games & Tabletop | Kickstarter agency for tabletop games. We plan, design and advertise Kickstarter and Gamefound launches for board games, card games, RPGs and miniatures. | | | |

All five guides set `updated: "2026-11-25"`. Each has 2 or more contextual links plus its hub link in the closing section.

Links to pages written by other agents (will 404 until merged; related cards are filtered out automatically until the guide exists):
- `/guides/kickstarter-agency-cost`: inline in the agency guide cost section, relatedSlugs of the agency and funding goal guides.
- `/guides/kickstarter-vs-gamefound`: first section of the page design guide (prominent, above the fold of the body), Gamefound checklist Indiegogo section, relatedSlugs of both.

## Lead actions needed

1. `tests/static-output.test.mjs`
   - Titles in `pages`: funding goal `Kickstarter Funding Goal Calculator for Board Games | Guildframe`; live updates `Kickstarter Campaign Updates: How Often and What to Post | Guildframe`; Gamefound checklist `Gamefound Launch Checklist: Page, Tester Mode and Adfound | Guildframe`; agency `Board Game Marketing Agency: Costs, Red Flags & Hiring | Guildframe`; page design `Campaign Page Design on Kickstarter vs Gamefound | Guildframe`. Phrases (H1 text) are unchanged.
   - `datedPages`: set these five guides to `2026-11-25` (visible date, schema and sitemap all follow `guide.updated`).
   - Line 834: `/campaign-design` now shows `$1,800` twice in visible text (hero summary and the pricing card). Change the expected count from 1 to 2.
   - The internal link test will fail until `/guides/kickstarter-agency-cost` and `/guides/kickstarter-vs-gamefound` are merged.
2. `app/content-dates.ts`: no key needed for the guides. `campaignDesign` (2026-11-05) drives /campaign-design dateModified and sitemap; bump it to 2026-11-25 if you want the content change dated (test date map would follow). Homepage `home` date: metadata only, your call.
3. `public/llms.txt` suggested lines:
   - `- [Kickstarter vs Gamefound: Campaign Page Design](https://guildframe.com/guides/kickstarter-vs-gamefound-campaign-page-design): page build differences once a platform is chosen; platform choice lives at /guides/kickstarter-vs-gamefound`
   - `- [Kickstarter Campaign Updates: How Often and What to Post](https://guildframe.com/guides/kickstarter-live-campaign-updates): 30 day update rhythm, delay update template, monthly minimum after funding`
   - `- [Gamefound Launch Checklist](https://guildframe.com/guides/gamefound-launch-page-checklist): stages, sections, Tester Mode, Adfound fees`
   - `- [Choosing a board game marketing agency](https://guildframe.com/guides/choose-board-game-kickstarter-marketing-agency): pricing models, scam red flags, proof checks`
4. `docs/SEARCH_INTENT_MAP.md` suggested lines:
   - `/guides/kickstarter-vs-gamefound-campaign-page-design`: owns "Kickstarter vs Gamefound campaign page design" (how the page is built). Does not own "Kickstarter vs Gamefound"; that is `/guides/kickstarter-vs-gamefound`.
   - `/guides/choose-board-game-kickstarter-marketing-agency`: owns "board game marketing agency", agency red flags and pricing models; agency price figures sit at `/guides/kickstarter-agency-cost`.
   - `/guides/kickstarter-live-campaign-updates`: owns "how often to post Kickstarter updates", delay update template.
5. Guides and resources index entries: none new.

## Facts verified today (25 Nov 2026) and where

- Kickstarter fees: 5% platform fee on total funds raised, US payment processing 3% + $0.20 per pledge, discounted rate for pledges under $10, no fees if unfunded. kickstarter.com/help/fees.
- Kickstarter update frequency: no required frequency during a campaign; expects at least one update a month after funding. help.kickstarter.com article 16236488. Update request after more than 4 weeks without an update while rewards are unfulfilled. Article 16236555. Handbook: backers worry when they don't hear from you; share delays or changes. kickstarter.com/help/handbook/updates.
- Adfound fees: free in the Upcoming phase of a dedicated campaign; 5% of attributed revenue in crowdfunding or late pledge/pledge manager; 15% for catalog campaigns; Meta 7 day click and 1 day view attribution; final fee set 7 days after the campaign ends, then invoiced. help.gamefound.com/article/415 (updated Sep 21, 2026).
- Gamefound and Indiegogo: press release dated July 24, 2025 (PR Newswire) announcing Gamefound will acquire Indiegogo (38 million members); Gamefound continues as a tabletop platform; Gamefound campaigns featured on Indiegogo. Written as "announced", because I did not verify the closing date.
- Scam red flags: Kickstarter Trust and Safety article, March 26, 2026 (updates.kickstarter.com/how-to-protect-your-kickstarter-campaign-from-scams); help.kickstarter.com article 16236419 (no endorsement or affiliation, fake backer accounts often not backed by real money, Partner Directory).

## Could not verify

- `kickstarter.com/blog/before-you-work-with-a-marketing-service-consider-this` (an existing source on the agency guide) did not load from here. I left it in place and used the two Kickstarter sources above for the new claims.
- No timing claims (for example, how many days a campaign page project takes) were added anywhere, because none are in the approved facts.
