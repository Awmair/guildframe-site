# Manifest w6: multi niche guides pass, 26 Nov 2026

Files added:
- app/guides-new/kickstarter-statistics-by-category.ts
- app/guides-new/crowdfunding-glossary.ts
- No public/downloads/guides/*.md written (per the workbook correction). Workbook entries are below.

Both files parse with tsx and pass `tsc --ignoreConfig --noEmit` with no errors in these files. A local check found no em or en dashes, no visible hyphenated compounds, and no paragraph over 3 sentences.

## 1. kickstarter-statistics-by-category
- title: Kickstarter Statistics by Category: Success Rates and Average Raise (2026)
- seoTitle: Kickstarter Statistics: Success Rate by Category (48 chars)
- description (152 chars after encoding, no apostrophes): Kickstarter statistics by category: success rates, the average and median raise, funding brackets and 2026 dollars per category, each dated and sourced.
- tag: Resources. servicePath: /kickstarter-launch-services, serviceLabel: Kickstarter launch services
- relatedSlugs: why-kickstarter-campaigns-fail, kickstarter-campaign-cost, how-to-launch-a-kickstarter-campaign, kickstarter-fees, crowdfunding-glossary
- Shape: 10 sections, 11 visuals (stats, flow, 4 bars, split, timeline, compare, steps), 4 tables, 7 FAQs, a takeaway on every section, 14 sources. Visuals run above the 4 to 6 target because the task asked for tables and bar charts for both success rates and dollars.
- The page says it is refreshed each quarter. The lead could add a reminder to refresh it after the Q4 2026 reports come out.
- Primary phrase: kickstarter statistics. Secondary: kickstarter success rate by category, average kickstarter raise, how much do kickstarter campaigns raise, kickstarter success rate, most successful kickstarter category, median kickstarter raise.
- Evidence: the SERP for these phrases is Statista pages (paywalled, some numbers masked), searchlogistics (undated figures), TCF Q1 and Q2 2026 posts, webtonic (repeats TCF), GameDev Reports and The Hustle. Their gaps: no dates on figures, agency and official data mixed together, inflated agency success rates, little on the median. Questions people ask: what is the Kickstarter success rate, which category is most successful, average amount raised, how much most campaigns raise, which category raises the most. GSC has no direct query yet. The nearest demand signal is /resources/kickstarter-tabletop-games-benchmark at 426 impressions, position 8.2, for tabletop statistics.
- Key verified facts (checked 26 Nov 2026): kickstarter.com/help/stats now gives a 302 redirect to the 2025 year in review post, with no live table. 41.98% success, more than 651,000 projects and more than $8.5B pledged, as of Jan 2025 (Statista, Kickstarter data). Funding brackets as of Jan 2025 (Statista, Kickstarter data). ICPSR 38050 success rates for 15 categories, 2009 to 2020. Tabletop 2024: 80%, 6,646 launched, 5,314 funded, $220M (Kickstarter). 2024: 35,512 launched, $706M to successful projects (Kickstarter). Publishing passed $45M in 2025 (Kickstarter). TCF Q1/Q2/H1 2026 dollar figures, labelled as agency data.

## 2. crowdfunding-glossary
- title: Crowdfunding Glossary: 72 Kickstarter Terms in Plain Words
- seoTitle: Crowdfunding Glossary: Kickstarter Terms Explained (50 chars)
- description (154 chars after encoding, no apostrophes): A crowdfunding glossary of 72 Kickstarter terms in plain words, grouped by platform, page, money, marketing, after funding and shipping, with guide links.
- tag: Resources. servicePath: /kickstarter-launch-services, serviceLabel: Kickstarter launch services
- relatedSlugs: kickstarter-for-beginners, how-to-launch-a-kickstarter-campaign, kickstarter-statistics-by-category, kickstarter-fees, what-happens-after-kickstarter-is-funded
- Shape: 9 sections, 72 terms in 6 group tables (platform 13, page and rewards 15, money 11, marketing 11, after funding 9, production and shipping 13), plus a table showing which terms differ by platform. 7 visuals: steps, 2 flows, 2 tips, split, timeline. 7 FAQs, 18 sources.
- Note: table cells render as plain text, not with GuideInlineText, so the guide links for each group sit in a list under its table, not inside the definitions. If the lead switches ArticleTable cells to GuideInlineText, links could move into the definitions.
- Primary phrase: crowdfunding glossary. Secondary: kickstarter terms, kickstarter glossary, crowdfunding terms, what is a pledge manager, what does all or nothing mean, kickstarter add on, stretch goals, late pledges, MOQ meaning.
- Evidence: the SERP is Kickstarter's ABCs of Crowdfunding (Nov 2024, A to Z, marketing heavy), BackerKit terminology, IgnitionDeck, fastercapital and fiveable. Their gaps: no production or shipping terms, no fee numbers, nothing on the Indiegogo changes after Oct 2025. GSC queries this page serves: pledge manager (6 impressions, position 64.2), stretch goals (5 impressions, position 57.8), kickstarter add on (2 impressions, position 45.5), kickstarter funding goal (6 impressions, position 27.8).

## Workbook entries
["kickstarter-statistics-by-category", "Find your category's real numbers and test your funding goal against them this week.", ["Write down your category and its success rate from the table, with the period it covers.", "Set your planned goal beside the funding brackets and note what share of successful projects raised more.", "Count your likely day one backers from your email list and prelaunch followers.", "Multiply that count by your expected average pledge and compare it with the goal.", "Mark every statistic you plan to quote in your page or pitch with its source and date."], "Hypothetical example: you plan a $24,000 goal for a Design project with an expected $60 average pledge. That needs 400 backers, and it is more than about 80% of successful projects raised as of January 2025. You have 150 people on your list, so you either grow the audience before launch or lower the goal to what your costs truly need.", "You can say in one sentence how your goal compares with your category and where the backers to reach it will come from."]
["crowdfunding-glossary", "Learn the terms for the stage you are at and turn each one into a decision for your project.", ["Pick the glossary group that matches where your project is today.", "Read each term in that group and mark the ones that need a decision from you.", "Write your answer beside each marked term, such as your goal, your tiers or your payout date.", "Ask suppliers about MOQ, unit cost, lead time and landed cost in writing.", "Open the linked guide for any term you still cannot answer in one sentence."], "Hypothetical example: you are building the page, so you work through the page and rewards group. You decide on three reward tiers, two add ons and one stretch goal, and you note that a hardware project needs a working prototype on film. Then you move to the money group and work out the fees on your main tier.", "Every term in your current group has a written answer or a linked guide you will read next."]

## llms.txt lines
- [Kickstarter Statistics by Category: Success Rates and Average Raise (2026)](https://guildframe.com/guides/kickstarter-statistics-by-category): dated Kickstarter success rates by category, the average and median raise, funding brackets and 2026 dollars per category, refreshed each quarter.
- [Crowdfunding Glossary: 72 Kickstarter Terms in Plain Words](https://guildframe.com/guides/crowdfunding-glossary): 72 Kickstarter, Gamefound and Indiegogo terms in plain words, grouped from platform basics to production and shipping.

## Facts dropped because they could not be verified
- Kickstarter's live stats table: the page redirects, so no current all time category table was used.
- Searchlogistics figures (650,798 projects, 39.11% success, category counts): no collection date, so not used.
- TCF Q1 2026 category success rates (95% to 100%): the capture counted only 23 failed projects. The page explains why it does not use them.
- Statista overall success rate page 235405: the figure is masked. The 41.98% figure from page 251727 was used instead.
- Peak Design $13M and the EufyMake total: not stated in the Kickstarter post body.
- Gamefound payment processing percentage for campaigns, and whether Gamefound is strictly all or nothing: the fee page is unclear, so the table says "check the Gamefound fee page" and "no fees if the goal is not reached".
- The 20 to 30 percent reserve that Kickstarter suggests, and Tariff Manager details: not checked again today, so left out of the glossary.
