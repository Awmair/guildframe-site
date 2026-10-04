# Guildframe release standard

Reviewed October 4, 2026. Current positioning: tabletop crowdfunding launch services. See CAMPAIGN_REBRAND.md for commercial facts and OPEN_ACTIONS.md for external gates.

The existing Cloudflare Pages integration deploys GitHub main. Build command: npm run build:pages. Static output: out/. Production-origin and analytics checks run before export. There is no custom GitHub Actions deployment.

67 canonical URLs preserve existing content and add six services and four marketing guides. Every indexable page has a unique title, description and canonical, one H1, readable server-rendered content, shared navigation and a project enquiry. Sitemap dates match actual changes. Robots permits search and answer retrieval crawlers under the documented policy. RSC payload text files are excluded while llms.txt remains available. The 404 page stays noindex and returns 404.

Visible FAQs match schema. Guides have direct answers, author identity, source links, related pages and breadcrumbs. After-funding guides retain their original URLs. Commercial summaries do not invent performance guarantees, funding attribution or partner credentials.

The existing design-only price appears once, on campaign-design#pricing. Broader quotes separate service fees from ads, software, platform and production costs. The signup form captures service interest and launch timing, while lead analytics exclude name, email, message and artwork link.

All images have alt text and dimensions. New raster assets use ImageGen; mockups are clearly concepts. WebP is used for page imagery; JPEG is used for the social card and PNG for icons. The optimized transparent WebP logo is used in site navigation. The visual timeline uses accessible HTML and CSS for phones, conversations and project documents, reusing an existing ImageGen card-game concept throughout. The asset build removes unreferenced images from deployment output.

Verify lint, TypeScript, real static-output tests and production preflight before publishing. Browser checks cover every route on mobile and desktop, overflow, images, hero height, stage previews, no-JavaScript content, reduced motion and intercepted form responses. Mocked form responses do not prove inbox delivery. Contact Worker activation requires real recipient/Reply-To verification and must preserve root iCloud mail.

Live production checks and sitemap submission receipts are retained with the delivery artifact. Search indexing and measured field speed remain external outcomes; local or laboratory checks are not ranking or performance guarantees.
