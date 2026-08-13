import { SeoLandingPage } from "../components/SeoLandingPage";
import { boardGameContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme and Store Setup for Board Games",
  description:
    "Choose a board game Shopify theme and structure the store around editions, expansions and bundles. Full build for $2,500, or build it yourself for $79.",
  path: "/shopify-theme-for-board-games",
  keywords: ["Shopify theme for board games", "board game Shopify theme", "tabletop Shopify theme"],
});

export default function BoardGameThemePage() {
  return <SeoLandingPage content={boardGameContent} />;
}
