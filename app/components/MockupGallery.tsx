import type { CSSProperties } from "react";
import { DragStrip } from "./DragStrip";
import { ResponsiveImage } from "./ResponsiveImage";
const mockups = [
  {image:"party-cards",title:"Party & family cards",style:"Risograph illustration",alt:"Snack Attack concept: colourful fruit characters on a party deck and box against a yellow backdrop",copy:"Big shapes, expressive characters and a box you can spot across the table.",r:-2},
  {image:"adventure-cards",title:"Adventure card games",style:"Retro science fiction comics",alt:"Orbital Crew concept: comic book astronauts on a card game box with illustrated cards and tokens",copy:"Illustrated cards and a darker palette for a cooperative space adventure.",r:1.5},
  {image:"minimal-cards",title:"Abstract strategy decks",style:"Minimal geometric design",alt:"Common Ground concept: ivory cards with green and blue geometric shapes beside a compact green box",copy:"Quiet colours and simple geometry that leave room to read the cards.",r:-1},
] as const;
/** Three studio card game concepts in a draggable strip. Used on the card game service page. */
export function MockupGallery() {
 return <section className="gf-mockups cc-mockups" id="mockups" aria-labelledby="mockups-title">
  <div className="cc-mockups-head">
   <h2 id="mockups-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Three styles of</span></span>{" "}<span className="w-line"><span><em>card game mockup</em></span></span></h2>
   <div><p className="w-dot w-dot--concept">Card game concepts</p><p>A few different directions for card games. Your own artwork sets the starting point for your campaign.</p></div>
  </div>
  <DragStrip className="cc-mockups-strip" label="Card game mockup concepts">{mockups.map(m=><figure className="cc-mockup" key={m.image} style={{"--r":`${m.r}deg`} as CSSProperties}>
   <div className="cc-mockup-image"><ResponsiveImage src={`/images/campaign/${m.image}.webp`} alt={m.alt} width="1200" height="800" loading="lazy" sizes="(max-width: 900px) 80vw, 520px" draggable={false}/><span className="cc-mockup-label">Concept mockup</span></div>
   <figcaption><h3>{m.title}</h3><p className="cc-mockup-style">{m.style}</p><p>{m.copy}</p></figcaption>
  </figure>)}</DragStrip>
  <p className="cc-mockups-caption">These are original concepts, separate from the client campaigns in Past work.</p>
 </section>;
}
