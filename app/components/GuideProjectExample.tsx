import Link from "next/link";
import { caseStudies } from "../case-studies";
import { ResponsiveImage } from "./ResponsiveImage";

const examples: Record<string, { project: string; note: string }> = {
  "board-game-kickstarter-page-checklist": { project: "futureproof-terrain", note: "The terrain artwork shows separate parts beside an assembled build. Use both views when a single product image leaves the contents unclear." },
  "what-to-send-kickstarter-campaign-designer": { project: "scented-realms", note: "ScentedRealms brought product and fantasy imagery together. A useful brief needs both the product facts and the assets that establish its identity." },
  "ttrpg-kickstarter-campaign-page-design": { project: "scented-realms", note: "This is an RPG accessory campaign, rather than a rulebook. See how the presentation introduces an unfamiliar product to a tabletop audience." },
  "kickstarter-reward-tier-graphics": { project: "quiver-time", note: "Quiver Time is a card storage accessory, rather than a card game. Its campaign explanation focused on the cover, divider and storage choices." },
  "card-game-kickstarter-launch-guide": { project: "quiver-time", note: "For a related card storage example, see how Quiver Time's CITADEL was presented. The case study concerns accessory creative, rather than TCG marketing results." },
  "miniatures-stl-kickstarter-launch-guide": { project: "futureproof-terrain", note: "FutureProof's original terrain campaign pairs assembled scenery with modular parts. That is a useful reference for explaining what a physical set can build." },
  "choose-board-game-kickstarter-marketing-agency": { project: "futureproof-terrain", note: "This case study names the creative contribution and links to the original 2024 campaign. Ask any prospective agency to make its own role just as clear." },
  "board-game-kickstarter-marketing-plan": { project: "scented-realms", note: "A campaign starts with a clear product explanation. The ScentedRealms case study describes the creative work; it does not claim an advertising return." },
};

export function GuideProjectExample({ slug }: { slug: string }) {
  const example = examples[slug];
  const project = caseStudies.find(p => p.slug === example?.project);
  if (!project || !example) return null;
  return <aside className="gf-guide-example" aria-label="Related campaign work">
    <ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={1200} height={675} loading="lazy" sizes="(max-width: 700px) 240px, 160px" />
    <div><span className="gf-eyebrow">From the portfolio</span><strong>{project.name}</strong><p>{example.note}</p><Link href={`/work/${project.slug}`}>Read the campaign design case study</Link></div>
  </aside>;
}
