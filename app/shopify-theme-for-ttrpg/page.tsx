import { SeoLandingPage } from "../components/SeoLandingPage";
import { ttrpgContent } from "../landing-content";
import { pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Store and Theme Setup for TTRPG Publishers",
  description:
    "Plan a TTRPG Shopify store for books, PDFs, adventures and supplements. Organise formats, compatibility and product information after your campaign.",
  path: "/shopify-theme-for-ttrpg",
  keywords: ["TTRPG Shopify theme", "Shopify theme for RPG publishers", "tabletop RPG ecommerce"],
});

export default function TtrpgThemePage() {
  return <SeoLandingPage content={ttrpgContent} />;
}
