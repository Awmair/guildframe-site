import { caseStudies } from "./case-studies";
import { beyondTabletop, moreTabletop } from "./past-work";

/*
 * Every client campaign in one list, mixed by category so no wing reads as
 * an afterthought. Used by the home work section and the /work filter.
 * Facts come only from app/case-studies.ts and app/past-work.ts.
 */
export type Wing = "products" | "tabletop" | "books";

export const wingLabels: Record<Wing, string> = { products: "Products", tabletop: "Tabletop", books: "Books" };

export const wingLinks: { wing: Wing; href: string; label: string; line: string }[] = [
  { wing: "products", href: "/kickstarter-product-campaign-design", label: "Products", line: "Gadgets, watches and the things people use every day. Recent work includes the RaceBox drag meter and lap timer, a security system for Vespas, a drain protector and an Italian designed watch." },
  { wing: "tabletop", href: "/tabletop-kickstarter-campaigns", label: "Tabletop", line: "Board games, card games, RPGs, miniatures and accessories. Our specialty, with four full case studies and a guide for every stage." },
  { wing: "books", href: "/kickstarter-product-campaign-design#books", label: "Books", line: "Novels, comics and creative projects with a clear readership. Recent work includes the hardcover novel A World Without Men." },
];

export type MixItem = {
  key: string;
  name: string;
  wing: Wing;
  /** Extra filters the card also appears under on /work. */
  alsoIn?: Wing[];
  label: string;
  detail?: string;
  summary: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  href: string;
  tone: string;
  caseStudy?: string;
  result?: string;
  role?: string;
  testimonial?: { quote: string; client: string };
};

const study = (slug: string) => caseStudies.find(p => p.slug === slug)!;
const product = (name: string) => beyondTabletop.find(p => p.name === name)!;

const fromStudy = (slug: string, label: string, summary: string, tone: string, alsoIn?: Wing[]): MixItem => {
  const p = study(slug);
  return {
    key: p.slug, name: p.name, wing: "tabletop", alsoIn, label, detail: p.category, summary,
    image: p.image, imageWidth: p.imageWidth, imageHeight: p.imageHeight, alt: p.alt, href: p.href, tone,
    caseStudy: p.slug, result: p.result?.total,
    testimonial: p.testimonial ? { quote: p.testimonial.quote, client: p.testimonial.client } : undefined,
  };
};

const fromProduct = (name: string, wing: Wing, label: string, tone: string): MixItem => {
  const p = product(name);
  return {
    key: p.image, name: p.name, wing, label, summary: p.line,
    image: p.image, imageWidth: 1400, imageHeight: 788, alt: p.alt, href: p.href, tone,
    result: p.result, role: "role" in p ? p.role : undefined,
  };
};

const fromTabletop = (name: string, label: string, tone: string): MixItem => {
  const p = moreTabletop.find(x => x.name === name)!;
  return {
    key: p.image, name: p.name, wing: "tabletop", label, summary: p.line,
    image: p.image, imageWidth: 1400, imageHeight: 788, alt: p.alt, href: p.href, tone,
    result: p.result, role: p.role,
  };
};

const raceBoxMicro = product("RaceBox Micro");

export const mixedWork: MixItem[] = [
  { ...fromProduct("RaceBox", "products", "Product", "#3A1F22"), detail: "Two campaigns", summary: `${product("RaceBox").line} ${raceBoxMicro.line}`, result: `Drag meter: ${product("RaceBox").result}. RaceBox Micro: ${raceBoxMicro.result}` },
  fromTabletop("FutureProof Fully Painted", "Tabletop", "#1E3B30"),
  fromProduct("Secubix", "products", "Product", "#1F3A45"),
  fromStudy("scented-realms", "Tabletop", "Visual direction and campaign presentation for an unfamiliar RPG accessory.", "#6E2D24"),
  fromProduct("Bacàn", "products", "Product", "#3A2E26"),
  fromProduct("TubRing", "products", "Product", "#3B2533"),
  fromStudy("futureproof-terrain", "Tabletop", "A campaign story around modular parts, table use and storage.", "#22463B"),
  fromProduct("A World Without Men", "books", "Book", "#2E2A3F"),
  fromStudy("quiver-time", "Tabletop", "A clear presentation of the cover, divider and card storage options. Campaign header image courtesy of Quiver Time.", "#2B2E3A", ["products"]),
  fromTabletop("Fraud", "Tabletop", "#2F2A2A"),
  fromStudy("cryptic-explorers", "Tabletop", "A structured story for a survival horror game that keeps its graphic novel atmosphere front and center.", "#36304A"),
];
