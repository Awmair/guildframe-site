# Release checks and remaining operations

Updated 29 October 2026.

- **Website:** visual homepage and guide-library overhaul, 43 guides, five-file tabletop launch kit, privacy policy and kit/website terms. Existing canonical URLs are preserved. Release verification receipts are kept with the delivery artifacts.
- **Contact mail:** `/api/contact` is a Cloudflare Pages function using Sender. The verified domain has SPF, DKIM and DMARC; existing iCloud routing is preserved. Server credentials are encrypted Pages bindings. Real delivery and the notification reply action have been checked. Sender did not preserve the requested Reply-To header, so use the prominent reply action in the message. One early formatted test was classified as spam and marked not spam; provider acceptance does not guarantee inbox placement.
- **Signup:** Sender form `dyPKAg` is published with native double opt-in, required email, optional first name and an unchecked optional marketing choice. KIT_REQUESTED and MARKETING are separate. The user can receive the complete kit without marketing. Account open/click tracking is disabled; functional delivery and unsubscribe records remain. Website analytics requires a separate browser choice.
- **Sequence:** workflow `ejRyxW` contains the kit delivery plus six lessons at days 2, 5, 8, 12, 17 and 21. Each lesson checks marketing membership and the enquiry/proposal/client exclusion. Activation and final end-to-end receipts belong in the release handoff after live downloads are verified. The monthly newsletter is an editable unsent draft.
- **Search:** the October 28 release had 79 canonical pages and accepted Google/Bing discovery submissions. This release adds the kit, privacy and terms. Submit the refreshed live sitemap to IndexNow after deployment. Acceptance and crawl requests do not prove indexing, ranking or AI citation.
- **Measurement:** optional source question and in-memory first-touch information help attribute enquiries without inventing a source. A form event records backend acceptance, not a qualified or paid project. Confirm real conversions in the owner property as traffic arrives.
- **Content:** the launch planner models one manufactured product shared by physical reward tiers, plus digital rewards. Additional products need separate costing. Monthly newsletters need current useful content before sending. Never import existing enquiries into marketing without their permission.
- **Dependencies:** Next 16.4.3 and the current lockfile passed the release audit with no reported vulnerabilities. Re-run normal checks on future changes.

See `docs/LAUNCH_KIT_QA.md`, `docs/CONTACT_DELIVERY.md` and `docs/email-launch-kit/` for implementation, content and activation details.
