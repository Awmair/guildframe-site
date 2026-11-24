# Guildframe redesign plan: The Launch Board

Written 2026-11-24. Planning only. Nothing in the site code, git history or any live system was changed to produce this file.

Audience for this document: the agent who will build it, and Umair, who approves it.

How to read it: sections 1 to 4 are the direction, sections 5 to 7 are the build, section 8 is what Umair needs to answer first.

Three notes on process, so nobody is surprised later:

- The impeccable skill asks for its launcher (`impeccable context`) and its dice roll (`concept-seed`) to run before a new visual world is chosen. The launcher was skipped on instruction and the skill scripts were not staged, so neither ran. The direction below is treated as pinned by the owner (structure and feel from unseen.co, world from tabletop). The direction contract records this as `seed: none (pinned)`.
- The skills and the reference disagree in a few places (uppercase tracked labels, numbered menu items, kickers above headings, long looping motion, serif italics). Where that happens the owner's skills win on craft rules and the reference wins on structure and feel. Each case is called out where it occurs.
- The unslop-ui skill loads its sentence rules from a second skill (`/pstack:unslop`) that was not staged. Its own U1 to U20 rules are applied here. The sentence rules could not be read.

---

## 1. Unseen teardown

Studied in the built in browser on 2026-11-24 at 1440 by 900 and 390 by 844, entering without audio. Values marked "measured" were read from computed styles, the stylesheet or the loaded scripts. Values marked "observed" come from screenshots.

### 1.1 What it is built with (measured)

| Layer | Finding |
| --- | --- |
| Platform | WordPress theme, one stylesheet of 48 KB, three scripts (manifest 2 KB, vendor 1,171 KB, theme 409 KB, uncompressed) |
| 3D | three.js r143, one full screen `canvas#gl` fixed behind the DOM, GLTF models with Draco, KTX2 compressed textures |
| How the 3D is cheap | Tiny models (room meshes of 8 to 14 KB) wearing large baked textures (room textures of roughly 0.9 MB each). The light is painted into the texture. Nothing is lit live. |
| Motion | GSAP 3 with ScrollTrigger and CustomEase |
| Scroll | ASScroll (virtual smooth scroll with its own thin scrollbar). On the home, projects and world pages the document does not scroll at all (document height equals the viewport). Project detail pages scroll about 16,700 px. |
| Routing | Highway.js. Navigation swaps views without a reload, so the canvas and audio survive between pages. |
| Sound | Howler with audio sprites (webm with mp3 fallback, one sprite of about 950 KB). Elements carry `data-audio-enter` and `data-audio-click`. Hover on nav plays a ratchet sound, buttons play a soft hover sound. Sound mutes when the tab is hidden. |
| Semantics | Each GL page keeps a hidden `h1` and very little real text. Project tiles and the home headline live in the canvas. This is the part Guildframe must not copy, because the site depends on search. |

### 1.2 Type (measured)

| Role | Family | Size at 1440 | Line height | Tracking | Case |
| --- | --- | --- | --- | --- | --- |
| Root | n/a | `html{font-size:clamp(14px,1vw,38px)}`, so 1rem is 14.4 px at 1440 and everything scales with the window | | | |
| Body, UI | Neue Montreal 400 (commercial) | 14.4 px | 1.5 | normal | sentence |
| Nav links | Neue Montreal | 17.3 px (1.2rem) | 1.1 | normal | sentence |
| Small labels | Neue Montreal 500 | 11.5 px (0.8rem) | 1.5 | normal | uppercase |
| Filter pills | Neue Montreal | 11.5 px, counts 9 px | 1 | -0.32 px | sentence |
| Button label | Neue Montreal | 15.1 px (1.05rem) | 0.9rem | normal | sentence |
| Page title (projects) | Neue Montreal | 57.6 px (4rem) | 1.2 | -1.15 px (-0.02em) | sentence |
| Display (project title, next project) | Neue Montreal | 86.4 px (6rem) | 0.9 to 1 | -1.44 px (-0.1rem) | uppercase |
| Display partner | Saol Display Light and Light Italic (commercial) | 86.4 to 90 px | 0.9 to 1 | -1.44 px | mixed |
| Lead paragraph | Neue Montreal 300 | 28.8 px (2rem) | 1.3 | normal | sentence |
| Sub lead | Neue Montreal 300 | 32.4 px | 1.2 | -0.72 px | sentence |
| Meta values | Neue Montreal | 17.3 px | 1.1 to 1.3 | normal | sentence |

The voice comes from one move repeated everywhere: a plain grotesk and a light, high contrast serif italic set at the same size on neighbouring lines or words. Nav links and menu items hold both versions stacked and roll from the sans to the serif italic on hover.

### 1.3 Colour (measured)

| Use | Value |
| --- | --- |
| Off black (text, dark fills) | `#212121` |
| White (pills, panel fills) | `#ffffff` |
| Loader wash | `rgb(239,222,217)`, a pale clay pink, wiping over `#212121` |
| Menu panel | `#f1edeb` |
| Muted (current menu item) | `#d6d6d6` |
| Pale text on dark pill | `#faf6f4` |
| Brand pink | `#f6c8c3` |
| Project page ground | set per project (the one opened was `rgb(248,232,255)`) |
| World page | near black with a wireframe globe |

Everything outside the 3D scene is two neutrals. All the colour is inside the scene and the project imagery. A film grain sits over every page, and the canvas shifts colour channels apart near the screen edges.

### 1.4 Easing and timing (measured from stylesheet and script)

- CSS curves present: `cubic-bezier(.16,1,.3,1)` (expo out), `cubic-bezier(.87,0,.13,1)` (expo in out), `cubic-bezier(.19,1,.22,1)`.
- CSS durations: transforms 1 s, colour 0.5 s, opacity 0.4 to 0.7 s, filter pill state 0.4 s ease in out, underline scale 0.2 s ease out.
- GSAP eases by count in the theme script: `expo.out` 45, `power2.out` 29, `expo.inOut` 24, `none` 20, `power2.inOut` 12, `power4.out` 11, `power4.inOut` 9.
- GSAP durations by count: 1 s (59), 0.5 s (34), 0.8 s (21), 0.2 s (18), 0.3 s (17), 2 s (15), 1.5 s (13), 3 s (11).
- Reading: interface feedback is 0.2 to 0.5 s, most reveals are 0.8 to 1 s on expo out, camera and scene moves run 1.5 to 3 s, full screen wipes use expo in out.

### 1.5 Element by element

**Loader and entry gate.** A full screen fixed layer (z 12000). A dark base, then a pale pink layer that wipes in with a 1 s ease out transform as assets load. Centre stack: a drawn mascot (cartoon eyes that follow the pointer), the studio name in small uppercase, a three line positioning sentence at 14.4 px, then a white pill to enter (94 by 37 px, radius 21.6 px). A second, underlined 10 px uppercase text button sits 60 px above the bottom edge and enters muted. The gate needs a click because browsers require a gesture before audio. Same layout at 390 wide.

**Home.** One full viewport 3D room: clay pink walls, arches, shallow water with reflections, a few boulders, a sky. The camera sits still and leans a few degrees toward the pointer. In the middle hangs a dark plane that plays a showreel, with a white pill under it leading to the projects page. On mobile the same room carries a headline (a small uppercase line, then one serif italic line and one sans line at the same size) above the pill. The page does not scroll. DOM buttons are positioned by projecting 3D points to the screen, so they stay attached to the scene.

**Persistent chrome.** Top left: wordmark (190 by 24 px at 29 px from the edges). Top right: three text links, then a 53 px round button holding two dots. Bottom left: a round sound toggle and an outlined promo pill. Bottom centre: a small round link to the world page. Bottom right: the year. The chrome never changes between pages. Only its colour flips between light and dark.

**Menu.** The two dot button opens a panel from the right, 590 px wide at 1440 (41 percent of the width) and full screen on mobile, ground `#f1edeb`. Four items at 90 px in the serif, each with a small 18.7 px index number, set on a slight stagger to the right. The current page shows in the grey sans with an underline. Hover rolls an italic version in. Below: email, phone and a column of 10 px uppercase social links. The scene behind slides left as the panel arrives, and the two dot button becomes a dark circle with a cross.

**Page transition.** Clicking a menu item rolls that item's text away, the scene fades to grainy off black, then the next room or page assembles. The canvas persists, so going from home to contact is a camera move inside the same building.

**Projects index.** A second 3D space (white arcade, drifting leaf particles). A 57.6 px title, then a white pill bar (373 by 34 px) holding five filter buttons with superscript counts. The active filter is an off black pill and the pill slides between options (0.4 s). Tiles are a two column grid rendered in the canvas: image, title, discipline line, a small arrow, with a hairline under each. The whole grid tilts toward the pointer and edges show colour fringing. Changing a filter empties the grid so the arcade shows for a beat, then the filtered tiles arrive.

**Project detail.** Real DOM on a tinted ground chosen per project. A 1152 px container (80 percent of the width). Header: a section word in serif italic uppercase at 86.4 px, the project name in sans uppercase at 86.4 px, two discipline words (one sans, one serif italic) offset to the right, and a 456 px square 3D object floating behind the title. Then a two column block: a 28.8 px light overview on the left and small uppercase labels with 17.3 px values (services, date, client, location) plus a pill to the live site on the right. Then full width video and stills, a two row strip of thumbnails that drifts sideways as you scroll, and paired text blocks (32.4 px light heading beside 14.4 px body). Media bends slightly with scroll speed. The page ends on a full viewport block naming the next project, with a hint to keep scrolling and a progress line. Scrolling through it loads the next project. There is no footer.

**World.** A dark page with a wireframe globe and an endless field of image and video cards wrapped onto a sphere. Dragging pans it with inertia and the cards leave motion trails. The pointer becomes a small 3D hand that changes pose for point, grab and grabbing. A hint to drag appears first. Markup for a click and hold prompt and a per card credit and a view more button exists.

**Contact.** A second room in the same building: fluted columns, a platform over the water, a shell chair. A serif italic greeting at 86.4 px, a small uppercase line, two pills that switch between two enquiry types and swap the email address shown. No form.

**Cursor.** A 2.2rem (32 px) ring with a 1.5 px border that follows the pointer. It has states for hold (a disc that scales up inside the ring), drag (a 5rem disc with arrows), progress, and a video indicator. Elements opt out with `data-cursor="hide"`.

**Buttons.** Pills of radius 1.5rem with padding about 0.8rem by 1.5rem. Two copies of the label are stacked. On hover the first leaves upward while the second arrives from above, and an SVG rectangle draws the fill. Light and dark variants swap text and fill.

### 1.6 What makes it feel the way it does

1. You are placed inside one continuous place. Pages are rooms, and going between them is travel.
2. The interface is almost nothing: two neutrals, one grotesk, tiny labels. The scene holds all the colour.
3. Everything answers the pointer a little (camera lean, grid tilt, cursor ring, mascot eyes) and nothing answers it a lot.
4. Slow confident easing. Things arrive on expo out over about a second and never bounce.
5. One typographic trick, used with discipline: sans and serif italic at the same size.
6. Texture: grain and edge fringing make flat colour feel photographed.
7. Sound is offered at the door and never forced.

### 1.7 What Guildframe takes, and what it leaves

