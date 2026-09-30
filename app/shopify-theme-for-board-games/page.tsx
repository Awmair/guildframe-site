import { SeoLandingPage } from "../components/SeoLandingPage";
import { boardGameContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme and Store Setup for Board Games",
  description:
    "Plan a board game Shopify store after crowdfunding. Organise core games, editions, expansions and bundles, then review the buying path before launch.",
  path: "/shopify-theme-for-board-games",
  keywords: ["Shopify theme for board games", "board game Shopify theme", "tabletop Shopify theme"],
});

export default function BoardGameThemePage() {
  return <SeoLandingPage content={boardGameContent} />;
}
