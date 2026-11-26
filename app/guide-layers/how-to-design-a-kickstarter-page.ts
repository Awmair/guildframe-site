import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "what-a-good-page-does": {
      takeaway: "A good Kickstarter page lets a stranger understand your game, trust you and choose a reward on their own. Design every section around that job.",
    },
    "reading-order": {
      takeaway: "Order your Kickstarter page by the five questions backers ask, from what it is to how they pledge. The order matters more than any single graphic.",
    },
    "top-of-page": {
      paragraphs: [
        "The top of the page is where a visitor decides whether your game is for them. It has four parts plus an optional video, and each one has a single job.",
        "The full list of sizes lives in our [Kickstarter image sizes guide](/guides/kickstarter-image-sizes). On the [Cryptic Explorers campaign](/work/cryptic-explorers) we designed, the header pairs the game box with the logo and the line \"Asymmetrical squad tactics and survival horror\".",
        "Underneath sit the table facts of 2 to 4 players, 1 to 3 hours and ages 13 and up. Our guide to [planning a Kickstarter campaign video](/guides/kickstarter-campaign-video-planning) covers the script and shot list.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Each part of the top of a Kickstarter page has one job",
          tips: [
            {label: "Project image", text: "Shows the game. Kickstarter recommends 1024 by 576 pixels at 16:9, with no banners, badges or extra text."},
            {label: "Title", text: "Your game's name, and nothing else."},
            {label: "Subtitle", text: "Says what kind of game it is and who it's for. Kickstarter says to sum up the campaign briefly, for someone who has never heard of you."},
            {label: "Opening section", text: "Repeats the essentials in a form people can scan, such as player count, play time and age."},
            {label: "Video, if you make one", text: "Optional. Kickstarter advises keeping it clear and under two minutes."},
          ],
          source: "Kickstarter, How to make a great project image, and Guide to the Kickstarter campaign page",
        },
      ],
      takeaway: "Get the project image, title, subtitle and opening section right, and most visitors will give the rest of your Kickstarter page a fair read.",
    },
    "how-it-plays": {
      takeaway: "Teach one turn well on the page and link the full rulebook. A backer wants to picture playing your board game, not read every rule.",
    },
    "what-backers-get": {
      paragraphs: [
        "Once someone wants to play, their next question is what arrives in the box. Vague answers here cost pledges, because nobody wants to guess between two tiers.",
        "Lay out the components with labels and counts, then compare the rewards side by side using the same names. For [FutureProof Terrain](/work/futureproof-terrain), the artwork puts an assembled building in the foreground and the separate walls and floors above it.",
        "That way players connect the pieces with what they build. For [Quiver Time](/work/quiver-time), fit and capacity details sit beside the product, because card players check those before they choose.",
        "Kickstarter also warns that a reward tier can't be changed after someone pledges to it, so confirm contents and prices before launch. Our guide to [reward tier graphics](/guides/kickstarter-reward-tier-graphics) shows how to make tiers easy to compare.",
      ],
      takeaway: "Label every component with counts and compare reward tiers using the same names. Clear contents turn interest into a pledge, and tiers lock once backed.",
    },
    "trust": {
      takeaway: "Build trust on a first Kickstarter page with who you are, real play photos, a previewer quote and an honest risks section. Label prototypes as prototypes.",
    },
    "look-professional": {
      takeaway: "A Kickstarter page looks professional through consistency: two fonts, colors from the box art, real photos and facts typed as page text.",
    },
    "mistakes": {
      takeaway: "There is no set Kickstarter page length. Cut long intros, add headings, enlarge text in graphics and keep rewards and prices together.",
    },
    "check-before-launch": {
      visuals: [
        {
          kind: "flow",
          title: "A page is ready when a stranger passes all four checks on a phone",
          start: "You have a full draft of your Kickstarter page",
          nodes: [
            {question: "Can someone who hasn't played explain one turn after reading it?", yes: "Go on to the reward check", no: "Rewrite the gameplay section around one sample turn"},
            {question: "Can they pick a reward and say what is in the box?", yes: "Go on to the text check", no: "Label components and compare tiers side by side"},
            {question: "Are prices, contents and player counts typed as page text?", yes: "Go on to the trust check", no: "Type them in, so phones and screen readers get them"},
            {question: "Are prototype images labeled and the risks section written?", yes: "Go on to the checklist", no: "Label prototypes and write real risks before you submit"},
          ],
          end: "Run the full page checklist, then submit for review",
          caption: "Guildframe's stranger test, built on Kickstarter's advice to share the preview link and ask about clarity, pricing and messaging.",
        },
      ],
      takeaway: "Test your Kickstarter page preview on a phone with someone who hasn't played. If they can explain a turn and pick a reward, it's ready.",
    },
    "diy-or-help": {
      paragraphs: [
        "Plenty of creators design a good first page themselves using everything above. What usually runs out is time and distance. Layout, copy and reward graphics take weeks, and it's hard to see your own page the way a stranger does.",
        "This is the work Umair and his team have done for ten years. Our Creator Launch package is $2,500. It covers the launch strategy, the campaign video and your Kickstarter, Indiegogo or Gamefound page from the first line of copy to a campaign ready for you to submit.",
        "That includes page structure, campaign copy, section graphics and reward setup using your artwork, and a video made from your product images and videos. Founder Launch is $3,500 and adds branding and a professional website.",
        "Ad spend, ad management, prelaunch emails, live campaign management and platform fees are quoted separately. If you're unsure, our guides on [when to hire a campaign designer](/guides/when-to-hire-kickstarter-campaign-designer) and [what campaign design costs](/guides/board-game-kickstarter-campaign-design-cost) help you decide.",
        "You can also see the four [campaigns in our case studies](/work). When you are ready, share your project through the [enquiry form](/buy) and we will agree the scope in writing before any work starts.",
        "Request it through our [Kickstarter campaign design](/campaign-design) page.",
      ],
      takeaway: "Design your Kickstarter page yourself if you have weeks and fresh eyes. If not, share your project and book a 30 minute call about the $2,500 Creator Launch package.",
    },
  },
};
