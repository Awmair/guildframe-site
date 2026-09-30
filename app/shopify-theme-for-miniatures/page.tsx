import { SeoLandingPage } from "../components/SeoLandingPage";
import { miniaturesContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Store and Theme Setup for Miniatures",
  description:
    "Plan a miniatures Shopify store for physical models, STL files and terrain. Make scale, variants and delivery information clear after crowdfunding.",
  path: "/shopify-theme-for-miniatures",
  keywords: ["Shopify theme for miniatures", "miniature store Shopify theme", "terrain ecommerce website"],
});

export default function MiniaturesThemePage() {
  return <SeoLandingPage content={miniaturesContent} />;
}
