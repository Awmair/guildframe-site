import {notFound} from "next/navigation";
import {campaignPages} from "../campaign-pages";
import {CampaignServicePage} from "../components/CampaignServicePage";
import {pageMetadata} from "../site-config";
export const dynamicParams=false;
export function generateStaticParams(){return campaignPages.map(p=>({campaign:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{campaign:string}>}){const {campaign}=await params;const p=campaignPages.find(p=>p.slug===campaign);if(!p)notFound();return pageMetadata({title:p.title,description:p.description,path:`/${p.slug}`});}
export default async function Page({params}:{params:Promise<{campaign:string}>}){const {campaign}=await params;const p=campaignPages.find(p=>p.slug===campaign);if(!p)notFound();return <CampaignServicePage page={p}/>;}
