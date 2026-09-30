"use client";
import {type FormEvent,useState} from "react";
import {siteConfig} from "../site-config";
export function ProjectInquiryForm({source}:{source:string}) {
 const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
 async function submitInquiry(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();if(status==="sending")return;setStatus("sending");const form=event.currentTarget;const data=new FormData(form);data.set("page_url",`${window.location.origin}${window.location.pathname}`);
  try {const response=await fetch(siteConfig.formEndpoint,{method:"POST",body:data,headers:{Accept:"application/json"}});if(!response.ok)throw new Error("Request failed");setStatus("sent");
   let aiSource:string|undefined;
   try {aiSource=window.sessionStorage.getItem("guildframe-ai-source")||undefined;} catch {}
   try {
    window.gtag?.("event","generate_lead",{lead_type:"free_opening_mockup",game_category:data.get("game_category"),platform:data.get("platform"),form_location:window.location.pathname,ai_source:aiSource,traffic_type:aiSource?"ai_referral":undefined});
   } catch { /* Form success does not depend on analytics or storage. */ }
   form.reset();}catch{setStatus("error");}
 }
 return <section className="gf-contact" id="start-project" aria-labelledby="contact-title"><div className="gf-contact-copy"><span className="gf-eyebrow">Request a free mockup</span><h2 id="contact-title">Get your free{" "}<br /><em>campaign opening mockup.</em></h2><p>Tell me what you’re making and share any artwork you have. I’ll design an opening campaign section so you can see the direction before booking.</p><div className="gf-contact-points"><span>No payment to request</span><span>No obligation to book</span></div><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail} ↗</a><p className="gf-small">The mockup is free. If you’d like me to design the full campaign, the price is $975. We’ll agree the scope and schedule first.</p></div>
 <form action={siteConfig.formEndpoint} method="POST" onSubmit={submitInquiry} className="gf-form glass">
 <input type="hidden" name="source" value={source}/><input type="hidden" name="_subject" value="Guildframe: free campaign mockup request"/>
 <label><span>Your name</span><input type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>
 <label><span>Your email</span><input type="email" name="email" autoComplete="email" placeholder="you@yourstudio.com" required /></label>
 <label><span>What are you making?</span><select name="game_category" required defaultValue=""><option value="" disabled>Choose your project</option><option>Board game</option><option>Card game or TCG</option><option>Tabletop RPG</option><option>Miniatures or terrain</option><option>Dice or accessories</option><option>Something else for the tabletop</option></select></label>
 <label><span>Campaign platform</span><select name="platform" defaultValue="Not decided"><option>Kickstarter</option><option>Gamefound</option><option>Not decided</option><option>Another platform</option></select></label>
 <label className="gf-form-wide"><span>Artwork or project link <small>(optional)</small></span><input name="project_link" type="url" placeholder="https://your-game-or-shared-folder.com" /></label>
 <label className="gf-form-wide"><span>Tell me about your game and launch plans</span><textarea name="message" rows={4} placeholder="What is the game, when do you want to launch, and what artwork is ready?" required /></label>
 <label className="project-inquiry-honeypot" aria-hidden="true">Leave this empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
 <button className="gf-button gf-form-wide" type="submit" disabled={status==="sending"||status==="sent"}>{status==="sending"?"Sending…":status==="sent"?"Request received":"Get my free mockup"}<span aria-hidden="true">↗</span></button>
 <p className="gf-form-wide gf-form-status" role="status" aria-live="polite">{status==="sent"?"Thanks for sending your game. I’ll reply to your email.":status==="error"?<>Your request could not be sent. Please try again or <a href={`mailto:${siteConfig.contactEmail}`}>email {siteConfig.contactEmail}</a>.</>:"I’ll use your details to reply about this project."}</p>
 </form></section>;
}
