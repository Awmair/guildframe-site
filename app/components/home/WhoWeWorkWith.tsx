import Link from "next/link";
import { ResponsiveImage } from "../ResponsiveImage";
import { Icon } from "../chrome/Icon";
import { wingLinks, type Wing } from "../../work-mix";

const art: Record<Wing, { src: string; width: number; height: number; alt: string; note: string }> = {
  products: { src: "/images/work/secubix.webp", width: 1400, height: 788, alt: "Secubix campaign image with a white Vespa and the surveillance unit under the seat", note: "Client work: Secubix" },
  tabletop: { src: "/images/work/cryptic-explorers.webp", width: 1400, height: 788, alt: "Cryptic Explorers Kickstarter header with the black game box and the Cryptic Explorers logo", note: "Client work: Cryptic Explorers" },
  books: { src: "/images/work/a-world-without-men.webp", width: 1400, height: 788, alt: "Hardcover of A World Without Men by Shay Horch, with an eye reflecting the Earth on the cover", note: "Client work: A World Without Men" },
};

// Home: the three doors into the studio. Each card leads to the page written for that kind of project.
export function WhoWeWorkWith() {
  return (
    <section className="h-wings" id="who-we-work-with" aria-labelledby="wings-title">
      <div className="w-wrap-wide">
        <div className="h-wings-head">
          <h2 id="wings-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Who we</span></span> <span className="w-line"><span><em>work with</em></span></span></h2>
          <p data-reveal="rise">First time creators with a working prototype and a campaign to plan. The services are the same for every project. The examples, the guides and the questions we ask change with what you are making.</p>
        </div>
        <ul className="h-wings-list">{wingLinks.map((wing, index) => {
          const image = art[wing.wing];
          return <li key={wing.wing} data-reveal="rise" style={{ ["--i" as string]: index }}>
            <Link className="h-wing" href={wing.href} data-title={wing.label} data-cursor-label="Open">
              <span className="h-wing-media" data-wk-tilt="">
                <ResponsiveImage src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" sizes="(max-width: 900px) 82vw, 30vw"/>
                <span className="h-wing-note">{image.note}</span>
              </span>
              <span className="h-wing-body">
                <span className="h-wing-name">{wing.label}<Icon name="arrow" size={26}/></span>
                <span className="h-wing-line">{wing.line}</span>
              </span>
            </Link>
          </li>;
        })}</ul>
      </div>
    </section>
  );
}
