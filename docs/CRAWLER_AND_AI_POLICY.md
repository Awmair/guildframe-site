# Guildframe crawler and AI policy

Last reviewed: 2026-08-13

## Discovery policy

Guildframe permits indexing and answer-engine retrieval of its public pages.

| Crawler or use | Policy | Reason |
| --- | --- | --- |
| Googlebot | Allow | Google Search and its generative search features use the search index |
| Bingbot | Allow | Bing Search, Copilot grounding and Bing AI Performance |
| OAI-SearchBot | Allow | ChatGPT search discovery, summaries and citations |
| ChatGPT-User | Allow | User-requested page retrieval |
| Training crawlers | Blocked in the application robots policy | Search visibility and model training are separate choices |

The application emits explicit allow rules for `OAI-SearchBot` and
`ChatGPT-User`, explicit blocks for training crawlers, and the sitemap URL.

The static export writes a React payload file beside every route, such as
`/about.txt`. Those files duplicate page text and exist only for client side
navigation, so every allowed user agent group carries `Disallow: /*.txt$` with
an explicit `Allow: /llms.txt`. Search engines resolve the conflict by path
specificity, so `llms.txt` stays crawlable while the payloads do not.
Cloudflare managed robots.txt is disabled because its non-standard
`Content-Signal` directive produces a Bing Webmaster Tools parser error. Audit
the rendered `https://guildframe.com/robots.txt`, not only `app/robots.ts`,
after every policy change.

## Maintenance checks

1. Confirm Googlebot, Bingbot and OAI-SearchBot are not blocked in the live file.
2. Confirm Cloudflare bot controls do not override the intended search policy.
3. Keep the canonical sitemap URL present once.
4. Test the live file in Google Search Console and Bing Webmaster Tools.
5. Treat training opt-out changes as a separate policy decision.

## `llms.txt`

Guildframe publishes `llms.txt` as a concise, supplemental discovery summary.
It is not a substitute for crawlable pages, canonical metadata, schema or the
sitemap. Keep it aligned with the live offers, prices, checkout status, primary
guides and reference data whenever those facts change. It must state that
Guildframe does not sell a Shopify theme.
