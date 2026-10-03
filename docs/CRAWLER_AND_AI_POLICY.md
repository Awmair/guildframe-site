# Public crawler and AI retrieval policy

Updated 2026-10-03.

Public HTML permits indexing and search retrieval. Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and Claude-SearchBot have explicit allow rules. ChatGPT-User is allowed for user-requested retrieval. The wildcard also permits ordinary public retrieval.

The existing training opt-outs remain: Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, CloudflareBrowserRenderingCrawler, Google-Extended, GPTBot and meta-externalagent. Search retrieval and training policies are separate choices. Google's Search generative AI inclusion control is an owner-account setting, separate from Google-Extended; the Guildframe owner property was inspected on October 3 and shows Include.

Every allowed group excludes static React navigation payloads with `Disallow: /*.txt$` and permits the supplemental `/llms.txt`. The more specific path keeps that summary crawlable. The canonical sitemap is `/sitemap.xml`.

Check the live robots file after releases. CDN or bot controls may override application intent; a request using a crawler-shaped User-Agent is only an HTTP check, not proof that a verified Googlebot/Bingbot IP can access the site. Confirm genuine access with owner URL tools and crawl reports.

`llms.txt` is a maintained service summary, not an AI ranking mechanism. Google currently ignores it for visibility/rankings. FAQPage markup matches visible questions but Google discontinued FAQ rich results in May 2026. No special AEO/GEO schema or new machine file is required.

Primary documentation is linked in [SEO_AEO_RESEARCH_2026-09-30.md](SEO_AEO_RESEARCH_2026-09-30.md). No training opt-in or Cloudflare account setting was changed by this pass.
