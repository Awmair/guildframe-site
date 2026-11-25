# Manifest: new-costs (25 Nov 2026)

## Files added

- `app/guides-new/kickstarter-fees.ts` (exports `guide: LaunchGuide`)
- `app/guides-new/kickstarter-agency-cost.ts` (exports `guide: LaunchGuide`)
- `docs/seo-pass-2026-11-25/manifest-new-costs.md`

No shared registration file was edited.

## New guides

### /guides/kickstarter-fees

- title: Kickstarter Fees Explained for Tabletop Creators (2026)
- seoTitle: Kickstarter Fees and Pricing: 2026 Tabletop Guide (49 chars)
- description (141 chars): Kickstarter takes 5% plus payment processing from a funded project. See the cost on a $40 game, plus late pledges, VAT and tariff surcharges.
- tag: Budget planning
- pillar: Planning and costs, hub `/kickstarter-launch-services` (servicePath and serviceLabel "Kickstarter launch services for tabletop games")
- targets: kickstarter fees, kickstarter pricing, kickstarter costs, kickstarter charges
- relatedSlugs: board-game-kickstarter-funding-goal, board-game-kickstarter-reward-pricing, kickstarter-advertising-budget-board-games
- shape: 8 sections, about 1,580 words, 3 visuals (bars: fee share by pledge size; split: $40 x 1,000 backers, labelled illustrative; steps: goal from net need), 6 FAQs
- published / updated: 2026-11-25 (on the object)
- sources (all opened 25 Nov 2026):
  1. Kickstarter fees for creators, https://www.kickstarter.com/help/fees (5%; US 3% + $0.20; micropledge under $10 5% + $0.05; no fees if unfunded)
  2. How do I add late pledges, https://help.kickstarter.com/en-us/articles/16236699-how-do-i-add-late-pledges-to-my-project (same fees as campaign pledges, 5% plus roughly 3 to 5% processing; enable in draft or live only)
  3. How do I use Kickstarter's Pledge Manager, https://help.kickstarter.com/en-us/articles/16236383-how-do-i-use-kickstarter-s-pledge-manager (no upfront cost; usual fees deducted from payments made in it)
  4. VAT Flexibility in Pledge Manager, https://start.kickstarter.com/kickstarter-release-notes/vat-flexibility-in-pledge-manager (13 Apr 2026)
  5. Tariff surcharge through the pledge manager, https://help.kickstarter.com/en-us/articles/16236621-can-i-charge-a-tariff-surcharge-through-the-pledge-manager (US shipping addresses only, request via banner, shown at checkout)
  6. Options for charging shipping costs, https://help.kickstarter.com/en-us/articles/16236769-what-options-do-i-have-for-charging-shipping-costs (shipping at pledge counts towards goal)

### /guides/kickstarter-agency-cost

- title: How Much Does a Kickstarter Agency Cost?
- seoTitle: Kickstarter Agency Cost: Pricing Models and Real Prices (55 chars)
- description (148 chars): Kickstarter agency cost depends on the model: fixed fee, retainer or a share of pledges. See published prices, what is never included and red flags.
- tag: Budget planning
- pillar: Planning and costs, hub `/kickstarter-launch-services` (named in the last section); servicePath `/buy`, serviceLabel "See Guildframe's fixed price packages and book a launch"
- targets: kickstarter agency cost, crowdfunding marketing agency pricing, kickstarter marketing agency
- relatedSlugs: choose-board-game-kickstarter-marketing-agency, board-game-kickstarter-campaign-design-cost, when-to-hire-kickstarter-campaign-designer
- shape: 8 sections, about 1,450 words, 2 visuals (compare: three pricing models; bars: published flat prices $1,800 / $3,499 / $5,900 / $6,997), 6 FAQs
- published / updated: 2026-11-25 (on the object)
- sources (all opened 25 Nov 2026):
  1. BoostYourCampaign, Crowdfunding marketing agency cost (published 12 Jan 2026), https://www.boostyourcampaign.com/kickstarter-marketing/kickstarter-marketing-agency-pricing-2026 (own packages $3,499 to $6,997 flat, ad spend separate; market ranges: retainers $3,000 to $15,000+/month, commission 5 to 15%, hybrid 3 to 8%, full service flat $10,000 to $30,000; all attributed to them in copy)
  2. Kickstarter and Jellop, https://updates.kickstarter.com/kickstarter-and-jellop-2/ (Jellop charges a percentage of revenues directly attributable to its efforts; no percentage stated, so none given)
  3. Hero Time, Kickstarter consultants for board games, https://herotime1.com/academy/marketing/kickstarter-consultants/ (consultants about USD 20 to 75 an hour)
  4. Kickstarter fees, https://www.kickstarter.com/help/fees
  5. Guildframe launch services, /kickstarter-launch-services (internal)

