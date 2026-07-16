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
| Training crawlers | Controlled in Cloudflare | Search visibility and model training are separate choices |

The application emits explicit allow rules for `OAI-SearchBot` and
`ChatGPT-User`, plus the sitemap URL. Cloudflare may prepend its managed Content
Signals and training-crawler rules to the live file. Audit the rendered
`https://guildframe.com/robots.txt`, not only `app/robots.ts`, after every policy
change.

## Maintenance checks

1. Confirm Googlebot, Bingbot and OAI-SearchBot are not blocked in the live file.
2. Confirm Cloudflare bot controls do not override the intended search policy.
3. Keep the canonical sitemap URL present once.
4. Test the live file in Google Search Console and Bing Webmaster Tools.
5. Treat training opt-out changes as a separate policy decision.

## `llms.txt`

Guildframe does not currently publish `llms.txt`. Google states that it ignores
this file for Search and its generative AI features. No official Bing or OpenAI
guidance currently makes it a prerequisite for citation. Reconsider only if a
major target system documents support and the file can remain accurate without
duplicating the site.
