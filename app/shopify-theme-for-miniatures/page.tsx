import { SeoLandingPage } from "../components/SeoLandingPage";
import { miniaturesContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme for Miniatures and Terrain",
  description:
    "A miniatures Shopify theme for detailed product media, variants, ranges and collections. Built for miniature studios and terrain makers.",
  path: "/shopify-theme-for-miniatures",
  keywords: ["Shopify theme for miniatures", "miniature store Shopify theme", "terrain ecommerce website"],
});

export default function MiniaturesThemePage() {
  return <SeoLandingPage content={miniaturesContent} />;
}
