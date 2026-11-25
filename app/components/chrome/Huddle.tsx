// The Guildframe huddle: four pawns lying heads together. Their bodies make the frame, their heads the pips.
// Drawn inline so the parts can move: sides slide in and lock, heads drop in, the coral side lifts like a lid.

type MarkProps = { className?: string };

const sides = [
  { key: "t", points: "10.8,7 89.2,7 70.2,26 29.8,26", head: [50, 35.5] },
  { key: "r", points: "93,10.8 93,89.2 74,70.2 74,29.8", head: [64.5, 50] },
  { key: "b", points: "89.2,93 10.8,93 29.8,74 70.2,74", head: [50, 64.5] },
  { key: "l", points: "7,89.2 7,10.8 26,29.8 26,70.2", head: [35.5, 50] },
] as const;

/** The mark's parts as SVG children, in a 100 by 100 box. Cream or petrol comes from currentColor; the lead pawn from --hd-accent. */
export function HuddleParts() {
  return (
    <g className="hd">
      {sides.map(side => (
        <g key={side.key} className={`hd-pawn hd-pawn--${side.key}`}>
          <polygon className="hd-side" points={side.points} strokeWidth="3" strokeLinejoin="round" />
          <circle className="hd-head" cx={side.head[0]} cy={side.head[1]} r="7.2" />
        </g>
      ))}
    </g>
  );
}

export function HuddleMark({ className = "" }: MarkProps) {
  return <svg className={`hd-svg ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false"><HuddleParts /></svg>;
}

const letters = [
  { ch: "g", x: 7, d: "M25,0H33A25,25 0 0 1 58,25V45A25,25 0 0 1 33,70H25A25,25 0 0 1 0,45V25A25,25 0 0 1 25,0ZM58,-7V83A25,25 0 0 1 33,108H6.96" },
  { ch: "u", x: 94, d: "M0,-7V45A25,25 0 0 0 25,70H33A25,25 0 0 0 58,45M58,-7V77" },
  { ch: "i", x: 181, d: "M0,-7V77" },
  { ch: "l", x: 212, d: "M0,-53V77" },
  { ch: "d", x: 241, d: "M25,0H33A25,25 0 0 1 58,25V45A25,25 0 0 1 33,70H25A25,25 0 0 1 0,45V25A25,25 0 0 1 25,0ZM58,-53V77" },
  { ch: "f", x: 324, d: "M12.6,77V-26A20,20 0 0 1 32.6,-46H39.6M-4.9,0H36.8" },
  { ch: "r", x: 380.8, d: "M0,-7V77M0,25A25,25 0 0 1 25,0H35.5" },
  { ch: "a", x: 430.3, d: "M25,0H33A25,25 0 0 1 58,25V45A25,25 0 0 1 33,70H25A25,25 0 0 1 0,45V25A25,25 0 0 1 25,0ZM58,-7V77" },
  { ch: "m", x: 517.3, d: "M0,-7V77M0,25A25,25 0 0 1 25,0H22.56A25,25 0 0 1 47.56,25V77M47.56,25A25,25 0 0 1 72.56,0H70.12A25,25 0 0 1 95.12,25V77" },
  { ch: "e", x: 641.42, d: "M0,35H58V25A25,25 0 0 0 33,0H25A25,25 0 0 0 0,25V45A25,25 0 0 0 25,70H55.2" },
] as const;

/** Mark plus the drawn lowercase wordmark. Each letter is its own group so it can move on its own. */
export function BrandLockup({ className = "", label = "Guildframe" }: MarkProps & { label?: string }) {
  return (
    <svg className={`hl ${className}`} viewBox="0 0 470.39 100" role="img" aria-label={label} focusable="false">
      <HuddleParts />
      <g className="hl-word" transform="translate(130,30) scale(0.48)" fill="none" stroke="currentColor" strokeWidth="14" strokeLinejoin="round">
        {letters.map((letter, index) => (
          <g key={index} className="hl-letter" style={{ ["--i" as string]: index }}>
            <path transform={`translate(${letter.x},7)`} d={letter.d} />
            {letter.ch === "i" ? <circle cx="181" cy="-20.3" r="8.68" fill="currentColor" stroke="none" /> : null}
          </g>
        ))}
      </g>
    </svg>
  );
}
