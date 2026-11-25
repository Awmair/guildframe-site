/** A board piece for the offer page heroes: the pawn on the start tile, or the shopfront beside it. Decorative. */
export function OfferArt({ kind }: { kind: "start" | "shop" }) {
  return (
    <div className={`st-art st-art--${kind}`}>
      <span className="st-art-shadow" />
      {kind === "shop" ? <img className="st-art-shop" src="/images/world/standee-shop-v1.webp" width="490" height="479" alt="" decoding="async" /> : null}
      <img className="st-art-tile" src="/images/world/start-tile-v1.webp" width="480" height="416" alt="" decoding="async" />
      <img className="st-art-pawn" src="/images/world/pawn-v1.webp" width="239" height="411" alt="" decoding="async" />
    </div>
  );
}