## Registration the lead needs to do

- `app/launch-guides.ts`: `import {guide as kickstarterFees} from "./guides-new/kickstarter-fees";` and `import {guide as kickstarterAgencyCost} from "./guides-new/kickstarter-agency-cost";`, then add both to the guides array.
- `app/content-dates.ts` (if guides read from it): `/guides/kickstarter-fees` and `/guides/kickstarter-agency-cost`, published and updated `2026-11-25`.
- `app/sitemap.ts`: both routes, lastmod 2026-11-25.
- `app/guides/page.tsx` index, Planning and costs group:
  - Kickstarter Fees Explained for Tabletop Creators (2026): "Kickstarter's 5% fee, payment processing, late pledges, VAT and tariff surcharges, with a $40 game example."
  - How Much Does a Kickstarter Agency Cost?: "Fixed fees, retainers and commission compared, with published prices and red flags."
- `public/llms.txt`:
  - `- [Kickstarter fees explained for tabletop creators](https://guildframe.com/guides/kickstarter-fees): 5% platform fee, US processing at 3% plus $0.20 a pledge, late pledges, VAT and tariff surcharges, with a worked $40 example.`
  - `- [How much does a Kickstarter agency cost?](https://guildframe.com/guides/kickstarter-agency-cost): fixed fee, retainer and commission models, published price points and red flags.`
- `docs/SEARCH_INTENT_MAP.md`:
  - `kickstarter fees, kickstarter pricing, kickstarter costs, kickstarter charges -> /guides/kickstarter-fees (Planning and costs)`
  - `kickstarter agency cost, crowdfunding marketing agency pricing, kickstarter marketing agency (price intent) -> /guides/kickstarter-agency-cost (Planning and costs)`
  - Note: the intent map currently says agency fee model questions extend `choose-board-game-kickstarter-marketing-agency`. Update that line so the agency guide owns "which agency" and the new page owns "what it costs", and consider a contextual link from the agency guide to the new page.
- `tests/static-output.test.mjs` pages list and date map:
  - `["/guides/kickstarter-fees", "Kickstarter Fees and Pricing: 2026 Tabletop Guide | Guildframe", "Kickstarter Fees Explained"]`, date `2026-11-25`
  - `["/guides/kickstarter-agency-cost", "Kickstarter Agency Cost: Pricing Models and Real Prices | Guildframe", "How Much Does a Kickstarter Agency Cost"]`, date `2026-11-25`

## Notes and anything not verified

- Guide paragraphs are plain text, so contextual links cannot sit inline. Both guides name the related guides and the hub in the copy; actual links come from `relatedSlugs`, the source notes and the service callout. Worth adding the new slugs to `relatedSlugs` of board-game-kickstarter-funding-goal, board-game-kickstarter-reward-pricing and choose-board-game-kickstarter-marketing-agency.
- Prices $1,800 and $5,900 are written as strings in the guides (the brief supplies them). `CONTRIBUTING.md` asks for prices from `site-config.ts` / `product-data.ts`, but no price constant exists there; existing pages also hardcode them.
- "The fee does not change with your pledge total" is derived from both packages being fixed prices. Confirm Guildframe takes no commission.
- Not verified, so stated as a planning assumption only: whether Kickstarter's usual fees apply to a tariff surcharge (the pledge manager article says usual fees are deducted from payments made inside it; the tariff pages do not say).
- Kickstarter publishes only US processing rates on its fee page; the guide tells non US creators to check their country rate and gives no other figures.
- Left out as unverified today: tariff rates, IEEPA ruling, Section 301 and de minimis dates; the Tariff Manager launch date (Kickstarter's post is dated 24 Apr 2025, the brief says 28 Apr), so no date is given.
- All dollar math in visuals is computed from the Kickstarter fee page and labelled illustrative.
