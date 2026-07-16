# Guildframe Cloudflare Pages deployment

This project is a static Next.js export designed for Cloudflare Pages' free
tier. GitHub stores the source. Cloudflare's own Git integration builds and
deploys it, so GitHub Actions is not involved.

## 1. Complete the four launch settings

Create a local `.env.local` from `.env.example` for production-equivalent
testing. Never commit `.env.local`.

| Variable | Required | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Final HTTPS origin, such as `https://guildframe.com` |
| `NEXT_PUBLIC_CHECKOUT_URL` | Yes | Final secure payment or product checkout URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Yes | GA4 web stream ID beginning with `G-` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google HTML verification token; leave empty when using DNS verification |

The strict build deliberately fails if the domain, checkout URL or GA4 ID is
missing. This prevents a production deployment with localhost canonicals,
inactive purchasing or missing conversion tracking.

## 2. Verify the release locally

```bash
npm test
npm run build:pages:local
npm run preflight:strict
```

For the final local static build, the environment variables above must be
available in the shell or `.env.local`. The deployable output is `out/`.

## 3. Push the source to GitHub

Create a private or public GitHub repository, then push this project to its
`main` branch. Do not add anything under `.github/workflows/`.

Keep these out of Git:

- `.env.local`
- `node_modules/`
- `.next/`
- `out/`
- `dist/`

## 4. Connect GitHub directly to Cloudflare Pages

In Cloudflare:

1. Open **Workers & Pages**.
2. Choose **Create application**, then **Pages**, then **Connect to Git**.
3. Authorize the Cloudflare Workers & Pages GitHub App for only the Guildframe
   repository.
4. Select the repository and use `main` as the production branch.
5. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build:pages` |
| Build output directory | `out` |
| Root directory | `/` |
| Node version environment variable | `NODE_VERSION=22.13.0` |

6. Add the required launch variables from section 1 to both **Production** and
   **Preview** environment settings. Preview may use the production checkout URL
   only if test purchases are safe; otherwise use a test checkout URL.
7. Save and deploy.

Cloudflare now builds every push to `main`. Other branches can produce preview
URLs without changing production. This is Cloudflare's Git integration, not a
GitHub Actions workflow.

## 5. Connect the custom domain

After the first `pages.dev` deployment passes review:

1. Open the Pages project and select **Custom domains**.
2. Add the final domain.
3. Confirm HTTPS is active.
4. Update `NEXT_PUBLIC_SITE_URL` to that exact HTTPS origin if the first build
   used a temporary Pages URL.
5. Trigger one new production deployment.

Do not launch with a `pages.dev` URL in canonical tags if the custom domain is
the intended public address.

## 6. Analytics and conversion verification

The site loads GA4 only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured. It
tracks:

- page views across every route;
- `begin_checkout` on Guildframe purchase calls to action;
- `checkout_redirect` when the visitor leaves the purchase page for payment.

After deployment:

1. Open the live site in a private browser window.
2. Check GA4 **Realtime** for the page view.
3. Click a purchase button and confirm `begin_checkout`.
4. Continue from `/buy` and confirm `checkout_redirect`.
5. Mark the most useful checkout event as a key event in GA4.

Cloudflare Web Analytics can also be enabled in the Pages dashboard for a
simple independent traffic view, but GA4 remains the conversion source.

## 7. Google Search Console

Use a Domain property and verify ownership with the DNS TXT record in
Cloudflare DNS. DNS verification avoids placing a verification token in the
site build.

After verification:

1. Submit `https://YOUR-DOMAIN/sitemap.xml`.
2. Inspect the homepage, `/buy`, the four solution pages and the four articles.
3. Request indexing only after the final custom domain is active.
4. Check Page indexing, Core Web Vitals and Enhancements after Google begins
   crawling.

## 8. Final live checks

- Homepage, `/buy`, four solution pages and four guides return successfully.
- Unknown URLs show the branded 404 page.
- `/pricing`, `/blog` and other legacy paths redirect correctly.
- Canonicals, Open Graph URLs, sitemap and robots.txt use the final domain.
- Social sharing displays the Guildframe tabletop card.
- The payment URL opens the intended live checkout.
- GA4 page views and checkout events arrive.
- Mobile, tablet and desktop layouts have no horizontal overflow.

If a bad release reaches production, open **Deployments** in the Pages project
and roll back to the prior successful deployment.
