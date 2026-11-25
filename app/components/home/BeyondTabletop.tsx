import { ResponsiveImage } from "../ResponsiveImage";
import { beyondTabletop } from "../../past-work";

// Home: client campaigns outside games, shown under the reviews. Totals are public Kickstarter figures.
export function BeyondTabletop() {
  return (
    <section className="h-beyond" id="beyond-tabletop" aria-labelledby="home-beyond-title">
      <div className="hb-inner">
        <div className="hb-head">
          <h2 id="home-beyond-title" data-reveal="lines"><span className="w-line"><span>Beyond <em>tabletop</em></span></span></h2>
          <p>Umair and his team also launch campaigns outside games, from a Vespa security system to a watch and a novel. The totals are public Kickstarter figures and are the clients’ results.</p>
        </div>
        <ul className="hb-list">
          {beyondTabletop.map((item, index) => (
            <li className="hb-card" key={item.name} data-reveal="rise" style={{ ["--i" as string]: index }}>
              <a className="hb-media" href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" data-cursor-label="View on Kickstarter">
                <ResponsiveImage src={`/images/work/${item.image}.webp`} alt={item.alt} width={1400} height={788} loading="lazy" sizes="(max-width: 900px) 82vw, 30vw" />
              </a>
              <div className="hb-body">
                <h3>{item.name}</h3>
                <p>{item.line}</p>
                <p className="hb-result">{item.result}</p>
                <a className="w-link" href={item.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {item.name}, opens in a new tab</span></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
