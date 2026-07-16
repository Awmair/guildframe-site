import { SeoLandingPage } from "../components/SeoLandingPage";
import { boardGameContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme for Board Games",
  description:
    "A board game Shopify theme for tabletop creators. Sell core games, editions, expansions and bundles with free custom setup during early release.",
  path: "/shopify-theme-for-board-games",
  keywords: ["Shopify theme for board games", "board game Shopify theme", "tabletop Shopify theme"],
});

export default function BoardGameThemePage() {
  return <SeoLandingPage content={boardGameContent} />;
}
