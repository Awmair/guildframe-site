import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "ttrpg-kickstarter-launch-guide",
  title: "TTRPG Kickstarter Launch Guide (2026)",
  seoTitle: "TTRPG Kickstarter Launch and Marketing Guide (2026)",
  description: "Plan a TTRPG Kickstarter: the new RPG subcategory, Zine Quest or Zinetopia, PDF delivery through DriveThruRPG, audience channels and a launch timeline.",
  tag: "RPG launches",
  answer: "To promote an RPG Kickstarter, build an audience of players before launch, pick a launch window or event that suits your book, and make the page show how a session plays. In 2026 that also means choosing Kickstarter's new tabletop roleplaying subcategory, weighing Zine Quest against BackerKit's Zinetopia for a small zine, and planning PDF delivery before you set reward tiers.",
  servicePath: "/ttrpg-kickstarter-campaign-design",
  serviceLabel: "TTRPG Kickstarter page design",
  relatedSlugs: ["ttrpg-kickstarter-campaign-page-design", "kickstarter-followers-before-launch", "kickstarter-prelaunch-email-list"],
  sources: [
    { label: "New Games and Publishing subcategories: TTRPG, STL, and Audiobooks (May 8, 2026)", publisher: "Kickstarter", href: "https://start.kickstarter.com/kickstarter-release-notes/new-games-publishing-subcategories-ttrpg-stl-and-audiobooks" },
    { label: "Kickstarter release notes", publisher: "Kickstarter", href: "https://start.kickstarter.com/kickstarter-release-notes" },
    { label: "Zine Quest 2026: Create Your Own RPG Adventure (January 7, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/zine-quest-2026-create-your-own-rpg-adventure/" },
    { label: "Zinetopia 2027", publisher: "BackerKit", href: "https://www.backerkit.com/c/events/zinetopia-2027" },
    { label: "From Pledge to Play: BackerKit's DriveThruRPG integration (June 23, 2026)", publisher: "BackerKit", href: "https://blog.backerkit.com/backerkit-drivethrurpg-integration/" },
    { label: "How do I integrate with DriveThruRPG in the Pledge Manager?", publisher: "BackerKit", href: "https://help.backerkit.com/article/973-how-do-i-integrate-with-drivethrurpg-in-pledge-manager" },
    { label: "The Anatomy of a Great Kickstarter Prelaunch Page (October 29, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/the-anatomy-of-a-great-kickstarter-prelaunch-page/" },
    { label: "Setting up your project's prelaunch page", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page" },
    { label: "Kickstarter launch services for tabletop games", publisher: "Guildframe", href: "/kickstarter-launch-services" },
  ],
  sections: [
    {
      id: "what-changed",
      title: "What changed for RPG creators on Kickstarter in 2026",
      paragraphs: [
        "A TTRPG launch in 2026 runs on the same basics as before, with a few platform changes worth knowing. The biggest is that roleplaying games now have their own home on Kickstarter.",
        "On May 8, 2026, Kickstarter added a tabletop roleplaying game subcategory, alongside new subcategories for STL files and audiobooks. Kickstarter says the aim is to help backers find projects that match their interests and help creators reach the right audience. Kickstarter said creators can choose it while building a campaign and after launch, so we select it for every RPG project we prepare and check it again before review.",
        "Kickstarter's own pledge manager also changed during the year. Since August 20, 2026, creators can let backers change their orders and add items themselves, and since October 28, 2026, creators can edit backer orders directly. For an RPG with print, PDF and bundle rewards, that makes post campaign changes easier to handle.",
      ],
      source: 0,
    },
    {
      id: "zine-events",
      title: "Zine Quest or Zinetopia for a small zine",
      paragraphs: [
        "If you are launching a short adventure or a small zine, a February event can bring you an audience you don't have yet. There are two to compare, and they run on different platforms.",
        "Zine Quest is Kickstarter's annual open call for small format RPG zines, held each February. In 2026, creators launched their campaign during February and filled in a form so Kickstarter could feature it in a curated collection promoted through the month. When we checked on November 25, 2026, Kickstarter had not yet posted details for 2027, so watch its updates blog in January.",
        "Zinetopia is BackerKit's version, and it only runs on BackerKit. The 2027 event runs from February 2 to 19, 2027, and applications are open through January 4, 2027. Every project must launch and end inside that window, be a new product rather than a reprint, and be run and fulfilled on BackerKit. BackerKit reviews each application, and creators who join a themed banner must offer a limited freebie.",
        "Choose the event by where you want your backers to live. A first zine with no audience can gain a lot from a shared promotion. A larger core book usually does better with its own date and a longer prelaunch.",
      ],
      visual: {
        kind: "compare",
        title: "Small zines can join a February event, while bigger books pick their own date",
        columns: [
          { name: "Zine Quest", points: ["Kickstarter's open call each February", "2026: launch in February, then submit a form", "Featured in a curated collection", "2027 details not posted as of November 25, 2026"], verdict: "Suits a zine that should live on Kickstarter" },
          { name: "Zinetopia 2027", points: ["February 2 to 19, 2027, on BackerKit only", "Apply by January 4, 2027", "New products only, no reprints", "Banner projects offer a limited freebie"], verdict: "Suits a zine you will run and fulfill on BackerKit", highlight: true },
          { name: "Your own date", points: ["Any month that suits your schedule", "No shared event promotion", "Fits core books and large supplements", "Your own audience carries the first day"], verdict: "Suits bigger books and returning creators" },
        ],
        source: "Kickstarter Zine Quest 2026 page; BackerKit Zinetopia 2027 page",
      },
      source: 3,
    },
    {
      id: "digital-delivery",
      title: "Plan PDF delivery before you set reward tiers",
      paragraphs: [
        "Most RPG campaigns sell a PDF, a print book or both, so digital delivery shapes your rewards. We decide how backers will get their files before we design a single reward tier graphic.",
        "BackerKit and DriveThruRPG now connect directly. Since June 2026, projects on BackerKit's crowdfunding platform can offer instant access rewards, where a backer clicks through to their DriveThruRPG library straight after pledging. BackerKit's pledge manager can also send digital rewards into backers' DriveThruRPG libraries after a campaign, which matters if you run your Kickstarter pledge manager on BackerKit. Our [pledge manager comparison](/guides/pledge-managers-compared) sets BackerKit beside the other options.",
        "The setup has a few requirements you should sort out early. You need a DriveThruRPG publisher account and an application key with distribution switched on, and each title is linked by its DriveThruRPG product ID. Files are not sent automatically, so someone has to start the distribution and send the notification email. Backers without a DriveThruRPG account get one created from the email on their order.",
        "If you plan to use another tool, write down who sends the files, when, and what a backer sees. Then put that same wording in your rewards and FAQ, so a PDF reward reads as a clear promise.",
      ],
      source: 5,
    },
    {
      id: "audience",
      title: "Where RPG players find new games before launch",
      paragraphs: [
        "TTRPG marketing works best when people can read or play part of the game before they are asked to pledge. Roleplayers buy on tone, system and how a session feels, so a sample does more selling than any trailer.",
        "Kickstarter reports that 32% of prelaunch followers pledge on average once a campaign goes live, compared with 17% of people who follow after launch. That's why every channel below should point to your prelaunch page or your own email signup, and our guide to [Kickstarter followers before launch](/guides/kickstarter-followers-before-launch) shows how many you need. We usually build the plan from these channels, in roughly this order of warmth.",
      ],
      list: [
        "Your mailing list, past backers and anyone who bought your earlier work",
        "A free quickstart, one shot or sample spread on DriveThruRPG or itch.io with a link to the prelaunch page",
        "Discord servers and Reddit communities for your system, following each community's rules on self promotion",
        "Actual play hosts, podcasters and reviewers whose audience plays games like yours",
        "Convention demos and local game store sessions, with a signup sheet or QR code",
        "Cross promotion with other RPG creators launching around the same time",
        "Small paid ad tests to the prelaunch page once the sample shows what the game is",
      ],
      source: 6,
    },
    {
      id: "page",
      title: "What the campaign page needs for an RPG",
      paragraphs: [
        "A roleplaying game page has to answer questions a board game page doesn't. Backers want to know what system it uses, what other books they need and what a session looks like at the table.",
        "Our guide to [designing a TTRPG Kickstarter campaign page](/guides/ttrpg-kickstarter-campaign-page-design) covers this in depth. In short, we introduce the play experience before the lore, show readable sample pages, and separate PDF, print and bundle rewards so each tier says exactly what arrives. The checklist below is the version we run before every RPG launch.",
      ],
      visual: {
        kind: "checklist",
        title: "An RPG page is ready when a stranger can tell what they would play",
        groups: [
          { name: "Explain the game", items: ["What players do in a session", "System and any required books", "Tone, setting and player count", "Standalone, adventure or supplement"] },
          { name: "Show the book", items: ["Readable sample spreads", "A character sheet or usable table", "Links to a free sample or quickstart", "Draft layouts clearly labeled"] },
          { name: "Rewards and delivery", items: ["PDF, print and bundle tiers kept separate", "Format, page count and binding confirmed", "How and when PDFs are delivered", "Shipping regions and when shipping is charged"] },
          { name: "Launch readiness", items: ["Tabletop roleplaying subcategory selected", "Prelaunch page shared and growing", "Email list ready for launch day", "Preview checked on a phone"] },
        ],
      },
    },
    {
      id: "timeline",
      title: "A launch timeline for a first RPG Kickstarter",
      paragraphs: [
        "A first RPG launch needs more lead time than most creators expect, mostly because audience building is slow. Kickstarter recommends sharing the prelaunch page at least one week before launch. First time creators only get that page after project approval. So in our planning, the email list starts 3 months or more before launch, review comes early enough for the prelaunch page to open 6 to 12 weeks out, and nobody submits later than two weeks before the date.",
        "The schedule below is an example for a first launch. A returning creator with a mailing list can compress it, and a large core book usually needs longer. If you are aiming for Zinetopia, add the application deadline of January 4, 2027, to the top.",
      ],
      visual: {
        kind: "timeline",
        title: "Most of a first RPG launch happens before the campaign opens",
        events: [
          { when: "4 months out", label: "Choose format, platform and event", detail: "Confirm system license terms and your funding goal." },
          { when: "3 months or more out", label: "Start the email list", detail: "Publish a free sample with a signup beside it." },
          { when: "12 weeks out", label: "Submit the project for review", detail: "First time creators get the prelaunch page after approval." },
          { when: "6 to 12 weeks out", label: "Open the Kickstarter prelaunch page", detail: "Start community posts and actual play outreach." },
          { when: "4 weeks out", label: "Test ads and lock rewards", detail: "Settle PDF delivery and shipping wording." },
          { when: "2 weeks out", label: "Check followers against your goal", detail: "Confirm the date or move it." },
          { when: "Launch day", label: "Email, prelaunch update and community posts", detail: "Followers also get Kickstarter's launch email.", highlight: true },
          { when: "After funding", label: "Pledge manager and PDF delivery", detail: "Send files and keep backers updated." },
        ],
        caption: "Guildframe planning example for a first RPG launch, not a platform requirement.",
        source: "Kickstarter Help Center for prelaunch timing; schedule is a Guildframe example",
      },
      source: 7,
    },
    {
      id: "help",
      title: "Where Guildframe fits in your RPG launch",
      paragraphs: [
        "We design and run tabletop launches for a living, and TTRPGs are one of our core categories. Our [ScentedRealms campaign](/work/scented-realms), for example, introduced a new accessory for the RPG table. You can run a small zine launch yourself with this guide, a free sample and steady weekly posting. The catch is that writing, layout and audience building all want your evenings at once, and the audience work is the part that slips.",
        "Our [TTRPG campaign page design](/ttrpg-kickstarter-campaign-design) covers page structure, copy and section graphics built from your artwork, with sample spreads and reward tiers laid out for print and PDF. For a full launch, our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) add prelaunch, paid advertising and live campaign support. Send us your premise and a sample spread, and we'll start with a free opening mockup.",
      ],
      source: 8,
    },
  ],
  faqs: [
    {
      question: "Does Kickstarter have a TTRPG category?",
      answer: "Yes. Kickstarter added a tabletop roleplaying game subcategory on May 8, 2026, alongside STL files and audiobooks. Select it in your project settings so backers browsing RPGs can find you.",
    },
    {
      question: "When is Zine Quest 2027?",
      answer: "Kickstarter runs Zine Quest each February. When we checked on November 25, 2026, it had not posted 2027 details, so check Kickstarter's updates blog in January before you plan around it.",
    },
    {
      question: "Can I join Zinetopia with a Kickstarter campaign?",
      answer: "No. Zinetopia only runs on BackerKit, and projects must be run and fulfilled there. The 2027 event runs February 2 to 19, with applications open through January 4, 2027.",
    },
    {
      question: "How do backers get the PDF of my RPG?",
      answer: "If your pledge manager runs on BackerKit, it can send titles into backers' DriveThruRPG libraries once you start distribution. You need a DriveThruRPG publisher account and application key. Whatever tool you use, state the delivery method and timing in your rewards.",
    },
    {
      question: "How do I promote an RPG Kickstarter with no audience?",
      answer: "Start with a free sample or one shot that people can play, then point every post, demo and ad at your prelaunch page or email signup. A February zine event can also bring shared promotion to a first project.",
    },
    {
      question: "How long before launch should I start marketing a TTRPG?",
      answer: "Kickstarter recommends sharing the prelaunch page at least one week before launch, but a first RPG launch usually needs far longer. Our planning example starts the email list 3 months or more before launch and opens the Kickstarter prelaunch page 6 to 12 weeks out.",
    },
  ],
};
