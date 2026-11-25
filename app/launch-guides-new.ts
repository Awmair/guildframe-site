import type { LaunchGuide } from "./launch-guides";

const source = (label: string, publisher: string, href: string) => ({ label, publisher, href });
const project = source("What to share on a Kickstarter project page", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236738-what-information-should-i-share-on-my-project-page");
const media = source("Images and media in a project story", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates");
const rewards = source("Adding rewards and reward images", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project");
const releaseNotes = source("Kickstarter release notes", "Kickstarter", "https://start.kickstarter.com/kickstarter-release-notes");
const gamefound = source("Getting started with crowdfunding", "Gamefound", "https://help.gamefound.com/article/285-getting-started-with-crowdfunding");
const guide = (content: Omit<LaunchGuide, "published" | "updated" | "servicePath" | "serviceLabel"> & Partial<Pick<LaunchGuide, "updated" | "servicePath" | "serviceLabel">>): LaunchGuide => ({
  published: "2026-10-03", updated: "2026-10-03", servicePath: "/campaign-design", serviceLabel: "Kickstarter and Gamefound campaign design", ...content,
});

export const newLaunchGuides: LaunchGuide[] = [
  guide({
    "slug": "kickstarter-prelaunch-page-guide",
    "title": "Kickstarter Prelaunch Page: What to Show Before Your Game Launches",
    "seoTitle": "Kickstarter Prelaunch Page Guide for Tabletop Games",
    "description": "What a tabletop Kickstarter prelaunch page should show, how it differs from the preview link, when to share it and what followers see in the app.",
    "tag": "Prelaunch",
    "updated": "2026-11-25",
    "servicePath": "/kickstarter-prelaunch-marketing",
    "serviceLabel": "Kickstarter prelaunch marketing for tabletop games",
    "answer": "A Kickstarter prelaunch page is the public page where people tap Notify me on launch and get an email when your campaign goes live. Its title, subtitle and image have to explain the game on their own, because the Kickstarter app leaves out the longer prelaunch description.",
    "relatedSlugs": [
      "kickstarter-followers-before-launch",
      "kickstarter-prelaunch-page-vs-landing-page",
      "kickstarter-prelaunch-email-list",
      "kickstarter-review-launch-timeline"
    ],
    "sources": [
      {
        "label": "Setting up your project's prelaunch page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      },
      {
        "label": "What to share on a Kickstarter project page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236738-what-information-should-i-share-on-my-project-page"
      }
    ],
    "sections": [
      {
        "id": "two-links",
        "title": "Use the prelaunch link and the preview link for different jobs",
        "paragraphs": [
          "Kickstarter gives you two different links before launch, so we label them every time we share one. The public prelaunch page introduces the project and collects followers. The preview link shows the full draft campaign, including the story and rewards.",
          "Send the preview to a playtester who needs to check reward contents, and the prelaunch link to someone who wants to know when the game goes live. Both pages carry the Notify me on launch button, but neither click is a pledge."
        ],
        "visual": {
          "kind": "compare",
          "title": "The prelaunch page gathers followers; the preview link gathers feedback",
          "columns": [
            {
              "name": "Public prelaunch page",
              "points": [
                "Introduces the game before funding opens",
                "Collects followers through Notify me on launch",
                "The link for posts, ads and emails"
              ],
              "verdict": "Promote this one",
              "highlight": true
            },
            {
              "name": "Preview link",
              "points": [
                "Shows the full draft story and rewards",
                "Works while preview sharing is turned on",
                "The link for playtesters and reviewers"
              ],
              "verdict": "Use it for feedback"
            }
          ],
          "source": "Kickstarter Help Center, prelaunch page setup"
        },
        "source": 0
      },
      {
        "id": "opening",
        "title": "Make the game clear without the long description",
        "paragraphs": [
          "The first view does most of the work, so we write it before anything else. You need a title people can remember, a subtitle that says what players do and an image of the actual product. A setting name on its own gives a new visitor very little.",
          "For example, a cooperative card game might say players build a rescue team and try to bring everyone home. An RPG supplement should name the system it supports. A terrain project should say whether it offers printed pieces, files or both.",
          "Kickstarter's desktop prelaunch page can carry an extra description, but the app leaves that text out. That's why we check the title, subtitle and image as a complete introduction before relying on longer copy."
        ],
        "source": 0
      },
      {
        "id": "feedback",
        "title": "Ask preview readers for feedback you can use",
        "paragraphs": [
          "Vague praise doesn't fix a page, so we give preview readers a few small tasks. Ask them to explain the game in one sentence, pick a reward and find the shipping information. If they need your help, note exactly where they got stuck.",
          "Then keep one list of confirmed fixes instead of comments scattered across messages. Reward names, component counts and delivery wording deserve a final check from whoever owns those facts. These four questions are a good place to start."
        ],
        "list": [
          "Can a new reader tell whether this is a board game, card game, book or accessory?",
          "Does the opening image show the reward, not only decorative art?",
          "Are draft art and prototype components labeled?",
          "Do the reward details in the preview match the story?"
        ]
      },
      {
        "id": "timing",
        "title": "Leave time to share the page before launch",
        "paragraphs": [
          "When you can start depends on whether you have launched before. First time creators get the Promotion tab after the project is submitted and approved, while repeat creators can open it ahead of review.",
          "Kickstarter recommends sharing the prelaunch page at least one week before your intended launch date. We treat that as a floor, not a promise of followers. In Guildframe's planning example the prelaunch page opens 6 to 12 weeks before launch, so a first time creator submits for review early. A planned date also doesn't launch the campaign by itself, so name the person who presses launch and have them check the approved campaign first."
        ],
        "visual": {
          "kind": "timeline",
          "title": "Kickstarter suggests sharing the prelaunch page at least a week before launch",
          "events": [
            {
              "when": "After approval",
              "label": "Promotion tab opens",
              "detail": "Earlier for repeat creators"
            },
            {
              "when": "A week or more out",
              "label": "Share the prelaunch page",
              "detail": "Kickstarter's recommended minimum",
              "highlight": true
            },
            {
              "when": "Before launch",
              "label": "Post prelaunch updates",
              "detail": "Followers get an email for each one"
            },
            {
              "when": "Launch day",
              "label": "Followers get a launch email",
              "detail": "Sent when the project goes live"
            }
          ],
          "source": "Kickstarter Help Center, prelaunch page setup"
        },
        "source": 0
      },
      {
        "id": "followers",
        "title": "Keep followers informed, then send them to launch",
        "paragraphs": [
          "Followers are an audience you reach only through the platform. Kickstarter doesn't let you message them directly, but a prelaunch update notifies current followers and stays visible on the page. Use updates for real news, such as the confirmed date, a playable preview or what comes in the box.",
          "If the schedule moves, update the public message, because an honest date beats a countdown you can't meet. Our prelaunch marketing service covers this whole stretch for tabletop games: the prelaunch page, your own landing page, the email route and the updates in between."
        ],
        "source": 0
      }
    ],
    "faqs": [
      {
        "question": "Is a preview page the same as a prelaunch page?",
        "answer": "No. The preview shows the full draft campaign for feedback, while the public prelaunch page introduces the project and collects followers. They have different URLs, so label each one when you share it."
      },
      {
        "question": "When should I share my Kickstarter prelaunch page?",
        "answer": "Kickstarter recommends sharing it at least one week before your intended launch date. First time creators can set it up once the project is approved; repeat creators get access before review."
      },
      {
        "question": "Can I message everyone who follows my prelaunch page?",
        "answer": "Not directly. You can post a prelaunch update, which notifies current followers by email and stays visible to anyone who visits the page."
      },
      {
        "question": "How many followers should I have before launching?",
        "answer": "Kickstarter doesn't set a minimum. A follow is a request for a launch email, not a pledge, so we read the count next to your email list and your funding goal. Our guide to Kickstarter followers before launch explains how to judge it."
      },
      {
        "question": "Does the Kickstarter app show my full prelaunch page?",
        "answer": "No. Kickstarter says prelaunch pages viewed in its app leave out the project description section. The title, subtitle and image need to explain the game on their own."
      },
      {
        "question": "Does Guildframe's free mockup cover a prelaunch campaign?",
        "answer": "The free mockup covers one opening campaign section using your artwork, with no payment or obligation. Prelaunch pages and email are scoped in writing as part of our prelaunch marketing work."
      }
    ]
  }),
  guide({
    slug: "board-game-kickstarter-gameplay-rulebook",
    title: "How to Explain Board Game Gameplay on a Kickstarter Page",
    seoTitle: "Board Game Kickstarter Gameplay and Rulebook Guide",
    description: "Show a sample turn, explain player decisions and link your rulebook or playthrough so a new backer can understand your board game.",
    tag: "Gameplay & rules", updated: "2026-11-25", servicePath: "/campaign-design", serviceLabel: "Kickstarter campaign design for tabletop games",
    answer: "Explain a board game on Kickstarter by stating the player's objective, then showing one representative turn with its decision and result, with the confirmed player count and play time nearby. Link a clearly labeled rulebook or playthrough for readers who want every rule, so the page itself never has to teach them all.",
    relatedSlugs: ["board-game-kickstarter-page-checklist", "kickstarter-campaign-video-planning", "card-game-kickstarter-launch-guide", "kickstarter-campaign-graphics-mobile-readability"],
    sources: [project, source("How to playtest your board game before launch", "Kickstarter", "https://updates.kickstarter.com/how-to-playtest-your-board-game-before-you-launch-on-kickstarter/"), gamefound],
    sections: [
      { id: "facts", title: "Start with the game your reader will actually play", paragraphs: ["Give the confirmed player count, expected play time and player objective before the setting's history. Mention solo play, cooperative play or a required app if they affect someone's decision to back.", "For an expansion, state the required base game. If the components carry text, name the available languages and say which pieces contain it. Avoid showing an unsupported mode simply because it makes the pitch broader. Then answer these four questions before anything else."], list: ["Who plays, and with how many people?", "What does a player try to achieve?", "What do players choose during a turn or round?", "What ends the game, and how is the result decided?"] },
      { id: "sample-turn", title: "Show one decision and its consequence", paragraphs: ["Choose a turn that reveals the main choice. A worker placement game might show a player choosing between collecting supplies and completing a contract. A party game might show how a prompt becomes a shared answer.", "Use an actual board or component image with a few readable labels. Show the choice, the change it causes and why the player cares. Save exceptions and edge cases for the rules link.", "This is our suggested layout, not a template Kickstarter requires. The platform asks creators to explain their project, how it will be made and their progress, and gameplay evidence is how a game meets that guidance."], visual: { kind: "steps", title: "One turn told in three beats explains more than a page of rules", caption: "Our layout for a sample turn graphic. Edge cases stay in the linked rulebook.", steps: [{ label: "Starting state", detail: "The board, hand or market the player sees" }, { label: "The decision", detail: "The choice and what it costs them" }, { label: "The result", detail: "What changed and why the player cares" }, { label: "The rules link", detail: "Labeled with version and draft status" }] }, source: 0 },
      { id: "rulebook", title: "Label the rulebook and test the link", paragraphs: ["Use a link label such as 'Read the draft English rulebook, version 0.8'. That tells a reader what they are opening and whether it can change. Check sharing permissions in a signed out browser so the link does not require access to your private drive.", "If a tutorial replaces or supplements the written rules, say what it covers. An overview video, a full playthrough and the rulebook answer different questions. Put each link near the relevant explanation.", "Kickstarter's playtesting guidance recommends blind testing, where a group learns from the rules without the designer teaching them. The questions from that session improve both the rulebook and the campaign explanation.", "The rulebook does not need its final layout before launch, but the rules should be final in substance, so the game plays the way the page describes. A labeled draft with placeholder art is fine. Rules that could still change how a turn works are a reason to wait."], visual: { kind: "compare", title: "Overview video, playthrough and rulebook each answer a different question", columns: [{ name: "Overview video", points: ["What the game feels like", "Who it suits"], verdict: "Near the opening" }, { name: "Full playthrough", points: ["How a whole game flows", "How long turns take"], verdict: "In the gameplay section", highlight: true }, { name: "Rulebook", points: ["Exact rules and edge cases", "Version and draft status"], verdict: "Linked and tested signed out" }] }, source: 1 },
      { id: "evidence", title: "Use previews as evidence, with permission", paragraphs: ["When you include a review quote, preserve its meaning, credit the reviewer and link to the original preview. Get permission for footage, logos and quotes before putting them in campaign graphics.", "Say whether a reviewer used a prototype or production sample. A preview of unfinished components should not imply that the final edition has already been tested. Keep your own claims about the game separate from the reviewer's words." ] },
      { id: "test", title: "Give the page to someone who has not played", paragraphs: ["Ask the reader to explain a turn and describe who they would play with. Let them read without a live explanation from you. Their questions show which parts the page has failed to communicate.", "Run the same check on a phone. If the labels on a board diagram become tiny, simplify the diagram or split it into steps. Keep essential information in readable text as well as images."], list: ["The reader can name the main decision.", "They can find the player count and supported modes.", "They can open the correct rules without requesting permission.", "They know which images or rules are still provisional."] },
    ],
    faqs: [
      { question: "Do all board game Kickstarter campaigns need a downloadable rulebook?", answer: "We have not found a universal rulebook download requirement in the cited platform guidance. A clearly labeled rulebook or playable explanation is a useful way to let backers assess your game." },
      { question: "Should I link a playthrough video or a rulebook?", answer: "Both, if you have them. An overview video, a full playthrough and the rulebook answer different questions, so put each link beside the explanation it supports." },
      { question: "Should I explain every rule on the campaign page?", answer: "Start with the objective and the main decisions. Put detailed rules and unusual cases in a rulebook or playthrough that readers can choose to open." },
      { question: "Can I show draft rules?", answer: "Label the version and draft status, explain what may change and keep the linked file current. Do not present an unfinished document as final." },
      { question: "Does my rulebook have to be finished before I launch?", answer: "The rules should be final in substance, so the game plays the way the campaign page describes. The layout and art can still be a labeled draft. If the rules could still change how a turn works, finish the playtesting before you launch." },
    ],
  }),
  guide({
    slug: "kickstarter-campaign-video-planning",
    title: "Kickstarter Campaign Video: Plan the Main Video and Gameplay Preview",
    seoTitle: "Kickstarter Campaign Video: Length and Planning",
    description: "Separate your main campaign video, optional vertical Discovery Mode clip and gameplay demo. Check the requirements before briefing a tabletop video.",
    tag: "Campaign video", updated: "2026-11-25", servicePath: "/campaign-creative", serviceLabel: "Campaign scripts, renders and motion for tabletop games",
    answer: "A Kickstarter campaign video is optional, and Kickstarter's help pages set no length for the main video; its 60 to 90 second advice applies to the vertical 9:16 Discovery Mode clip. Use the main video to show the game, one real decision and what funding will produce, and keep a separate gameplay video for the full rules.",
    relatedSlugs: ["kickstarter-image-sizes", "board-game-kickstarter-gameplay-rulebook", "kickstarter-campaign-graphics-mobile-readability", "what-to-send-kickstarter-campaign-designer"],
    sources: [source("Project video requirements and Discovery Mode", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236743-is-a-project-video-required-to-launch"), media, source("Description sections and media", "Gamefound", "https://help.gamefound.com/article/214-project-detailed-description")],
    sections: [
      { id: "jobs", title: "Give each video a clear job", paragraphs: ["The main campaign video introduces the project. A playthrough explains the game's decisions. A short vertical clip needs to make sense when someone discovers it in a mobile feed. One edit may not do all three jobs well.", "Decide what evidence you already have before commissioning footage. A clear prototype demonstration can be more useful than cinematic shots that never show what a player does."], table: { headers: ["Asset", "Useful purpose", "What to check"], rows: [["Main project video", "Introduce the game and the creator", "Product evidence, audio, clear funding purpose"], ["Gameplay or playthrough", "Show the decisions in more detail", "Rules version, labels and a working link"], ["Discovery Mode clip", "Introduce the project in the app feed", "Vertical crop, captions and readable edges"]] } },
      { id: "specifications", title: "Check the upload destination before exporting", paragraphs: ["Kickstarter allows a main project video up to 5120 MB in the Basics tab. Its optional Discovery Mode video uses a 9:16 vertical format with the same maximum size. Kickstarter recommends 60 to 90 seconds for that Discovery clip, and that is not a duration requirement for the main video.", "Videos inside the project story are embedded through a URL. Check the external video's viewing permissions and playback before sharing the campaign preview. Read the current upload documentation before the final export, because these limits can change."], visual: { kind: "stats", title: "The main video is optional; only the Discovery clip has a suggested length", source: "Kickstarter Help Center, checked November 25, 2026", stats: [{ value: "Optional", label: "Main project video", note: "Not required to launch" }, { value: "5120 MB", label: "Maximum file size", note: "Main and Discovery Mode videos" }, { value: "9:16", label: "Discovery Mode format", note: "Vertical, for the app feed" }, { value: "60 to 90 s", label: "Suggested Discovery clip length", note: "Not a rule for the main video" }] }, source: 0 },
      { id: "brief", title: "Write a brief before recording", paragraphs: ["Start with what someone must understand after watching. Identify the game, show the main activity and explain what funding will allow you to produce. Give the editor accurate reward names and approved component images.", "For a card game, plan close ups that keep cards legible. For an RPG, show sample pages rather than only the cover. For miniatures, distinguish a render from a printed or painted model. Record enough context that a short clip does not misrepresent what comes with a pledge. The brief itself only needs these five things."], visual: { kind: "steps", title: "Brief the video in the order a viewer needs it", caption: "Our usual order for a tabletop campaign video. Each step should have a real shot behind it.", steps: [{ label: "Name the game", detail: "One plain sentence and the real box" }, { label: "Show one decision", detail: "Readable components, not a box rotation" }, { label: "Show the reward", detail: "Core contents apart from upgrades" }, { label: "Say what funding pays for", detail: "The next real production step" }, { label: "Caption and crop", detail: "Works muted and in a vertical frame" }] }, list: ["One plain sentence describing the game or product", "The confirmed product and reward names", "The actions or components you need to show", "Which footage uses prototypes or unfinished artwork", "The intended aspect ratios, captions and final file list"] },
      { id: "watch", title: "Watch with sound off and on a phone", paragraphs: ["Add captions and keep important labels away from the edges of a vertical crop. Check whether someone can identify the product when the sound is off, then check that speech is clear with the sound on.", "Do not solve a crowded shot by shrinking every label. Use separate scenes or close ups when a viewer needs to inspect a card, a miniature or an example rule. Check actual playback, not just the exported file thumbnail.", "You do not need a film crew for any of this. A phone can shoot a good tabletop video with good light, clear sound and a tripod, because what backers need is the game on screen in the first seconds, not cinematic shots."], source: 0 },
      { id: "scope", title: "Plan page design and video as separate work", paragraphs: ["Our campaign page package covers page copy and graphics using your supplied artwork, so video production is scoped separately. Scripts, renders, motion and video edits sit in our campaign creative work. Either way, share the video outline with the page designer so the opening, gameplay section and reward explanation use the same facts.", "Leave room to replace temporary video links and check them after the final upload. A finished page still needs a final review inside the platform, with the video playing where backers will see it." ] },
    ],
    faqs: [
      { question: "Is a project video required to launch on Kickstarter?", answer: "No. Kickstarter's cited guidance says the main project video and Discovery Mode video are optional." },
      { question: "How long should a Kickstarter video be?", answer: "Kickstarter's help pages set no length for the main video. Its 60 to 90 second recommendation is for the optional vertical Discovery Mode clip, so keep the main video as long as it takes to show the game, one decision and the reward." },
      { question: "Can I put a playthrough in my campaign story?", answer: "Kickstarter supports embedded video URLs in the story. Check that the hosting service and video's viewing permissions allow visitors to watch it." },
      { question: "Can I film my Kickstarter video on my phone?", answer: "Yes. A phone can shoot a good tabletop video with good light, clear sound and a tripod. What matters is showing the game in the first seconds, with readable components and one real decision, so watch the result muted and on a phone before you upload it." },
      { question: "What should I say in my Kickstarter video?", answer: "Say what the game is in one plain sentence and show the real box, then show one decision with readable components. Show what the reward contains and finish with what funding will pay for, such as the next production step. Leave the full rules for the gameplay video and the page." },
    ],
  }),
  guide({
    "slug": "kickstarter-stretch-goals-planning",
    "title": "Kickstarter Stretch Goals: Examples and a Planning Guide",
    "seoTitle": "Kickstarter Stretch Goals: Card and Board Game Examples",
    "description": "Kickstarter stretch goal examples for card and board games, from card expansions to upgraded components, with unlock rules, eligible rewards and cost checks.",
    "tag": "Stretch goals",
    "answer": "A stretch goal is an extra funding target the creator sets beyond the original Kickstarter goal, and it unlocks an upgrade or extra content for named rewards. Strong examples for card and board games are a small card expansion, a solo mode deck or upgraded components, each one priced, produced and shipped on paper before you announce it.",
    "relatedSlugs": [
      "kickstarter-reward-tier-graphics",
      "card-game-kickstarter-launch-guide",
      "kickstarter-shipping-delivery-page",
      "gamefound-launch-page-checklist"
    ],
    "sources": [source("What are stretch goals?", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236765-what-are-stretch-goals"), source("Stretch goals", "Gamefound", "https://help.gamefound.com/article/113-stretch-goals"), releaseNotes],
    "sections": [
      {
        "id": "base-game",
        "title": "Make the base reward complete first",
        "paragraphs": [
          "We start every stretch goal plan with the base reward, because a backer should know what the first pledge buys even if no extra goal unlocks. Essential rules, promised components and a playable core game all belong in that base offer. On a first campaign that matters more than any unlock, so stretch goals are optional, and fewer of them means less added cost and delivery risk.",
          "Then we check each upgrade with whoever owns production before it goes public. A new card may need editing and art, and a new miniature can affect tooling, packaging and shipping. Extra funding doesn't remove those tasks, so no unlock is announced until it has a cost."
        ]
      },
      {
        "id": "examples",
        "title": "Stretch goal examples for card games and board games",
        "paragraphs": [
          "These examples show the kinds of unlocks that suit tabletop games, and the cost each one carries. A card expansion is a natural card game stretch goal, usually a small set of new cards added to every eligible box. It can fit the existing print run and box, as long as the art, editing and print sheet are planned from the start.",
          "French language campaigns often call this an extension de cartes, and the planning is the same. Board games often use component upgrades such as thicker tokens or a box insert, while TTRPGs add adventures, art or print upgrades. Whatever the unlock, decide which rewards receive it before the graphic exists."
        ],
        "visual": {
          "kind": "timeline",
          "title": "Example: each card game unlock costs more to produce and ship",
          "events": [
            {
              "when": "$12,000",
              "label": "Funding goal",
              "detail": "The complete base game ships either way"
            },
            {
              "when": "$15,000",
              "label": "Card expansion",
              "detail": "12 new cards in every core box",
              "highlight": true
            },
            {
              "when": "$20,000",
              "label": "Solo mode deck",
              "detail": "New rules and cards, extra editing"
            },
            {
              "when": "$26,000",
              "label": "Upgraded tokens",
              "detail": "Thicker stock, new supplier quote"
            },
            {
              "when": "$32,000",
              "label": "Box insert",
              "detail": "Can change box size, weight and shipping"
            }
          ],
          "caption": "Illustrative example for a hypothetical card game, not real campaign data."
        }
      },
      {
        "id": "planning-table",
        "title": "Use a planning table before an unlock chart",
        "paragraphs": [
          "We fill in the fields below with the real project information before any artwork is made. Uncertain entries stay marked for approval instead of turning into public promises.",
          "The eligible reward matters as much as the unlock target. A physical bonus may belong to certain boxes but not to a pledge for the PDF only, so name those tiers directly. That one column saves a lot of fulfillment trouble later."
        ],
        "table": {
          "headers": [
            "Field",
            "What to confirm"
          ],
          "rows": [
            [
              "Unlock condition",
              "Funding amount or another clearly defined trigger"
            ],
            [
              "Benefit",
              "The exact upgrade or extra item"
            ],
            [
              "Eligible rewards",
              "Which named tiers receive it"
            ],
            [
              "Production check",
              "Cost, files, supplier approval and extra work"
            ],
            [
              "Delivery effect",
              "Packaging, weight and schedule changes"
            ],
            [
              "Status",
              "Planned, locked or unlocked"
            ]
          ]
        }
      },
      {
        "id": "platforms",
        "title": "Separate platform controls from the promise",
        "paragraphs": [
          "Kickstarter says stretch goals are not part of the official platform, so the creator defines and explains them in the story. Meeting the original funding goal still decides whether the project funds, even if later stretch targets are never reached. Since May 6, 2026, Kickstarter also lets you link backers straight to a section of your story, such as Stretch Goals, which makes an unlock update easier to act on.",
          "Gamefound has native stretch goals, either manual or automatic. Automatic goals unlock on a backer count, funds raised or a campaign day, and the next goal shows at the top of the project. Check the selected trigger against your approved plan, because a graphic alone doesn't change the project settings."
        ],
        "source": 1
      },
      {
        "id": "addons",
        "title": "Decide whether an extra belongs in an add on",
        "paragraphs": [
          "An optional expansion or accessory is often easier to explain as an add on that a backer chooses. A small upgrade included in named rewards fits a stretch goal better. We choose based on cost, compatibility and the promise the creator can keep.",
          "Kickstarter's own guidance suggests add ons as an alternative to stretch goals. Never use a stretch goal to hide a cost that the base reward already needs, because backers will treat it as part of the game they paid for."
        ],
        "visual": {
          "kind": "compare",
          "title": "A card expansion can be a stretch goal or an add on",
          "columns": [
            {
              "name": "Stretch goal",
              "points": [
                "Included free in named rewards",
                "Unlocks when funding passes a target",
                "Cost comes out of the extra funding"
              ],
              "verdict": "Best for small upgrades every backer gets",
              "highlight": true
            },
            {
              "name": "Add on",
              "points": [
                "Backer chooses and pays for it",
                "Available whatever the total",
                "Cost covered by its own price"
              ],
              "verdict": "Best for larger or optional expansions"
            }
          ]
        },
        "source": 0
      },
      {
        "id": "graphics",
        "title": "Show status and eligibility in the graphic",
        "paragraphs": [
          "Use a readable target, item name and status label. Repeat the eligibility in text so nobody has to decode an icon, and keep locked and unlocked states distinct without relying on color alone.",
          "When a goal unlocks, update the story and any affected component or reward summaries. Check that the same product isn't described as both an included bonus and a paid add on. Our [reward tier graphics guide](/guides/kickstarter-reward-tier-graphics) shows how to keep those summaries readable on a phone."
        ],
        "list": [
          "The goal has a confirmed production plan.",
          "Each reward's eligibility is explicit.",
          "The status label agrees with the actual campaign.",
          "Added weight or work has been included in the delivery plan."
        ]
      },
      {
        "id": "help",
        "title": "How we plan and design stretch goals",
        "paragraphs": [
          "We plan stretch goals with the creator before we design a single unlock graphic, because the order, eligibility and cost of each goal shape the whole campaign page. Then we build the stretch goal graphic, the reward summaries and the update templates so they always agree.",
          "You can plan this yourself with the table above and your supplier quotes. The honest limit is keeping every graphic and reward summary in step once goals start unlocking mid campaign. Our [Kickstarter campaign design](/campaign-design) service covers that work, and the [shipping and delivery guide](/guides/kickstarter-shipping-delivery-page) helps you price the weight each unlock adds."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Do stretch goals decide whether a Kickstarter is funded?",
        "answer": "No. The original funding goal determines whether the project funds. Unmet stretch goals do not replace that goal."
      },
      {
        "question": "What are good stretch goals for a card game?",
        "answer": "A small card expansion added to every eligible box, a solo mode deck, or upgraded card stock or tokens. Price each one, including art, editing and any change in weight, before you set its target."
      },
      {
        "question": "Can a card expansion be a stretch goal?",
        "answer": "Yes. Confirm the art, editing and print sheet first, name which rewards receive it, and check that it fits the box you already quoted. A larger expansion may work better as an add on."
      },
      {
        "question": "Should every extra item be a stretch goal?",
        "answer": "No. An optional product may work better as an add on. Check its cost, compatibility and delivery effect before deciding."
      },
      {
        "question": "Are stretch goals an official Kickstarter feature?",
        "answer": "No. Kickstarter says stretch goals are not part of the official platform, so the creator defines them in the story. Gamefound has native manual and automatic stretch goals."
      },
      {
        "question": "Can a designer choose the unlock amounts?",
        "answer": "The creator should approve the amounts from the project's production and delivery budget. A designer can present that plan clearly but cannot validate the economics from artwork alone."
      },
      {
        "question": "Do I need stretch goals on my first Kickstarter?",
        "answer": "No. Kickstarter says stretch goals are not part of the official platform, so they are optional. A complete base game matters more, and every stretch goal adds production cost and delivery risk. If you add any, keep them few and cost each one before launch."
      }
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign design for tabletop games",
    "updated": "2026-11-25"
  }),
  guide({
    "slug": "kickstarter-shipping-delivery-page",
    "title": "How to Explain Kickstarter Shipping Costs and Delivery",
    "seoTitle": "Kickstarter Shipping: Explain Costs and Delivery",
    "description": "Write the shipping section of a tabletop Kickstarter: when shipping is charged, regional estimates, delivery dates per tier and what backers should budget.",
    "tag": "Shipping & delivery",
    "updated": "2026-11-25",
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign design for tabletop games",
    "answer": "On a Kickstarter page, say where you ship, whether shipping is charged at pledge or later through a pledge manager, and what each region is likely to pay, with the date of that estimate. Then show production, freight and delivery as separate stages, so backers can budget and know the arrival date is an estimate.",
    "relatedSlugs": [
      "board-game-tariffs-shipping-us",
      "kickstarter-reward-tier-graphics",
      "kickstarter-prototype-risks-disclosure",
      "kickstarter-stretch-goals-planning"
    ],
    "sources": [
      {
        "label": "Options for collecting shipping costs",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236769-what-options-do-i-have-for-charging-shipping-costs"
      },
      {
        "label": "Estimated delivery dates",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236744-what-does-estimated-delivery-date-mean"
      },
      {
        "label": "Planning reward shipping",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236521-how-do-i-charge-shipping-on-my-rewards"
      }
    ],
    "sections": [
      {
        "id": "collection",
        "title": "State when the shipping charge is collected",
        "paragraphs": [
          "The first decision is when you collect shipping, and Kickstarter asks you to set it in the project's Preferences tab. You can charge it during the campaign, per reward tier and add on, or collect it later through a pledge manager. Shipping collected at pledge counts toward your funding goal.",
          "Either way, the backer normally pays a shipping charge that you set. If that charge turns out lower than the real bill, the difference comes out of your budget, which is why we build every charge from real quotes rather than a guess.",
          "If a third party service will collect shipping after the campaign, Kickstarter recommends a section on the page that says so, explains how you will collect it and gives an estimated cost where possible. A label that just says shipping later still leaves backers guessing what to budget."
        ],
        "visual": {
          "kind": "compare",
          "title": "Shipping charged at pledge counts toward your goal; charging later needs a clear note",
          "columns": [
            {
              "name": "Collect at pledge",
              "points": [
                "Set per reward tier and add on",
                "Counts toward the funding goal",
                "Needs rates you can stand behind today"
              ]
            },
            {
              "name": "Collect later",
              "points": [
                "Through a pledge manager after funding",
                "Page says when, how and roughly how much",
                "Lets you use firmer quotes"
              ]
            }
          ],
          "source": "Kickstarter Help Center, shipping options"
        },
        "source": 0
      },
      {
        "id": "estimates",
        "title": "Build a regional table from real quotes",
        "paragraphs": [
          "Real quotes make a credible table, so we ask whoever owns the delivery plan for package size, weight, fulfillment origin and destinations. Include likely bundles and add ons before asking for rates.",
          "Use the table below as a worksheet. It has no sample prices on purpose, so fill it with approved figures, date the estimate and explain any exclusions right beside it.",
          "If you ship games made abroad into the United States, import duty belongs in this conversation too. Our guide to board game tariffs and US shipping covers the current rules, and only wording your fulfillment partner confirms should go on the page."
        ],
        "table": {
          "headers": [
            "Field",
            "What you supply"
          ],
          "rows": [
            [
              "Destination",
              "Supported country or region"
            ],
            [
              "Reward or package",
              "Named tier and any combined extras"
            ],
            [
              "Estimated charge",
              "Currency and approved range or amount"
            ],
            [
              "Collection",
              "At pledge or later, through the chosen system"
            ],
            [
              "Quote date",
              "Date and conditions of the fulfillment estimate"
            ],
            [
              "Exclusions",
              "Remote areas, unavailable destinations or other confirmed limits"
            ]
          ]
        }
      },
      {
        "id": "dates",
        "title": "Separate production from delivery",
        "paragraphs": [
          "Backers read your timeline as a promise, so we split it into stages. File approval, manufacturing, freight, warehouse intake and final dispatch each get their own line, and the factory finish date is never labeled as the day a backer receives the game.",
          "Kickstarter requires an estimated delivery date on each reward tier. For a bundle, it says the estimate should reflect when all the contents are expected to arrive. Match the tier field to the timeline and explain the known uncertainties."
        ],
        "visual": {
          "kind": "timeline",
          "title": "The delivery date on a reward is the last stage, not the factory date",
          "events": [
            {
              "when": "Stage 1",
              "label": "File approval"
            },
            {
              "when": "Stage 2",
              "label": "Manufacturing"
            },
            {
              "when": "Stage 3",
              "label": "Freight"
            },
            {
              "when": "Stage 4",
              "label": "Warehouse intake"
            },
            {
              "when": "Stage 5",
              "label": "Delivery to backers",
              "detail": "The date to use on each reward tier",
              "highlight": true
            }
          ],
          "caption": "Example stages. Your fulfillment plan sets the real ones.",
          "source": "Kickstarter Help Center, estimated delivery dates"
        },
        "source": 1
      },
      {
        "id": "wording",
        "title": "Give the page designer approved wording",
        "paragraphs": [
          "Send the collection method, supported destinations, approved estimates and timeline in the brief. If tax or duty wording is needed, have the person responsible for those obligations approve it before it appears in a graphic.",
          "A useful sentence names the collection system, the region, the reward, the approved amount and the date of the quote. Write it with every detail filled in, and never leave a plausible looking placeholder price on the page."
        ]
      },
      {
        "id": "changes",
        "title": "Plan how you will communicate changes",
        "paragraphs": [
          "Name who will update backers if production or rates change. Kickstarter expects updates that explain delivery delays, so keep the current situation, the next step and the revised estimate in each one.",
          "Finally, check the story, native rewards, FAQ and any pledge manager note against each other. A careful shipping section loses its value if another part of the page says shipping is included, which is why we run that cross check in our campaign design work before you launch."
        ],
        "source": 1
      }
    ],
    "faqs": [
      {
        "question": "Does shipping collected during a pledge count toward the Kickstarter goal?",
        "answer": "Yes. Kickstarter says funds pledged toward shipping count toward the project's goal, so plan for that in your budget."
      },
      {
        "question": "Should I charge shipping at pledge or later?",
        "answer": "Kickstarter supports both. Charging at pledge needs rates you can stand behind now, while collecting later lets you use firmer quotes, as long as the page says when, how and roughly how much."
      },
      {
        "question": "Can I show estimated shipping prices?",
        "answer": "Yes, if you label them as estimates, give their date and assumptions and use approved fulfillment information. Explain collection timing and exclusions beside the figures."
      },
      {
        "question": "Which delivery date should a bundle show?",
        "answer": "Kickstarter says the estimated date should reflect when all items in the bundle are expected to arrive. Keep the reward field and the campaign timeline consistent."
      },
      {
        "question": "How do tariffs affect shipping a board game to the US?",
        "answer": "Import duty depends on where the game is made and the rules in force when it arrives. Our guide to board game tariffs and US shipping covers the current position. Put only wording your fulfillment partner confirms on the page."
      },
      {
        "question": "Who pays for shipping on a Kickstarter, me or the backer?",
        "answer": "Usually the backer pays a shipping charge that you set, either at pledge or later through a pledge manager. If your charge turns out lower than the real bill, you cover the difference from the campaign money. That is why we build each regional charge from real quotes before the page goes live."
      }
    ]
  }),
  guide({
    "slug": "kickstarter-prototype-risks-disclosure",
    "title": "Kickstarter Risks and Challenges: Show What Is Ready",
    "seoTitle": "Kickstarter Risks and Challenges for Tabletop Games",
    "description": "Write the Kickstarter risks and challenges section for a tabletop game, label prototypes and renders honestly and check the rules for your category.",
    "tag": "Prototypes & risks",
    "updated": "2026-11-25",
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign design for tabletop games",
    "answer": "The Kickstarter risks and challenges section should name the real obstacles between today and delivery, such as factory samples, final editing or freight, and say what you will do about each one. Pair it with honest image labels, so a backer can tell a prototype or render from a production sample.",
    "relatedSlugs": [
      "kickstarter-shipping-delivery-page",
      "miniatures-stl-kickstarter-launch-guide",
      "what-to-send-kickstarter-campaign-designer",
      "board-game-kickstarter-page-checklist"
    ],
    "sources": [
      {
        "label": "What to share on a Kickstarter project page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236738-what-information-should-i-share-on-my-project-page"
      },
      {
        "label": "Hardware and product design project rules",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects"
      },
      {
        "label": "Description sections and crowdfunding risks",
        "publisher": "Gamefound",
        "href": "https://help.gamefound.com/article/214-project-detailed-description"
      },
      {
        "label": "Guide to the Kickstarter campaign page",
        "publisher": "Kickstarter",
        "href": "https://updates.kickstarter.com/kickstarter-lessons/guide-to-kickstarter-campaign-page/"
      }
    ],
    "sections": [
      {
        "id": "purpose",
        "title": "What the risks and challenges section is for",
        "paragraphs": [
          "Kickstarter describes the Risks and Challenges section as the place to outline potential obstacles that could affect your campaign and how you plan to address them. Its campaign page guide adds that transparency builds trust and confidence with backers.",
          "So we treat it as a short, specific plan rather than a disclaimer. Name what could slow delivery, say where it stands today and explain what happens if it goes wrong. A backer should finish reading it knowing you have already thought it through.",
          "If you are still asking whether you can launch with a prototype at all, our guide on [whether your game is ready for Kickstarter](/guides/is-my-game-ready-for-kickstarter) answers that first. This page assumes you are launching and covers how to label the prototype and describe the risks honestly."
        ],
        "visual": {
          "kind": "compare",
          "title": "A specific risk with a plan says more than a blanket reassurance",
          "columns": [
            {
              "name": "Vague",
              "points": [
                "We have years of experience",
                "We don't expect any delays",
                "Shipping may vary"
              ],
              "verdict": "Nothing a backer can check"
            },
            {
              "name": "Specific",
              "points": [
                "Factory samples for the miniatures are not approved yet",
                "If a sample fails, we post an update with the new date",
                "Freight is quoted, and the shipping section dates the quote"
              ],
              "verdict": "Names the dependency, plan and owner",
              "highlight": true
            }
          ],
          "caption": "Illustrative wording, not taken from a real campaign."
        },
        "source": 3
      },
      {
        "id": "inventory",
        "title": "Record what each image actually shows",
        "paragraphs": [
          "Before we place a single image, we sort the supplied files by what they show. A render, a hand built prototype and a factory sample support different claims, so each file gets a status and a note of any planned changes.",
          "For a card game, note whether the art, layout and card stock are final. For miniatures, identify renders, test prints and painted samples. For an RPG book, tell a sample spread apart from an approved print proof."
        ],
        "table": {
          "headers": [
            "Asset",
            "Useful label",
            "What to confirm"
          ],
          "rows": [
            [
              "Development copy",
              "Prototype; components may change",
              "Which parts are still provisional"
            ],
            [
              "Digital product image",
              "Render",
              "Whether it depicts an approved specification"
            ],
            [
              "Factory or print sample",
              "Production sample",
              "Which production version it represents"
            ],
            [
              "Finished illustration",
              "Final artwork",
              "Whether layout, language or finish can still change"
            ]
          ]
        }
      },
      {
        "id": "category",
        "title": "Check the rules for your actual category",
        "paragraphs": [
          "Kickstarter's rules for hardware and product design projects require a working prototype and ban photorealistic renders for those projects. That rule has a specific category scope, so don't apply it to every Games project without checking. Equally, don't assume a tabletop accessory is exempt because it's sold to gamers.",
          "We review the rules that apply with you before planning the image list. If the category or the allowed presentation is unclear, we settle it before any campaign assets are exported."
        ],
        "source": 1
      },
      {
        "id": "progress",
        "title": "Describe progress in terms a backer can check",
        "paragraphs": [
          "Replace a phrase like 'almost ready' with the work that is done and the steps that remain. For example, say whether the rules have been tested, the files approved or the production sample is still pending. Use only facts you can confirm.",
          "Link to a rules sample, a playtest account or a product demonstration where it helps. Don't describe an untested mode or a planned component as if it were already finished."
        ],
        "source": 0
      },
      {
        "id": "risks",
        "title": "Write about the real dependencies",
        "paragraphs": [
          "List the uncertainties specific to your project. Depending on the product, those might be tooling approval, final editing, translated files, manufacturing or freight. For each one, explain what you are doing about it and who will tell backers if it changes.",
          "The risks section also has to agree with the timeline. If an approval is still pending, show that dependency instead of giving every later milestone a fixed date. Gamefound supports a crowdfunding risk section in its stage descriptions too."
        ],
        "visual": {
          "kind": "steps",
          "title": "Each risk needs four parts: dependency, status, plan and owner",
          "steps": [
            {
              "label": "Name the dependency",
              "detail": "Tooling, editing, translation or freight"
            },
            {
              "label": "Say where it stands",
              "detail": "Done, in progress or waiting"
            },
            {
              "label": "Give the plan",
              "detail": "What happens if it slips"
            },
            {
              "label": "Name the owner",
              "detail": "Who posts the update"
            }
          ]
        },
        "source": 2
      },
      {
        "id": "signoff",
        "title": "Check captions and claims before launch",
        "paragraphs": [
          "Status labels belong where readers see the images, not in a distant footer. We check the same labels in component spreads, reward graphics and video captions.",
          "You approve the final factual claims, and we keep the approved asset list with the design brief, so a replacement image can't quietly change what the page implies. When we design a campaign page, this labeling pass is part of the work, and these four checks close it out."
        ],
        "list": [
          "Every image that isn't final has a clear status.",
          "The component list reflects the actual reward.",
          "Planned work is described as planned.",
          "Risks, reward dates and the timeline agree."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What should I write in the Kickstarter risks and challenges section?",
        "answer": "Name the specific obstacles between now and delivery, such as factory samples, final editing or freight. For each one, say where it stands, what you will do if it slips and who will update backers."
      },
      {
        "question": "Is it bad to admit risks on a Kickstarter page?",
        "answer": "No. Kickstarter's own campaign page guide says transparency builds trust and confidence with backers. A specific risk with a plan is easier to believe than a promise that nothing will go wrong."
      },
      {
        "question": "Are renders banned in every Kickstarter board game campaign?",
        "answer": "No. The ban we cite applies to hardware and product design projects. Check your actual category and its rules rather than treating it as a rule for every Games project."
      },
      {
        "question": "Where should I label a prototype?",
        "answer": "Beside the image or in its caption. Repeat the label in reward and component images wherever a reader could mistake it for the final product."
      },
      {
        "question": "Can my designer write the risks section without production information?",
        "answer": "Not well. We need your approved facts about unfinished work, dependencies and the update plan, because artwork alone doesn't show production readiness."
      }
    ]
  }),
  guide({
    "slug": "kickstarter-review-launch-timeline",
    "title": "Kickstarter Review Time and Your Launch Timeline",
    "seoTitle": "How Long Does Kickstarter Take to Approve a Project?",
    "description": "Kickstarter review takes up to 3 business days, plus 3 more if changes are requested. Plan review, revisions and the manual launch with a buffer.",
    "tag": "Review & launch",
    "answer": "Kickstarter says project review can take up to 3 business days once your project is queued, and if its team requests changes it can take another 3 business days or longer. Approval doesn't publish the campaign, because launching is a manual step, so we submit at least 2 weeks before the launch date you announce.",
    "relatedSlugs": [
      "kickstarter-prelaunch-page-guide",
      "board-game-kickstarter-page-checklist",
      "board-game-kickstarter-launch-day-checklist",
      "when-to-hire-kickstarter-campaign-designer"
    ],
    "sources": [source("How project review works", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236415-my-project-is-awaiting-review-how-does-this-work"), source("Launching an approved project", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236427-how-do-i-launch-my-project-after-it-s-been-approved"), source("Maximum campaign duration", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236742-what-is-the-maximum-project-duration")],
    "sections": [
      {
        "id": "review",
        "title": "How long Kickstarter review takes",
        "paragraphs": [
          "Kickstarter says review can take up to 3 business days once a project is queued. If its team asks for changes to the draft, allow another 3 business days, or longer if more revisions are needed.",
          "Kickstarter also warns that turnaround can be slightly longer when submission volume is high, and recommends building extra buffer time into your launch. So we treat the estimate as planning guidance, not a deadline the platform has promised your project.",
          "Review is only the last step of preparation. If you are asking how long the whole thing takes, from a finished prototype to launch day, our guide on [when to launch a Kickstarter](/guides/when-to-launch-a-kickstarter) covers preparation time and how to pick a date."
        ],
        "visual": {
          "kind": "timeline",
          "title": "Two review rounds can take six business days before you can launch",
          "events": [
            {
              "when": "Day 0",
              "label": "Submit for review",
              "detail": "Draft complete, rewards and shipping entered"
            },
            {
              "when": "Up to day 3",
              "label": "First decision",
              "detail": "Kickstarter's estimate for a queued project"
            },
            {
              "when": "Up to day 6",
              "label": "Changes reviewed",
              "detail": "Another 3 business days, or longer",
              "highlight": true
            },
            {
              "when": "After approval",
              "label": "Final checks",
              "detail": "Phone preview, links and owner approval"
            },
            {
              "when": "Launch day",
              "label": "Creator clicks Launch",
              "detail": "Manual, it cannot be scheduled"
            }
          ],
          "caption": "Business days. Example timeline built from Kickstarter's published estimates, which high volume can extend.",
          "source": "Kickstarter Help Center, checked November 25, 2026"
        },
        "source": 0
      },
      {
        "id": "dependencies",
        "title": "Plan the work that must happen before launch",
        "paragraphs": [
          "We start with the dependencies rather than a universal number of weeks. Your launch needs complete editor fields, accurate rewards, a finished page, platform review and owner approval, and production decisions may block some of those tasks. As Guildframe's planning example, we start the email list 3 months or more before launch, open the prelaunch page 6 to 12 weeks out and submit for review at least 2 weeks before the date.",
          "Each task gets an owner. We can prepare the copy and graphics, but the creator confirms prices, account information, product facts and delivery plans. Your [prelaunch page](/guides/kickstarter-prelaunch-page-guide) can go live while this work continues, so followers build up during review."
        ],
        "table": {
          "headers": [
            "Stage",
            "What needs to be ready"
          ],
          "rows": [
            [
              "Page brief",
              "Product facts, artwork, rewards and delivery plan"
            ],
            [
              "Platform setup",
              "Required account and project fields completed by the creator"
            ],
            [
              "Review submission",
              "Campaign prepared for platform review"
            ],
            [
              "Changes and approval",
              "Any requested fixes resolved"
            ],
            [
              "Final checks",
              "Native rewards, links, mobile view and owner approval"
            ],
            [
              "Launch",
              "Creator performs and verifies the launch action"
            ]
          ]
        }
      },
      {
        "id": "date",
        "title": "Assign the manual launch action",
        "paragraphs": [
          "Kickstarter says launching is a manual process, and it isn't possible to schedule an automatic launch for a set date. After approval, someone clicks Launch project and the campaign goes live at that moment.",
          "So name the person who will launch, confirm the time zone and agree who checks the public URL afterwards. Prepare announcement links in advance, then verify that they point to the live campaign before you send them."
        ],
        "source": 1
      },
      {
        "id": "duration",
        "title": "Confirm the end date before publishing",
        "paragraphs": [
          "Kickstarter allows campaigns from 1 to 60 days and recommends 30 days or fewer. That recommendation doesn't guarantee a funding result, and Kickstarter says you can't adjust the deadline or funding duration after launch.",
          "Check the end date and time alongside the launch date. Make sure whoever handles messages and updates knows exactly when the campaign closes."
        ],
        "source": 2
      },
      {
        "id": "final-check",
        "title": "Review the page after the last edit",
        "paragraphs": [
          "Changes made during review can affect another part of the page. A revised edition name must also change in the graphics, and a delivery adjustment needs to match the reward field, story and FAQ.",
          "Open the final preview on a phone and a desktop. Test the rules, review and video links without private sharing access, and clear any placeholder labels before the owner approves the launch. The [Kickstarter page checklist](/guides/board-game-kickstarter-page-checklist) covers the rest of that pass."
        ],
        "list": [
          "Prices and contents agree in text, graphics and native rewards.",
          "Shipping collection timing is easy to find.",
          "Draft or prototype assets have accurate labels.",
          "The duration, deadline and time zone have been checked.",
          "The creator knows who performs the launch and confirms it is live."
        ]
      },
      {
        "id": "help",
        "title": "How we build review time into a launch plan",
        "paragraphs": [
          "We plan the review window into every launch schedule we build, because a requested change close to an announced date is an easy way for a launch to slip. Our page work is finished and checked before submission, which leaves the buffer for Kickstarter's questions rather than our own fixes.",
          "You can manage this yourself with the timeline above. The honest limit is that review, page fixes and prelaunch promotion all land in the same two weeks. If you want that run for you, see our [Kickstarter launch services for tabletop games](/kickstarter-launch-services)."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How long does Kickstarter take to approve a project?",
        "answer": "Up to 3 business days once the project is queued for review. If Kickstarter requests changes, allow another 3 business days or longer, and expect slightly longer waits when submission volume is high."
      },
      {
        "question": "What happens if Kickstarter asks for changes?",
        "answer": "You revise the draft and it goes back for review, which Kickstarter says can take another 3 business days, or longer if more revisions are needed. Check the rest of the page after each fix, because one change often touches several sections."
      },
      {
        "question": "Does Kickstarter launch my project automatically after approval?",
        "answer": "No. Kickstarter says launching is manual and can't be scheduled for a set date. Someone on your team clicks Launch project and then checks the live page."
      },
      {
        "question": "How far ahead should I submit my project for review?",
        "answer": "We submit at least 2 weeks before the date you announce. That covers two review rounds at Kickstarter's published estimates, plus time for your own final checks."
      },
      {
        "question": "How long should a Kickstarter campaign run?",
        "answer": "Kickstarter allows 1 to 60 days and recommends 30 days or fewer. Set the end date before launch, because it can't be changed afterwards."
      },
      {
        "question": "Can I extend the funding deadline after launch?",
        "answer": "No. Kickstarter's duration guidance says the funding duration and deadline cannot be adjusted after launch. Check them before publishing."
      }
    ],
    "servicePath": "/kickstarter-launch-services",
    "serviceLabel": "Kickstarter launch services for tabletop games",
    "updated": "2026-11-25"
  }),
  {...guide({
    slug: "gamefound-launch-page-checklist",
    title: "Gamefound Launch Checklist: Sections, Rewards and Tester Mode",
    seoTitle: "Gamefound Launch Checklist: Page, Tester Mode and Adfound",
    description: "Gamefound launch checklist for tabletop creators. Check stages, sections, rewards and Tester Mode, and budget for Adfound fees before backers arrive.",
    tag: "Gamefound launch", servicePath: "/gamefound-launch-services", serviceLabel: "Gamefound launch services for tabletop creators",
    answer: "Before your Gamefound page opens, check the stage you are editing, publish every story section and reward, test the order path in Tester Mode, then leave Tester Mode and check the public page. If you plan to use Adfound, budget for its fee, which is free in the Upcoming phase and 5% of attributed revenue once crowdfunding starts.",
    relatedSlugs: ["kickstarter-vs-gamefound", "kickstarter-vs-gamefound-campaign-page-design", "kickstarter-shipping-delivery-page", "kickstarter-stretch-goals-planning"],
    sources: [source("Project description and publishing sections", "Gamefound", "https://help.gamefound.com/article/214-project-detailed-description"), source("Copying section descriptions", "Gamefound", "https://help.gamefound.com/article/281-copying-section-descriptions"), source("Creating rewards in crowdfunding", "Gamefound", "https://help.gamefound.com/article/127-creating-rewards-in-crowdfunding"), source("Tester Mode", "Gamefound", "https://help.gamefound.com/article/366-tester-mode"), source("Editing restrictions by stage", "Gamefound", "https://help.gamefound.com/article/247-editing-guide"), source("Adfound fees and billing", "Gamefound Help Center", "https://help.gamefound.com/article/415-adfound-fees-and-billing"), source("Gamefound acquires Indiegogo (press release, July 24, 2025)", "Gamefound via PR Newswire", "https://www.prnewswire.com/news-releases/gamefound-acquires-indiegogo-a-groundbreaking-leap-forward-for-global-creativity-and-creator-empowerment-302511967.html")],
    sections: [
      { id: "stage", title: "Check the stage you are editing", paragraphs: ["A common Gamefound launch mistake is checking the wrong stage. Gamefound keeps a separate description for each stage, so confirm whether you are working on preview, crowdfunding or a later stage before checking the assets. A complete description in one stage does not prove another stage is ready.", "Keep a list of the sections you expect a backer to see: opening, gameplay or product use, contents, rewards, shipping, production and risks. Check that list against the intended stage, and you will catch most gaps before anyone else sees them."], source: 0 },
      { id: "copy", title: "Review the destination before copying content", paragraphs: ["Copying saves time, but it can also overwrite work. The section copying controls can replace content in a target stage, so check whether that stage already contains edits before copying. Keep an approved copy of the text and file list so you can reconcile changes.", "After copying, inspect the destination stage. Check headings, media, links and publication state instead of assuming the source view is an accurate preview of the destination."], source: 1 },
      { id: "publish", title: "Verify section and reward visibility", paragraphs: ["Visibility is an easy check to skip. Gamefound's description guidance says sections are unpublished by default, so check the publication status of each section in the stage you intend to use, including the risk information.", "Reward publication has its own checks. Review the items, quantities, reward contents, delivery display and any required fields, and make product names agree across the rewards and description graphics. Our [Gamefound page design](/gamefound-campaign-design) service builds those graphics against the real reward fields for this reason."], source: 0, list: ["Each intended section is published for the correct stage.", "Reward items and rewards have the intended visibility.", "Images and text use the same names and quantities.", "Shipping and delivery details match the selected project plan."] },
      { id: "tester", title: "Use Tester Mode to inspect the experience", paragraphs: ["Tester Mode is the closest you get to seeing the page as a backer. It lets the creator preview stages, groups and unpublished content, and inspect checkout without sending orders to the payment operator. Use it to check the situations a backer may meet, not only the default creator view.", "Record the mode and audience for each check. A section visible through a test override may still be hidden from the public. Leave Tester Mode and inspect the actual public view before treating the check as complete."], source: 3 },
      { id: "adfound", title: "Know what Adfound costs before you plan ads", paragraphs: ["Adfound is Gamefound's own advertising service, and its fee is worked out differently from running ads in your own account. Gamefound's billing article says Adfound is free during the Upcoming phase of a dedicated campaign. During crowdfunding, late pledges or the pledge manager, it charges 5% of the revenue attributed to your ads, and catalog campaigns are charged 15%.", "Attribution uses Meta's 7 day click and 1 day view window. Adfound sets the final fee 7 days after the campaign ends, once that window closes, and then issues an invoice. The dashboard shows spending and fees, so track both against your launch budget and decide before launch whether Adfound or your own [Kickstarter and Gamefound advertising](/kickstarter-advertising) plan runs each stage."], source: 5, visual: { kind: "stats", title: "Adfound is free before launch, then takes 5% of attributed revenue", stats: [{ value: "Free", label: "Upcoming phase", note: "Dedicated campaign" }, { value: "5%", label: "Of attributed revenue", note: "Crowdfunding, late pledge or pledge manager" }, { value: "15%", label: "Of attributed revenue", note: "Catalog campaign" }, { value: "7 days", label: "After the campaign ends", note: "When the final fee is set" }], source: "Gamefound Help Center, Adfound fees and billing, updated September 21, 2026" } },
      { id: "indiegogo", title: "What the Indiegogo deal means for your Gamefound page", paragraphs: ["Creators often ask whether the Indiegogo news changes their launch. Gamefound announced on July 24, 2025 that it would acquire Indiegogo and its community of 38 million members. The announcement said Gamefound would continue as a tabletop crowdfunding platform, that its technology would power Indiegogo's categories and that Gamefound campaigns would be featured on Indiegogo for extra exposure.", "For the checklist on this page, nothing changes. You still build and check the page in Gamefound's own editor, stages and Tester Mode. If you are still choosing where to launch, our [Kickstarter vs Gamefound comparison](/guides/kickstarter-vs-gamefound) puts fees, audience and tools side by side."], source: 6 },
      { id: "signoff", title: "Give launch approval a specific checklist", paragraphs: ["Approval works best as a short written list, not a feeling that the page looks done. Review the editing restrictions for the stage you are about to enter, and settle the reward names, contents and prices before a change becomes restricted. Keep any remaining placeholder content out of the public version.", "Have the creator approve the finished stage, then verify the public URL after launch. Page graphics are one part of the campaign, and a polished export does not prove that publication, reward settings or checkout are correct. If you want a second pair of hands on the whole launch, that is what our [Gamefound launch services for tabletop creators](/gamefound-launch-services) cover."], source: 4, visual: { kind: "checklist", title: "Five checks before your Gamefound page opens", groups: [{ name: "Stage", items: ["Right stage open", "Sections listed for that stage"] }, { name: "Sections", items: ["Each one published", "Copied content inspected"] }, { name: "Rewards", items: ["Names match the graphics", "Delivery display checked"] }, { name: "Tester Mode", items: ["Order path tested", "Public view checked after exit"] }, { name: "Ads", items: ["Adfound or own account chosen", "Fee and spend in the budget"] }] } },
    ],
    faqs: [
      { question: "Why is my Gamefound section missing from the page?", answer: "Check its publication state and the stage you are viewing. Gamefound's description sections are unpublished by default, and stage or audience visibility can change what a visitor sees." },
      { question: "Does copying a section prove it is public?", answer: "No. Inspect the destination stage, its content and its publication settings. Copying can also replace content already present in that stage." },
      { question: "Does a Tester Mode checkout send payment?", answer: "The cited Gamefound documentation says Tester Mode does not send orders to the payment operator. Exit the mode and check public visibility separately." },
      { question: "How much does Adfound cost on Gamefound?", answer: "Gamefound's billing article says Adfound is free in the Upcoming phase of a dedicated campaign, then charges 5% of attributed revenue during crowdfunding, late pledges or the pledge manager. Catalog campaigns are charged 15%. The final fee is set 7 days after the campaign ends." },
      { question: "Did Gamefound buy Indiegogo?", answer: "Gamefound announced on July 24, 2025 that it would acquire Indiegogo. It said Gamefound would continue as a tabletop crowdfunding platform and that Gamefound campaigns would be featured on Indiegogo." },
    ],
  }), updated: "2026-11-25"},
  guide({
    slug: "card-game-kickstarter-launch-guide",
    title: "Card Game Kickstarter Launch Guide: Decks, Gameplay and Rewards",
    seoTitle: "Card Game Kickstarter Launch Guide",
    description: "Prepare a card game or TCG Kickstarter page with readable sample cards, a clear gameplay explanation and exact deck and reward contents.",
    tag: "Card games & TCGs", updated: "2026-11-25", servicePath: "/campaign-design", serviceLabel: "Kickstarter campaign design for tabletop games",
    answer: "A card game Kickstarter page needs a few readable sample cards, a short example of play and an exact list of what each reward contains. For a TCG, also explain starter products, pack contents and any confirmed randomness, without promising a card or rarity you cannot guarantee.",
    relatedSlugs: ["tcg-kickstarter-launch-guide", "board-game-kickstarter-gameplay-rulebook", "kickstarter-reward-tier-graphics", "kickstarter-prototype-risks-disclosure"],
    sources: [project, rewards, source("Board game playtesting before launch", "Kickstarter", "https://updates.kickstarter.com/how-to-playtest-your-board-game-before-you-launch-on-kickstarter/")],
    sections: [
      { id: "product", title: "Name the product and how it is played", paragraphs: ["Tell readers whether this is a complete card game, a starter product for a collectible system or an expansion that requires something else. Give the player count, expected duration and necessary base products using confirmed details.", "Explain the main decision before introducing every faction. A reader should understand what they do on a turn and what they are trying to achieve. Put deeper setting information after that introduction." ] },
      { id: "cards", title: "Show a few cards that readers can actually read", paragraphs: ["Choose examples that demonstrate the game's choices. Use close ups to explain the information on a card, then show where it fits into a turn. Keep flavor text and rules text distinguishable.", "A large deck spread can show variety, but it rarely explains play on a phone. Pair it with a few readable examples. Label unfinished artwork, wording or layouts rather than making the examples appear final. A sample card section works when it includes these four things."], visual: { kind: "steps", title: "A few readable cards teach more than a full deck spread", caption: "Our layout for a card game sample turn. The full card list lives in the rules or a card reference.", steps: [{ label: "One card, close up", detail: "Cost, effect and flavor text labeled" }, { label: "Put it in a turn", detail: "What the player holds and plays" }, { label: "Show the result", detail: "What changed and why it matters" }, { label: "Link the current rules", detail: "Version labeled, opens signed out" }] }, list: ["A sample card with readable labels", "A short turn or interaction using that card", "The result and why it matters to the player", "A working link to the current rules or demonstration"] },
      { id: "contents", title: "Make counts and product types explicit", paragraphs: ["Confirm the card count, number of decks, accessories and language in each reward. If a tier contains two copies of the game, say that instead of relying on a repeated box render.", "For a collectible game, explain what the creator has confirmed about pack size, fixed contents, random contents and available products. Do not promise a specific card, rarity distribution or collecting outcome unless it is actually guaranteed by the approved product specification."], visual: { kind: "compare", title: "Each card product type needs different reward wording", columns: [{ name: "Complete game", points: ["Exact decks and total cards", "Accessories included", "Player count it supports"], verdict: "Count everything" }, { name: "Starter product", points: ["Who can play with it", "What else they need", "How it links to packs"], verdict: "Say what is missing", highlight: true }, { name: "Packs or boosters", points: ["Approved pack size", "Fixed versus random contents", "No promised rarity"], verdict: "Only what is guaranteed" }] }, table: { headers: ["Reward detail", "What the page needs"], rows: [["Complete game", "Exact decks, total cards and required accessories"], ["Starter product", "Who can play with it and what else is needed"], ["Packs or boosters", "Approved counts and clear fixed versus random wording"], ["Expansion", "Required base game and included new content"], ["Bundle", "Exact product names, quantities and optional extras"]] }, source: 1 },
      { id: "proof", title: "Show rules evidence and the product's status", paragraphs: ["Provide draft rules or a playthrough where available, with the version clearly labeled. Let someone learn the game without you explaining it beside them; Kickstarter's playtesting article recommends that kind of blind test for finding gaps in rules.", "For physical cards, say which manufacturing details are approved and which are still pending. Do not turn a design mockup into a claim about finished card stock, printing or packaging."], source: 2 },
      { id: "review", title: "Review the reward picker alongside the story", paragraphs: ["Use the same deck and edition names in native rewards, comparison graphics and the component list. Make digital downloads, optional accessories and additional copies easy to identify.", "Check the preview on a phone. Ask someone to choose the smallest reward that lets their group play, then explain what it contains. If they cannot answer, revise the reward names or comparison before adding more artwork. We run that same check on every card game page we design, before the creator approves launch." ] },
    ],
    faqs: [
      { question: "Should I show every card on the campaign page?", answer: "Show enough readable examples to explain the gameplay and variety. Put the full rules or an appropriate card reference elsewhere if needed. A tiny image of every card rarely helps a mobile reader." },
      { question: "What should a TCG reward graphic explain?", answer: "The exact product, quantities, what lets someone start playing and which contents are fixed or random. Use creator approved specifications and match the native reward fields." },
      { question: "Should a TCG Kickstarter show rarity odds?", answer: "Only if the approved product specification guarantees them. Otherwise describe the confirmed pack size and which contents are fixed or random, and avoid promising a specific card or collecting outcome." },
      { question: "Are prototype card images enough to claim production readiness?", answer: "No. Label their status and state which printing, packaging and rules decisions are approved. A visual mockup does not establish a finished manufacturing specification." },
    ],
  }),
  guide({
    "slug": "miniatures-stl-kickstarter-launch-guide",
    "title": "Miniatures and STL Kickstarter Pages: Make the Reward Format Clear",
    "seoTitle": "Miniatures and STL Kickstarter Launch Guide",
    "description": "Present physical miniatures, terrain and STL rewards clearly. Label renders and test prints, explain scale and separate file delivery from shipping.",
    "tag": "Miniatures & STL files",
    "updated": "2026-11-25",
    "servicePath": "/miniatures-kickstarter-campaign-design",
    "serviceLabel": "Miniatures and terrain Kickstarter campaign design",
    "answer": "A miniatures or STL Kickstarter page has to say, for every reward, whether the backer gets physical models, digital files or both. We put that format in the reward name, show scale with approved measurements and keep shipping for models separate from file delivery and license terms.",
    "relatedSlugs": [
      "terrain-and-dice-kickstarter-launch-guide",
      "kickstarter-prototype-risks-disclosure",
      "kickstarter-shipping-delivery-page",
      "kickstarter-reward-tier-graphics"
    ],
    "sources": [
      {
        "label": "What to share on a Kickstarter project page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236738-what-information-should-i-share-on-my-project-page"
      },
      {
        "label": "Adding rewards and reward images",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project"
      },
      {
        "label": "Hardware and product design category rules",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects"
      },
      {
        "label": "New Games and Publishing subcategories: TTRPG and STL",
        "publisher": "Kickstarter",
        "href": "https://start.kickstarter.com/kickstarter-release-notes/new-games-publishing-subcategories-ttrpg-stl-and-audiobooks"
      }
    ],
    "sections": [
      {
        "id": "formats",
        "title": "Put the reward format in the name",
        "paragraphs": [
          "A painted model in a hero image can make a file only reward look like a shipped product. So we put the format in the reward name, such as physical terrain set or digital STL pack, and repeat it in the reward summary.",
          "List quantities and versions separately. If bases, magnets, paint or tools aren't included, say so near the product image, and don't let a display scene imply that extras come with the pledge.",
          "Kickstarter announced new TTRPG and STL subcategories across Games and Publishing on May 8, 2026. If your project is mostly files, check whether the STL subcategory fits it better when you set up the project basics."
        ],
        "visual": {
          "kind": "compare",
          "title": "Every miniatures reward is physical, digital or both, and its name should say which",
          "columns": [
            {
              "name": "Physical models",
              "points": [
                "Quantity, material and assembly state",
                "Dimensions or scale",
                "A shipping plan"
              ]
            },
            {
              "name": "Digital STL files",
              "points": [
                "File formats and versions",
                "Delivery method",
                "Usage and license terms"
              ]
            },
            {
              "name": "Mixed bundle",
              "points": [
                "Physical contents listed",
                "Digital contents listed separately",
                "Shippable add ons need a physical main tier"
              ]
            }
          ],
          "source": "Kickstarter Help Center, adding rewards"
        },
        "table": {
          "headers": [
            "Format",
            "Information to prepare"
          ],
          "rows": [
            [
              "Physical models",
              "Quantity, material, assembly state, dimensions and shipping"
            ],
            [
              "Digital files",
              "File formats, supported versions, delivery method and usage terms"
            ],
            [
              "Mixed bundle",
              "Separate physical contents and digital contents"
            ],
            [
              "Terrain system",
              "Scale, connection method and compatible pieces"
            ]
          ]
        },
        "source": 3
      },
      {
        "id": "visuals",
        "title": "Identify renders, prints and painted examples",
        "paragraphs": [
          "Show a render for shape, a test print for a real physical example and close ups for detail, and label each one accurately. If an image is painted, say whether the reward arrives painted, unpainted or in another approved state.",
          "Kickstarter's rules requiring a working prototype and banning photorealistic renders apply to hardware and product design projects. Check your actual campaign category rather than assuming every miniatures project has the same rule, or that every accessory is exempt."
        ],
        "source": 2
      },
      {
        "id": "scale",
        "title": "Give dimensions and compatibility enough context",
        "paragraphs": [
          "Use approved measurements and show a scale reference where it helps, stating whether a measurement includes the base. For terrain, show footprint, height and the connection system rather than relying on a scenic photo alone.",
          "Name compatibility carefully, because a miniature that fits a visual style isn't automatically licensed for another publisher's setting. Use only the system and product references you have approved. If your line is mostly terrain or dice, our terrain and dice Kickstarter guide goes deeper on those products."
        ]
      },
      {
        "id": "files",
        "title": "Explain what file backers will receive",
        "paragraphs": [
          "Tell file backers which formats and versions are included, how they will receive them and which usage terms apply. Mention supported or unsupported versions only once that has been confirmed.",
          "We use your approved license text and tested print information. A render can't support a promise that every printer will succeed, so if you tested a particular process or setup, we state exactly what was tested."
        ],
        "visual": {
          "kind": "checklist",
          "title": "File rewards and physical rewards need different facts before anyone pledges",
          "groups": [
            {
              "name": "File rewards",
              "items": [
                "Formats included",
                "Supported versions, if confirmed",
                "How files are delivered",
                "Usage and license terms",
                "Which print setup was tested"
              ]
            },
            {
              "name": "Physical rewards",
              "items": [
                "Material and assembly state",
                "Scale with an approved measurement",
                "Painted or unpainted",
                "Shipping plan and regions"
              ]
            }
          ]
        }
      },
      {
        "id": "rewards",
        "title": "Keep digital delivery and physical shipping separate",
        "paragraphs": [
          "Build the reward comparison around format and contents. A digital tier shouldn't look as if it includes shipped models, and a physical tier should say whether file access is included too.",
          "Check the platform's reward and add on rules before publishing a mixed offer. Kickstarter's guidance says a digital main tier can't accept shippable add ons, so the design has to follow the real reward controls. When we design a miniatures page, this format split runs through the reward graphics, the story and the native reward fields."
        ],
        "source": 1
      }
    ],
    "faqs": [
      {
        "question": "How should I label an STL only reward?",
        "answer": "Put digital files or STL pack in the reward name and summary. Explain the file formats, delivery method and approved usage terms, and avoid images or wording that suggest a physical model will ship."
      },
      {
        "question": "Can a digital Kickstarter tier accept physical add ons?",
        "answer": "No. Kickstarter's reward guidance says a digital main tier can't accept shippable add ons. Check the actual configuration before designing a mixed reward offer."
      },
      {
        "question": "Should I include a painted example?",
        "answer": "A painted example can show detail, but label it and state the condition the backer actually receives: painted models, unpainted models or files."
      },
      {
        "question": "Is there an STL category on Kickstarter?",
        "answer": "Kickstarter announced TTRPG and STL subcategories across Games and Publishing on May 8, 2026. Check the subcategory list in your project basics and pick the one that matches what backers mostly receive."
      },
      {
        "question": "Should I say whether my STL files are presupported?",
        "answer": "Yes, once it is confirmed. State which versions are included and how they were tested, and avoid promising that every printer will succeed."
      }
    ]
  }),
];
