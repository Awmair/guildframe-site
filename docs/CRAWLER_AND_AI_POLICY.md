# Guildframe crawler and AI policy

Last reviewed: 2026-07-17

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
sitemap. Keep it aligned with the live offers, prices, preset names and primary
guides whenever those facts change.
