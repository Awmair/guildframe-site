import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders guide copy with contextual internal links written as
 * [visible words](/internal/path). Only site paths starting with "/" become
 * links, so a stray bracket in ordinary copy stays plain text.
 */
const linkPattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function GuideInlineText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(<Link key={`${index}-${match[2]}`} href={match[2]}>{match[1]}</Link>);
    last = index + match[0].length;
  }
  if (last === 0) return <>{text}</>;
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** The same copy with link markup removed, for word counts and plain text use. */
export function plainGuideText(text: string) {
  return text.replace(linkPattern, "$1");
}
