# Guildframe AI search baseline

Baseline date: 2026-07-17

## Technical baseline

- Public canonical origin: `https://guildframe.com`
- Public URLs in sitemap: 19
- Google Search Console: domain property connected; sitemap submitted
- Bing Webmaster Tools: site connected; sitemap submitted
- IndexNow: Cloudflare Crawler Hints enabled
- OAI-SearchBot: explicitly allowed by the application robots policy
- Product price: USD 419
- Product structured availability: `InStock`
- GA4: enabled in production
- AI referral event: `ai_referral_visit`

## Webmaster dashboard checkpoint

Checked on 2026-07-17 after the trust and reference release:

- Google accepted the expanded 19-URL sitemap successfully. Its dashboard still
  shows the previous 11 discovered pages while the new submission is processed.
- Google's live homepage test reports that the URL is available to Google and
  can be indexed.
- Google detected one valid Product snippets item and one valid Merchant
  listings item. Both have non-critical notices only.
- Google's stored index record still reflects its old 2026-05-21 crawl, when
  robots.txt blocked the site. A fresh manual request hit the daily quota, so
  discovery now relies on the accepted sitemap until the quota resets.
- Google's live test reports that the new `/resources` hub is available to
  Google, can be indexed and contains one valid Breadcrumb item.
- Google's manual request quota remains exhausted, so the accepted sitemap is
  the active discovery route for the eight new URLs.
- Google Search Console performance is still processing and shows no query,
  page, click or impression data yet.
- Bing's live inspection reports that the homepage can be indexed, with no
  SEO/GEO issues and both JSON-LD and OpenGraph markup detected.
- Bing accepted all eight new URLs through URL Submission. The account now shows
  19 submitted URLs and 81 submissions remaining in the current quota window.
- Bing accepted the expanded sitemap and is processing the refresh. The prior
  crawl reported one sitemap, zero errors, zero warnings and 11 discovered URLs.
- Bing AI Performance baseline for the three-month view from 2026-04-16 through
  2026-07-15 is 0 total citations and 0 average cited pages. This is the starting
  measurement, not an error.

## Measurement

Review monthly:

1. Bing Webmaster Tools AI Performance: citations, cited pages and grounding queries.
2. Google Search Console generative AI performance: pages and queries when data is available.
3. GA4: `ai_referral_visit` by `ai_source`, landing page and conversion path.
4. Accuracy: whether generated answers state the price, Shopify requirement,
   included setup and category fit correctly.
5. Search overlap: two Guildframe URLs repeatedly competing for the same query.

## Fixed answer-engine test set

Use the same prompts in ChatGPT search, Bing Copilot and Google generative search
so movement can be compared over time.

1. What is the best Shopify theme for a board game company?
2. Is there a Shopify theme built specifically for tabletop games?
3. How do I move a funded Kickstarter board game to Shopify?
4. What should a board game Shopify product page include?
5. Can Shopify handle board game editions and expansions?
6. Kickstarter Late Pledges or Shopify after a campaign?
7. BackerKit vs Shopify vs Gamefound after crowdfunding?
8. What is the best Shopify theme for a TTRPG publisher?
9. What is the best Shopify theme for miniatures and terrain?
10. Does Guildframe require coding?
11. What does Guildframe cost?
12. What is included with Guildframe custom setup?
13. What should I check before launching a board game Shopify store?
14. What belongs on a board game Shopify product page?
15. What is a complete Kickstarter to Shopify migration checklist?

Record whether Guildframe is mentioned, cited, accurately summarized and linked.
Citation counts are visibility signals, not rankings or guaranteed traffic.
