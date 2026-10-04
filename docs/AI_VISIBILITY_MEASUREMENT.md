# Search and AI visibility measurement

Updated 2026-10-04. See [SEO_RESEARCH_2026-10-03.md](SEO_RESEARCH_2026-10-03.md) for official sources and [SEO_PASS_2026-10-03.md](SEO_PASS_2026-10-03.md) for the owner baseline and its limits.

## Website enquiries

The analytics implementation records `page_view` after GA initialization, `service_interest` for tagged actions, `ai_referral_visit` once per source/session where storage works, and `generate_lead` only after Formspree returns a successful response. A free mockup request is not a purchase and has no $975 revenue value.

AI referrals match documented provider hosts and exact UTM source aliases (for example `chatgpt` or `chatgpt.com`). Subdomain matching requires a dot boundary. Session attribution is a useful signal, not proof of causation or comprehensive coverage. Direct, stripped-referrer and cross-device visits can be missed.

Successful lead events contain only the enquiry type, selected project category/platform, form pathname and available AI attribution. They do not contain the name, email, message or project URL. Page-view events preserve only a small allowlist of valid campaign UTM parameters; landing paths omit query strings. GA4 and Clarity remain the existing configured providers; no owner-property receipt was verified from local queue checks.

In GA4 compare actual enquiries by landing page and organic search/direct/AI-referral source. Use event-level `ai_source` attribution for a session segment; `traffic_type` is the existing emitted event parameter, not a new GA4 acquisition channel. Confirm custom dimensions and the `generate_lead` key-event setting in the owner account.

## Google and Bing

Google Search Console's current Generative AI performance report covers AI Overviews/AI Mode impressions by page, country, device and date. Guildframe's owner property was inspected on October 3 and its Search generative AI control is Include. The October 4 review captured 60 total AI impressions for July 15–September 29, 2026. Its page rows mainly concern existing Shopify content. They are a historical baseline, not results from the new launch-service release. Page-row impressions need not sum to the property total. Ordinary Search performance and website enquiry records remain necessary.

Bing Webmaster Tools AI Performance covers citations, cited pages and sampled grounding queries. The October 4 review showed 201 total citations for July 18–October 1, 2026, with a sampled grounding query about Shopify crowdfunding evaluation. These citations do not establish new launch-service visibility. Treat citations separately from visitors, enquiries and placement. Record the exact URL and whether the answer described the service accurately.

## Fixed accuracy sample

Use these prompts for repeatable manual samples, recording platform, date, exact prompt, answer, source links and errors:

1. Who designs Kickstarter pages for board games?
2. Who can write and design my Gamefound campaign page?
3. What does Guildframe include in a tabletop launch, and how are fees and ad spend quoted?
4. What should I send a Kickstarter campaign designer?
5. Can Guildframe design card game, RPG and miniature campaigns?
6. What is included in the free Guildframe mockup?

A prompt sample is not a universal AI ranking. Check for the correct $975 USD price, copy/graphics scope, supplied artwork, free opening section and agreed schedule. Review monthly once indexing and owner reports are available; no automation was created.
