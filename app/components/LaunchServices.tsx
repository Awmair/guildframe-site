import Link from "next/link";
import { boardArt, landmarks, type Landmark } from "./world/board-data";
import { Icon } from "./chrome/Icon";

/** One line per space on the launch board, in track order. */
export const trackLines: Record<string, string> = {
  planning: "Positioning, an asset review and a schedule with named owners.",
  post: "Landing pages, email and audience tests before the campaign opens.",
  easel: "Copy, gameplay graphics and rewards that explain what you are making.",
  lantern: "Creative tests, campaign management and reporting with a separate ad budget.",
  stall: "Launch checks, emails, updates and a clear handoff.",
  cart: "Backer updates, pledge manager content and late pledge assets.",
  shop: "A permanent store once the campaign has delivered.",
};

/** The hub track: seven rows, one per landmark. Launch planning is this page, so it points at the scope below. */
export function LaunchTrack({ hubHref }: { hubHref: string }) {
  return <ol className="sv-track">
    {landmarks.map(mark => {
      const href = mark.href === hubHref ? "#scope" : mark.href;
      return <li key={mark.slug}>
        <Link className="sv-track-row" href={href} data-title={mark.label} data-cursor-label="Open">
          <span className="sv-track-space" aria-hidden="true"/>
          <span className="sv-track-name">{mark.label}</span>
          <span className="sv-track-line">{trackLines[mark.slug]}</span>
          <Icon name="arrow" size={22}/>
          <img className="sv-track-standee" src={mark.image} width={mark.w} height={mark.h} alt="" loading="lazy" decoding="async"/>
        </Link>
      </li>;
    })}
  </ol>;
}

/** A wide, still crop of the whole board with every landmark standing on it. */
export function BoardDiorama() {
  return <div className="sv-board" aria-hidden="true">
    <div className="sv-board-plane">
      <img className="sv-board-art" src={boardArt.src} width={boardArt.width} height={boardArt.height} alt="" fetchPriority="high"/>
      {landmarks.map((mark, index) => <img key={mark.slug} className="sv-board-standee" src={mark.image} width={mark.w} height={mark.h} alt="" loading={index < 4 ? "eager" : "lazy"} decoding="async"
        style={{ "--u": mark.u, "--v": mark.v, "--w": mark.w / boardArt.width, "--i": index } as React.CSSProperties}/>)}
    </div>
  </div>;
}

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));

/** One landmark standing on a close crop of its own space on the board. */
export function StandeeTile({ mark }: { mark: Landmark }) {
  return <div className="sv-diorama" aria-hidden="true" style={{ "--u": clamp(mark.u, .18, .82), "--v": clamp(mark.v, .27, .73) } as React.CSSProperties}>
    <div className="sv-tile"><img src={boardArt.src} width={boardArt.width} height={boardArt.height} alt="" fetchPriority="high"/></div>
    <img className="sv-pawn" src="/images/world/pawn-v1.webp" width="239" height="411" alt=""/>
    <img className="sv-standee" src={mark.image} width={mark.w} height={mark.h} alt="" fetchPriority="high"/>
  </div>;
}
