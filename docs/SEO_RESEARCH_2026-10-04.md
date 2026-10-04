# Guildframe search research and implementation

Reviewed October 4, 2026 using the owner's signed-in Chrome Search Console, Bing Webmaster Tools and Google Ads Keyword Planner tabs, plus official platform documentation and first-party agency pages. Google Ads was used only for attempted keyword research. No ads, budgets or billing settings were changed.

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

Google Ads Keyword Planner was initially blocked by its “Turn off ad blockers” interstitial after clean rechecks. The owner later reported pausing the blocker and reopening the planner. No Google volume, CPC, bidding competition or forecast has been exported in this pass. Those fields remain unavailable; Ads competition is not organic ranking difficulty.

Priority is based on the purchasing decision and service fit, supported by observed search results and existing owner queries. It is not a fabricated volume score. `SEO_PAGE_MAP_2026-10-04.csv` maps every canonical page to one primary intent; `KEYWORD_RESEARCH_2026-10-04.csv` distinguishes reported data from editorial long-tail targets. Existing autocomplete evidence remains in the October 3 keyword map.

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

After a verified production deployment, run `npm run indexnow:submit -- --receipt=/path/to/receipt.json`. It submits only the live sitemap's canonical HTML destinations and rejects other hosts, duplicate URLs and asset URLs. Future releases can use the same command after their production checks. Cloudflare continues its existing automatic hints.

Field performance still needs enough real traffic. Cold synthetic results are recorded with their conditions; a universal two-second load or a ranking deadline is not claimed. Contact inbox delivery remains the separate provider-activation task. No outreach or backlink acquisition occurred.
