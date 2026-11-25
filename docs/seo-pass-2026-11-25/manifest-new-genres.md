# Manifest: new-genres (25 Nov 2026)

## Files added

- `app/guides-new/terrain-and-dice-kickstarter-launch-guide.ts` (exports `guide: LaunchGuide`)
- `app/guides-new/tcg-kickstarter-launch-guide.ts` (exports `guide: LaunchGuide`)
- `docs/seo-pass-2026-11-25/manifest-new-genres.md` (this file)

No shared or registration file was edited.

## New guides

### 1. `/guides/terrain-and-dice-kickstarter-launch-guide`

- title: Launching Terrain, Dice and Accessories on Kickstarter
- seoTitle: Terrain and Dice Kickstarter Launch Guide for Creators (54 chars)
- description (156 chars): Launch terrain, dice or accessories on Kickstarter: show scale and assembly, separate STL and physical rewards, plan add ons and price shipping by box size.
- tag / category: Terrain, dice & accessories
- pillar: 1, Planning and costs, hub `/kickstarter-launch-services`
- servicePath: `/miniatures-kickstarter-campaign-design` ("Campaign design for miniatures and terrain"). Picked because the guide's focus is terrain (scale, modular systems, STL vs physical). `/tabletop-accessories-campaign-design` is the alternative if the lead prefers.
- relatedSlugs: miniatures-stl-kickstarter-launch-guide, kickstarter-shipping-delivery-page, kickstarter-reward-tier-graphics
- published / updated: 2026-11-25
- about 1,755 words (counted the way `app/guides/[slug]/page.tsx` counts), 8 sections, 6 FAQs
- visuals: steps (five image sequence for scale and assembly), compare (physical / STL / both), bars (dimensional weight, labelled "Example only")
- sources (all opened 25 Nov 2026):
  0. FutureProof Terrain case study, Guildframe, `/work/futureproof-terrain`
  1. Quiver Time CITADEL case study, Guildframe, `/work/quiver-time`
  2. Kickstarter, How do I add rewards to my project? (100 tiers and 100 add ons; main tier first; digital main tier cannot take shippable add ons; destination restrictions)
  3. Kickstarter release notes, New Games and Publishing subcategories: TTRPG, STL and Audiobooks (May 8, 2026)
  4. Kickstarter, Rules for hardware and product design projects (working prototypes; no photorealistic renderings)
  5. Kickstarter release notes, Backer self serve add ons (Aug 20, 2026)
  6. UPS, Package dimensions, size limits and weight guide (L x W x H / 139 daily, 166 retail, round up)
  7. Kickstarter, Options for charging shipping costs (shipping collected at pledge counts toward the goal)
  8. Guildframe, `/kickstarter-launch-services` (pillar hub)
- Case study facts are taken only from `app/case-studies.ts` and `app/past-work.ts`. No results are claimed for either project.

### 2. `/guides/tcg-kickstarter-launch-guide`

- title: Trading Card Game Kickstarter Guide: Print Runs, Boosters and Scalpers
- seoTitle: TCG Kickstarter Guide: Print Runs, Boosters, Scalpers (53 chars)
- description (148 chars): Plan a trading card game Kickstarter: booster randomization at the printer, print run size, starter decks, scalper proof rewards and organized play.
- tag / category: Card games & TCGs
- pillar: 1, Planning and costs, hub `/kickstarter-launch-services`
- servicePath: `/card-game-kickstarter-campaign-design` ("Card game and TCG campaign design")
- relatedSlugs: card-game-kickstarter-launch-guide, board-game-kickstarter-reward-pricing, board-game-pledge-manager-checklist
- published / updated: 2026-11-25
- about 1,528 words, 8 sections, 6 FAQs
- visuals: stats (Cyberpunk TCG: $100,000 goal, $15M+ by Mar 31, Q4 2026 retail), compare (PrintNinja vs QP Market Network collation), steps (six step print run plan)
- sources (all opened 25 Nov 2026):
  0. Kickstarter (updates.kickstarter.com), Cyberpunk TCG becomes the most funded game in crowdfunding history, Mar 31, 2026 (launched Mar 17, $100,000 goal doubled in minutes, passed $15M, biggest TCG on Kickstarter and biggest tabletop game in crowdfunding history, organized play quote, print directly after campaign, retail Q4)
  1. PrintNinja, Trading card game and collectible card game FAQ (randomizes only above 20,000 units; truly random; no rarities; 6:3:1 over 100 designs = 2,750,000 cards; 55 cards per press sheet; 500 press sheet minimum)
  2. QP Market Network, Card randomization (rarity tiers, drop rate per tier, each pack drawn on its own, probabilities total 100%, duplicates possible, orders from one pack)
  3. Kickstarter, Can I pledge to a single project more than once? (one pledge per project, one reward tier)
  4. Kickstarter, How do I add rewards to my project? (quantity, time limit and audience per reward)
  5. Kickstarter release notes, Backer self serve add ons (Aug 20, 2026)
  6. Guildframe, `/kickstarter-launch-services` (pillar hub)

