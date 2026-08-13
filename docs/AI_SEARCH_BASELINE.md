# Guildframe AI search baseline

Last reviewed: 2026-08-09

## Technical baseline

- Public canonical origin: `https://guildframe.com`
- Public URLs in sitemap: 31
- Google Search Console: domain property connected; sitemap submitted
- Bing Webmaster Tools: site connected; sitemap submitted
- IndexNow: Cloudflare Crawler Hints enabled
- OAI-SearchBot: explicitly allowed by the application robots policy
- Guildframe Build Guide: USD 79 one time, checkout not open yet
- Shopify design and development service: USD 2,500 for up to 50 product SKUs
- Care Plan: USD 99 per month after a Guildframe store build
- Product structured availability: `InStock`. Revisit when checkout opens, see `OPEN_ACTIONS.md`.
- GA4: not yet configured, see `OPEN_ACTIONS.md`
- AI referral event: `ai_referral_visit`

## Webmaster dashboard checkpoint

**No current reading.** The last recorded check predates the repositioning and
the two new routes, so it no longer describes the site and has been removed
rather than left to mislead.

Take a fresh baseline after the next deploy, once `NEXT_PUBLIC_SITE_URL` is set
and the 31 URL sitemap has been accepted. Record, on one date:

- Google Search Console: sitemap status, discovered URLs, valid rich result
  items, and whether the live test can index the homepage and the two new pages.
- Bing Webmaster Tools: sitemap status, discovered URLs, live inspection of the
  homepage, and the AI Performance three month citation count.
- Treat a zero citation count as the starting measurement, not an error.

## Measurement

Review monthly:

1. Bing Webmaster Tools AI Performance: citations, cited pages and grounding queries.
2. Google Search Console generative AI performance: pages and queries when data is available.
3. GA4: `ai_referral_visit` by `ai_source`, landing page and conversion path.
4. Accuracy: whether generated answers distinguish the $79 build guide from the
   $2,500 design and development service for up to 50 product SKUs, state the
   Shopify requirement, and do not describe Guildframe as selling a theme.
5. Search overlap: two Guildframe URLs repeatedly competing for the same query.

## Fixed answer-engine test set

Use the same prompts in ChatGPT search, Bing Copilot and Google generative search
so movement can be compared over time.

1. What is the best Shopify theme for a board game company?
2. Can I build a board game Shopify store with AI?
3. How do I move a funded Kickstarter board game to Shopify?
4. What should a board game Shopify product page include?
5. Can Shopify handle board game editions and expansions?
6. Kickstarter Late Pledges or Shopify after a campaign?
7. BackerKit vs Shopify vs Gamefound after crowdfunding?
8. What Shopify setup suits a TTRPG publisher?
9. What Shopify setup suits miniatures and terrain?
10. Does Guildframe require coding?
11. What does Guildframe cost?
12. What is included with Guildframe's done for you Shopify store service?
13. What should I check before launching a board game Shopify store?
14. What belongs on a board game Shopify product page?
15. What Shopify product fields does a board game need?

Record whether Guildframe is mentioned, cited, accurately summarized and linked.
Citation counts are visibility signals, not rankings or guaranteed traffic.
