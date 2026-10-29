# Guildframe

Static Next.js site for a tabletop crowdfunding launch studio, deployed from GitHub main through the existing Cloudflare Pages integration.

Guildframe offers planning, prelaunch pages and email, campaign creative, paid advertising and live support for Kickstarter and Gamefound. Umair leads creative and advertising. Broader engagements are quoted; the existing design-only fee appears once on `/campaign-design#pricing`. The free mockup covers one opening campaign section using supplied artwork.

Contact: umair@guildframe.com. The Cloudflare Pages function at `/api/contact` delivers formatted enquiries through Sender, with a direct reply action. Server credentials stay in encrypted Pages bindings. See `docs/CONTACT_DELIVERY.md` and `docs/OPEN_ACTIONS.md`.

Run `npm ci`, `npm run lint`, `npm run typecheck` and `npm test`. Production uses `npm run build:pages` with the existing production site URL and analytics ID. Static output lives in `out/`.

The sitemap lists the current canonical pages, including 43 practical guides, service/category pages, verified case studies and launch resources. Existing URLs are preserved. Sources and practical recommendations are distinguished in the guides.

Generated raster mockups use ImageGen and are converted to WebP. Real project images and verified client excerpts remain separate from concept imagery. Motion uses CSS and progressive enhancement, with no-JavaScript and reduced-motion support.

## Launch kit and email

The free Tabletop Kickstarter Launch Kit lives at `/resources/tabletop-kickstarter-launch-kit`. Five editable/downloadable files and the ZIP live in `public/downloads/launch-kit`; rebuild scripts are in `scripts/kit`. The workbook is a one-manufactured-SKU planning model with digital rewards, not a guarantee or a tax calculation. See `docs/LAUNCH_KIT_QA.md`.

Sender hosts the signup form and confirmation. Kit requests and optional marketing are separate groups. The welcome workflow delivers the complete kit, then checks marketing permission before each lesson. `docs/email-launch-kit` contains the editable email content and operating instructions. No paid feature is required.

Optional Google Analytics and Clarity scripts load only after analytics consent. First observed source information stays in memory during the visit and is submitted with the enquiry; an unknown source remains unknown.