## Registration the lead needs to do

1. `app/launch-guides.ts`: import both and add them to the guide list, for example
   `import {guide as terrainDiceGuide} from "./guides-new/terrain-and-dice-kickstarter-launch-guide";`
   `import {guide as tcgGuide} from "./guides-new/tcg-kickstarter-launch-guide";`
   Warning: `reviseLaunchGuide` in `app/launch-guide-revisions.ts` overwrites `updated` with `contentDates.launchGuideReview` for every guide in `originalLaunchGuides`. Either append these two after the `.map(...)` chain on line 1040, or add content-dates keys and exempt them, so the visible date stays 2026-11-25.
2. `app/content-dates.ts` (if wanted): `terrainDiceGuide: "2026-11-25"`, `tcgGuide: "2026-11-25"`.
3. `app/guides/page.tsx`: add both cards. Both hrefs contain `launch-guide`, so `guideStage` files them under "formats". `guideImage` gives the terrain guide `miniature-terrain` (matches `terrain`) and the TCG guide `trading-card-game` (matches `tcg`).
4. `app/sitemap.ts`: `/guides/terrain-and-dice-kickstarter-launch-guide` and `/guides/tcg-kickstarter-launch-guide`, modified 2026-11-25.
5. `public/llms.txt` (next to the card game and miniatures lines):
   `- [Terrain, Dice and Accessories Kickstarter Guide](https://guildframe.com/guides/terrain-and-dice-kickstarter-launch-guide)`
   `- [TCG Kickstarter Guide: Print Runs, Boosters and Scalpers](https://guildframe.com/guides/tcg-kickstarter-launch-guide)`
6. `docs/SEARCH_INTENT_MAP.md`:
   `| terrain kickstarter, dice kickstarter, tabletop accessories kickstarter | /guides/terrain-and-dice-kickstarter-launch-guide | Scale and assembly, modular systems, STL vs physical, add ons, dimensional weight shipping |`
   `| tcg kickstarter, trading card game kickstarter, booster print run | /guides/tcg-kickstarter-launch-guide | Booster randomization at the printer, print run sizing, anti scalper rewards, organized play |`
   Make sure the existing card game guide keeps the "card game page" intent and this one owns "TCG print run / boosters / scalpers".
7. `tests/static-output.test.mjs`: add both routes to the page list and to `datedPages` with `"2026-11-25"`.
8. Optional, `app/components/GuideProjectExample.tsx` (shared component, not edited):
   `"terrain-and-dice-kickstarter-launch-guide": { project: "futureproof-terrain", note: "FutureProof's campaign paired an assembled building with its separate walls and floors. That pairing is the core of any terrain page." }`
   `"tcg-kickstarter-launch-guide": { project: "quiver-time", note: "Quiver Time's CITADEL is a card storage accessory, not a TCG. Its campaign shows how to put capacity and fit facts next to the product." }`
9. Optional reverse links: add `terrain-and-dice-kickstarter-launch-guide` to `relatedSlugs` of `miniatures-stl-kickstarter-launch-guide`, and `tcg-kickstarter-launch-guide` to `relatedSlugs` of `card-game-kickstarter-launch-guide`.

## Notes on links

Guide paragraphs render as plain text, so there are no inline links. Contextual links come from `relatedSlugs` (two or more guides each), the section `source` notes (which render as "Source: <link>") and `servicePath`. The case studies and the pillar hub are in each guide's `sources` array and attached to sections, so `/work/futureproof-terrain`, `/work/quiver-time` and `/kickstarter-launch-services` render as links under the relevant sections. The text names them in words ("our Kickstarter launch services for tabletop games", "our miniatures and STL guide").

## Not verified, so left out

- Cyberpunk TCG final total and backer count. Kickstarter's Mar 31 post only says it passed $15M; third party figures ($26.9M, 20k+ backers) were not used.
- Whether Kickstarter's pledge manager can cap add on quantities per backer. The guide frames this as a check for the creator, not a feature claim.
- Kickstarter's wording on whether the STL subcategory is selectable yet ("soon" in the May 8 note). The guide says only that it was added.
- No Guildframe prices are written in either guide (CONTRIBUTING says prices come from config); the offer section links to the service pages and the free opening mockup.
