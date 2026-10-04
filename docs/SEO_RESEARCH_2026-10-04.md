# Guildframe search research and implementation

Reviewed October 4, 2026 using the owner's signed-in Chrome Search Console, Bing Webmaster Tools and Google Ads Keyword Planner tabs, plus official platform documentation and first-party agency pages. Google Ads was used only for keyword research. No ads were activated and no budgets or billing settings were changed.

## Owner search baseline

| Report | Observed value | Period or freshness |
| --- | --- | --- |
| Google Web (text) | 22 clicks; 1.05K rounded impressions; 2.1% CTR; average position 19.8 | July 15–September 29, 2026 |
| Google Generative AI | 60 total impressions | July 15–September 29, 2026 |
| Google page indexing | 16 indexed; 15 discovered/currently not indexed; 2 redirects | Last update September 21, predating the rebrand |
| Google sitemap | Success; 67 discovered pages | Submitted and last read October 3 |
| Bing search | 1 click; 132 impressions; 0.76% CTR | July 17–October 1, 2026 |
| Bing AI | 201 citations; average cited pages 1 | July 18–October 1, 2026 |
| Bing sitemap | Zero errors/warnings; main row Success with 46 discovered URLs, newer submission pending | Last main-row crawl October 2 |
| Bing IndexNow | Cloudflare source; 24 submissions in the displayed last 12–13 hours | Reviewed October 4 |

Google's redirect examples are `http://guildframe.com/` and `http://www.guildframe.com/`. Redirecting them to the canonical HTTPS host is expected. They are not two broken canonical pages. URL Inspection reports the homepage indexed, but still detects its former Product markup; the live page now describes launch services. This and the stale design-only search snippet support requesting a fresh crawl after publication.

All 18 visible Google query rows were captured across two pages. Most concern the older storefront positioning, including `game storefront builder` (30 impressions), `shopify game store` (11), `shopify kickstarter` (7) and `board game fulfillment` (3). Bing also surfaces creator questions about post-funding work and campaign statistics. Preserve useful established guides and route visitors toward the relevant launch or post-campaign service. Do not redirect every older article to the homepage.

Google AI page rows mainly concern existing Shopify guides and the homepage. Bing's sampled grounding query is `Shopify crowdfunding evaluation`. These are historical visibility signals, not results of the latest creative or service pivot. Google AI impressions, Bing citations and actual website visits are different measures; page rows can be non-additive.

## Keyword demand and intent

Bing Keyword Research was queried with all countries, languages and devices selected, over July 4–October 1, 2026. Its displayed metric is impressions over that period, not Google monthly search volume:

| Seed | Bing displayed impressions | Decision |
| --- | --- | --- |
| kickstarter | 137.1K | Broad platform demand; insufficiently specific as a homepage target |
| board games | 24.8K | Predominantly player/shopping intent; avoid targeting this alone |
| kickstarter board games | 206 | Mixed discovery/backer intent; use creator modifiers |
| gamefound | 18.2K | Platform/navigation intent; use launch/marketing modifiers |
| kickstarter marketing | Insufficient trend data | Relevant hiring/planning intent; do not interpret missing data as zero |
| board game marketing | Insufficient trend data | Relevant specialist service intent |
| kickstarter campaign design | Insufficient trend data | Specific creative-service intent |

The related-keyword and question tabs were also inspected. Broad suggestions include games, logins and unrelated terms. They were not adopted as creator acquisition targets. The Kickstarter question tab returned no rows, not proof that questions have no demand.

Google Ads Keyword Planner returned **1,079 ideas** from ten seeds. Filters were United States, English, Google, September 1, 2025–August 31, 2026, with adult ideas excluded. The account reports bids in PKR. The exported data contains search buckets and advertiser competition; it does not provide precise monthly counts or a forecast for Guildframe.

| Query | Directly observed monthly search range | Advertiser competition | Top-of-page bid range, PKR |
| --- | --- | --- | --- |
| kickstarter marketing | 10–100 | Medium | 1,561.66–6,667.68 |
| kickstarter agency | 10–100 | Medium | 1,309.54–6,098.47 |
| kickstarter campaign design | 10–100 | High | Unavailable |
| kickstarter advertising | 100–1K | Low | 1,915.31–30,144.29 |
| board game marketing | 10–100 | Low | 1,192.64–2,718.12 |
| kickstarter marketing agency cost | 10–100 | Medium | 2,470.22–5,161.86 |
| kickstarter prelaunch | 10–100 | Low | 946.79–5,025.07 |

