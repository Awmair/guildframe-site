import { SeoLandingPage } from "../components/SeoLandingPage";
import { boardGameContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme for Board Games",
  description:
    "A premium board game Shopify theme for tabletop creators. Buy the customizable theme for $349 or get a complete Shopify store build for $2,199, including up to 50 product SKUs.",
  path: "/shopify-theme-for-board-games",
  keywords: ["Shopify theme for board games", "board game Shopify theme", "tabletop Shopify theme"],
});

export default function BoardGameThemePage() {
  return <SeoLandingPage content={boardGameContent} />;
}
