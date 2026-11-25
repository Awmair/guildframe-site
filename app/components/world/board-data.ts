/** The seven landmarks on the launch board. u and v are positions on the board art, 0 to 1 from the top left. */
export type Landmark = { slug: string; label: string; href: string; image: string; w: number; h: number; u: number; v: number };

export const landmarks: Landmark[] = [
  { slug: "planning", label: "Launch planning", href: "/kickstarter-launch-services", image: "/images/world/standee-planning-v1.webp", w: 384, h: 461, u: 0.072, v: 0.892 },
  { slug: "post", label: "Prelaunch page and email", href: "/kickstarter-prelaunch-marketing", image: "/images/world/standee-post-v1.webp", w: 345, h: 497, u: 0.333, v: 0.75 },
  { slug: "easel", label: "Campaign page", href: "/campaign-design", image: "/images/world/standee-easel-v1.webp", w: 307, h: 480, u: 0.645, v: 0.668 },
  { slug: "lantern", label: "Ads and creative", href: "/kickstarter-advertising", image: "/images/world/standee-lantern-v1.webp", w: 431, h: 419, u: 0.66, v: 0.484 },
  { slug: "stall", label: "Live campaign", href: "/kickstarter-campaign-management", image: "/images/world/standee-stall-v1.webp", w: 491, h: 465, u: 0.589, v: 0.209 },
  { slug: "cart", label: "After the campaign", href: "/post-campaign-support", image: "/images/world/standee-cart-v1.webp", w: 463, h: 457, u: 0.817, v: 0.186 },
  { slug: "shop", label: "Kickstarter to Shopify", href: "/kickstarter-to-shopify", image: "/images/world/standee-shop-v1.webp", w: 490, h: 479, u: 0.924, v: 0.108 },
];

export const boardArt = { src: "/images/world/board-base-v1.webp", width: 1536, height: 1024 };
export const pawnStart = { u: 0.16, v: 0.816 };
