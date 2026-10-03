import type { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & { src: string; alt: string };

/** Static WebP sizes; no image service or browser JavaScript required. */
export function ResponsiveImage({ src, alt, sizes = "(max-width: 650px) calc(100vw - 40px), (max-width: 1050px) 46vw, 410px", ...props }: Props) {
  const responsive = /^\/images\/(campaign|work)\/.+\.webp$/.test(src);
  return <img {...props} alt={alt} src={src} sizes={responsive ? sizes : undefined} srcSet={responsive ? `${src.replace(".webp", "-480w.webp")} 480w, ${src.replace(".webp", "-960w.webp")} 960w` : undefined} />;
}
