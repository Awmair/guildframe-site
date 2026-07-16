# Guildframe AI search baseline

Baseline date: 2026-07-17

## Technical baseline

- Public canonical origin: `https://guildframe.com`
- Public URLs in sitemap: 11
- Google Search Console: domain property connected; sitemap submitted
- Bing Webmaster Tools: site connected; sitemap submitted
- IndexNow: Cloudflare Crawler Hints enabled
- OAI-SearchBot: explicitly allowed by the application robots policy
- Product price: USD 419
- Product structured availability: `InStock`
- GA4: enabled in production
- AI referral event: `ai_referral_visit`

## Webmaster dashboard checkpoint

Checked on 2026-07-17 after the AEO/GEO release:

- Google accepted the refreshed sitemap successfully: 11 discovered pages, no
  sitemap error, and both submitted and last-read dates updated to 2026-07-17.
- Google's live homepage test reports that the URL is available to Google and
  can be indexed.
- Google detected one valid Product snippets item and one valid Merchant
  listings item. Both have non-critical notices only.
- Google's stored index record still reflects its old 2026-05-21 crawl, when
  robots.txt blocked the site. A fresh manual request hit the daily quota, so
  discovery now relies on the accepted sitemap until the quota resets.
- Google Search Console performance and indexing reports are still processing;
  there is no meaningful search or generative-AI trend data yet.
- Bing's live inspection reports that the homepage can be indexed, with no
  SEO/GEO issues and both JSON-LD and OpenGraph markup detected.
- Bing reports one known sitemap, zero sitemap errors, zero warnings, and 11
  discovered URLs. Its dashboard session expired before AI Performance metrics
  could be captured, so the first citation baseline remains pending.

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

Record whether Guildframe is mentioned, cited, accurately summarized and linked.
Citation counts are visibility signals, not rankings or guaranteed traffic.
