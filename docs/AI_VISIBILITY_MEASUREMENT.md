# Guildframe AI visibility measurement

Last reviewed: 2026-07-17

## What is measured

Guildframe treats AI visibility as a measurable discovery channel, not a ranking
guarantee. The production analytics layer records:

- `ai_referral_visit` once per AI source and browser session
- `ai_source` values for ChatGPT, Perplexity, Copilot, Claude, Gemini, You.com and Phind
- the landing page and referring host for each detected visit
- the stored AI source on later CTA and checkout events in the same session
- `traffic_type=ai_referral` on attributed conversion events

ChatGPT links that include `utm_source=chatgpt.com` are recognized even when the
browser does not send a conventional referrer.

## GA4 review

Create one exploration or report with:

1. Event name: `ai_referral_visit`, `begin_checkout`, `checkout_redirect`.
2. Dimensions: `ai_source`, landing page, page location and CTA location.
3. Metrics: users, sessions, event count and key events.
4. Segment: sessions where `traffic_type` equals `ai_referral`.
5. Comparison: AI-referred sessions against organic search and direct sessions.

Mark only real commercial outcomes as key events. Do not treat an AI referral visit
as a conversion.

## Bing review

Review Bing Webmaster Tools AI Performance monthly:

- total citations
- cited pages
- grounding queries
- citation trend
- topics and intents when available

Record both the number and the exact pages cited. A citation that states the wrong
theme price, service price or platform requirement is an accuracy problem even when the
visibility number increases.

## Fixed monthly prompt set

Use the same prompts in ChatGPT search, Bing Copilot and Google generative search:

1. What is the best Shopify theme for a board game company?
2. How do I move from Kickstarter to Shopify after funding?
3. When should I launch Shopify after Kickstarter?
4. Can I sell board game preorders on Shopify?
5. How should I sell board game expansions and add-ons online?
6. Kickstarter Late Pledges or Shopify after funding?
7. BackerKit vs Shopify vs Gamefound after crowdfunding?
8. What should a board game Shopify product page include?
9. How many tabletop game projects funded on Kickstarter in 2024?
10. What do the Guildframe theme and done-for-you store service cost?

For each prompt, record whether Guildframe was mentioned, linked, cited and
accurately summarized. Keep screenshots or exported dashboard evidence where the
platform permits it.

## Release checks

- Confirm new pages are indexed before interpreting a zero-citation result.
- Confirm the live robots policy allows OAI-SearchBot, ChatGPT-User, Bingbot and Googlebot.
- Confirm every citable figure has a visible source and reproducible calculation.
- Confirm AI referral events appear in GA4 DebugView or Realtime after a controlled test.
- Review monthly; daily movement is too noisy to support useful conclusions.
