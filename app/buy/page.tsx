import Link from "next/link";
import {TrustPage} from "../components/TrustPage";
import {JsonLd} from "../components/JsonLd";
import {absoluteUrl,pageMetadata} from "../site-config";
import {campaignDate} from "../campaign-content";
export const metadata=pageMetadata({title:"Book Your Campaign Design",description:"Start your Guildframe campaign design enquiry. Kickstarter and Gamefound page design costs $975. Request a free mockup before booking your project.",path:"/buy"});
export default function Page(){return <><JsonLd data={{"@context":"https://schema.org","@type":"WebPage",name:"Book Your Campaign Design",url:absoluteUrl("/buy"),dateModified:campaignDate}}/><TrustPage title="Request your free campaign page mockup" description="Campaign design is $975 USD. Tell me about your game, review an opening mockup and agree the full brief before booking." label="Book your campaign" updated={campaignDate}><section><h2>What happens before booking?</h2><p>The scope and schedule are confirmed before your project starts. Use the form below to share your artwork and launch plans, or <Link href="/campaign-design">see what campaign design includes</Link>.</p></section></TrustPage></>}
