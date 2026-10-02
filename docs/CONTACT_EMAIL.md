# Contact form email

Prepared 2026-10-02. Activation is pending Cloudflare Email Sending access and an inbox delivery check. The production form still uses its existing endpoint.

The form sends project enquiries to **umair@guildframe.com**. The replacement endpoint is **/api/contact**, served by the `guildframe-contact` Cloudflare Worker. Each email contains the visitor's name, email, project type, campaign platform, artwork link, brief and the page they submitted from. Email includes HTML and plain text. Reply goes to the visitor's address.

The sender is **Guildframe enquiries <enquiries@forms.guildframe.com>**. Cloudflare authenticates this sending subdomain separately from the existing iCloud mailbox. Sending requires domain onboarding, sender DNS verification and a verified destination address. Keep `guildframe.com`'s iCloud MX, root SPF, Apple DKIM and existing DMARC records intact. Do not enable Email Routing on the root domain.

## Account setup

1. In the existing Cloudflare account, open [Email Sending](https://dash.cloudflare.com/0e4a8755a4057e51ab1e90386b0b008c/email-service/sending). Resolve access and onboard `forms.guildframe.com` for sending. Cloudflare supplies its own authentication records; do not invent DKIM values. This is outbound sending, separate from inbound Email Routing.
2. Add `umair@guildframe.com` as a destination address and confirm the verification email. Sending only to a verified destination is free on all plans according to [Cloudflare's pricing documentation](https://developers.cloudflare.com/email-service/platform/pricing/). Do not upgrade a plan or accept new charges without the owner's authorization.
3. Verify the sending domain's status. The current existing OAuth login can manage Pages, Workers and destination addresses, but requests to the sending configuration return **Unauthorized, code 2036**. No email domain or mail routing settings were changed during preparation.

## Deployment and activation

```sh
npm run test:contact
npx wrangler@4.129.0 deploy --dry-run --config workers/contact/wrangler.jsonc
npm run deploy:contact
```

The Worker route is limited to `guildframe.com/api/contact`. Its binding restricts both sender and recipient, and its rate limit allows three requests per client IP per minute. Other pages continue to use Cloudflare Pages.

Before switching the site, submit a clearly labelled test enquiry to the live Worker. Check that it reaches `umair@guildframe.com`, that the full brief and links display correctly, and that Reply addresses the test submitter. Provider acceptance and mocked tests do not confirm inbox receipt.

After that check, set **NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact** in the Pages project's production environment and rebuild the site. The endpoint is public configuration, not a credential. Preview builds remain on their existing endpoint unless explicitly configured; the Worker accepts only the production origin. Verify the live form's success/error states and lead event after the rebuilt site is published.

## Validation and data handling

`npm test` runs the contact Worker tests and the existing static-site checks. To verify all pages against the new endpoint before activation:

```sh
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact npm test
```

The Worker validates required fields, fixed category/platform options, email format, HTTP/HTTPS links and maximum lengths. It bounds the request body, rejects uploaded files and duplicate fields, checks the origin, drops honeypot submissions and applies a Cloudflare rate-limit binding. These checks reduce abuse; they are not a promise that all spam is eliminated.

Visitor-supplied text is escaped in HTML. The sender, recipient and subject are controlled by the server. Page attribution excludes query parameters and fragments. The Worker stores no submissions and logs no submitted names, email addresses, briefs or provider error text. Cloudflare and the recipient mailbox still process email; inspect the account's Email preview setting when onboarding.

Form success requires an accepted email result. Errors retain the visitor's input and provide an email contact link. The form prevents simultaneous duplicate submissions; an interrupted network response can still leave delivery uncertain, so a retry is not guaranteed to be unique. A native browser POST receives a readable confirmation/error page. No automatic reply or mailing-list subscription is sent to the visitor.

Primary references: [Workers email API](https://developers.cloudflare.com/email-service/api/send-emails/workers-api/), [sending setup](https://developers.cloudflare.com/email-service/get-started/send-emails/), [domain configuration](https://developers.cloudflare.com/email-service/configuration/domains/), [binding restrictions](https://developers.cloudflare.com/email-service/configuration/send-bindings/).
