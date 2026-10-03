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
    window.gtag?.("event","generate_lead",{lead_type:data.get("service_interest"),launch_timing:data.get("launch_timing"),game_category:data.get("game_category"),platform:data.get("platform"),form_location:window.location.pathname,ai_source:aiSource,traffic_type:aiSource?"ai_referral":undefined});
   } catch { /* Form success does not depend on analytics or storage. */ }
   form.reset();}catch{setStatus("error");}
 }
 return <section className="gf-contact" id="start-project" aria-labelledby="contact-title"><div className="gf-contact-copy"><span className="gf-eyebrow">Tell me about your project</span><h2 id="contact-title">Let’s plan{" "}<br /><em>your game launch.</em></h2><p>Share your game, target date and the work you need help with. I’ll review it and reply with the next steps. Want to see a creative direction first? Choose the free opening mockup.</p><div className="gf-contact-points"><span>No payment to request</span><span>No obligation to book</span></div><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail} ↗</a><p className="gf-small">Launch services are quoted around your project. We agree the deliverables, fees, ad budget and schedule before work starts. The free mockup covers one opening campaign section using your artwork.</p></div>
 <form action={siteConfig.formEndpoint} method="POST" onSubmit={submitInquiry} className="gf-form glass">
 <input type="hidden" name="source" value={source}/><input type="hidden" name="_subject" value="Guildframe: tabletop launch enquiry"/>
 <label><span>Your name</span><input type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>
 <label><span>Your email</span><input type="email" name="email" autoComplete="email" placeholder="you@yourstudio.com" required /></label>
 <label><span>What are you making?</span><select name="game_category" required defaultValue=""><option value="" disabled>Choose your project</option><option>Board game</option><option>Card game or TCG</option><option>Tabletop RPG</option><option>Miniatures or terrain</option><option>Dice or accessories</option><option>Something else for the tabletop</option></select></label>
 <label><span>Campaign platform</span><select name="platform" defaultValue="Not decided"><option>Kickstarter</option><option>Gamefound</option><option>Not decided</option><option>Another platform</option></select></label>
 <label><span>What do you need help with?</span><select name="service_interest" required defaultValue=""><option value="" disabled>Choose a service</option><option>Full launch planning and support</option><option>Prelaunch marketing</option><option>Campaign copy and design</option><option>Paid advertising</option><option>Live campaign management</option><option>Post-campaign support</option><option>Free opening mockup</option><option>Help deciding the scope</option></select></label>
 <label><span>When do you plan to launch?</span><select name="launch_timing" defaultValue="Not decided"><option>Not decided</option><option>Already live</option><option>Within a month</option><option>In 1 to 3 months</option><option>In 3 to 6 months</option><option>Later than 6 months</option></select></label>
 <label className="gf-form-wide"><span>Artwork or project link <small>(optional)</small></span><input name="project_link" type="url" placeholder="https://your-game-or-shared-folder.com" /></label>
 <label className="gf-form-wide"><span>Tell me about your game and launch plans</span><textarea name="message" rows={4} placeholder="What is the game, when do you want to launch, and what artwork is ready?" required /></label>
 <label className="project-inquiry-honeypot" aria-hidden="true">Leave this empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
 <button className="gf-button gf-form-wide" type="submit" disabled={status==="sending"||status==="sent"}>{status==="sending"?"Sending…":status==="sent"?"Request received":"Send my project"}<span aria-hidden="true">↗</span></button>
 <p className="gf-form-wide gf-form-status" role="status" aria-live="polite">{status==="sent"?"Thanks for sending your project. I’ll reply to your email.":status==="error"?<>Your request could not be sent. Please try again or <a href={`mailto:${siteConfig.contactEmail}`}>email {siteConfig.contactEmail}</a>.</>:"I’ll use your details to reply about this project."}</p>
 </form></section>;
}
