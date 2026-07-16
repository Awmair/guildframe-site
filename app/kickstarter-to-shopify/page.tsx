import { SeoLandingPage } from "../components/SeoLandingPage";
import { kickstarterContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify for Tabletop Creators",
  description:
    "Move from a funded Kickstarter to a permanent Shopify store without rebuilding your campaign. Built for board games, TTRPGs and miniatures.",
  path: "/kickstarter-to-shopify",
  keywords: ["Kickstarter to Shopify", "move Kickstarter to Shopify", "post crowdfunding store"],
});

export default function KickstarterToShopifyPage() {
  return <SeoLandingPage content={kickstarterContent} />;
}
