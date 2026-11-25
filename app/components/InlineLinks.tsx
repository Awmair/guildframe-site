import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Turns `[label](/internal/path)` inside guide copy into a real internal link,
 * so data guides can carry contextual links without leaving plain strings.
 * Only site relative paths are linked; anything else stays as written.
 */
const inlineLink = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function withInlineLinks(text: string): ReactNode {
  if (!text.includes("](/")) return text;
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(inlineLink)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(<Link key={`${start}-${match[2]}`} href={match[2]}>{match[1]}</Link>);
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** The same copy with link markup removed, for word counts and plain text exports. */
export function stripInlineLinks(text: string): string {
  return text.replace(inlineLink, "$1");
}
