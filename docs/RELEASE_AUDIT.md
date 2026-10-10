# Guildframe release standard

Reviewed October 11, 2026. Current positioning: tabletop crowdfunding launch services. See CAMPAIGN_REBRAND.md for commercial facts and OPEN_ACTIONS.md for external gates.

The existing Cloudflare Pages integration deploys GitHub main. Build command: npm run build:pages. Static output: out/. Production-origin and analytics checks run before export. There is no custom GitHub Actions deployment.

69 canonical URLs preserve existing content and include six launch services, four marketing guides and two new buying/prelaunch decision guides. Every indexable page has a unique title, description and canonical, one H1, readable server-rendered content, shared navigation and a project enquiry. Sitemap dates match actual changes. Robots permits search and answer retrieval crawlers under the documented policy. RSC payload text files are excluded while llms.txt and the public IndexNow verification key remain available. The 404 page stays noindex and returns 404.

Visible FAQs match schema. Guides have direct answers, author identity, source links, related pages and breadcrumbs. After-funding guides retain their original URLs. Commercial summaries do not invent performance guarantees, funding attribution or partner credentials.

The existing design-only price appears once, on campaign-design#pricing. Broader quotes separate service fees from ads, software, platform and production costs. The signup form captures service interest and launch timing, while lead analytics exclude name, email, message and artwork link.

All images have alt text and dimensions. New raster assets use ImageGen; mockups are clearly concepts. WebP is used for page imagery; JPEG is used for the social card and PNG for icons. The optimized transparent WebP logo is used in site navigation. Six new transparent ImageGen product groups cover party cards, strategy board games, trading cards, RPG books, miniatures/terrain and dice/accessories. Their 320/480/640px WebP variants retain alpha, fixed dimensions and descriptive alt text. The compact hero follows the inspected reference product orbit, with no arrows or playback controls. The visual timeline uses accessible HTML and CSS for phones, conversations and project documents, reusing an existing ImageGen card-game concept throughout. The asset build removes unreferenced images from deployment output.

Decorative MeshGradient and Glass surfaces use the pinned shaders 4.0.4 core engine. They load after the main page, pause offscreen, and fall back to static CSS for unsupported GPUs and accessibility preferences. Browser verification passed 41 checks at 320, 375 and 1366px, including actual mesh animation with product layers hidden, offscreen pause, readable conversations and attachments, preference changes, no GPU, no adapter, data saving, no JavaScript and forced colours. The 282 static-output tests, lint, TypeScript and production-origin preflight passed. See SHADER_SURFACES.md.

Verify lint, TypeScript, real static-output tests and production preflight before publishing. Browser checks cover every route on mobile and desktop, overflow, images, hero height, stage previews, no-JavaScript content, reduced motion and intercepted form responses. Mocked form responses do not prove inbox delivery. Contact Worker activation requires real recipient/Reply-To verification and must preserve root iCloud mail.

Live production checks and sitemap submission receipts are retained with the delivery artifact. Search indexing and measured field speed remain external outcomes; local or laboratory checks are not ranking or performance guarantees.
