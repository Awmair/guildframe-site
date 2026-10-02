# Account checks still needed

Updated 2026-10-02. Current service: $975 USD campaign page copy and graphics for Kickstarter or Gamefound. The free mockup covers an opening section.

- **Contact email:** a Cloudflare Worker replacement is prepared in `workers/contact`, with formatted HTML/plain-text mail to `umair@guildframe.com` and visitor Reply-To. Cloudflare Email Sending configuration currently returns Unauthorized (2036). Resolve that access, verify `forms.guildframe.com` as the sending domain and verify the destination, then test inbox delivery before switching Pages to `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact`. See `CONTACT_EMAIL.md`. The existing endpoint stays active until activation. No correct Formspree endpoint is needed for the replacement.
- **Keyword metrics:** obtain an authorized Google Keyword Planner export. Record country, language, period and search network. No volume, CPC or advertiser competition was obtained in this pass. The 138 phrases are evidence-labelled targets, not a measured market forecast.
- **Google Search Console:** inspect the actual property, sitemap processing, indexed pages, query/page performance and Search generative AI inclusion control. Compare the ordinary Search performance report and Generative AI performance report. Public code/HTTP checks do not confirm account settings or indexing.
- **Core Web Vitals:** inspect real-user performance in Search Console. Browser layout checks and correct image dimensions do not establish field LCP, INP or CLS.
- **Bing Webmaster Tools:** inspect sitemap/indexing, search performance and AI Performance citations/grounding queries. Use authenticated URL tools to diagnose genuine crawler access. No account metrics were available for this pass.
- **GA4:** confirm `page_view`, `service_interest`, `ai_referral_visit` and successful `generate_lead` in the owner property. Mark actual successful enquiry submissions as key events. Browser queue checks verify implementation, not receipt in the GA4 property.

No ads, campaigns, billing setup, external outreach or new accounts are required to publish the site edits. Review actual data before creating extra keyword pages or changing legacy URLs.
