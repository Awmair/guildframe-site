// The Guildframe mark, "Draft to done": a frame that is half drafted (dashes) and half finished (solid),
// with a coral point at the corner where the work is up to. Drawn inline so every part can move:
// the solid sides draw in, the dashes pop in, the point drops onto its corner, and on loop it runs
// round the drafted sides turning them solid before the draft comes back.

type MarkProps = { className?: string };

const dashes = [
  { k: 0, cls: "df-dt", d: "M67,20H58" },
  { k: 1, cls: "df-dt", d: "M52,20H43" },
  { k: 2, cls: "df-dt", d: "M37,20H28" },
  { k: 3, cls: "df-dc", d: "M22,20H20V22" },
  { k: 4, cls: "df-dl", d: "M20,28V37" },
  { k: 5, cls: "df-dl", d: "M20,43V52" },
  { k: 6, cls: "df-dl", d: "M20,58V67" },
] as const;

/** The mark's parts as SVG children, in a 100 by 100 box. The frame takes currentColor; the point takes --df-accent. */
export function BrandParts() {
  return (
    <g className="df">
      <g className="df-frame" fill="none" stroke="currentColor">
        {dashes.map(dash => (
          <path key={dash.k} className={`df-d ${dash.cls}`} style={{ ["--k" as string]: dash.k }} d={dash.d} strokeWidth="6" strokeLinecap={dash.k === 3 ? "square" : undefined} />
        ))}
        <path className="df-st" d="M80,20H20" strokeWidth="14" strokeLinecap="round" />
        <path className="df-sl" d="M20,20V80" strokeWidth="14" strokeLinecap="round" />
        <path className="df-sr" d="M80,20V80" strokeWidth="14" strokeLinecap="round" />
        <path className="df-sb" d="M80,80H20" strokeWidth="14" strokeLinecap="round" />
      </g>
      <g className="df-pip-h">
        <g className="df-pip"><circle cx="80" cy="20" r="10.5" /></g>
      </g>
    </g>
  );
}

export function BrandMark({ className = "" }: MarkProps) {
  return <svg className={`df-svg ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false"><BrandParts /></svg>;
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
      <BrandParts />
      <g className="hl-word" transform="translate(132,30) scale(0.48)" fill="none" stroke="currentColor" strokeWidth="14" strokeLinejoin="round">
        {letters.map((letter, index) => (
          <g key={index} className="hl-letter" style={{ ["--i" as string]: index }}>
            <path transform={`translate(${letter.x},7)`} d={letter.d} />
            {letter.ch === "i" ? <circle className="hl-dot" cx="181" cy="-20.3" r="8.68" stroke="none" /> : null}
          </g>
        ))}
      </g>
    </svg>
  );
}
