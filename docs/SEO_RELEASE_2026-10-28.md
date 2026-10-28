# Guildframe guide and search release, 28 October 2026

## Owner-dashboard findings

The 28-day Google Search Console report (September 29 through October 26) shows 12 clicks, 457 impressions, 2.6% CTR and average position 14.1. Query data includes `kickstarter marketing plan` at position 11.4 (5 impressions), `board game marketing agency` at 31.8 (4 impressions), and broader board-game marketing queries farther from page one. These are small samples, not demand forecasts.

Page data shows the existing Shopify theme comparison with 5 clicks and 119 impressions; the launch marketing-plan guide has 48 impressions and position16, and agency-selection guide has33 impressions and position18.8. Preserve those established URLs, improve their usefulness and connect relevant next steps. Query and page aggregations should not be added together.

The indexing report last updated October23 lists25 indexed pages and50 exclusions:47 discovered but not indexed,1 crawled but not indexed,2 redirects. The crawled exclusion is the historical tabletop benchmark, with an old August5 crawl shown. The sitemap is successful with73 discovered routes before this release. Search Console data can lag the current site.

The notifications panel contains17 messages, including old Product and Merchant warnings. Current Product and Merchant reports each show0 invalid items and0 affected items in the listed warnings. Breadcrumbs has17 valid items and0 invalid. ProfilePage has1 valid item with a non-critical invalid `dateModified` warning affecting `/authors/guildframe`. Security and manual-action reports show no issues. HTTPS has0 non-HTTPS URLs. Core Web Vitals has insufficient field data for both device types.

Google's Generative AI report shows59 impressions in the same28-day window:34 for the theme guide,6 for the homepage,4 for agency selection and2 for the marketing-plan guide. These are impressions, not clicks, leads or confirmed sales.

## Implemented

- Correct ProfilePage dateModified to an ISO timestamp with UTC timezone. Preserve creation date and the real author identity. Point the author portfolio link to `/work`.
- Add six distinct guides: funding goal, reward pricing, referral/UTM tracking, reviewer outreach, launch-day operations and pledge-manager selection. Use source-backed platform claims and labelled hypothetical examples.
- Add a practical exercise, check criterion and downloadable Markdown worksheet to all43 guides, including37 established articles. Keep essential instructions in readable HTML.
- Add an interactive funding-assumptions calculator. It makes its fee and contingency inputs explicit and rejects invalid inputs. It estimates cash need, not demand or investment returns.
- Add stage-based entry points to the guide library and contextual links among related guides. Preserve existing high-performing URLs and canonical URLs.
- Review the13 post-campaign guides. Correct the outdated regional Shopify subscription quote and unsupported theme comparisons; recheck theme prices; add current native Kickstarter Pledge Manager and Gamefound stage guidance; add the relevant upcoming EU identifier requirement with a primary-source link.
- Keep publication dates intact. Update modification dates only on changed content. Extend the sitemap and content inventory to79 routes.
- Preserve working forms and lead tracking. No outreach, paid campaigns or account-ownership changes are part of this release.

## Graphics deferred by the owner

The built-in ImageGen service failed twice with a connection error. The owner chose to keep graphics pending instead of using the paid API fallback. `GUIDE_VISUAL_BRIEFS_2026-10-28.json` records43 article-specific infographic briefs. These are plans, not generated deliverables. No missing-image placeholders are shipped.

## Search intent

| Guide | Primary long-tail intent | Distinction |
|---|---|---|
| Funding goal | how to calculate Kickstarter funding goal for a board game | Full delivery economics and minimum production commitment |
| Reward pricing | how to price Kickstarter board game rewards | Margin by tier, separate from reward graphics |
| Tracking | track Kickstarter ads with referral links | Visits, pledge value and collected revenue |
| Reviewer outreach | send board game prototypes to reviewers before Kickstarter | Prototype logistics, coverage terms and permission |
| Launch day | board game Kickstarter launch day checklist | Publication, announcements, testing and responsibilities |
| Pledge manager | choose a pledge manager for a board game Kickstarter | Requirements and order-export tests |

These are intent-led targets, not measured Keyword Planner volumes or difficulty scores. Primary research and verified-source status are in `SEO_RESEARCH_2026-10-28.md` and `seo-source-checks-2026-10-28.json`.

## AEO/GEO boundaries

Useful answers, actual campaign evidence, sources, authorship, readable content and crawl/index eligibility support discoverability. Google does not require a special AI schema or llms.txt. FAQ rich results are retired; helpful visible FAQs remain, without a rich-result promise. Measure AI citations separately from visits and enquiries.

## Verification and delivery

Run static output tests, lint, TypeScript, responsive browser checks, worksheet checks and calculator boundary tests. Verify the deployed source, live canonical routes and ProfilePage timestamp before submitting the updated sitemap, notifying IndexNow and requesting validation of the profile warning. Accepted submissions are receipts, not proof of indexing or ranking. Preserve the final receipts outside the temporary checkout and remove that checkout after verified publication.
