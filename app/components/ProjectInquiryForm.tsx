"use client";
import {type FormEvent,useState} from "react";
import {siteConfig} from "../site-config";
export function ProjectInquiryForm({source}:{source:string}) {
 const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
 async function submitInquiry(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();if(status==="sending")return;setStatus("sending");const form=event.currentTarget;const data=new FormData(form);data.set("page_url",window.location.href);
  try {const response=await fetch(siteConfig.formEndpoint,{method:"POST",body:data,headers:{Accept:"application/json"}});if(!response.ok)throw new Error("Request failed");form.reset();setStatus("sent");}catch{setStatus("error");}
 }
 return <section className="gf-contact" id="start-project" aria-labelledby="contact-title"><div className="gf-contact-copy"><span className="gf-eyebrow">A small first step. A clearer direction.</span><h2 id="contact-title">Let’s see what<br />your game <em>could look like.</em></h2><p>Send your game, artwork and launch plans. Get a free mockup of an opening campaign section, then decide if we are a good fit.</p><div className="gf-contact-points"><span>No payment to request</span><span>No obligation to book</span></div><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail} ↗</a><p className="gf-small">A mockup explores the visual direction. The full campaign is a separate $975 project, with scope and timing agreed before we start.</p></div>
 <form action={siteConfig.formEndpoint} method="POST" onSubmit={submitInquiry} className="gf-form glass">
 <input type="hidden" name="source" value={source}/><input type="hidden" name="_subject" value="Guildframe: free campaign mockup request"/>
 <label><span>Your name</span><input type="text" name="name" autoComplete="name" placeholder="Umair, Alex, your name…" required /></label>
 <label><span>Your email</span><input type="email" name="email" autoComplete="email" placeholder="you@yourstudio.com" required /></label>
 <label><span>What are you making?</span><select name="game_category" required defaultValue=""><option value="" disabled>Choose your project</option><option>Board game</option><option>Card game or TCG</option><option>Tabletop RPG</option><option>Miniatures or terrain</option><option>Dice or accessories</option><option>Something else for the tabletop</option></select></label>
 <label><span>Campaign platform</span><select name="platform" defaultValue="Not decided"><option>Kickstarter</option><option>Gamefound</option><option>Not decided</option><option>Another platform</option></select></label>
 <label className="gf-form-wide"><span>Artwork or project link <small>(optional)</small></span><input name="project_link" type="url" placeholder="https://your-game-or-shared-folder.com" /></label>
 <label className="gf-form-wide"><span>Tell me about your game and launch plans</span><textarea name="message" rows={4} placeholder="What is the game, when do you want to launch, and what artwork is ready?" required /></label>
 <label className="project-inquiry-honeypot" aria-hidden="true">Leave this empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
 <button className="gf-button gf-form-wide" type="submit" disabled={status==="sending"||status==="sent"}>{status==="sending"?"Sending…":status==="sent"?"Request received":"Get my free mockup"}<span aria-hidden="true">↗</span></button>
 <p className="gf-form-wide gf-form-status" role="status" aria-live="polite">{status==="sent"?"Thanks. Your request is received. I’ll reply to the email you provided.":status==="error"?<>Your request could not be sent. Please try again or <a href={`mailto:${siteConfig.contactEmail}`}>email {siteConfig.contactEmail}</a>.</>:"Your details are used to respond to your project enquiry."}</p>
 </form></section>;
}
