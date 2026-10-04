import type {Metadata,Viewport} from "next";
import "./globals.css";
import "./campaign.css";
import "./editorial.css";
import "./launch.css";
import "./studio.css";
import "./journey.css";
import "./hero-gallery.css";
import {JsonLd} from "./components/JsonLd";
import {Analytics} from "./components/Analytics";
import {CampaignMotion} from "./components/CampaignMotion";
import {absoluteUrl,siteConfig} from "./site-config";
import {authorEntity} from "./seo-entities";
const title="Kickstarter Agency for Board Games & Tabletop | Guildframe";
const description="Kickstarter and Gamefound launch services for board games, card games, RPGs and miniatures. Planning, prelaunch, campaign design, paid ads and launch support.";
export const metadata:Metadata={metadataBase:new URL(siteConfig.url),title:{default:title,template:"%s | Guildframe"},description,icons:{icon:"/favicon.png",shortcut:"/favicon.png",apple:"/favicon-192x192.png"},verification:siteConfig.googleSiteVerification?{google:siteConfig.googleSiteVerification}:undefined,alternates:{canonical:"/"},robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},openGraph:{title,description,type:"website",siteName:"Guildframe",url:"/",images:[{url:siteConfig.socialImage,width:1200,height:630,alt:"Tabletop crowdfunding launches by Guildframe"}]},twitter:{card:"summary_large_image",title,description,images:[siteConfig.socialImage]}};
export const viewport:Viewport={themeColor:"#FFF5E7",width:"device-width",initialScale:1};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><head><link rel="preload" href="/fonts/manrope-latin-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><JsonLd data={{"@context":"https://schema.org","@graph":[authorEntity(),{"@type":"Organization","@id":absoluteUrl("/#organization"),name:"Guildframe",url:absoluteUrl("/"),logo:absoluteUrl("/brand/guildframe-campaign-logo-400.webp"),email:siteConfig.contactEmail,description:siteConfig.description,contactPoint:{"@type":"ContactPoint",contactType:"customer enquiries",email:siteConfig.contactEmail},subjectOf:[{"@id":absoluteUrl("/about")},{"@id":absoluteUrl("/editorial-policy")}],knowsAbout:["Kickstarter campaign design","Gamefound campaign design","Board games","Card games","Tabletop RPGs","Miniatures","Tabletop accessories"]},{"@type":"WebSite","@id":absoluteUrl("/#website"),name:"Guildframe",url:absoluteUrl("/"),publisher:{"@id":absoluteUrl("/#organization")},inLanguage:"en"}]}}/><Analytics/><CampaignMotion/>{children}</body></html>}