The CSV records `50` for the first three queries where the UI shows `10–100`, and `500` for advertising where it shows `100–1K`. Those export values are retained as raw bucket values, not exact demand. Detailed monthly columns were blank. Missing data for `gamefound marketing` is unavailable, not zero. Close variants overlap; summing their rows would overstate unique demand. Google's competition column measures advertisers, and its bid ranges are historical estimates rather than organic difficulty, an average CPC or Guildframe's fees. [Google's metric definitions](https://support.google.com/google-ads/answer/3022575).

Selected **33 creator queries** and consolidated them across **10 existing destinations**. Agency and service terms go to the homepage and launch-service page; agency-cost and comparison variants go to the hiring guide; creative terms go to campaign design; advertising terms go to paid ads; prelaunch terms go to the service and setup guide. Strategy and checklist questions go to the corresponding guides. Game-shopping, game-title, login and out-of-scope affiliate/PR suggestions were excluded from the acquisition map.

The agency-cost query has a reported advertiser-competition value and bid estimates, supporting the new hiring guide's existing costs and scope sections. It does not justify publishing an invented industry fee or a separate page for every wording variant. Longer niche targets remain editorial phrases unless measured directly; the page map keeps supporting-query evidence separate from each page's exact target.

`GOOGLE_KEYWORD_PLANNER_2026-10-04.json` records filters, seeds and limitations. The delivery artifacts preserve the sanitized 1,079-row export as `GOOGLE_KEYWORD_PLANNER_US_2026-10-04.csv`; the repository keyword map contains the curated creator rows. No account identifiers are retained.

Priority is based on the purchasing decision and service fit, supported by Google and Bing keyword evidence, observed search results and existing owner queries. `SEO_PAGE_MAP_2026-10-04.csv` maps every canonical page to one primary intent and separates measured supporting queries from unmeasured editorial phrases. `KEYWORD_RESEARCH_2026-10-04.csv` distinguishes the two engines' different metrics from editorial long-tail targets. Existing autocomplete evidence remains in the October 3 keyword map.

## Changes made

- Added an agency-hiring guide covering service scope, fees versus ad spend, attributable results, account ownership and DIY handoffs. It answers the full-service buying decision separately from the existing design-cost guide.
- Added a prelaunch-page comparison covering platform follows, independent email signups, app limitations, preview links and measurement. The existing setup guide remains the implementation reference.
- Added specific questions to all six launch-service pages. Reduced the repeated general FAQ block while retaining visible, matching schema.
- Linked the new guides from the service pages and searchable guide index, with contextual related-guide paths back to the services.
- Retained the visual homepage, the single design-only price location, honest commercial scope, source links and real author context.
- Added a public IndexNow ownership file and a script that reads the live canonical sitemap, verifies the live key and submits page URLs. Cloudflare Crawler Hints remains active.

## Current AEO/GEO guidance

Use crawlable text, complete answers, accurate service and author entities, visible sources and useful comparisons. Google's current AI guide says ordinary SEO applies, no special AI schema is required, and `llms.txt` does not affect its rankings. Existing `llms.txt` is a convenience file, not a visibility claim. [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

FAQ markup is retained because it accurately represents visible questions. Google stopped displaying FAQ rich results on May 7, 2026 and removed that feature's documentation in June. Do not promise FAQ rich snippets. [Google documentation updates](https://developers.google.com/search/updates).

The IndexNow dashboard's 28 visible distinct URLs were all assets, robots files or fonts, including the new hero image. This proves Cloudflare notifications are active but does not prove the new HTML pages were submitted. Direct sitemap page submission closes that observable gap. An HTTP 200 receipt means received; 202 means received with key validation pending. Neither means indexed. [Cloudflare Crawler Hints](https://developers.cloudflare.com/cache/advanced-configuration/crawler-hints/), [IndexNow protocol](https://www.indexnow.org/documentation).

## Platform and market sources

Reviewed [Kickstarter's tabletop marketing guide](https://updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps/), [promotion handbook](https://www.kickstarter.com/help/handbook/promotion), [prelaunch-page documentation](https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page) and [referral-report documentation](https://help.kickstarter.com/en-us/articles/16236548-how-do-i-create-a-custom-referral-tag-and-track-referral-stats). They support platform-specific descriptions; Guildframe's planning checklists are its own advice.

[LaunchBoom's tabletop page](https://www.launchboom.com/board-game-marketing/) and [Crowdfunding Nerds' services](https://crowdfundingnerds.com/marketing/) show existing specialist competition across prelaunch, email, creative and advertising. Their funding claims and prices are their own. They were not adopted as Guildframe results or a universal market fee. The opportunity is a clearly scoped specialist service with direct contact, useful campaign evidence and practical creator answers; demand and ranking are not guaranteed.

## Publication and validation receipts

Final build, page count, browser checks, sitemap submissions and direct IndexNow response are recorded in `SEO_RELEASE_2026-10-04.json` in the delivery artifacts after deployment. Owner-report evidence is saved separately there with account identifiers omitted.

The live sitemap contains 69 canonical pages. Google accepted its resubmission on October 4 and placed the homepage in its priority crawl queue after an indexing request. Bing accepted the same sitemap for processing on October 4; its displayed discovered count still reflects an older crawl. These are submission receipts, not a claim that all 69 pages are indexed.

The direct IndexNow submission of all 69 URLs returned HTTP 202 at 13:34:41 UTC on October 4: received, with key validation pending. The dashboard still shows Cloudflare asset hints; the new direct page batch has not yet been confirmed there. Its live ownership file was verified before the submission.

For future verified production deployments, run `npm run indexnow:submit -- --receipt=/path/to/receipt.json`. It submits only the live sitemap's canonical HTML destinations and rejects other hosts, duplicate URLs and asset URLs. Future releases can use the same command after their production checks. Cloudflare continues its existing automatic hints.

Field performance still needs enough real traffic. Cold synthetic results are recorded with their conditions; a universal two-second load or a ranking deadline is not claimed. Contact inbox delivery remains the separate provider-activation task. No outreach or backlink acquisition occurred.
