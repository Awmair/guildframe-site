# Manifest w5: multi niche guides pass, 26 Nov 2026

Files added (no shared files touched, no workbook .md written):
- app/guides-new/kickstarter-vs-indiegogo.ts
- app/guides-new/kickstarter-campaign-cost.ts
- app/guides-new/kickstarter-shipping-physical-products.ts
- app/guides-new/relaunch-failed-kickstarter.ts

All four: published and updated "2026-11-26", visual first (7 to 8 visuals each, at least one flow, at least one tips block, takeaways on most sections, paragraphs at most 3 sentences). Checked with a local script: no em or en dash, no visible hyphenated compound, no "48 hours", no retired prices, description length after HTML encoding, seoTitle under 60. `tsx` parses each file; `tsc` reports no errors in these files.

Renderer note for the lead: in `app/guides/[slug]/page.tsx` a section's `table` renders AFTER its `takeaway`. I left out the takeaway on every section that carries a table so the box never sits above a table. Worth fixing the order (table before visuals or before takeaway) in the shared renderer.

## 1. kickstarter-vs-indiegogo
- title: Kickstarter vs Indiegogo in 2026: Fees, Rules and Which to Choose
- seoTitle: Kickstarter vs Indiegogo in 2026: Which to Choose (49)
- description (153): Kickstarter vs Indiegogo in 2026: the same 5% fee, all or nothing on both, Indiegogo now runs on Gamefound, plus Express mode and a verdict by situation.
- tag: Platforms and costs; servicePath /kickstarter-launch-services ("Kickstarter launch services")
- relatedSlugs: kickstarter-fees, kickstarter-vs-gamefound, kickstarter-campaign-cost, how-to-launch-a-product-on-kickstarter, pledge-managers-compared
- Links: /guides/kickstarter-fees, /guides/kickstarter-vs-gamefound (once), /guides/how-to-get-kickstarter-backers, /kickstarter-launch-services
- Primary: kickstarter vs indiegogo. Secondary: indiegogo vs kickstarter, which is better kickstarter or indiegogo, indiegogo fees, indiegogo flexible funding, indiegogo indemand, is indiegogo owned by gamefound.
- Evidence: SERP for "kickstarter vs indiegogo 2026" (TCF, LaunchBoom, PledgeBox, BackerKit, Kickstarter's own launch.kickstarter.com/vs/indiegogo). Top results mostly predate or underplay the Oct 2025 Indiegogo upgrade (flexible funding gone, InDemand renamed, flat 5%), which is the gap this page fills. GSC has "gamefound vs kickstarter" (15 impr) and "kickstarter vs gamefound" (11) as the nearest platform comparison queries.
- Verified today: Indiegogo fees 5% plus 3% and 0.20 per transaction, nothing if goal missed, pledge manager 5% plus processing (help.indiegogo.com/article/596, updated Oct 13 2026); Gamefound acquired Indiegogo Jul 22 2025; upgrade Oct 16 2025, powered by Gamefound technology, flexible funding ended, InDemand became Late Pledge, tips go to creators, end date locked once live, tools open to external campaigns; Express Crowdfunding has no goal (updated Jun 11 2026); backers pay when they pledge and are refunded if goal missed; Kickstarter fees, card charged at deadline, Late Pledges (+10% advice, enable before end), Pledge Manager, hardware rules, Pledge Over Time (3 payments, 125 USD/EUR, 100 GBP), payout 14 days plus 3 to 14 business days, goal and deadline locked, 1 to 60 days.

## 2. kickstarter-campaign-cost
- title: How Much Does a Kickstarter Campaign Cost? A 2026 Budget Guide
- seoTitle: How Much Does a Kickstarter Campaign Cost? (2026) (49)
- description (151): How much a Kickstarter campaign costs: fees, samples, photos, page design, ads, shipping, pledge manager and taxes, with three example budgets by size.
- tag: Platforms and costs; servicePath /kickstarter-launch-services ("Kickstarter launch services")
- relatedSlugs: kickstarter-fees, kickstarter-agency-cost, board-game-kickstarter-cost, kickstarter-shipping-physical-products, manufacturing-quotes-before-kickstarter
- Links: /guides/kickstarter-fees, /guides/manufacturing-quotes-before-kickstarter, /guides/kickstarter-product-photography, /guides/kickstarter-agency-cost, /guides/how-to-market-a-kickstarter, /guides/kickstarter-shipping-physical-products, /guides/board-game-kickstarter-cost (once), /kickstarter-launch-services
- Primary: how much does a kickstarter campaign cost. Secondary: kickstarter costs, kickstarter pricing, cost to run a kickstarter, how much does it cost to start a kickstarter, kickstarter budget.
- Evidence: GSC "kickstarter pricing" (66 impr, pos 53) and "kickstarter costs" (2 impr, pos 66). SERP led by LaunchBoom cost breakdowns, PledgeBox, Kickstarter's goal article and its 2022 budget post; most mix fees with services and give no example budgets by size, which this page adds.
- Example budgets ($6,000 / $30,000 / $100,000 goals) are labelled illustrative throughout; fee lines use Kickstarter US rates.

## 3. kickstarter-shipping-physical-products
- title: Kickstarter Shipping and Fulfillment for Physical Products (2026)
- seoTitle: Kickstarter Shipping and Fulfillment Guide (2026) (49)
- description (154): Kickstarter shipping for physical products: charge now or later, regions, fulfillment centers, customs, VAT, the pledge manager and US de minimis in 2026.
- tag: Products; servicePath /post-campaign-support ("Post campaign support")
- relatedSlugs: kickstarter-campaign-cost, pledge-managers-compared, what-happens-after-kickstarter-is-funded, kickstarter-reward-pricing-physical-products, board-game-tariffs-shipping-us
- Links: /guides/board-game-tariffs-shipping-us (once), /guides/pledge-managers-compared, /post-campaign-support
- Primary: kickstarter shipping. Secondary: kickstarter fulfillment, kickstarter fulfillment center, charge shipping later kickstarter, kickstarter shipping regions, kickstarter customs duties, de minimis kickstarter.
- Evidence: GSC "kickstarter shipping" (3 impr, pos 58), "kickstarter fulfillment center" (1 impr, pos 3), "board game fulfillment" (3). SERP: Kickstarter help articles, BackerKit shipping strategies, Shipwire, Red Stag, Easyship, Kickstarter's May 2026 fulfillment post. Few cover the 2026 US de minimis rules or the EU 3 euro duty.
- US de minimis verified today: suspended since Aug 29 2025 (EO 14324), indefinite suspension rules Jun 24 2026, postal informal entry for mail of $2,500 or less from Jul 24 2026 (Pay.gov, owner or broker files), compliance date for some formal entry requirements extended to Jan 20 2027 (Federal Register 2026-21600, Oct 22 2026), exemption ends by law Jul 1 2027.

## 4. relaunch-failed-kickstarter
- title: How to Relaunch a Failed Kickstarter: What to Do Next
- seoTitle: Relaunch a Failed Kickstarter: What to Do Next (46)
- description (155): Your Kickstarter failed, so what next? Diagnose traffic, conversion, goal and price, decide when to cancel early, and relaunch without losing your backers.
- tag: Start here; servicePath /kickstarter-launch-services ("Kickstarter launch services")
- relatedSlugs: why-kickstarter-campaigns-fail, kickstarter-followers-before-launch, how-to-get-kickstarter-backers, kickstarter-campaign-timeline, how-to-launch-a-kickstarter-campaign
- Links: /guides/why-kickstarter-campaigns-fail, /guides/kickstarter-followers-before-launch, /kickstarter-launch-services
- Primary: relaunch failed kickstarter. Secondary: kickstarter failed what next, how to relaunch a kickstarter, should I cancel my kickstarter, can you relaunch a kickstarter, do backers carry over relaunch.
- Evidence: yesterday's research list ("day 2 go or cancel, relaunch after failure"); SERP led by BackerKit, LaunchBoom, Gadget Flow, Kickstarter's relaunch help article and Kickstarter blog case studies (Piper, Paws and Leaves, Aaron Smith). Competitors rarely give a diagnosis method; this page adds the four cause flow and table.
- Case study figures (Piper: cancelled at 39% of $40k, relaunch goal $10,098, 21 days, $247,427, 10k emails, 1.9k reservations, $17k with consultants; Paws and Leaves: 630 backers at launch vs 600 target, EUR 60,000, EUR 600 marketing) come from Kickstarter blog posts dated Sep 8 2025 and Feb 26 2026 and are labelled as the creators' results.

## Workbook entries
["kickstarter-vs-indiegogo","Answer the four platform questions and write down which platform fits your product and why.",["Film your prototype working, or note the date it will be ready, because Kickstarter will not accept renders for hardware.","Write down how much of your stock is ready or close to ready to ship.","Estimate your average pledge and check whether most pledges will pass $125.","Put your factory deposit date beside the Kickstarter payout date, 14 days after the deadline plus your bank's time.","Ask your fulfillment partner which pledge manager they can import orders from."],"Hypothetical example: you make a $160 desk lamp with a working prototype and no stock yet. You need a goal to pay for the first run, most pledges will pass $125, and your factory deposit is due a month after launch. That points to Kickstarter with Pledge Over Time switched on, and a deposit date moved to after the payout lands.","You can explain your platform choice to a friend in two sentences, naming the rule or tool that decided it."]
["kickstarter-campaign-cost","Build your two budget Kickstarter cost sheet this week.",["Make one column for costs you pay before launch and one for costs paid from pledges.","Price samples, photos and video, page design, ads and tools in the first column, even if some are zero.","In the second column, list manufacturing, shipping by region, packaging, pledge manager fees, duties and taxes.","Add Kickstarter fees at 5% plus 3% and $0.20 a pledge, and a reserve of 20 to 30 percent.","Check that you could make and ship every reward at exactly 100% of the goal."],"Hypothetical example: 500 backers pledge $60 each on a US project, so the campaign raises $30,000. Fees take about $2,500 and a 20% reserve keeps back $6,000. That leaves $21,500 to make, pack and ship every reward, so if your quotes come to more, the goal rises before launch.","Every line in both columns carries a number or a dated question, and the goal covers the second column in full."]
["kickstarter-shipping-physical-products","Make your five shipping decisions and write each one into your campaign plan.",["Weigh and measure each reward boxed, including the heaviest likely add on combination.","Get written quotes from two fulfillment models for your top backer countries.","Decide whether you pay duties upfront or backers pay on delivery, and write it for the page.","Choose to charge shipping at pledge or later, and set the estimate range you will show.","Check the current US entry rules for parcels and the EU rules for orders of 150 euros or less."],"Hypothetical example: your boxed product weighs 900 grams and most backers are in the US, UK and Germany. A warehouse quote for the US and a direct quote for Europe come in, but neither is firm for next spring. So you charge shipping later, show an estimate range on the page, and say clearly that duties are paid before delivery.","Each reward has a shipping price or an estimate range for every country you serve, and the page says who pays duties."]
["relaunch-failed-kickstarter","Name the one main reason your campaign fell short and write the fix beside it.",["Export your dashboard numbers: page visits, referrers, pledges and dropped pledges.","Answer the four diagnosis questions: traffic, conversion, goal and price.","Post an honest update to backers with a signup link for the relaunch.","Rebuild the goal from what you need, not what you hoped to raise.","Set a relaunch date only once your list is clearly bigger than last time."],"Hypothetical example: your page had plenty of visits from your own email list, but few of them pledged and many dropped at checkout. That points to conversion, not traffic. So the relaunch starts with a new opening section, clearer photos and simpler tiers, and the date can come sooner than if you had to grow the list.","You can say in one sentence why the first campaign failed and what will be different on the relaunch page."]

## Guides index entries (title and one line)
- Kickstarter vs Indiegogo in 2026: Fees, Rules and Which to Choose: same fees, both all or nothing, Indiegogo on Gamefound tech, and a verdict by situation.
- How Much Does a Kickstarter Campaign Cost?: fees, samples, photos, page design, ads, shipping and taxes, with three example budgets.
- Kickstarter Shipping and Fulfillment for Physical Products: charge now or later, regions, fulfillment models, duties, VAT and US de minimis.
- How to Relaunch a Failed Kickstarter: diagnose the cause, decide when to cancel, keep your backers and relaunch.

## llms.txt lines
- [Kickstarter vs Indiegogo in 2026](https://guildframe.com/guides/kickstarter-vs-indiegogo): Fees, funding models, Gamefound ownership, Express mode and which platform fits each situation.
- [How much does a Kickstarter campaign cost?](https://guildframe.com/guides/kickstarter-campaign-cost): Every cost line before and after funding, with three labelled example budgets.
- [Kickstarter shipping and fulfillment for physical products](https://guildframe.com/guides/kickstarter-shipping-physical-products): Charging shipping, regions, fulfillment models, customs, VAT and US de minimis status in 2026.
- [How to relaunch a failed Kickstarter](https://guildframe.com/guides/relaunch-failed-kickstarter): Diagnose traffic, conversion, goal and price, cancel or run it out, and relaunch with your backers.

## Facts dropped because they could not be verified today
- Indiegogo payout schedule and the 5% for 180 days reserve (Indiegogo reserved funds page returned no text); country eligibility counts for either platform; Indiegogo prototype rules; Indiegogo Stretch Pay; Indiegogo EU VAT pause (Aug 4 2026, seen only in a TCF article); Express launch date; Gamefound campaigns showing in Indiegogo search.
- Kickstarter overall success rate (kickstarter.com/help/stats now redirects to a 2025 year in review post).
- BoostYourCampaign agency price ranges and commission percentages (page blocked today), so the cost guide links /guides/kickstarter-agency-cost instead of quoting them.
- UK low value VAT rule (gov.uk and the EC IOSS portal were blocked today); the shipping guide covers the EU via the European Commission and Irish Revenue, and tells UK sellers to ask an accountant.
- TCF's claim that Kickstarter US processing is 3% plus $0.30; Kickstarter's own fee page says $0.20, which is what the guides use.
- House writing skills (unslop, unslop-ui, impeccable) live on Umair's Mac and no folder was connected to this session, so copy follows the BRIEF voice rules only.
