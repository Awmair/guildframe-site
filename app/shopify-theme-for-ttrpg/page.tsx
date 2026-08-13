import { SeoLandingPage } from "../components/SeoLandingPage";
import { ttrpgContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Store and Theme Setup for TTRPG Publishers",
  description:
    "Build a TTRPG Shopify store for books, adventures, supplements, dice and accessories. Full build for $2,500, or build it yourself with the $79 guide.",
  path: "/shopify-theme-for-ttrpg",
  keywords: ["TTRPG Shopify theme", "Shopify theme for RPG publishers", "tabletop RPG ecommerce"],
});

export default function TtrpgThemePage() {
  return <SeoLandingPage content={ttrpgContent} />;
}