| Take | Leave |
| --- | --- |
| Entry gate with a sound choice | The mascot eyes, wordmark, copy, models, textures and audio files |
| One persistent world with rooms | Canvas only pages with hidden headings (search needs real text) |
| Fixed minimal chrome in four corners | Virtual scrolling (guides are for reading, native scroll stays) |
| Right hand menu panel with giant items and the hover roll | Index numbers on menu items (see 2.4) |
| Pill buttons with rolling labels | Uppercase tracked labels (the owner's skills rule them out) |
| Filter pill bar with counts | A click being required before any content shows |
| Tinted ground per project, next project block | 1.5 MB of script and a 3D engine (see 6.2) |
| Drag to explore page, custom cursor, grain | Edge colour fringing (not possible over DOM, see 4.3) |
| Expo out pacing | 2 to 3 second scene moves |

---

## 2. The Guildframe world

### 2.1 The idea

**The site is one board game about launching a board game, set up on a card table at night.**

A game board lies on petrol baize under a single warm lamp. A track runs across it from a start space to launch day and on to a small shop. Seven landmarks stand along the track, one per service, each a die cut cardboard standee. A coral pawn marks where you are. The visitor drags to look along the board, presses and holds to lift the camera for an overview, and picks a landmark to travel there.

Why this and not another tabletop picture:

- It is the mechanism, not a mood. Guildframe's job is to move one game along a fixed route: plan, prelaunch, page, ads, launch day, after the campaign, store. A track with spaces is that route drawn honestly. The home process section (Plan, Build, Launch) is already a three space track.
- It solves the asset problem. All imagery will come from an image generator, which makes flat pictures and cannot make 3D models. In tabletop, 3D things really are flat printed card: standees, tiles, punchboard. Flat art standing upright in true perspective is the real object, with nothing faked.
- It replaces the incumbent hero (a painted fantasy landscape that could front any fantasy product) with something only a tabletop launch studio would have.
- It keeps the brand's existing "studio table" motif and gives it a job.

### 2.2 Derivation the impeccable skill asks for

Mechanism: one person takes a tabletop game through every step of a crowdfunding launch and says plainly what he does and does not control.

Audience scene: a designer at a desk at ten at night after the day job, a prototype beside the laptop under a desk lamp, deciding who to trust with a launch that has their savings in it.

Cultural home: game nights, convention halls, rulebooks, punchboard, print proofs, campaign pages.

What the home page must prove: this person understands my kind of product, has done it for real clients, and tells me the price.

The page this category always ships: cream ground, serif headline, a hero painting or a box mockup collage, three service cards, logo row. Its predictable opposite: black ground, neon accent, arcade type. Both are out.

Seven candidates from the audience's world, ordered by resonance, across four material families:

| # | Candidate | Family | Why it resonates | How it looks |
| --- | --- | --- | --- | --- |
| 1 | The board with a track and standees | Board | Everyone here has moved a pawn along a track. Carries a route with stages. | Baize ground, printed board, die cut card with pale core edges, wooden pawn |
| 2 | Punchboard sheet before punching | Print production | The moment a game becomes real. Carries "parts of a whole". | Flat saturated tokens in a grid with nick marks, greyboard ground |
| 3 | Rulebook setup diagram | Graphic tradition | The clearest explainer the hobby owns. Carries "how it works". | Isometric line and flat colour, numbered callouts, dotted arrows |
| 4 | Printer's proof sheet | Print production | Creators sign these off before manufacturing. Carries approval. | Crop marks, colour bars, registration targets, annotations |
| 5 | Reward tier ladder from a campaign page | Screen tradition | They read these daily. Carries pricing. | Stacked tier cards, pledge amounts, included lists |
| 6 | Convention hall booth | Place | Where launches are won in person. Carries proof. | Banners, demo tables, crowd, hall lighting |
| 7 | Game night table mid play | Place | The literal reading of the brand, and the incumbent motif. Rut material. | Mixed components, snacks, hands |

Chosen: candidate 1 as the world. Raises taken from the ones it beat, each a discipline and not a costume:

- From the punchboard sheet (2): every image is a cut object with an edge and a shadow. No rectangles of art floating on colour.
- From the rulebook diagram (3): labels attach to the thing they name with a short leader line. No detached captions.
- From the reward ladder (5): prices are shown the way backers see tiers, with the contents listed under the number.

Candidate 7 is spent as the single literal reading. Candidates 4 and 6 are declined.

Mode by surface: home, services, pricing and contact are Persuade. Work, case studies and the studio page are Experience. Guides, resources and legal pages are Read.

Colour strategy: Full palette, four named roles, committed at page scale (see 3.1). Dark or light comes from the scene sentence above: a dim room with one lit object. So the ground is dusk petrol, the board is the bright thing, and reading pages move onto lamp lit greyboard so long text is comfortable. This also respects the owner's dislike of glaring light interfaces.

### 2.3 What the visitor sees and touches

| Name | What it is | Where |
| --- | --- | --- |
| The lid | The entry gate. The top of a coral game box, seen from above, filling the screen. | Home, first visit in a session |
| The board | A printed board with a winding track, tilted in perspective | Home hero |
| The track | The dotted route across the board. It continues down the home page as a thin dotted line linking sections. | Home |
| Landmarks | Seven standees: Planning desk, Post tower, Easel, Lantern, Launch day stall, Parcel cart, Shopfront | Home hero, service pages |
| The pawn | A coral wooden pawn. Marks the current place. | Hero, process section, menu, 404 |
| Pips | Dice pips. The brand's dot system. Used for loading progress and the menu button. | Gate, header |
| The lamp | One warm light from the upper left. Drawn by the lens layer. | Everywhere on dusk grounds |
| Tiles | Work and concept tiles, each cut like a card with a contact shadow | Home, work index |
| The desk | A draggable spread of studio scraps | The studio page |
| The token | The cursor ring | Fine pointers on Persuade and Experience pages |

Landmark to service mapping (labels are real links):

| Landmark | Label | Links to |
| --- | --- | --- |
| Planning desk | Launch planning | `/kickstarter-launch-services` |
| Post tower | Prelaunch page and email | `/kickstarter-prelaunch-marketing` |
| Easel | Campaign page | `/campaign-design` |
| Lantern | Ads and creative | `/kickstarter-advertising` (creative also at `/campaign-creative`) |
| Launch day stall | Live campaign | `/kickstarter-campaign-management` |
| Parcel cart | After the campaign | `/post-campaign-support` |
| Shopfront | Kickstarter to Shopify | `/kickstarter-to-shopify` |

### 2.4 Mechanic by mechanic mapping

| Unseen mechanic | Guildframe version | Notes |
| --- | --- | --- |
| Pink loader wipe with mascot eyes | The lid: coral box top, the Guildframe logo, two dice whose pips count 1 to 6 as assets load | Dice are flat vector geometry. The pair leans toward the pointer. |
| Enter, or enter without audio | "Open the box", with a quieter "Open with sound" | Reversed on purpose: silent is the default (brief and impeccable overdrive rule). The lid also opens by itself 4 seconds after assets are ready, on any scroll, or on any key. |
| Persistent 3D room | The board on baize, kept as one scene | Built from flat art in CSS 3D (see 6.2) |
| Camera leans to pointer | Same, 2.5 degrees of tilt and 4 of yaw | |
| Showreel plane with a pill to the work | The Easel standee shows a campaign page concept. A "See the work" pill sits by it. | |
| DOM pinned to 3D points | Landmark labels are real links placed inside the 3D scene | Better for search and keyboards than projection |
| Drag to explore | Drag pans along the track with inertia | One axis on touch so vertical scroll still works |
| Click and hold | Press and hold lifts the camera to an overview of the whole board with every label showing | A plain click or tap always navigates. Hold is never required. |
| Two dot menu button | A die face: two pips closed, five pips (a cross shape) open | 300 ms morph |
| Menu panel with numbered giant items | Same panel and scale, no numbers. The pawn sits beside the current page and hops to the hovered item. | Numbers are decorative there. The pawn carries state. |
| Sans to serif italic hover roll | Same | Host Grotesk to Instrument Serif italic |
| Promo pill bottom left | "Free opening mockup" pill linking to the enquiry form | Replaces the retired launch kit promotion |
| Globe link bottom centre | A small hint: "Drag to look around", then "Hold for the whole board" | Fades after first use |
| Room to room travel | The deal: a baize panel slides over like a dealt card, the destination name shows for a beat, the panel lifts | 0.9 s total, see 4 |
| Projects in a white arcade with filter pills | Work index on greyboard with a filter pill bar and counts: All, Client work, Studio concepts | The filter carries real information: verified client work versus concepts |
| Grid tilt and edge fringing | Each tile leans toward the pointer and skews slightly with scroll speed | No fringing |
| Tinted project page with a floating object | Case study on a ground tinted from the project's own artwork, with the matching landmark standee | |
| Next project, keep scrolling | Same, with a progress line. The block is also a normal link. | |
| World page | The studio page opens on the desk: a draggable spread of sketches, proofs and prototype cards | Uses the brand's existing notebook motif |
| Contact room | The enquiry form section, restyled as the start space, on every page | The form must stay on every page (tests) |
| Ring cursor with hold and drag states | The token: same ring, same states | Native cursor returns on reading pages and in form fields |
| Grain | The lens: fine grain, a vignette and the lamp glow | Felt has a nap, so the grain is the ground's own texture |
| Howler sprites | Four synthesised sounds through Web Audio | No audio files to license or load |
| Virtual smooth scroll | Native scroll | Guides are for reading |

---

## 3. Design system

### 3.1 Palette

Contrast ratios below were computed for this plan. Recheck them in the browser.

**Dusk grounds (home, services, work, studio, footer)**

| Token | Hex | Role |
| --- | --- | --- |
| `--baize-900` | `#0E2325` | Deepest: footer, menu scrim, curtain |
| `--baize-800` | `#133033` | Page ground |
| `--baize-700` | `#1B4144` | Raised surface: inputs, tier cards |
| `--board-100` | `#EFE6D4` | Primary text on dusk (11.3 to 1), card faces, menu panel |
| `--mist-300` | `#A9BDB6` | Secondary text on dusk (7.1 to 1) |
| `--mist-500` | `#8FA9A2` | Muted text and icons on dusk (5.6 to 1) |
| `--line-dusk` | `rgb(239 230 212 / 0.14)` | Hairlines on dusk |

**Greyboard grounds (guides, resources, legal, case study body)**

| Token | Hex | Role |
| --- | --- | --- |
| `--greyboard-200` | `#DDD3BF` | Reading ground. Lamp lit card, not white. |
| `--greyboard-100` | `#E8DFCC` | Raised on greyboard: answer cards, tables |
| `--ink-900` | `#142426` | Primary text (10.8 to 1) |
| `--ink-700` | `#3D5152` | Secondary text (5.7 to 1) |
| `--ink-500` | `#475B5C` | Muted text, captions (about 4.9 to 1) |
| `--line-board` | `rgb(20 36 38 / 0.16)` | Hairlines on greyboard |

**Component colours (the four roles)**

| Token | Hex | Role | Rules |
| --- | --- | --- | --- |
| `--coral-500` | `#EF644D` | Action. Primary buttons, the pawn, the lid. This is the existing logo coral. | Text on it is `--ink-900` (5.0 to 1). On dusk it passes for large text and controls only (4.4 to 1). |
| `--coral-300` | `#F58468` | Coral as small text on dusk | |
| `--coral-700` | `#9C3220` | Coral as text or links on greyboard (4.9 to 1) | |
| `--saffron-500` | `#F2B33D` | Light. Lamp glow, selection, hover fills, the one figure that matters (client result, price) | 7.5 to 1 on dusk. Never as text on greyboard. |
| `--jade-400` | `#5CC0A4` | Verified. The "Client work" marker, form success | 6.4 to 1 on dusk. On greyboard use `--jade-700` `#1B6453`. |
| `--lilac-300` | `#C3B6F0` | Concept. The "Studio concept" marker | 7.5 to 1 on dusk. On greyboard use `--lilac-700` `#5A4A93`. |
| `--error` | `#E5604F` on dusk, `#A32B1C` on greyboard | Form errors, always with words | |

Use: coral covers a few percent of any screen. Saffron, jade and lilac each mean one thing and appear only where that thing is true. The board art, standees and client imagery carry the rich colour. No gradients between hues, no glows, no glass.

### 3.2 Type

| Voice | Family | Licence and source | Use |
| --- | --- | --- | --- |
| Main | **Host Grotesk** variable, weights 300 to 800 | SIL Open Font License. Listed on Google Fonts and Fontsource. Download the latin and latin ext woff2 files, self host in `public/fonts/`, add the OFL text and a SOURCES entry. Confirm the weight range and licence text at download. | Everything: UI, body, display |
| Partner | **Instrument Serif** regular and italic | Already self hosted in `public/fonts/` with its OFL file | One phrase inside display headlines, and the hover roll on nav and menu items. Never body, labels or buttons. |

Why these: the reference feel is a plain, slightly warm grotesk beside a light display serif italic. Both of its faces are commercial. Host Grotesk is the closest open grotesk in proportion and tone and is not on the impeccable list of reflex faces. Instrument Serif is the closest open match to a light condensed display italic, is already licensed in the repo, and costs no new download. Manrope is retired with the old look.

If Host Grotesk cannot be fetched or its licence text differs from the above, use Schibsted Grotesk (OFL) and tell the owner.

Fallback stacks:

```css
--font-sans: "Host Grotesk", "Host Grotesk Fallback", "Helvetica Neue", Arial, sans-serif;
--font-serif: "Instrument Serif", "Instrument Serif Fallback", Georgia, "Times New Roman", serif;
```

Define the two `Fallback` faces with `@font-face { src: local("Arial") }` and `local("Georgia")` plus `size-adjust`, `ascent-override` and `descent-override` measured against the real files, so the swap does not move the layout. Preload the Host Grotesk latin file and the Instrument Serif italic file. `font-display: swap`.

One deviation from unslop, stated: unslop says no italics for emphasis. The serif italic here is a second voice inside a display line, pinned by the reference. It is limited to one phrase per headline and is never used in running text.

### 3.3 Type scale

Weights are 300, 400 and 500 only. Sentence case everywhere. No uppercase tracked labels and no kicker above any heading.

| Role | Token | Size | Line height | Tracking | Weight |
| --- | --- | --- | --- | --- | --- |
| Display XL (home h1, menu items) | `--t-display-xl` | `clamp(2.75rem, 7.2vw, 6rem)` | 0.95 | -0.03em | 400 |
| Display L (page h1, section h2) | `--t-display-l` | `clamp(2.125rem, 4.6vw, 4rem)` | 1 | -0.025em | 400 |
| Title (h3, tile names) | `--t-title` | `clamp(1.375rem, 2.2vw, 1.875rem)` | 1.15 | -0.01em | 400 |
| Lead | `--t-lead` | `clamp(1.125rem, 1.6vw, 1.5rem)` | 1.35 | 0 | 300 |
| Body | `--t-body` | `1rem` (guides `1.125rem`) | 1.6 | 0 | 400 |
| UI (nav, buttons, labels) | `--t-ui` | `0.9375rem` | 1.2 | 0 | 500 |
| Small (meta, captions) | `--t-small` | `0.8125rem` | 1.4 | 0.01em | 400 |
| Count (filter counts, figures) | `--t-count` | `0.75rem` | 1 | 0 | 500, tabular |
| Figure (prices, client totals) | `--t-figure` | `clamp(3rem, 6vw, 5.5rem)` | 0.9 | -0.03em | 400, tabular |

Rules: display never exceeds 6rem. Tracking never goes below -0.03em. Body measure is 65ch (guides 68ch). `text-wrap: balance` on headings, `text-wrap: pretty` on body. Light text on dusk gets body line height 1.65 and weight 400, never 300 below 18 px.

### 3.4 Space, radius, depth

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px; --s-5: 20px; --s-6: 24px;
--s-8: 32px; --s-10: 40px; --s-12: 48px; --s-16: 64px; --s-20: 80px; --s-24: 96px; --s-32: 128px;
--page-pad: clamp(16px, 2vw, 29px);      /* chrome sits this far from every edge */
--wrap: min(1152px, 100% - 2 * var(--page-pad));   /* 80 percent of 1440 */
--wrap-wide: min(1328px, 100% - 2 * var(--page-pad));
--section: clamp(72px, 12vh, 128px);
--r-chip: 6px; --r-control: 10px; --r-card: 14px; --r-panel: 20px; --r-pill: 999px;
--shadow-contact: 0 10px 24px -8px rgb(6 18 19 / 0.55);   /* cut objects on baize */
--shadow-paper: 0 1px 2px rgb(20 36 38 / 0.08);            /* on greyboard */
```

Everything sits on the 4 px grid. Elevation is declared once per object: a shadow on dusk, a hairline on greyboard, never both. Pills are for buttons, filters and the menu button only.

### 3.5 Controls

- **Pill button.** Height 44 px (36 px in the header), padding 0 20 px, radius pill, label at `--t-ui`. Primary on dusk: `--board-100` fill, `--ink-900` text. Accent: `--coral-500` fill, `--ink-900` text, used once per viewport at most. Secondary: transparent with a `--line-dusk` hairline. Hover: the label rolls (a second copy arrives from below while the first leaves upward, 400 ms) and the arrow moves 4 px. Press: scale 0.98.
- **Text link.** Underline 1 px, offset 5 px. Hover moves the underline colour to saffron on dusk or coral 700 on greyboard, 150 ms.
- **Filter pill bar.** A `--baize-700` (or `--greyboard-100`) pill container holding buttons at `--t-small` with a superscript count. The active pill is a sliding `--board-100` (or `--ink-900`) thumb, 400 ms.
- **Form fields.** `--baize-700` fill, 10 px radius, 48 px tall, visible labels above. Focus ring 2 px saffron with 3 px offset.
- **FAQ.** Native `details`. The marker is an authored plus icon that rotates 45 degrees.

### 3.6 Cursor

Fine pointers only, with JavaScript, without reduced motion, on Persuade and Experience pages only.

- A 28 px ring, 1.5 px `--board-100` border (ink on greyboard), following with a 0.18 lerp.
- Over a link or button: the ring grows to 44 px and takes a 12 percent saffron fill.
- Over the board or the desk: it shows two chevrons. While dragging it shrinks to 20 px.
- While holding on the board: a stroke runs round the ring over 600 ms, then the overview triggers.
- Over inputs, selects, text areas and long text: the ring hides and the native cursor returns.
- The native cursor is hidden only while the ring is active. If the script fails, nothing is hidden.

### 3.7 Icons

One authored SVG set in `app/components/chrome/Icon.tsx`: 18 px box, 1.5 px stroke, round caps, `currentColor`. Needed: arrow right, arrow up right (external), close, plus, search, sound on, sound off, chevrons (drag), check. The pawn, the dice and the pip menu button are authored as flat vector geometry in the same file. No emoji and no unicode glyphs as icons (the current plus sign, search glyph, multiplication sign and middle dots are replaced).

### 3.8 Sound

Off by default. One toggle, bottom left, remembered in `localStorage`. Nothing plays before a user gesture. All sounds are synthesised with the Web Audio API, so there are no files and no licences.

| Event | Sound | Recipe |
| --- | --- | --- |
| Hover on nav, menu items, tiles | Card flick | 30 ms white noise, band pass 2.5 kHz, gain 0.05 |
| Click on buttons and links | Wooden tock | 90 ms sine falling 220 to 140 Hz plus a 5 ms noise click, gain 0.12 |
| Lid opens | Dice roll | Six tocks at random gaps over 450 ms, pitch varied by 15 percent |
| Menu opens or closes, curtain | Felt slide | 250 ms noise through a low pass sweeping 400 to 1,200 Hz, gain 0.06 |

Master gain 0.5. Hover sounds are skipped on touch. Everything mutes when the tab is hidden.

### 3.9 Tokens ready to paste

```css
:root {
  /* colour */
  --baize-900:#0E2325; --baize-800:#133033; --baize-700:#1B4144;
  --board-100:#EFE6D4; --mist-300:#A9BDB6; --mist-500:#8FA9A2;
  --greyboard-200:#DDD3BF; --greyboard-100:#E8DFCC;
  --ink-900:#142426; --ink-700:#3D5152; --ink-500:#475B5C;
  --coral-300:#F58468; --coral-500:#EF644D; --coral-700:#9C3220;
  --saffron-500:#F2B33D;
  --jade-400:#5CC0A4; --jade-700:#1B6453;
  --lilac-300:#C3B6F0; --lilac-700:#5A4A93;
  --line-dusk:rgb(239 230 212 / .14); --line-board:rgb(20 36 38 / .16);

  /* semantic, dusk is the default tone */
  --bg:var(--baize-800); --bg-raised:var(--baize-700); --fg:var(--board-100);
  --fg-2:var(--mist-300); --fg-3:var(--mist-500); --line:var(--line-dusk);
  --accent:var(--coral-500); --on-accent:var(--ink-900); --link:var(--board-100); --focus:var(--saffron-500);

  /* type */
  --font-sans:"Host Grotesk","Host Grotesk Fallback","Helvetica Neue",Arial,sans-serif;
  --font-serif:"Instrument Serif","Instrument Serif Fallback",Georgia,"Times New Roman",serif;
  --t-display-xl:clamp(2.75rem,7.2vw,6rem); --t-display-l:clamp(2.125rem,4.6vw,4rem);
  --t-title:clamp(1.375rem,2.2vw,1.875rem); --t-lead:clamp(1.125rem,1.6vw,1.5rem);
  --t-body:1rem; --t-ui:.9375rem; --t-small:.8125rem; --t-count:.75rem; --t-figure:clamp(3rem,6vw,5.5rem);

  /* space, radius, depth: see 3.4 */

  /* motion */
  --ease-out:cubic-bezier(.16,1,.3,1);       /* everything */
  --ease-inout:cubic-bezier(.87,0,.13,1);    /* the lid and the curtain only */
  --d-feedback:150ms; --d-state:220ms; --d-move:400ms; --d-enter:700ms; --d-wipe:900ms;

  /* layers */
  --z-header:80; --z-menu:90; --z-consent:95; --z-curtain:100; --z-cursor:110; --z-gate:120;
}
[data-tone="board"] {
  --bg:var(--greyboard-200); --bg-raised:var(--greyboard-100); --fg:var(--ink-900);
  --fg-2:var(--ink-700); --fg-3:var(--ink-500); --line:var(--line-board);
  --link:var(--coral-700); --focus:var(--ink-900);
}
::selection { background:var(--saffron-500); color:var(--ink-900); }
:focus-visible { outline:2px solid var(--focus); outline-offset:3px; }
html { scrollbar-color:var(--mist-500) var(--baize-900); scrollbar-width:thin; caret-color:var(--coral-500); }
```

Also update `viewport.themeColor` in `app/layout.tsx` and the colours in `app/manifest.ts` to `#133033`.

### 3.10 PRODUCT.md (save at the repo root)

```markdown
# Guildframe

## What it is
A one person studio that helps tabletop creators run Kickstarter and Gamefound campaigns.
Umair plans the launch, builds prelaunch pages and email, writes and designs the campaign page,
makes creative and animated ads, runs paid advertising, manages the live campaign and supports
the handoff afterwards, including moving from Kickstarter to Shopify.

## Users
Independent creators and small publishers of board games, card games, TTRPGs, miniatures,
terrain and accessories. Often first or second campaign. They arrive from search, from a guide,
or from a recommendation, usually in the evening, with a prototype and usable artwork and a
launch date in mind. They are deciding who to trust with money they cannot afford to waste.

## Jobs
1. Understand what Guildframe does and for which kinds of game.
2. See real client work, clearly separated from studio concepts.
3. See the price and what it includes.
4. Send a project, or ask for a free opening mockup.
5. Read a guide and get a straight answer.

## Voice
First person. Direct, warm, plainspoken, playful but practical. Candid about limits.
Tabletop words, not developer or Shopify jargon.

## Brand commitments
- Never promise or imply funding.
- No invented clients, testimonials, reviews, ratings or results.
- Client work and studio concepts are always labelled apart.
- A case study may show the client's public Kickstarter total, labelled as the client's result.
- Prices come from app/site-config.ts and app/product-data.ts only.
- No em dashes, no en dashes, no visible hyphenated compounds in rendered copy.
- Sound is off unless the visitor turns it on. Motion respects reduced motion.
- The free launch kit is retired. The free opening mockup and the Shopify guides remain.
- Every existing URL keeps working. Search content is not removed.

## Not in scope for design work
SEO and AEO changes. They run separately after the redesign ships.

## Constraints
Next.js static export on Cloudflare Pages from GitHub main. No server rendering at request time.
Tests in tests/static-output.test.mjs define required markup hooks and phrases.
```

### 3.11 DESIGN.md (seed, save at the repo root, refresh from the built site at finish)

The impeccable skill writes DESIGN.md at the end, from what was built. Save this as the seed so later sessions load the same direction, then replace it at stage 9.

```markdown
---
world: the-launch-board (custom, pinned by owner; reference for structure and feel: unseen.co)
---
# Guildframe design system

## World
One board game about launching a board game, set up on petrol baize under one warm lamp.
A track, seven landmark standees, a coral pawn. Flat printed card standing in real perspective.

## Tone by surface
Dusk (baize) for home, services, work index, studio, footer.
Greyboard for guides, resources, legal and case study bodies.
Sections may switch tone as a whole. No tinted cards on a neutral page.

## Colour
Baize 900 #0E2325, 800 #133033, 700 #1B4144. Board 100 #EFE6D4. Mist 300 #A9BDB6, 500 #8FA9A2.
Greyboard 200 #DDD3BF, 100 #E8DFCC. Ink 900 #142426, 700 #3D5152, 500 #475B5C.
Coral 500 #EF644D means action. Saffron 500 #F2B33D means light and the figure that matters.
Jade 400 #5CC0A4 means verified client work. Lilac 300 #C3B6F0 means studio concept.
No hue gradients, glows, glass or coloured shadows.

## Type
Host Grotesk (300, 400, 500) for everything. Instrument Serif italic for one phrase per display
headline and for the nav hover roll. Sentence case. No uppercase tracked labels. No kickers.
Display max 6rem, tracking floor -0.03em, body 16 px (guides 18 px), measure 65 to 68ch.

## Shape and depth
4 px grid. Controls 10 px, cards 14 px, panels 20 px, pills for buttons and filters.
Images are cut objects: they have an edge and a contact shadow on dusk, a hairline on greyboard.

## Motion
One curve, cubic-bezier(.16,1,.3,1). A second, cubic-bezier(.87,0,.13,1), for the lid and curtain only.
150 ms feedback, 220 ms state, 400 ms moves, 700 ms entrances, 900 ms wipes.
One authored moment per page. Content is visible without scripts. Reduced motion removes travel.

## Signature
Dice pips: loading progress and the menu button. The pawn marks where you are.

## Chrome
Logo top left. Three links, a "Start a project" pill and the pip button top right.
Sound toggle and the free mockup pill bottom left. Year bottom right.

## Do not
Kickers, numbered sections, equal icon cards, glass, emoji icons, unicode glyph icons,
parallax floats, bounce easing, sound without consent, text baked into images.
```

### 3.12 Direction contract (save in the home surface brief, never in shipped source)

```text
THESIS: The site is one board game about launching a board game. It refuses the category
default of a cream page with a serif headline over a box mockup collage and three service cards.

OWN-WORLD: Petrol baize ground, a lamp lit printed board, die cut standees with pale card edges
and contact shadows, a coral pawn, dice pips, greyboard for reading. Host Grotesk with one
Instrument Serif italic phrase. Pill controls. Recognisable with every word removed.

STORY: I see the whole route a launch takes and that one person walks it with me. I see real
client campaigns, kept apart from concepts. I see two fixed prices. I send my project.

FIRST VIEWPORT: Full bleed dusk. The h1 sits top left across seven of twelve columns on the dark
upper wall. The board fills the lower 62 percent, track running lower left to upper right, seven
standees, pawn on the start space. Lead copy and two actions sit lower right on the horizon:
"Discuss my project" (coral pill, to the form) and "See pricing". Chrome in four corners.

FORM: Persistent tabletop diorama with rooms. seed: none (pinned) "Reference to follow:
unseen.co ... copy that as much as possible", "a living tabletop world in place of Unseen's world".
Signature interaction: drag along the track, hold to lift to the overview, choose a landmark.
Motion grammar: things stand up, hop and are dealt. Nothing floats or bounces.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance
```

### 3.13 Unslop direction and audit of the current site

Direction, five lines:

- **Product.** One person who plans, designs, advertises and runs Kickstarter and Gamefound launches for tabletop games.
- **Character.** Lamp lit, hands on, a little mischievous.
- **World.** A card table at night: baize, printed board, punched card, wooden pieces.
- **Moments.** The board in the hero. The client campaign artwork in the work tiles.
- **Signature.** Dice pips.

Signs found in the current build, each fixed by the plan:

| Sign | Where | Fix |
| --- | --- | --- |
| Kicker labels above headings | `gf-eyebrow` across service pages, form, FAQ, work, case studies; `gfr-rule` label rows on home | Remove. Keep the useful link from each rule row beside the heading. |
| Decorative numbering | Deliverables list, delivery steps, case study decisions, `serviceCards` numbers | Remove. Process (Plan, Build, Launch) keeps its order through the track, not numerals. |
| Glass | `glass` class on header, mobile nav and form | Solid surfaces |
| Unicode glyphs as icons | plus in FAQ summaries, search glyph, close crosses | Authored icons |
| Middle dot chains | Captions and link rows using a middle dot | One fact per line, or separate links |
| Staccato heading | "Questions, answered." | "Questions before you book" |
| Italic used for emphasis in every heading | `em` in each h1 and h2 | One serif italic phrase per display headline, by rule |
| Generic hero image | Fantasy landscape painting | The board |
| Uneven systems | Fourteen stylesheets with separate token sets (`gf`, `gfr`, `seo`, `article`, `trust`) | One token file, one base, one legacy skin |
| Decorative shader surfaces | Mesh gradient and glass canvases | Removed. One lens layer with a job. |

---

## 4. Motion spec

Motion thesis:

- **Focal moment:** the lid lifts and the board sets itself up. One per session.
- **Continuity:** the curtain between pages, the menu panel, filter changes.
- **Feedback:** pill label roll, token states, tile lean, pawn hop in the menu.
- **Budget:** one `requestAnimationFrame` loop for the camera and one for the lens, both only while the hero is on screen and the tab is visible.

One curve for everything (`--ease-out`). The second curve (`--ease-inout`) is only for the lid and the curtain. This is a deliberate narrowing of the reference, which uses about ten eases.

### 4.1 Loader and entry gate (the lid)

| Item | Spec |
| --- | --- |
| Where | Home only. First visit in a browser session (`sessionStorage`). Never on guides, services or any deep page. Never when the URL has a hash. |
| Markup | Server rendered inside `app/page.tsx` after the main content, so the real page is first in the HTML. Fixed, full screen, `--coral-500`. Logo, one line ("Kickstarter and Gamefound launches for tabletop games"), two dice, a board coloured pill "Open the box", a text button "Open with sound". |
| Loading | Dice pips step 1 to 6 as the board image and the first four standees decode. 120 ms per step minimum so it reads. |
| Trigger to open | Click or Enter on either button. Or any scroll, wheel, touch move or key. Or 4 seconds after assets are ready. Or 6 seconds after first paint whatever has loaded. |
| Open | The lid scales to 1.08, moves up 6 percent and fades over 900 ms `--ease-inout`, its shadow sliding off downward. Focus moves to the main content. The element is then removed. |
| With sound | "Open with sound" also resumes the audio context and plays the dice roll |
| Reduced motion | No lid at all. The page is simply there. |
| No JavaScript | `<noscript><style>.gate{display:none}</style></noscript>`. The lid never shows. |
| Mobile | Same. Logo 160 px wide, pill 48 px tall, 24 px from the text button to the bottom safe area. |
| Search and speed | The lid is an overlay. The h1 and all content are in the HTML underneath. The lid's own text paints on the first frame, so first paint is not delayed. |
| Consent banner | Held back until the lid has opened (listen for a `guildframe-gate-open` event in `Analytics.tsx`) so two overlays never stack |

### 4.2 Hero world (the board)

| Item | Spec |
| --- | --- |
| Still state | Pure HTML and CSS 3D. Visible with no script. |
| Set up (after the lid, or on load when there is no lid) | Board tilts from 80 to 58 degrees and fades in, 700 ms. Standees stand up from flat one after another along the track, 500 ms each, 70 ms apart, ten at most. The pawn hops onto the start space in two arcs of 300 ms. Headline lines rise from a mask, 700 ms, 80 ms apart. About 2.2 s in total. Any scroll or click jumps to the end state. |
| Pointer lean | Tilt plus or minus 2.5 degrees, yaw plus or minus 4 degrees, shift plus or minus 24 px. Values lerp at 0.08 per frame. |
| Drag | Pointer down on the board starts a drag. Pan along the track up to 320 px each way and yaw up to 14 degrees. On release, velocity decays by 0.92 per frame. Past the limit it resists and settles back in 400 ms. |
| Hold | Pointer held still for 600 ms: the camera pulls back (scale 0.82, tilt 42 degrees) over 700 ms and every landmark label shows. Release returns in 400 ms. Keyboard: the "Whole board" button in the hint does the same as a toggle. |
| Hover on a landmark | The standee lifts 6 px (a child moves, the hit area stays put), its label shows with a leader line, the pawn turns toward it. 220 ms. |
| Click or tap on a landmark | Navigates through the curtain. No hold needed. |
| Scroll | Over the first viewport of scroll the board flattens by 8 degrees and sinks 40 px. Driven by a scroll listener that only writes two CSS variables. |
| Idle | Nothing loops. The only ambient motion is the lens grain. |
| Reduced motion | No set up animation, no lean, no inertia, no hold zoom. Dragging still pans directly. All labels are visible. |
| No JavaScript | Static diorama. Labels visible. Links work. |
| Mobile | Portrait board at 50 degrees tilt. One finger horizontal drag pans (`touch-action: pan-y` keeps vertical scroll). No lean, no hold. Labels show as a row of chips under the board that scroll sideways. Six standees are loaded eagerly and the rest lazily. |

### 4.3 The lens

A single full screen `canvas`, fixed, `pointer-events:none`, drawn with about 60 lines of hand written WebGL2 fragment shader: felt grain (hash noise, refreshed 24 times a second), a vignette, and a warm lamp glow in the upper left that drifts 2 percent toward the pointer. Blended over the page with `mix-blend-mode: soft-light`. Device pixel ratio capped at 1.5. Paused off screen and when the tab is hidden.

Fallback when WebGL2 is missing, on phones, with reduced motion, with data saver, and with no script: a 256 px noise PNG tiled at 6 percent opacity and a CSS radial vignette. Greyboard pages use the static fallback only.

Not built: colour fringing at the screen edges. The reference does it because its whole page is a canvas. A canvas overlay cannot bend the DOM beneath it.

### 4.4 Menu

| Item | Spec |
| --- | --- |
| Trigger | The pip button, or the `M` key. `aria-expanded`, `aria-controls`. |
| Open | The panel (`min(590px, 41vw)` wide on desktop, full width under 768 px, `--board-100` ground, ink text) slides in from the right over 700 ms. The page shifts left 8vw and dims to 60 percent. Items rise from masked lines, 60 ms apart. Pips morph from two to five over 300 ms. |
| Items | Services, Work, Guides, The studio, Start a project. Set at `--t-display-xl` capped at 90 px, weight 400. Current page in `--ink-500` with an underline. |
| Hover | The sans label rolls up and the serif italic copy rolls in, 400 ms. The pawn hops to that row (an arc, 400 ms). |
| Panel foot | Email link, "Book a 30 minute call" link, sound toggle, privacy and terms |
| Close | Pip button, Escape, clicking the dimmed page. 400 ms, faster than the open. Focus returns to the button. |
| While open | Focus is trapped. `main` is `inert`. Body scroll is locked. |
| Reduced motion | Panel and items fade in over 150 ms. No page shift. |
| No JavaScript | The button is a `details` element. The same links show as a simple list. The three header links are always visible on desktop. |
| Mobile | Items at 44 px. The foot sticks to the bottom edge. |

### 4.5 Page transitions (the deal)

| Item | Spec |
| --- | --- |
| Trigger | A click on a same origin link with no modifier key, no `target`, no `download`, and a different path. Hash links on the same page scroll normally. |
| Out | A `--baize-900` panel with a 24 px rounded top edge slides up from the bottom over 420 ms `--ease-inout`. The destination name (from `data-title`, else the link text) shows at centre in Instrument Serif italic, 64 px, for about 250 ms. |
| Swap | `router.push` runs as the panel covers the screen. Scroll resets to the top. |
| In | When the new path has rendered, the panel carries on upward and off over 520 ms `--ease-out`. |
| Fail safe | If the new path has not arrived in 1.5 s, the panel leaves anyway. Back and forward navigation never show the curtain. |
| Reduced motion | A 120 ms cross fade |
| No JavaScript | Ordinary page loads |
| Mobile | Same, name at 40 px |

### 4.6 Scroll reveals

- Only two things reveal: display headings (masked line rise, 700 ms, lines 80 ms apart) and media (a clip from `inset(8% round 14px)` to `inset(0 round 14px)` with the image scaling 1.06 to 1, 700 ms).
- Once each, at 20 percent visibility, through one `IntersectionObserver`.
- Body text, lists, forms and prices never animate in.
- Heading lines are authored as spans in the JSX. No runtime text splitting.
- The hidden start state is only applied after the script adds a class to `html`, so a failed script leaves everything visible.
- Reading pages (guides, resources, legal) have no reveals at all.
- Process section: as it crosses the middle of the viewport the pawn hops from Plan to Build to Launch, tied to scroll position, with a static pawn on Plan as the fallback.
- Reduced motion: no reveals.

### 4.7 Hovers and feedback

| Element | Behaviour | Duration |
| --- | --- | --- |
| Pill button | Label roll, arrow 4 px | 400 ms, press scale 0.98 at 150 ms |
| Header link | Sans to serif italic roll | 400 ms |
| Text link | Underline colour change | 150 ms |
| Work tile | The image wrapper leans up to 4 degrees toward the pointer and the image scales 1.03. The link itself does not move. | 400 ms settle |
| Work tile while scrolling | `skewY` up to 3 degrees from scroll speed, eased back to 0 | lerp 0.1 |
| Guide row | Row ground steps to raised. On desktop a 160 px stage standee appears beside the pointer. | 150 ms |
| FAQ | Plus rotates 45 degrees, answer height animates with `interpolate-size` where supported and snaps elsewhere | 220 ms |
| Form field | Border colour and focus ring | 150 ms |

Reduced motion: colour changes stay, movement goes. Touch: no lean, no follower image.

### 4.8 Filters

| Item | Spec |
| --- | --- |
| Where | Work index (All, Client work, Studio concepts) and guides index (the existing launch stage filters) |
| Change | The active thumb slides to the new pill, 400 ms. Items that no longer match fade and drop 8 px over 150 ms, then are set `hidden`. The remaining items move to their new places with a FLIP transform, 400 ms. New matches fade and rise 8 px, 40 ms apart, six at most. |
| Count | Each pill shows its count. A polite live region announces the number shown. |
| URL | The choice is written to the query string with `history.replaceState` so a filtered view can be shared. Canonical stays the bare path. |
| Reduced motion | Instant swap |
| No JavaScript | The bar is hidden (the existing `noscript` pattern). Everything is listed. |
| Mobile | The bar scrolls sideways inside its pill. Pills are 36 px tall. |

### 4.9 Performance budget

| Measure | Budget | How |
| --- | --- | --- |
| LCP, home, mid range phone on 4G | 2.0 s or less | The LCP element is the board image: one `img` with `fetchpriority="high"`, AVIF or WebP, 1,600 px wide at 180 KB or less on desktop and 900 px at 80 KB or less on mobile, with `sizes`. Preload it. |
| LCP, guides | 1.5 s or less | Text is the LCP. Two preloaded font files. No world code on these routes. |
| CLS | under 0.02 | Width and height on every image (also a test). Font fallbacks with metric overrides. The gate is an overlay. |
| INP | under 200 ms | Pointer handlers only write CSS variables. No layout reads inside the frame loop. |
| JavaScript added, home | 45 KB gzipped or less | Hand written modules, no new packages. The board and lens load with `next/dynamic` after first paint. |
| JavaScript added, every other route | 14 KB gzipped or less | Chrome only: menu, curtain, cursor, sound, reveal |
| Standee images | 600 KB total on desktop, 300 KB on mobile | WebP with alpha, none larger than 768 px on the long side (512 on mobile). Four eager, the rest lazy. |
| GPU | About 40 MB of textures at most on desktop | One board (1,600 by 1,067) plus twelve layers at 768 px or less. `will-change: transform` on the camera only, and only while it is moving. |
| Frame rate | 60 fps, simplify if under 50 | Lens at 24 updates a second and DPR 1.5. Camera loop stops when the hero leaves the screen. |
| Fonts | Two preloaded files, about 70 KB together | Host Grotesk latin variable and Instrument Serif italic. The others load on demand. |
| Third parties | None new | Analytics stays behind consent as now |

Cloudflare Pages notes:

- Add `/fonts/*` and any new static folders to `public/_headers` with `Cache-Control: public, max-age=31536000, immutable`, and version the file names.
- `/images/*` already caches for 30 days. Give new art versioned names (`board-base-v1.webp`) so replacements are picked up.
- Keep everything static. No Pages Functions beyond the existing `/api/contact`.
- The shader package stays installed but is no longer imported, so it drops out of the bundles. Remove its licence files from `public/licenses` only when the package itself is removed (see 6.2).

---

## 5. Information architecture and pages

### 5.1 Site map and navigation

No URL changes. No new URLs. Routes and what they become:

| Route | Template today | Role in the world | Tone |
| --- | --- | --- | --- |
| `/` | custom | The board | Dusk |
| `/kickstarter-launch-services` | `CampaignServicePage` | Services hub: the whole track | Dusk |
| `/kickstarter-prelaunch-marketing`, `/kickstarter-advertising`, `/kickstarter-campaign-management`, `/gamefound-launch-services`, `/post-campaign-support` | `CampaignServicePage` | One landmark each | Dusk hero, greyboard body |
| `/campaign-design` (with `#pricing`), `/gamefound-campaign-design` | `CampaignServicePage` | The Easel, and pricing | Dusk hero, greyboard body |
| Five category pages (board game, card game, TTRPG, miniatures, accessories) | `CampaignServicePage` | Game type pages | Dusk hero, greyboard body |
| `/campaign-creative` | custom | The Lantern | Dusk hero, greyboard body |
| `/work`, `/work/[slug]` | custom, `SeoArticlePage` | Work index, case study | Dusk index, tinted case study |
| `/guides`, `/guides/*` (43) | custom, `SeoArticlePage` | Library, article | Greyboard |
| `/resources`, `/resources/*` | custom, `SeoArticlePage` | Reference shelf | Greyboard |
| `/kickstarter-to-shopify`, `/done-for-you-shopify-store`, three `shopify-theme-for-*` | custom, `SeoLandingPage` | The Shopfront (supporting offer) | Dusk hero, greyboard body |
| `/about` | `TrustPage` | The studio, with the desk | Dusk desk, greyboard body |
| `/authors/guildframe`, `/editorial-policy`, `/privacy`, `/terms` | `TrustPage` and custom | Reading pages | Greyboard |
| `/buy` | `TrustPage` | Contact page ("Before you book") | Dusk |
| 404 | `not-found.tsx` | Off the board | Dusk |

Header (every page): logo, then Services (`/kickstarter-launch-services`), Work (`/work`), Guides (`/guides`), a "Start a project" pill (`#start-project` on the current page), the pip button.

Menu panel: Services, Work, Guides, The studio (`/about`), Start a project (`/buy`). Foot: email, "Book a 30 minute call" (the existing cal.com link, moved here from the header), sound, Privacy, Terms.

Corner chrome: sound toggle and "Free opening mockup" pill (to `#start-project`) bottom left on dusk pages at 1024 px and wider. Year bottom right. On reading pages the corners are empty, apart from the header.

Footer: keep every link the current footer has, because a test crawls from the home page and expects every canonical page to be reachable. Three columns (Launch services, Guides and studio, Contact) on `--baize-900`, with the logo in its reversed version and the line "Tabletop crowdfunding, from the first brief to launch day and the updates after it."

**Removed everywhere (free launch kit):**

- The "Prefer working files? Get the free campaign launch kit" link on `/guides`.
- The launch kit card on `/resources` and the mention in that page's meta description.
- "Get the editable launch kit" in `LaunchEconomicsCalculator.tsx` (keep the CSV download link).
- `LaunchKitPrompt.tsx`, `LaunchKitTeaser.tsx`, `launch-kit-prompt.css` (already unmounted, delete).
- Any footer or nav mention (none remain today).
- The kit page itself is already redirected to `/guides` by `public/_redirects`. Whether to delete the page, the downloads, the email files and the kit wording in privacy and terms is an owner decision (question 3 in section 8), because four tests and the legal pages describe the kit.

**Stays:** the free opening mockup offer, the Shopify guides and pages, every guide, every resource, the worksheet, the benchmark, the campaign page study.

Copy rules for everything below: body copy that lives in the data files (`launch-services.ts`, `campaign-pages.ts`, `campaign-content.ts`, `service-delivery.ts`, `case-studies.ts`, the guide files) stays word for word. Only the strings listed here change. Wherever a test needs a phrase, the phrase is kept and marked "(test)".

### 5.2 Home `/`

Markup hooks that must survive (tests): `main.gfr.gfr-home`, `section.gfr-hero-shell` containing the h1 and links to `#pricing` and `#start-project`, `section#past-work`, `section#concepts`, an element with `id="pricing"` before `#start-project`, `section#process` with exactly three `li`, `section#faq` with exactly six bare `<details>` tags (no attributes), one `h1`, no `id="mockups"`, no mention of the kit, visible `$1,400` and `$4,500`, and the words "paid advertising", "budget" and "Umair".

| # | Section | What it says | Components and behaviour |
| --- | --- | --- | --- |
| 0 | The lid | Logo. "Kickstarter and Gamefound launches for tabletop games". "Open the box". "Open with sound". | `Gate`. See 4.1. |
| 1 | Hero, `section.gfr-hero-shell`, dusk, 100svh | h1 (test): "Kickstarter launches *for tabletop games*" with the last three words in serif italic. Lead: "I plan, write, design and advertise Kickstarter and Gamefound campaigns for board games, card games, RPGs and miniatures. You work with me, Umair, from the first brief to the last backer update." Actions: "Discuss my project" (coral pill, `#start-project`), "See pricing" (text link, `#pricing`). Hint: "Drag to look around". Easel pill: "See the work" (`/work`). | `Board`, `BoardMotion`, `Lens`. Seven landmark links. See 4.2. |
| 2 | Client work, `#past-work`, dusk | h2: "Three campaigns, *three very different games*". Link beside it: "All case studies". Per tile: project name, category, one line (existing `projectSummaries`), client quote where one exists with "Client feedback from {handle}", "Read the case study", "View on Kickstarter". New line under each name when the owner confirms the figures: "{total} pledged on Kickstarter. The creator's result." | Three `WorkTile`s in a row of unequal widths (5, 4, 3 of 12 columns), each with a jade "Client work" marker. Lean and skew on hover and scroll. |
| 3 | Studio concepts, `#concepts`, dusk | h2: "Concepts made in the studio". Line (test phrase kept): "Six original games I invented to show range. Made in the studio, not client work." | The six existing concept images as cut tiles in a loose scatter on the baize (2 rows on desktop, 3 by 2 on mobile), each with a lilac "Studio concept" marker. Must keep the `-480w.webp` sources (test). |
| 4 | Pricing, `#services` wrapping `article#pricing`, tone switches to greyboard | h2: "Two packages, *fixed prices*". Lead: "We agree the scope and schedule before work starts. Ad spend is billed separately. Not sure yet? Send your artwork and I will design one opening section of your page at no cost." Link: "Request a free mockup" (`#start-project`) (test). Tier one: "Campaign page", `$1,400`, existing four bullet list, "Start with the page", "Full scope". Tier two: "Full campaign support", `$4,500`, existing five bullet list (includes "paid advertising"), "Plan the full launch", "Launch services". | Two tier cards built like pledge tiers: the figure in `--t-figure`, contents listed under it. Full support is the wider card (7 of 12) and carries the single coral button. |
| 5 | Process, `#process`, dusk | h2: "How a launch runs". Three `li`: **Plan** "Send your game summary, rules, artwork and target date. We agree the scope, schedule and who does what." **Build** "I write the copy and design the graphics around your confirmed rewards and game facts. You review each round." **Launch** "The page goes live. On full support I run the agreed ads, check the page and draft backer updates for your approval." | A three space strip of track. The pawn hops with scroll. No numerals: the track shows the order. |
| 6 | Guides, dusk | h2: "Guides I wrote for creators". Link: "All guides" (if a count is shown, compute it from the guide data, never type it). Three rows (existing `featuredGuides`): title, stage. | Rows with hairlines, title at `--t-title`. |
| 7 | Questions, `#faq`, dusk | h2: "Questions before you book". Email link beside it. Six existing questions and answers, unchanged. | Six bare `details`. |
| 8 | Start space, `#start-project` | See 5.9 | `ProjectInquiryForm` from `SeoFooter` |
| 9 | Footer | See 5.1 | |

The dotted track line runs down the left margin from the hero to the form on desktop, as one SVG path drawn with `stroke-dasharray`. It is hidden under 1024 px.

### 5.3 Services hub `/kickstarter-launch-services`

Tests need "What you bring", "What the handoff covers", "paid advertising", "Umair" and "budget" here.

| # | Section | Copy | Components |
| --- | --- | --- | --- |
| 1 | Hero, dusk | h1 from data: "Kickstarter launch services *for tabletop creators.*" Lead: the page description from data. Button: "Discuss my launch" (`#start-project`). The kicker "Tabletop launch services" is removed. | A wide crop of the board with all seven landmarks, static, lens on. |
| 2 | The track | h2: "The launch, space by space". Seven rows, each a link: name, one line, arrow. Lines: Launch planning: "Positioning, an asset review and a schedule with named owners." Prelaunch page and email: "Landing pages, email and audience tests before the campaign opens." Campaign page: "Copy, gameplay graphics and rewards that explain what you are making." Ads and creative: "Creative tests, campaign management and reporting with a separate ad budget." Live campaign: "Launch checks, emails, updates and a clear handoff." After the campaign: "Backer updates, pledge manager content and late pledge assets." Kickstarter to Shopify: "A permanent store once the campaign has delivered." | Replaces the four `serviceCards` and their numbers. Rows, not cards. On hover the landmark standee shows beside the pointer (desktop). |
| 3 | Scope, `#scope`, greyboard | Existing `introTitle`, `intro`, guide link. Aside heading "What the scope can include" with the existing `details` list. Remove the kickers and the list numbers. | Two columns, 7 and 5 |
| 4 | Working together, `#working-together` | Existing `secondTitle`, `secondCopy` and the follow on paragraph | |
| 5 | Delivery | Existing delivery title, intro, steps, "What you bring", "What the handoff covers" (test), related case studies | Steps as a short track strip. No numerals. |
| 6 | Client work | Existing `PastWork` and `ClientTestimonials` | Work tiles |
| 7 | Questions, `#service-questions` | h2: "Questions before you book". Existing FAQs. | |
| 8 | Related | Existing related links | Inline list |
| 9 | Form and footer | | |

The "On this page" jump links stay, restyled as a small sticky pill bar.

### 5.4 Service pages (all other `CampaignServicePage` routes)

Same template as 5.3 without the track section. Differences:

- Hero image: the page's landmark standee on a close crop of its board tile (launch service pages and `/campaign-design`). Category pages and Gamefound design keep their existing concept images from `public/images/campaign/`, shown as cut tiles with the caption "Studio concept. Your artwork sets the direction."
- Hero button: "Discuss my launch" on launch pages, "Get my free mockup" on creative pages (both existing labels).
- `/card-game-kickstarter-campaign-design` keeps `section#mockups` with exactly three items labelled "Concept mockup" and the three existing images (test).
- The "Need help beyond the page?" block stays on non launch pages.

`/campaign-creative` (custom page): same hero treatment with the Lantern, the existing walkthrough videos shown in a cut frame with native controls, existing copy. Remove any kit mention found on that page.

### 5.5 Campaign design pricing `/campaign-design#pricing`

Test: `$1,400` appears exactly once in this page's visible text, the Service schema carries price 1400 USD, and "free mockup" appears.

| Element | Copy |
| --- | --- |
| h2 | "Campaign page, start to finish" (existing) |
| Figure | `$1,400` with "USD per campaign" beside it in `--t-small` |
| Body | The two existing paragraphs, unchanged |
| Included list (new presentation of facts already in the paragraph) | "Campaign copy", "Page graphics from your artwork", "Reward tiers set up", "Page built on the platform, ready for you to publish", "Stretch goal graphics where agreed" |
| Not included line | "Prelaunch, paid advertising and live campaign management are part of full campaign support. New illustration and video are scoped separately." |
| Button | "Request a free mockup" (`#start-project`) |

Layout: one large tier card on greyboard, figure left, contents right. The full support price is not repeated on this page (the test counts dollar figures here).

### 5.6 Work index `/work`

| # | Section | Copy | Components |
| --- | --- | --- | --- |
| 1 | Header, dusk | h1 (test phrase kept): "Tabletop campaign *design case studies.*" Lead (existing): "RPG accessories, modular terrain and card storage. Each case study shows the project, my contribution and the design choices behind the campaign presentation." Updated date (existing). Kicker removed. | |
| 2 | Filter bar | "All 9", "Client work 3", "Studio concepts 6" | `FilterBar`, see 4.8 |
| 3 | Grid | Client tiles first: image, name, category, the existing brief, "My contribution: {summary}", client quote where present, public total line when confirmed, "Read the case study", "View the published campaign". Then a divider line: "Studio concepts. Six original games I invented to show range. These are not client work." Then six concept tiles: image, concept name (from the existing alt text: Snack Attack, Tidal Harbour, Starbound, Moth and Moon, Orbital Outpost, Prismatic), game type, and a link to the matching category page ("Campaign design for card games" and so on). | Two column grid, tiles lean and skew. Jade and lilac markers. Each concept tile says "Studio concept" in text, not by colour alone. |
| 4 | Note | Existing: "These projects demonstrate campaign creative. Their funding totals are not presented as Guildframe advertising results." plus the three existing links | |
| 5 | Form, footer | | |

### 5.7 Case study `/work/[slug]`

Built on `SeoArticlePage`. Tests need "My contribution", a Kickstarter link, and the sentence containing "does not attribute the campaign total". Keep all of it.

| # | Section | Content |
| --- | --- | --- |
| 1 | Header, on a ground tinted from the project's own artwork (ScentedRealms deep wine `#3A1420`, FutureProof Terrain near black green `#16211A`, Quiver Time charcoal `#1E1F22`; sample from the real images and adjust for contrast) | Breadcrumb. A serif italic "Work" at display size, then the h1 in the sans: "{Name}: campaign design" (test). Category. The matching landmark standee at 320 px behind the title, static. |
| 2 | Facts | Four columns of label and value in `--t-small` and `--t-title`: "My contribution", "Category", "Platform: Kickstarter", and "Client result". The client result reads: "{total} pledged by {backers} backers on Kickstarter. This is {creator}'s result. I worked on the campaign presentation, not the advertising." Shown only when the figures and the date checked are filled in `past-work.ts`. Under it in `--t-small`: "Public campaign total, checked {date}." |
| 3 | Lead image | Existing image, caption and "Open the full image" link, in a cut frame |
| 4 | My contribution, `#role` | Existing text and credit |
| 5 | Visual details, `#visual-details` | Existing detail views |
| 6 | Walkthrough, `#walkthrough` | Existing video where present |
| 7 | Presentation, `#presentation` | Existing headline and three decisions. Numerals removed. |
| 8 | Client quote | Existing, with the handle |
| 9 | For your own launch, `#takeaway` | Existing lesson, paragraph and three links (as three separate links, no middle dots) |
| 10 | Published campaign note | Existing callout |
| 11 | Next | A full viewport block: serif italic "Next", the next project name in the sans at display size, a hint "Keep scrolling" and a progress line. The whole block is a link. With script, scrolling a further 60 percent of a viewport fills the line and runs the curtain to that page. |
| 12 | Form, footer | The form must remain the last section before the footer (test), so the Next block sits before it |

Figures are never invented. If the owner has not confirmed them, section 2 shows three columns and no client result.

### 5.8 Guides index `/guides` and the guide article template

**Index.** Read mode, greyboard. Keep the `LibrarySearch` DOM contract (`.guides-grid > a`, `data-guide-stage`, `data-guide-heading`).

| # | Section | Copy |
| --- | --- | --- |
| 1 | Header | h1 unchanged (test phrase "Kickstarter marketing"). Lead unchanged. |
| 2 | Find | Search field labelled "Find a guide", placeholder "Try rewards, email or miniatures" (existing). Filter pill bar with a count on each stage. Live count. |
| 3 | Library | Groups by launch stage, each with its existing heading. Each guide is a row: title at `--t-title`, the existing one line summary, the tag. Two columns on desktop. |
| 4 | After funding | The existing Shopify guide group, headed as now. This is the supporting offer and stays in full. |
| 5 | Removed | The launch kit link |
| 6 | Form, footer | |

**Article (`SeoArticlePage`, used by guides, resources and case studies).** Read mode. The job is comfortable reading and quick answers.

| Part | Treatment |
| --- | --- |
| Ground | `--greyboard-200`. Header stays dusk and solid. No lens canvas, no cursor ring, no reveals. Only the curtain. |
| Header block | Breadcrumb, category as plain text, h1 at `--t-display-l` in the sans (no serif phrase on articles), description as `--t-lead`, a meta row: author link, "Updated {date}", read time |
| Direct answer | The existing `article-direct-answer` as a raised card (`--greyboard-100`, 14 px radius, hairline), 20 px text |
| Layout | Sticky contents list on the left at 240 px (existing `article-toc`), body at 68ch, 18 px, line height 1.65. The mobile contents list stays a `details`. |
| Headings | h2 at `clamp(1.625rem, 2.6vw, 2.25rem)`, 64 px above and 16 px below. h3 at 1.25rem weight 500. |
| Tables | Existing `article-table-wrap`: horizontal scroll on small screens, hairline rows, tabular figures, header row in weight 500 |
| Callouts, definitions, stat grid | Raised cards. No coloured side borders. Stat grid figures in `--t-figure` at half size. |
| Workbooks and calculators | Restyled with the form field tokens. No behaviour change. |
| FAQ | Bare `details` with the plus icon |
| Sources | Small type list with external link icons |
| Author | The existing author block, monogram in a coral disc |
| Next step | `ArticleNextStep` as a dusk band: heading, copy, two links |
| CTA | The existing article CTA: keep its two buttons and copy |
| Links | `--coral-700`, underlined |

### 5.9 Contact: the form section on every page, and `/buy`

Tests: the form posts to `/api/contact`, has required name, email and message fields, the button reads "Send my project", the section has `id="start-project"` and is the last section before the footer on every page, and a `mailto:` link is present.

| Element | Copy |
| --- | --- |
| h2 | "Let's plan *your game launch.*" (existing, kicker removed) |
| Body | Existing paragraph, ending with the free opening mockup sentence |
| Points | "No payment to request" and "No obligation to book" as two plain lines |
| Email | `umair@guildframe.com` |
| Small print | Existing fixed price sentence |
| Fields | Existing ten fields, labels unchanged. Placeholders that repeat the label are removed ("Your name"). Format hints stay ("you@yourstudio.com", the URL example). |
| Button | "Send my project" |
| Status | Existing success, error and privacy lines |

Design: a dusk band. Copy on the left, the form on a `--baize-700` panel on the right. The pawn stands on a start tile beside the heading (a static image). The glass class is removed.

`/buy` keeps its h1 ("Start your tabletop launch project") and two sections, on dusk, with a "Book a 30 minute call" link added beside the form link. Menu item "Start a project" leads here.

### 5.10 The studio `/about` and the trust pages

`/about`:

| # | Section | Content |
| --- | --- | --- |
| 1 | The desk, dusk, 100svh on desktop and 70svh on mobile | h1 "About Guildframe" (existing) top left with the existing description as lead and the reviewed date. Behind and below: a spread of about twelve cut scraps on the baize (sketches, proof sheet, swatches, prototype cards, the six concept tiles, the founder portrait). Drag pans the spread in two axes with inertia. Hint: "Drag the desk". |
| 2 | Body, greyboard | The existing sections, unchanged, in the article reading column |
| 3 | Trust links | Existing "How Guildframe works" links |
| 4 | Form, footer | |

The desk is the same engine as the board without perspective: one large positioned plane moved by `translate3d`. Reduced motion and no script show the scraps as a static grid. Each scrap that is a studio concept carries its label.

`/authors/guildframe`, `/editorial-policy`, `/privacy`, `/terms`: `TrustPage` on greyboard with the article reading column. No world elements.

### 5.11 Shopify pages (supporting offer)

`/kickstarter-to-shopify`, `/done-for-you-shopify-store`, `/shopify-theme-for-board-games`, `/shopify-theme-for-ttrpg`, `/shopify-theme-for-miniatures`: keep all content and h1s. Dusk hero with the Shopfront standee (the existing store mockup images move into cut frames in the body), greyboard body, same section styles as service pages. They appear in the footer and as the seventh landmark, not in the header.

`/resources` and its pages: greyboard, same row list as the guides index, same article template. Remove the launch kit card.

### 5.12 404

Test: the text "This page could not be found" and `noindex`.

- h1: "This page could not be found"
- Body: "That link is out of date or mistyped. The home page, the guides and the case studies are all still here."
- Links: "Back to the board" (`/`), "Guides" (`/guides`), "Work" (`/work`)
- Image: the pawn standing just off the edge of a board corner (see section 7), dusk ground.

---

## 6. Technical build plan

### 6.1 The environment problem, read this first

This workspace has no `node_modules` and cannot install packages. That means `next build`, `npm test`, lint and typecheck cannot run here. The build that matters runs on Cloudflare Pages with `npm run build:pages`, which fails on lint, type errors, any failed check and any lockfile mismatch.

Consequences for the executor:

1. Add no packages. Everything in this plan uses React, Next and the browser.
2. Each stage is verified in two ways: checks that need no install (listed per stage), and a Cloudflare Pages preview build from a pushed branch. Pushing a branch needs the owner's permission each time. Never push to `main` without it.
3. If the owner can run the repo on his Mac (question 1 in section 8), run `npm ci && npm run lint && npm run typecheck && npm test` there before each push instead.
4. Develop the board, lens, gate and menu first as a plain HTML harness with no build step (a folder outside the repo, for example `/tmp/gf-world/`), view it in the built in browser, then port the code into the React components. Do not commit the harness.

### 6.2 How the world is built, and why not three.js

**Decision: CSS 3D for the board, one small hand written WebGL2 canvas for the lens. No new dependency.**

Reasons:

- The art pipeline produces flat images. There is nobody to make models, so a 3D engine would only be drawing textured rectangles, which CSS 3D does natively.
- The standees are real `img` elements and the labels are real links. That keeps search, keyboards and screen readers working with no second fallback tree, and the still scene needs no JavaScript.
- A dependency cannot be installed or tested here. A hand edited lockfile that is slightly wrong breaks the production build.
- three.js adds roughly 150 KB gzipped to the home page for no visible gain with this art.

The existing `shaders` package (4.0.4) is not suitable: it renders decorative mesh gradients and glass through WebGPU and falls back to still CSS where WebGPU is missing. Stop importing it. Delete `ShaderSurface.tsx`, `shader-renderer.ts` and `shaders.css` once nothing uses them. Leave the package in `package.json` and the lockfile for now, because removing it also means hand editing the lockfile. Remove it later in an environment with npm.

If real 3D is wanted later (the owner commissions GLB models), the path is: `three` pinned to one exact version (for example 0.170.0) plus `@types/three` at the same version in `devDependencies`, installed with npm on a machine that has it so the lockfile is generated, never typed by hand. `@types/three` pulls several transitive packages, which is why hand editing is not safe. Load it only on the home route with `next/dynamic`.

**Board scene structure**

```html
<section class="gfr-hero-shell" aria-labelledby="home-title">
  <div class="board-stage">                 <!-- perspective: 1400px; perspective-origin: 50% 30% -->
    <div class="board-cam">                 <!-- preserve-3d; rotateX(58deg) rotateZ(-8deg) plus CSS variables -->
      <img class="board-base" ...>          <!-- the flat board art, the LCP image -->
      <svg class="board-track" ...>         <!-- the dotted route, flat on the board -->
      <a class="space" href="/campaign-design" style="--x:46%;--y:38%">
        <span class="space-shadow"></span>  <!-- flat contact shadow, offset to the lower right -->
        <img class="standee" alt="" ...>    <!-- stands up: rotateX(-90deg) about its bottom edge, counter rotated to face the camera -->
        <span class="space-label">Campaign page</span>
      </a>
      ... six more spaces, the pawn, two dressing pieces
    </div>
  </div>
  <div class="hero-copy"> h1, lead, actions </div>
</section>
```

- `board-data.ts` holds each space: `slug`, `label`, `href`, `x`, `y`, `image`, `width`, `height`, `eager`.
- `Board.tsx` is a server component that renders the markup from the data. The still scene ships as HTML.
- `BoardMotion.tsx` is a client component that finds `.board-cam`, runs one `requestAnimationFrame` loop while the hero is on screen, and writes `--tilt`, `--yaw`, `--cx`, `--cy`, `--zoom`. It owns pointer lean, drag, inertia, hold and the set up sequence.
- Standees face the camera by applying the inverse yaw (`rotateZ(calc(8deg - var(--yaw)))`) before standing up.
- Decorative standee images use `alt=""`. The link text is the label. Every `img` has `width` and `height` (test).
- The hero keeps `class="gfr-hero-shell"` and `main` keeps `gfr gfr-home` (tests).

**Lens:** `Lens.tsx` plus `lens-renderer.ts`. Raw WebGL2: one triangle, one fragment shader, uniforms for time, resolution, pointer and tone. About 120 lines in total. Loaded with `next/dynamic({ ssr: false })` after idle. See 4.3 for fallbacks.

### 6.3 Files

**Create**

| Path | Purpose |
| --- | --- |
| `PRODUCT.md`, `DESIGN.md` | From 3.10 and 3.11 |
| `app/world/tokens.css` | 3.9 |
| `app/world/base.css` | Font faces, element defaults, type roles, selection, focus, scrollbar, `[data-tone]`, wrap and section utilities |
| `app/world/chrome.css` | Header, menu panel, footer, pills, links, filter bar, cursor, curtain, gate, corner chrome, consent banner |
| `app/world/board.css` | The 3D scene, standees, labels, track, lens fallback |
| `app/world/home.css` | Home sections |
| `app/world/pages.css` | Service, work, case study, studio, trust, 404 |
| `app/world/read.css` | Article template, guides and resources indexes |
| `app/components/world/Board.tsx`, `BoardMotion.tsx`, `board-data.ts` | The board |
| `app/components/world/Desk.tsx`, `DeskMotion.tsx` | The studio desk |
| `app/components/world/Lens.tsx`, `lens-renderer.ts` | The lens |
| `app/components/chrome/Gate.tsx` | The lid |
| `app/components/chrome/MenuPanel.tsx` | Menu, pip button |
| `app/components/chrome/RouteCurtain.tsx` | Page transitions |
| `app/components/chrome/Cursor.tsx` | The token |
| `app/components/chrome/SoundToggle.tsx`, `sound.ts` | Web Audio |
| `app/components/chrome/Reveal.tsx` | The one reveal observer (replaces `CampaignMotion` and the reveal half of `HomeScroll`) |
| `app/components/chrome/Icon.tsx`, `Pill.tsx`, `FilterBar.tsx`, `WorkTile.tsx`, `TrackStrip.tsx` | Shared pieces |
| `public/fonts/host-grotesk-latin-variable.woff2`, `host-grotesk-latin-ext-variable.woff2`, `OFL-HostGrotesk.txt` | Type |
| `public/images/world/*` | New art from section 7 |

**Change**

| Path | Change |
| --- | --- |
| `app/layout.tsx` | Import the new stylesheets in place of the old list as each stage lands. Preload the two fonts. Mount `RouteCurtain`, `Cursor`, `Reveal`. Theme colour. Keep `JsonLd` and `Analytics` exactly as they are. |
| `app/components/SeoChrome.tsx` | New `SeoHeader` and `SeoFooter` markup. Keep the three export names and the footer's full link list. Keep `ProjectInquiryForm` as the last section before `footer`. |
| `app/components/ProjectInquiryForm.tsx` | Markup and class changes only. Do not touch field names, the submit flow, attribution or the security check. |
| `app/page.tsx` | New section markup per 5.2. Keep the JSON-LD block, the FAQ data and all test hooks. |
| `app/components/CampaignServicePage.tsx` | Section markup per 5.3 to 5.5. Keep the JSON-LD, ids and the price sentence. |
| `app/components/SeoArticlePage.tsx`, `SeoLandingPage.tsx`, `TrustPage.tsx` | Class and wrapper changes per 5.8, 5.10, 5.11. Keep the existing `article-*` class names where practical so the many guide pages need no edits. |
| `app/work/page.tsx`, `app/work/[slug]/page.tsx` | Per 5.6 and 5.7 |
| `app/past-work.ts` | Add optional `publicTotal`, `backers`, `creator`, `totalCheckedOn` per project. Leave empty until confirmed. |
| `app/guides/page.tsx`, `app/resources/page.tsx` | Row layout, filter counts, kit link and card removed |
| `app/components/LibrarySearch.tsx` | Use `FilterBar` styling and the search icon. Keep its DOM contract. |
| `app/components/LaunchEconomicsCalculator.tsx` | Remove the kit link |
| `app/components/Analytics.tsx` | Wait for the gate before showing the consent banner. Restyle only. |
| `app/not-found.tsx`, `app/manifest.ts` | Per 5.12 and 3.9 |
| `public/_headers` | Cache rule for `/fonts/*` |
| `public/fonts/SOURCES.txt` | Add Host Grotesk, remove Manrope when it is deleted |
| `docs/ARCHITECTURE.md`, `README.md` | Update the module list at the end |
| `tests/static-output.test.mjs` | Only where the owner approves a change in behaviour (kit removal, see question 3). Otherwise leave tests alone and keep the hooks. |

**Delete, each only after a search shows no remaining import or reference**

`app/components/LaunchKitPrompt.tsx`, `LaunchKitTeaser.tsx`, `app/launch-kit-prompt.css`, `app/components/ShaderSurface.tsx`, `shader-renderer.ts`, `app/shaders.css`, `app/components/HomeScroll.tsx`, `CampaignMotion.tsx`, `HeroGallery.tsx`, `app/hero-gallery.css`, `app/redesign.css`, `app/home-design.css`, then in the last stage `campaign.css`, `editorial.css`, `launch.css`, `studio.css`, `journey.css`, `work.css`, `creative-proof.css` once `pages.css` and `read.css` cover them. Images no longer referenced (for example `guildframe-tabletop-world-hero-v1.jpg`, the Manrope files) are deleted in the same commit, because a test fails when an unreferenced image ships.

### 6.4 Keeping the tests and the dash rule green

Checks that run here without installing anything. Run all of them before every push:

```bash
# 1. no em or en dashes in app source (the test reads source files too)
grep -rnP '[\x{2013}\x{2014}]' app && echo FAIL || echo ok
# 2. the other banned strings from the same test
grep -rniE 'free custom setup|free setup included|custom setup included|setup bonus|48[ -]?hours?' app && echo FAIL || echo ok
# 3. retired prices
grep -rn '\$975' app && echo FAIL || echo ok
# 4. no kit promotion left outside the kit page and the legal pages
grep -rn 'tabletop-kickstarter-launch-kit' app --include=*.tsx | grep -v 'app/resources/tabletop-kickstarter-launch-kit\|app/privacy\|app/terms'
# 5. every img has width, height and alt
grep -rnoP '<img\b[^>]*>' app | grep -vP 'width=' ; grep -rnoP '<img\b[^>]*>' app | grep -vP 'alt='
# 6. tests with no package imports
node --experimental-strip-types --test tests/contact-handler.test.mjs tests/lead-attribution.test.mjs tests/launch-economics.test.mjs
```

Rules to hold while writing markup and copy:

- No em dash or en dash anywhere under `app/`, including code comments and CSS comments. Write ranges as "1 to 3".
- No visible hyphenated compounds in rendered copy. Write "after the campaign", "press and hold", "first time creator".
- No arrow characters in copy. Use the arrow icon.
- One `h1` per page.
- The home hooks listed in 5.2, the service page phrases in 5.3, the case study phrases in 5.7 and the form rules in 5.9.
- FAQ `details` on the home page carry no attributes (the test counts the literal `<details>`).
- `$1,400` once on `/campaign-design`. No prices in the header, menu, footer or form, because those repeat on every page.
- Every page keeps a `mailto:umair@guildframe.com` link (the footer provides it).
- New images must be referenced by a shipped page, and removed images must be deleted.
- Dates stay in `content-dates.ts`. The redesign does not change any content date, the sitemap or `llms.txt`.
- No new route is added, so the sitemap, `llms.txt`, intent map and page list in the test stay as they are.

### 6.5 Stages

Each stage is one branch and one preview build. Each leaves the site shippable.

| Stage | Scope | Verify | Main risk and its check |
| --- | --- | --- | --- |
| 0. Ground rules | `PRODUCT.md`, `DESIGN.md` seed, `tokens.css`, fonts added, kit promotions removed (guides link, resources card, calculator link, dead components) | 6.4 checks. Preview build passes. No visual change except the three removed links. | A test still expects a removed string. Read the kit tests before deleting anything they name. |
| 1. Skin | `base.css` plus a legacy skin that remaps the old class families to the new tokens: dusk ground, greyboard for articles, new type, new buttons and links. Old layouts stay. | Open ten representative pages at 1440 and 390: home, a launch service, campaign design, a category page, work, a case study, guides, a long guide with tables, about, privacy. Contrast spot checks. | Unreadable text where an old rule hard codes a colour. Grep the old CSS for hex values and check each. |
| 2. Chrome | New header, menu panel, footer, pills, icons, form section, consent banner. `MenuPanel` behaviour. | Keyboard: tab order, Escape, focus return, `inert`. No script: `details` menu works. The reachability test passes on the preview. | A footer link dropped. Diff the old and new footer link lists. |
| 3. Home, still | New home markup and `Board` as a static CSS 3D scene with the new art. Sections 1 to 8 styled. | Home test hooks. LCP image is the board. Lighthouse on the preview: LCP and CLS within budget on mobile. Check with JavaScript disabled. | CSS 3D rendering differences in Safari. Check iOS Safari on a real phone, or ask the owner to. |
| 4. Home, alive | `BoardMotion`, `Lens`, `Gate`. | Drag, hold, set up sequence, gate triggers and the 4 second self open. Reduced motion. 60 fps in the performance panel with 4x CPU throttle. | Jank on phones. Mobile gets the reduced scene from 4.2 and the static lens. |
| 5. Travel | `RouteCurtain`, `Cursor`, `SoundToggle`, `Reveal`. | Navigate ten links, use back and forward, open links in new tabs with modifier keys, check focus lands on the new page's `main`. Sound stays silent until switched on. | The curtain hanging on a slow route. The 1.5 second fail safe. |
| 6. Work | Work index with filter, case study template, `past-work.ts` fields, Next block. | Case study tests. Filter with keyboard and screen reader. Figures absent until confirmed. | An unconfirmed figure shipping. The fields default to empty and render nothing. |
| 7. Services | Hub, service template, pricing section, campaign creative, Shopify pages. | Pricing and service tests. `$1,400` count on `/campaign-design`. Card game page mockup section. | Breaking the Service schema. Do not edit the JSON-LD. |
| 8. Library | Guides and resources indexes, article template. | Read a long guide end to end at 390 and 1440. Tables, workbooks, calculators and the contents list all work. Guides have no world script (check the network panel). | A custom guide page with one off markup. Open all twelve hand built guide pages. |
| 9. Studio and finish | The desk on `/about`, trust pages, 404, OG image, delete the old CSS and components, update docs, performance pass, the impeccable finish review, final `DESIGN.md`. | Full 6.4 checks, full preview build, screenshots of every template at both sizes saved for the review, unslop checklist. | Dead CSS removal changing a page. Compare before and after screenshots of the ten representative pages. |

Stages 6, 7 and 8 do not depend on each other and can ship in any order after stage 5.

Rollback: each stage is one merge. Reverting the merge restores the previous stage.

### 6.6 Accessibility checks that apply to every stage

- Everything reachable and operable by keyboard. Dragging and holding always have a plain alternative.
- Focus rings visible on both tones.
- The gate, the menu and the curtain move focus sensibly and never trap it by accident.
- `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast: more` (hairlines go to 40 percent, the lens turns off) and forced colours (the board shows as a plain list of links) each get a look.
- Touch targets 44 px. Text zoom to 200 percent without loss.
- Colour never carries meaning alone: client work and concept markers always include the words.

---

## 7. Images and mockups

All of these are made in the owner's ChatGPT. Rules for every image:

- Original fictional games only. No real games, brands, logos or people.
- No text in any image. Words are added as real text on the page.
- Save the exact prompt used beside each file (a line in `public/images/world/SOURCES.md`), which also satisfies the provenance rule in the impeccable skill.
- The executor converts to WebP (quality about 78, alpha kept), makes the sizes listed, and writes real alt text. Decorative standees get empty alt text.
- Generate at the largest size offered, then downscale.

### 7.1 Shared style block

Paste this at the top of every prompt in 7.2 and 7.3.

```text
STYLE (keep identical across this whole set): a physical tabletop diorama made of printed,
die cut cardboard. Matte gouache illustration printed on thick card, flat confident shapes,
soft visible brushwork, slightly rounded die cut edges showing a pale cream card core.
Palette limited to deep petrol green #133033, warm cream #EFE6D4, coral #EF644D,
saffron yellow #F2B33D, jade green #5CC0A4 and small touches of lilac #C3B6F0.
One warm lamp lights the scene from the upper left, with soft shadows falling to the lower right.
Calm, crafted, a little playful. No text, no letters, no numbers, no logos, no real brands,
no people, no hands, no watermark.
```

### 7.2 World art

| # | File | Size and format | Where | Prompt (after the style block) |
| --- | --- | --- | --- | --- |
| 1 | `board-base-v1.webp` | Generate 3:2 landscape, deliver 2400 by 1600 and 1200 by 800 | Home hero, tilted in CSS. Also the services hub hero. | "A flat game board seen from directly above, perfectly square on to the camera with no perspective, filling the whole frame edge to edge. The board is printed card showing a stylised landscape in petrol greens and jade with cream paths. A single winding track of fourteen round cream spaces runs from the lower left corner to the upper right corner in a loose S curve, the spaces joined by a dotted cream line. Seven of the spaces are larger. The land around the track is simple: low hills, a small river, patches of forest drawn as flat shapes. Keep the upper left third of the board the calmest and darkest. Nothing stands on the board. No tokens, no pieces." |
| 2 | `board-base-portrait-v1.webp` | Generate 2:3 portrait, deliver 1200 by 1800 | Home hero under 768 px | Same as 1, with: "Portrait orientation. The track runs from the bottom centre to the top centre in a tight S curve of ten spaces, five of them larger." |
| 3 | `standee-planning-v1.webp` | Square, transparent background, deliver 768 and 512 | Planning desk landmark | "One single die cut cardboard standee, seen straight on from the front, standing in a small clear plastic base. The standee shows a small wooden map desk with a rolled map, a pencil, a ruler and a little desk lamp. Isolated on a fully transparent background. If transparency is not possible, use a flat plain #133033 background with nothing else in frame. Centre the object, leave a small margin on all sides, no cast shadow." |
| 4 | `standee-post-v1.webp` | As 3 | Post tower (prelaunch page and email) | As 3, with: "The standee shows a small round post tower with an open letter slot and three folded paper birds flying out of its top window." |
| 5 | `standee-easel-v1.webp` | Portrait 3:4, transparent, deliver 768 tall | Easel (campaign page), beside the "See the work" pill | As 3, with: "The standee shows a tall wooden easel holding a long blank cream page divided into soft colour blocks, like a page layout without any words. A paint pot sits at its foot." |
| 6 | `standee-lantern-v1.webp` | As 3 | Lantern (ads and creative) | As 3, with: "The standee shows a brass magic lantern projector on a tripod throwing a wide cone of saffron light that carries small flat shapes: a card, a die, a star." |
| 7 | `standee-stall-v1.webp` | As 3 | Launch day stall (live campaign) | As 3, with: "The standee shows a small market stall with a striped coral and cream awning, a string of bunting, a hand bell and a stack of game boxes with blank lids." |
| 8 | `standee-cart-v1.webp` | As 3 | Parcel cart (after the campaign) | As 3, with: "The standee shows a two wheeled hand cart stacked with tied brown paper parcels of different sizes and one long tube." |
| 9 | `standee-shop-v1.webp` | As 3 | Shopfront (Kickstarter to Shopify), Shopify page heroes | As 3, with: "The standee shows a narrow two storey shopfront with a coral door, a bay window displaying tiny game boxes with blank lids, and a blank hanging sign." |
| 10 | `pawn-v1.webp` | Square, transparent, deliver 512 and 256 | Hero, process, form section, menu | "One single turned wooden pawn game piece, painted matte coral #EF644D, seen straight on from the front at eye level. Simple classic pawn shape with a round head. Soft light from the upper left. Isolated on a fully transparent background, or a flat plain #133033 background if transparency is not possible. Centred, small margin, no cast shadow." (Use the style block's palette and exclusions. This one is a wooden object, not card.) |
| 11 | `dressing-dice-v1.webp` | Square, transparent, deliver 512 | Hero dressing near the start space | As 10, with: "Two matte cream six sided dice with rounded corners and no pips at all on any face, resting together." (Pips are drawn in code so no numerals appear.) |
| 12 | `dressing-cards-v1.webp` | Landscape 3:2, transparent, deliver 768 wide | Hero dressing near the end of the track | As 3 but lying flat: "A small fan of five playing cards lying flat on the table seen from directly above, card backs showing a simple jade and cream geometric pattern. No faces, no symbols." |
| 13 | `easel-page-v1.webp` | Portrait 9:19, deliver 720 by 1520 | Shown on the Easel and in the work pill hover. Labelled "Studio concept". | "A long vertical campaign page design for an original harbour trading board game, shown flat as a design comp with no device frame. Painted harbour artwork at the top, then alternating sections showing a game box, a hex tile map, wooden ship pieces and three tiers of contents laid out as tidy rows. All wording replaced by soft grey bars so there is no readable text anywhere." |
| 14 | `start-tile-v1.webp` | Square, transparent, deliver 512 | Form section, beside the heading | As 3 but flat: "One round cream cardboard game board space tile seen at a three quarter angle from above, with a simple coral ring printed on it. Nothing on the tile." |
| 15 | `lost-pawn-v1.webp` | Landscape 3:2, deliver 1200 by 800 | 404 | "The corner of a printed game board lying on deep petrol green baize, seen at a three quarter angle from above. A single matte coral wooden pawn stands on the baize just off the edge of the board, beside the last cream track space. Large calm empty baize on the left two thirds of the frame." |
| 16 | `og-launch-board-v1.jpg` | 1200 by 630 JPEG | Social share image (replaces `og-guildframe-launch.jpg`, update `siteConfig.socialImage`) | "A printed game board on deep petrol green baize seen at a three quarter angle from above, a winding cream track crossing it, seven small die cut cardboard standees along the track (a desk, a post tower, an easel, a lantern projector, a market stall, a parcel cart, a shopfront) and one coral wooden pawn on the first space. Warm lamp light from the upper left. Calm dark space across the top third of the frame." The executor adds the logo and the line "Kickstarter launches for tabletop games" as real type when compositing. |

### 7.3 Studio desk scraps (the `/about` desk)

Each is generated on a transparent background (or flat `#133033`), seen from directly above, delivered at 640 px on the long side. All are studio material, labelled as such on the page.

| # | File | Prompt (after the style block) |
| --- | --- | --- |
| 17 | `scrap-sketchbook-v1.webp` | "An open spiral sketchbook seen from directly above. Both pages hold loose pencil thumbnail layouts: small rectangles divided into blocks, arrows and circles. No readable writing, only scribble lines." |
| 18 | `scrap-proof-v1.webp` | "A printer's proof sheet seen from directly above: a sheet of card printed with six blank game card shapes in coral, saffron and jade, with crop marks at the corners and a strip of colour bars along one edge. No text." |
| 19 | `scrap-swatches-v1.webp` | "Five rectangular paint swatch cards fanned out, seen from directly above, in petrol green, cream, coral, saffron and jade. Blank, no labels." |
| 20 | `scrap-prototype-cards-v1.webp` | "A loose stack of hand cut prototype game cards seen from directly above, plain cream card with simple pencil drawn symbols (a ship, a moon, a leaf) and uneven scissor cut edges." |
| 21 | `scrap-cutting-mat-v1.webp` | "A small petrol green cutting mat seen from directly above with a metal ruler, a craft knife with its blade cover on, and a few offcuts of cream card." |
| 22 | `scrap-punchboard-v1.webp` | "A sheet of punchboard seen from directly above: thick cream card with twelve round and hexagonal tokens die cut into it, printed in coral, jade and saffron with simple shapes, two tokens already punched out and lying beside the sheet." |
| 23 | `scrap-wireframe-v1.webp` | "A single sheet of cream paper seen from directly above with a hand drawn pencil layout of a long page: stacked boxes, a large rectangle at the top, three small boxes in a row, wavy lines standing in for writing. A coral sticky note with no writing is stuck to one corner." |
| 24 | `scrap-mug-v1.webp` | "A plain matte jade mug of black tea seen from directly above, resting on a round cork coaster." |

The desk also reuses the six existing concept images and the existing founder portrait. Do not generate a portrait of Umair (question 6).

### 7.4 Images that are not generated

| Image | Source |
| --- | --- |
| Client work (`public/images/work/*`) | Existing real campaign artwork and the Quiver Time photograph, with existing credits. Never regenerated or retouched. |
| Six studio concepts (`public/images/hero/*`) | Existing. Required by a test. |
| Category and Gamefound page images (`public/images/campaign/*`) | Existing |
| Shopify store mockups | Existing |
| Logo, favicons | Existing brand files, unchanged |
| Lid, dice, pips, pawn silhouette in the menu, track line, icons | Drawn in code as vector geometry |
| Grain | A 256 px noise PNG made by the executor from random pixels, or the lens shader |

### 7.5 Full page mockup prompts, for previewing the direction before any build

These are for the owner's eyes only and never ship. Image generators misspell text, so judge composition, colour and mood, not lettering.

**Mockup A: desktop home, first screen**

```text
A website homepage design shown flat, exactly 16:10 landscape, no browser frame, no device.
The whole screen is a dim room in deep petrol green #133033 lit by one warm lamp from the
upper left. The lower 60 percent of the screen is a printed board game board lying on petrol
baize, seen in perspective from a three quarter angle above, with a winding cream track of
round spaces running from the lower left to the upper right. Seven small die cut cardboard
standees stand along the track: a map desk, a post tower, an easel, a lantern projector,
a market stall with a striped coral awning, a parcel cart and a narrow shopfront.
A matte coral wooden pawn stands on the first space. Matte gouache illustration style,
pale cream card edges, soft shadows to the lower right.
In the dark upper left, a large headline in cream #EFE6D4 in a plain modern grotesk
typeface reads "Kickstarter launches" and under it at the same size in a light elegant
serif italic "for tabletop games".
Lower right: a short three line paragraph of small cream text, a coral #EF644D pill button
with dark text reading "Discuss my project", and an underlined text link "See pricing".
Top left corner: a small wordmark "Guildframe". Top right corner: three small text links
"Services", "Work", "Guides", a cream pill "Start a project", and a small round cream button
with two dots. Bottom left corner: a small round button and an outlined pill
"Free opening mockup". Bottom right corner: "2026".
A fine film grain over everything. Very quiet interface, all the colour is in the board.
No gradients, no glow, no glass effects.
```

**Mockup B: desktop home, full page, tall**

```text
A full length website homepage design shown flat as one tall image, 9:21 portrait,
no browser frame. Plain modern grotesk typeface throughout with occasional light serif italic
words in headlines. Section by section from top to bottom:
1. Deep petrol green #133033 hero: a printed game board in perspective with a winding cream
   track and seven small cardboard standees, a coral pawn, a large cream headline top left,
   a coral pill button lower right.
2. Still petrol green: a headline, then three project images in a row of unequal widths,
   each cut like a thick card with a soft shadow, each with a small jade green dot and label,
   a title and two text links under it.
3. Still petrol green: a loose scatter of six small square illustrated game box images,
   each like a card lying on baize, each with a small lilac dot and label.
4. The ground changes to warm greyboard #DDD3BF with dark ink text: a headline, then two
   pricing cards side by side of unequal width, each with a very large price figure and a
   short list under it. The wider card has one coral pill button.
5. Back to petrol green: a horizontal strip of three round cream track spaces joined by a
   dotted line with a coral pawn on the first, a short heading and paragraph under each.
6. Petrol green: three wide rows of guide titles separated by thin lines.
7. Petrol green: six question rows with small plus icons.
8. Slightly lighter petrol panel: a contact form on the right with rounded dark fields and a
   cream pill button, a heading and short text on the left, a coral pawn on a cream tile.
9. Darkest petrol #0E2325 footer with three columns of small cream links.
A thin dotted cream line runs down the left margin linking the sections. Fine grain.
Generous spacing, calm, crafted. No gradients, no glow, no glass, no icons in tinted squares.
```

**Mockup C: mobile home and the open menu, side by side**

```text
Two phone screens side by side on a plain mid grey background, each 9:19.5 portrait,
shown flat with no phone hardware, only rounded screen corners.
Left screen: a homepage in deep petrol green #133033. Small wordmark top left, a small round
cream button with two dots top right. A large cream headline "Kickstarter launches" in a
plain grotesk with "for tabletop games" under it in light serif italic. A short paragraph,
a coral #EF644D pill button "Discuss my project" and a text link "See pricing". The lower
half of the screen is a printed game board in perspective with a cream track, five small
cardboard standees and a coral pawn, lit by a warm lamp from the upper left. Below the board,
a row of small outlined chips. Fine grain.
Right screen: the same site with its menu open. The whole screen is warm cream #EFE6D4.
A dark round button with five dots arranged as a cross top right. Five very large menu
words stacked in dark ink #142426: "Services", "Work", "Guides", "The studio",
"Start a project", the second one in light serif italic with a small coral pawn icon to its
left. At the bottom, a small email address and two small text links.
Quiet, crafted, no gradients, no glow.
```

**Optional mockup D: a guide article, to check reading comfort**

```text
A website article page design shown flat, 16:10 landscape, no browser frame. Warm greyboard
ground #DDD3BF with dark ink text #142426. A solid deep petrol green header bar with a small
wordmark and three links. A large plain grotesk headline over two lines, a short lead
paragraph, a small row of meta text. Below, a narrow list of section links on the left and a
comfortable single column of body text on the right about 68 characters wide, with one
slightly lighter rounded card near the top holding a short answer, one simple table with thin
lines, and coral red underlined links. No images, no decoration, no gradients. Calm and easy
on the eyes, like a printed rulebook page under a lamp.
```

---

## 8. Open questions for the owner

Only the ones that change the build.

1. **Where can builds run?** This workspace cannot install packages, so nothing can be built or tested here. Can each stage be pushed as a branch for a Cloudflare preview build, or will you run `npm ci` and the tests on your Mac? Without one of these the work cannot be verified.
2. **Dusk as the main ground.** The plan moves the site from cream to deep petrol with greyboard for reading pages. Generate mockups A to D first and confirm, or say if you want the home page on greyboard instead.
3. **How far does the launch kit removal go?** The promotions go either way. Should the kit page, the download files, the email sequence files and the kit wording in privacy and terms also be deleted? That means rewriting four tests and the terms page title, and it affects people who already have the kit emails.
4. **Client totals.** Please confirm the pledged total, backer count and the date checked for ScentedRealms, FutureProof Terrain and Quiver Time, or allow them to be read from the public Kickstarter pages. Also confirm the wording in 5.7.
5. **The lid.** Are you happy for the home page to open behind an entry screen on the first visit of a session (it opens itself after 4 seconds), including for visitors arriving from ads? The alternative is no lid, with the board setting itself up straight away.
6. **The founder portrait.** Is `guildframe-founder-portrait-v1.webp` a real photograph of you? If it is, it stays as it is. If it was generated, it should be replaced with a real one or dropped.
7. **Concepts in the work index.** The plan lists the six studio concepts on `/work` under their own filter, labelled as concepts. Yes, or keep `/work` to the three client projects only (then the filter bar is dropped there)?
8. **Header action.** The header pill goes to the enquiry form and the call booking link moves into the menu. Prefer the call link in the header instead?

Smaller defaults that will be used unless you say otherwise: Host Grotesk as the main typeface, synthesised sounds (you can record real dice and cards later), no new URLs, and no SEO or content date changes.

---

## Appendix: what could not be verified about unseen.co

- Sound. The site was entered muted, so no audio was heard. Sound names and triggers come from markup and script only.
- Exact timing of individual animations. The counts in 1.4 are totals across the minified script, not a timeline per element.
- Page transition length. A dark mid transition frame was captured but not timed.
- Nav and menu hover states were inferred from the stacked duplicate labels in the DOM and were not captured on screen.
- Press and hold. The cursor and the world page carry hold elements, but the interaction could not be triggered with the automation tools.
- Opening a project from the canvas grid. A synthetic click did not navigate, so the project page was opened by URL.
- The desktop home headline. It is drawn in the canvas, and in the desktop capture the showreel plane covered it. It was seen on mobile only.
- Projects and world pages at 390 wide were not captured. Mobile checks covered the gate and the home screen.
- Load performance and compressed transfer sizes were not measured. The browser pane scales large viewports, so on screen proportions in screenshots are approximate. Measured values come from computed styles.
- The firm that made the fonts licenses both commercially. That is from general knowledge, not from the site.
