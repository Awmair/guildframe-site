/** The seven landmarks on the launch board. u and v are positions on the board art, 0 to 1 from the top left. */
export type Landmark = { slug: string; label: string; href: string; image: string; w: number; h: number; u: number; v: number };

export const landmarks: Landmark[] = [
  { slug: "planning", label: "Launch planning", href: "/kickstarter-launch-services", image: "/images/world/standee-planning-v1.webp", w: 400, h: 360, u: 0.075, v: 0.885 },
  { slug: "post", label: "Prelaunch page and email", href: "/kickstarter-prelaunch-marketing", image: "/images/world/standee-post-v1.webp", w: 400, h: 360, u: 0.33, v: 0.745 },
  { slug: "easel", label: "Campaign page", href: "/campaign-design", image: "/images/world/standee-easel-v1.webp", w: 400, h: 360, u: 0.64, v: 0.665 },
  { slug: "lantern", label: "Ads and creative", href: "/kickstarter-advertising", image: "/images/world/standee-lantern-v1.webp", w: 400, h: 360, u: 0.655, v: 0.485 },
  { slug: "stall", label: "Live campaign", href: "/kickstarter-campaign-management", image: "/images/world/standee-stall-v1.webp", w: 400, h: 360, u: 0.59, v: 0.205 },
  { slug: "cart", label: "After the campaign", href: "/post-campaign-support", image: "/images/world/standee-cart-v1.webp", w: 400, h: 360, u: 0.80, v: 0.165 },
  { slug: "shop", label: "Kickstarter to Shopify", href: "/kickstarter-to-shopify", image: "/images/world/standee-shop-v1.webp", w: 400, h: 360, u: 0.92, v: 0.105 },
];

export const boardArt = { src: "/images/world/board-base-v1.webp", width: 1536, height: 1024 };
export const pawnStart = { u: 0.075, v: 0.885 };
