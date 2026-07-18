import { SeoLandingPage } from "../components/SeoLandingPage";
import { kickstarterContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify for Tabletop Creators",
  description:
    "Turn a funded Kickstarter into a permanent Shopify store without rebuilding your campaign. Built for board games, TTRPGs and miniatures.",
  path: "/kickstarter-to-shopify",
  keywords: [
    "Kickstarter to Shopify",
    "Shopify store after Kickstarter",
    "post campaign Shopify store",
  ],
});

export default function KickstarterToShopifyPage() {
  return <SeoLandingPage content={kickstarterContent} />;
}
