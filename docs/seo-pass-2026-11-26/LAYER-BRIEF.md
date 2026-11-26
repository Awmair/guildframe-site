# Visual pass on existing guides (26 Nov 2026)

Umair: "add more visuals, flow diagrams, infographics instead of huge walls of text, small bits of text spread around with our keywords, and make all blogs actually useful." Existing guides keep their URLs, titles, seoTitles, descriptions and facts.

## How it works
Do NOT edit `app/launch-guides.ts`, `app/guides-new/*`, `app/launch-guide-revisions.ts`, `app/growth-buyer-revisions.ts` or any shared file. Instead write one file per guide: `app/guide-layers/<slug>.ts`:

```ts
import type {GuideLayer} from "../guide-visual-layer";
export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "<section-id>": { paragraphs: ["shorter text..."], visuals: [ {kind:"flow", ...} ], takeaway: "..." },
  },
  insertAfter: { "<section-id>": [ {id:"new-id", title:"...", paragraphs:["..."], visuals:[...]} ] },
};
```
See `app/guide-visual-layer.ts` for the type. The layer is applied after every revision layer, so it sees the FINAL rendered sections. Dump the final guide first and work from that, never from the raw source:
`cd <worktree> && /home/claude/.npm-global/bin/tsx -e "import('./app/launch-guides.ts').then(m=>console.log(JSON.stringify(m.launchGuides.find(g=>g.slug==='<slug>'),null,1)))"`
Section ids come from that dump (note the revision layers add sections such as `working-checklist`).

Visual kinds (app/components/GuideVisual.tsx): steps, compare, bars, stats, timeline, split, checklist, flow (`start`, `nodes:[{question,yes,no}]`, `end`; Yes continues, No is the side exit), tips (`tips:[{label,text}]`). Each needs `title` (states the finding), optional `caption`, `source`.

## What to do per guide
1. Break walls of text: any paragraph over 3 sentences or about 60 words gets rewritten shorter, or its content moves into a list, steps, tips or table. Keep every fact, figure, link markup `[text](/path)` and the main keyword phrases; do not invent new facts. Numbers must come from the guide's own sources or be labelled "Example".
2. Add visuals so each guide has: at least 1 flow diagram (a real decision the reader faces), at least 1 tips block, and 4 to 6 visuals in total including existing ones. Do not duplicate what an existing visual already shows.
3. Add a one or two sentence `takeaway` to most sections, keyword rich and useful.
4. Make it useful: where a guide is vague, add a concrete checklist, example or decision rule (from facts already in the guide or verified today on a primary source; add nothing you cannot back).
5. Voice: house rules in docs/seo-pass-2026-11-25/BRIEF.md. No em or en dashes, no visible hyphenated compounds, sentences 8 to 25 words, no hype words, never mention Fiverr. Tabletop guides stay tabletop in language.

## Work rules
Your own worktree (path in your task), absolute paths, commit there, do not push. Check each file parses with tsx (import it and print the keys). Then check the whole guide still renders by temporarily registering: you cannot edit the data file, so instead run
`/home/claude/.npm-global/bin/tsx -e "import('./app/guide-layers/<slug>.ts').then(async l=>{const {launchGuides}=await import('./app/launch-guides.ts');const g=launchGuides.find(x=>x.slug==='<slug>');const ids=new Set(g.sections.map(s=>s.id));for(const k of [...Object.keys(l.layer.sections??{}),...Object.keys(l.layer.insertAfter??{})]) if(!ids.has(k)) console.log('MISSING id',k);console.log('ok')})"`
Every section id you key on must exist. Write `docs/seo-pass-2026-11-26/manifest-<agent>.md` listing guides done, visuals added per guide, and anything skipped. Final reply 8 lines max.
