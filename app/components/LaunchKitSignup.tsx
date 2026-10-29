import Link from "next/link";
import { launchKitAutomatedSignup, launchKitEmbedUrl, launchKitFormUrl } from "../launch-kit";
import { siteConfig } from "../site-config";

export function LaunchKitSignup() {
  return <section className="kit-signup" id="get-the-kit" aria-labelledby="kit-signup-title">
    <span className="gf-eyebrow">Free by email</span>
    <h2 id="kit-signup-title">Get the complete launch kit.</h2>
    <p>{launchKitAutomatedSignup ? "Confirm your email and receive all five files together." : "Email me to request all five files together. I will reply with the complete kit."} Use the workbook and documents in your own project.</p>
    {launchKitEmbedUrl ? <iframe className="kit-signup-frame" src={launchKitEmbedUrl} title="Request the Guildframe tabletop launch kit" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : null}
    {launchKitFormUrl ? <a className="gf-button" href={launchKitFormUrl} data-analytics-event="launch_kit_signup_click" data-analytics-label="Get the complete launch kit" data-analytics-location="launch kit signup">Get the free kit</a> : !launchKitEmbedUrl ? <a className="gf-button" href={`mailto:${siteConfig.contactEmail}?subject=Tabletop%20launch%20kit%20request`} data-analytics-location="launch kit signup">Email Umair for the kit</a> : null}
    <p className="kit-signup-note">{launchKitAutomatedSignup ? "The kit is free. Six follow up lessons, a monthly newsletter and occasional Guildframe service offers are optional. Leave the marketing box unchecked to receive only the kit. You can unsubscribe at any time." : <>The link opens your email app. Send your request to {siteConfig.contactEmail}. Requesting the free kit does not subscribe you to marketing emails.</>} <Link href="/privacy">Privacy notice</Link>.</p>
  </section>;
}
