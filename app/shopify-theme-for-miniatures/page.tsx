import { SeoLandingPage } from "../components/SeoLandingPage";
import { miniaturesContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Store and Theme Setup for Miniatures",
  description:
    "Build a miniatures Shopify store for detailed product media, variants, ranges and collections. Full build for $2,500, or build it yourself for $79.",
  path: "/shopify-theme-for-miniatures",
  keywords: ["Shopify theme for miniatures", "miniature store Shopify theme", "terrain ecommerce website"],
});

export default function MiniaturesThemePage() {
  return <SeoLandingPage content={miniaturesContent} />;
}
