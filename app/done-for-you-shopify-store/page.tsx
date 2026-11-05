import Link from "next/link";
import { TrustPage } from "../components/TrustPage";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";
import { contentDates } from "../content-dates";

export const metadata = pageMetadata({
  title: "Shopify Store Planning After Your Campaign",
  description:
    "Plan your tabletop Shopify store after crowdfunding. Prepare the product brief, compare build responsibilities and discuss optional setup with Guildframe.",
  path: "/done-for-you-shopify-store",
});

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Shopify Store Planning After Your Campaign",
        url: absoluteUrl("/done-for-you-shopify-store"),
        dateModified: contentDates.doneForYouShopifyStore,
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/done-for-you-shopify-store#breadcrumb"),
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "After your campaign", item: absoluteUrl("/done-for-you-shopify-store") },
        ],
      }} />
      <TrustPage
        label="After your campaign"
        title="Plan a Shopify store after crowdfunding"
        description="Turn campaign artwork and rewards into a clear store brief. Guildframe can help with post-campaign content and scope optional Shopify planning and setup as a separate project."
        updated={contentDates.doneForYouShopifyStore}
      >
        <section>
          <h2>Choose the help you need</h2>
          <p>
            You may need a store build, help adapting campaign content, or a
            handoff your own developer can use. Start with the catalogue and
            remaining work. The brief confirms which tasks Guildframe handles,
            which stay with your team and what needs another supplier.
          </p>
          <p>
            <a href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my Shopify store" data-analytics-location="store planning">Discuss my store handoff</a>{" "}
            or start with the free{" "}
            <Link href="/resources/board-game-shopify-store-checklist">board game Shopify store checklist</Link>.
          </p>
        </section>
        <section>
          <h2>Prepare a useful store brief</h2>
          <ul>
            <li>Your campaign or current store link and its present stage.</li>
            <li>Products, editions, expansions, bundles and digital files, including prices and stock status.</li>
            <li>Final artwork, product facts, rules and approved campaign copy.</li>
            <li>Required pages, apps, integrations and any preferred theme.</li>
            <li>Confirmed shipping regions, preorder terms and the person responsible for fulfilment.</li>
            <li>Your target opening date, budget and the tasks your team will handle.</li>
          </ul>
          <p>
            Mark unfinished decisions clearly. A product with an unconfirmed
            delivery date needs a different sales plan from stock ready to ship.
            The <Link href="/guides/kickstarter-to-shopify-launch-timeline">launch timeline</Link>{" "}
            helps order the work around those decisions.
          </p>
        </section>
        <section>
          <h2>Agree the work before the build</h2>
          <p>
            A separate store proposal should name the products and pages, theme
            customisation, content entry, app setup and testing it covers. Confirm
            the review process, editable files, account handoff and support period.
            Agree the price and timing after the requirements are reviewed.
          </p>
          <p>
            Keep Shopify subscriptions, paid themes, apps and other supplier costs
            visible in the budget. Your production and fulfilment team confirms
            inventory, delivery, tax and shipping facts; the store needs accurate
            inputs before it can communicate them.
          </p>
          <p>
            Compare <Link href="/guides/best-shopify-themes-for-board-games">Shopify themes for board games</Link>{" "}
            and <Link href="/guides/shopify-developer-vs-diy-theme">hiring a developer versus building yourself</Link>{" "}
            if you are still choosing the route.
          </p>
        </section>
        <section>
          <h2>Check the complete buying path</h2>
          <p>
            Test a real base game, edition choice and compatible expansion on a
            phone and desktop. Confirm the cart, delivery wording, shipping
            coverage, payment settings and notifications. Check how the order
            reaches the person or provider who fulfils it.
          </p>
          <p>
            Keep original backer rewards separate from new store orders. The{" "}
            <Link href="/guides/move-from-kickstarter-to-shopify">Kickstarter to Shopify migration guide</Link>{" "}
            covers that handoff. The store opens after the agreed checks pass and
            you approve publication.
          </p>
        </section>
        <section>
          <h2>Need the wider campaign handoff?</h2>
          <p>
            <Link href="/post-campaign-support">Post-campaign support</Link>{" "}
            can cover backer communication, pledge manager content and late pledge
            assets alongside a separately scoped store project. Share the campaign
            link and outstanding task list through the enquiry form below.
          </p>
        </section>
      </TrustPage>
    </>
  );
}
