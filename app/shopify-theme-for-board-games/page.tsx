import { SeoLandingPage } from "../components/SeoLandingPage";
import { boardGameContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme and Store Setup for Board Games",
  description:
    "What a Shopify theme for board games must show, from edition contents and the base game line to player count and preorder labels, and how to test one.",
  path: "/shopify-theme-for-board-games",
  keywords: ["Shopify theme for board games", "board game Shopify theme", "Shopify theme setup for board games", "tabletop Shopify theme"],
});

export default function BoardGameThemePage() {
  return <SeoLandingPage content={boardGameContent} />;
}
