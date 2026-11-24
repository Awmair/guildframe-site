# Guildframe

Static Next.js site for a tabletop crowdfunding launch studio, deployed from GitHub main through the existing Cloudflare Pages integration.

Guildframe offers planning, prelaunch pages and email, campaign creative, paid advertising and live support for Kickstarter and Gamefound. Umair leads creative and advertising. Broader engagements are quoted; the existing design-only fee appears once on `/campaign-design#pricing`. The free mockup covers one opening campaign section using supplied artwork.

Contact: umair@guildframe.com. The Cloudflare Pages function at `/api/contact` delivers formatted enquiries through Sender, with a direct reply action. Server credentials stay in encrypted Pages bindings. See `docs/CONTACT_DELIVERY.md` and `docs/OPEN_ACTIONS.md`.

Run `npm ci`, `npm run lint`, `npm run typecheck` and `npm test`. Production uses `npm run build:pages` with the existing production site URL and analytics ID. Static output lives in `out/`.

The sitemap lists the current canonical pages, including 43 practical guides, service/category pages, verified case studies and launch resources. Existing URLs are preserved. Sources and practical recommendations are distinguished in the guides.

Generated raster mockups use ImageGen and are converted to WebP. Real project images and verified client excerpts remain separate from concept imagery. Motion uses CSS and progressive enhancement, with no-JavaScript and reduced-motion support.

## Retired launch kit

The free launch kit was retired on 25 November 2026. Its page, thanks page and download folder now redirect to `/guides` (see `public/_redirects`). Earlier subscribers are covered by the privacy policy; their Sender records and unsubscribe handling stay in Sender. The kit source, build scripts and email drafts remain in git history before that date.

Optional Google Analytics and Clarity scripts load only after analytics consent. First observed source information stays in memory during the visit and is submitted with the enquiry; an unknown source remains unknown.
