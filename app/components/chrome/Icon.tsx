type IconName = "arrow" | "arrow-up-right" | "close" | "plus" | "search" | "check" | "drag";

const paths: Record<IconName, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  "arrow-up-right": "M7 17 17 7M8 7h9v9",
  close: "M6 6l12 12M18 6 6 18",
  plus: "M12 5v14M5 12h14",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4 4",
  check: "M5 12.5 10 17 19 7",
  drag: "M9 6l-5 6 5 6M15 6l5 6-5 6",
};

export function Icon({ name, size = 18, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg className={className} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}

/** A turned wooden pawn, drawn as flat geometry. */
export function PawnMark({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 20 32" fill="currentColor">
      <circle cx="10" cy="6.5" r="5.5" />
      <path d="M6.2 12.5h7.6c-.6 3.2.4 7.6 2.6 11.2H3.6c2.2-3.6 3.2-8 2.6-11.2Z" />
      <rect x="1.5" y="24.5" width="17" height="5.5" rx="2.75" />
    </svg>
  );
}

/** Two lines of text that swap on hover: the second copy is set in the serif italic. */
export function Roll({ children }: { children: string }) {
  return (
    <span className="w-roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

/** Splits a display line into masked rows. Each string is one line. */
export function Lines({ lines }: { lines: React.ReactNode[] }) {
  return <>{lines.map((line, index) => <span className="w-line" key={index}><span>{line}</span></span>)}</>;
}
