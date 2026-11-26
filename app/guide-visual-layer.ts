import type {LaunchGuide, LaunchSection} from "./launch-guides";
import type {GuideVisualData} from "./components/GuideVisual";

/**
 * Visual layer for existing guides (26 Nov 2026 pass).
 * Applied last, after every revision layer, so it never fights them.
 * Keyed by guide slug, then section id. It can shorten paragraphs, add
 * visuals and a takeaway, or add a new section after a given section.
 * It never changes slugs, titles, seoTitles or descriptions.
 */
export type SectionLayer = {
  paragraphs?: string[];
  list?: string[];
  visuals?: GuideVisualData[];
  takeaway?: string;
};
export type GuideLayer = {
  sections?: Record<string, SectionLayer>;
  insertAfter?: Record<string, LaunchSection[]>;
  updated?: string;
};

import {visualLayers} from "./guide-visual-layer-data";

export function applyVisualLayer(guide: LaunchGuide): LaunchGuide {
  const layer: GuideLayer | undefined = visualLayers[guide.slug];
  if (!layer) return guide;
  const sections: LaunchSection[] = [];
  for (const section of guide.sections) {
    const patch = layer.sections?.[section.id];
    sections.push(patch ? {
      ...section,
      ...(patch.paragraphs ? {paragraphs: patch.paragraphs} : {}),
      ...(patch.list ? {list: patch.list} : {}),
      ...(patch.visuals ? {visuals: [...(section.visuals ?? []), ...patch.visuals]} : {}),
      ...(patch.takeaway ? {takeaway: patch.takeaway} : {}),
    } : section);
    const extra = layer.insertAfter?.[section.id];
    if (extra) sections.push(...extra);
  }
  const updated = layer.updated && (!guide.updated || layer.updated > guide.updated) ? layer.updated : guide.updated;
  return {...guide, sections, updated};
}
