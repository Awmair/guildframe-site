> Historical reference from the earlier Shopify positioning. Current campaign positioning, pricing and content map are in CAMPAIGN_REBRAND.md (2026-09-30). Previous commercial offers and product plans in this document are superseded.

# Guildframe Build Guide: what to write

Last reviewed: 2026-08-13

The site presents this guide at $79 with checkout marked pending. This is the
outline to write against. Nothing here is built yet.

## What it is

A downloadable guide that shows a tabletop creator how to build their own
Shopify store using an AI coding tool. Not a theme. Not code anyone maintains.
Not a support commitment.

## The free and paid line

The free guide at `/guides/build-a-tabletop-shopify-store-with-ai` owns **why
and whether**: what AI tools can and cannot do on Shopify, where they break, and
why a tabletop catalog is the part no model can reason about. It publishes three
prompts in full.

The paid guide owns **how, exactly**: the full prompt library, the metafield
schema those prompts are written against, the section specifications, the worked
example and the launch checks.

The free page has to stand on its own. A hollow free page that exists only to
sell the paid one would contradict the editorial policy.

## What justifies the price

Four things, and nothing else:

1. **Prompts that were actually run**, with the output they produced and what
   they got wrong first time. The failure notes are the product.
2. **A metafield namespace and definitions** the prompts are written against, so
   output is consistent between runs instead of differently invented each time.
   The public schema at `/resources/tabletop-shopify-metafield-schema` is the
   free reference version; the guide ships the importable file.
3. **A worked example catalog** with a core game, two editions, two expansions,
   an add on, a bundle and a preorder, correctly related. This turns the
   architecture into something a model can pattern match against.
4. **The tabletop decisions**, which no other guide covers and no model can
   infer.

## Contents

### Part one, decide before you build

1. What you are building, and what Shopify will not let you change
2. The catalog decisions
   - Product versus variant versus bundle, as a decision tree with tabletop
     examples
   - Editions: core, deluxe, collector, and when an edition is a variant
   - Expansions and base game compatibility
   - Add ons that are not pledge tiers
   - Preorders, and the inventory and payment settings each approach implies
   - Backer fulfilment and retail order separation
   - Naming and SKU conventions that survive a second product line
3. Your product data
   - The board game, TTRPG and miniatures field sets
   - The importable definition file and the import steps

### Part two, set up the workspace

4. A development store, the Shopify CLI and git, with the exact commands
5. Which AI tools this works with and how they differ in practice, covering
   Claude, Cursor and Codex without ranking them
6. Installing the Shopify AI Toolkit so the tool validates against current
   Shopify documentation instead of guessing
7. The project rules file, and why the model reinvents your structure without it

### Part three, the prompts

8. How to use the library: the pattern, the iteration loop, and how to tell when
   to stop prompting and start reading documentation
9. The library, each prompt with its purpose, full text, sample output, known
   failure modes and verification step
   - Metafield definitions from a catalog description
   - Edition comparison block
   - Component list, what is in the box
   - Base game compatibility notice
   - Preorder delivery block
   - Product structured data for a tabletop product
   - Collection filtering by player count, playtime and format
   - Accessibility and performance self review
   - The verification prompt
10. The one output never to trust: fabricated review ratings in structured data.
    It is the most common and most damaging AI output in ecommerce work and it
    deserves its own section.

### Part four, make it yours

11. Theme settings, colour, type and spacing, and where to stop editing code and
    start using the theme editor
12. Building sections a merchant can actually operate: the settings schema, the
    empty state, mobile behaviour and accessibility. These are the four things
    models drop when not told explicitly.
13. Adapting the sections for board games, TTRPG and miniatures

### Part five, open the store

14. The launch checklist, including the AI specific checks: no fabricated
    ratings, no invented settings keys, keyboard reachable controls on every
    generated section, no layout shift from generated images
15. What is not included, stated plainly: no theme, no support, no installation,
    no guarantee that a generated section is production ready
16. When to hire instead, and what a Guildframe build covers

## Delivery

A zip, not a PDF. Prompts have to be copy and pasteable.

- The guide as markdown plus a readable HTML version
- `prompts.md`, every prompt in one flat file
- `metafields.json`, importable
- `sample-catalog.csv`, the worked example
- `project-rules.md`, the starter rules file

Version it as `v1.0` with a changelog. Buyers of a build guide expect it to
track platform changes, and a version number sets that expectation honestly
without promising lifetime updates.

## Writing rules

- Do not publish a prompt that has not been run. Record the tool, the output,
  what it got wrong and how many iterations it took.
- Keep tabletop vocabulary. Drop Shopify and developer vocabulary wherever a
  plain phrase works, matching the language now used on `/buy` and the homepage.
- The reader is a game creator, not a developer.

## Before checkout opens

1. Write the guide and run every prompt.
2. Package the download.
3. Create the Gumroad product.
4. Set `NEXT_PUBLIC_CHECKOUT_URL` and `NEXT_PUBLIC_GUIDE_CHECKOUT_ENABLED=true`.
5. Re-run `npm test`. The suite asserts the pending state, so it will tell you
   what to update when checkout goes live.
