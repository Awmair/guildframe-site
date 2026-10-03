# Guildframe

Static Next.js site for a tabletop crowdfunding launch studio, deployed from GitHub main through the existing Cloudflare Pages integration.

Guildframe offers planning, prelaunch pages and email, campaign creative, paid advertising and live support for Kickstarter and Gamefound. Umair leads creative and advertising. Broader engagements are quoted; the existing design-only fee appears once on `/campaign-design#pricing`. The free mockup covers one opening campaign section using supplied artwork.

Contact: umair@guildframe.com. Production retains its existing form route until the Cloudflare contact Worker passes a real inbox delivery test. See `docs/OPEN_ACTIONS.md`.

Run `npm ci`, `npm run lint`, `npm run typecheck` and `npm test`. Production uses `npm run build:pages` with the existing production site URL and analytics ID. Static output lives in `out/`.

67 canonical routes: 13 service/category pages, 35 guides, 7 resources and retained company/store-planning pages. Existing URLs are preserved. Sources and practical recommendations are distinguished in the guides.

Generated raster mockups use ImageGen and are converted to WebP. Real project images and verified client excerpts remain separate from concept imagery. Motion uses CSS and progressive enhancement, with no-JavaScript and reduced-motion support.
