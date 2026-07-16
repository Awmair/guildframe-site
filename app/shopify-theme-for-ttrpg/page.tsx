import { SeoLandingPage } from "../components/SeoLandingPage";
import { ttrpgContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Theme for TTRPG Publishers",
  description:
    "A TTRPG Shopify theme for books, adventures, supplements, dice and accessories. Cinematic, customizable and mobile responsive.",
  path: "/shopify-theme-for-ttrpg",
  keywords: ["TTRPG Shopify theme", "Shopify theme for RPG publishers", "tabletop RPG ecommerce"],
});

export default function TtrpgThemePage() {
  return <SeoLandingPage content={ttrpgContent} />;
}
