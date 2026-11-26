/** The Launch Table: three wings, each a prototype that turns into a finished piece with its campaign page.
 *  Positions are world units on the mat, centre 0,0, x to the right, z toward the camera. */
export type WingSlug = "product" | "game" | "book";
export type Wing = {
  slug: WingSlug;
  label: string;
  href: string;
  proto: string;
  final: string;
  page: string;
  phoneProto: string;
  phoneFinal: string;
  w: number;
  h: number;
  rest: [number, number];
};

export const wings: Wing[] = [
  { slug: "product", label: "Products", href: "/kickstarter-product-campaign-design", proto: "/images/table/proto-product-v1.webp", final: "/images/table/final-product-v1.webp", page: "/images/table/page-product-v1.webp", phoneProto: "/images/table/proto-product-480.webp", phoneFinal: "/images/table/final-product-480.webp", w: 596, h: 640, rest: [-1.55, 0.4] },
  { slug: "game", label: "Games", href: "/tabletop-kickstarter-campaigns", proto: "/images/table/proto-game-v1.webp", final: "/images/table/final-game-v1.webp", page: "/images/table/page-game-v1.webp", phoneProto: "/images/table/proto-game-480.webp", phoneFinal: "/images/table/final-game-480.webp", w: 583, h: 640, rest: [1.6, 0.35] },
  { slug: "book", label: "Books", href: "/kickstarter-product-campaign-design#books", proto: "/images/table/proto-book-v1.webp", final: "/images/table/final-book-v1.webp", page: "/images/table/page-book-v1.webp", phoneProto: "/images/table/proto-book-480.webp", phoneFinal: "/images/table/final-book-480.webp", w: 501, h: 640, rest: [-1.25, -0.85] },
];

export const tableArt = {
  mat: "/images/table/mat-base-v1.webp",
  still: { src: "/images/table/table-still-v1.webp", width: 1536, height: 1024 },
  dressing: {
    parcel: { src: "/images/table/dressing-parcel-v1.webp", w: 512, h: 448 },
    tools: { src: "/images/table/dressing-tools-v1.webp", w: 768, h: 536 },
    swatches: { src: "/images/table/dressing-swatches-v1.webp", w: 640, h: 467 },
  },
};

export const statusWords = { proto: "Prototype", final: "Live campaign page" } as const;
