import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "what-changed": {
      paragraphs: [
        "A TTRPG launch in 2026 runs on the same basics as before, with a few platform changes worth knowing. The biggest is that roleplaying games now have their own home on Kickstarter.",
        "On May 8, 2026, Kickstarter added a tabletop roleplaying game subcategory, alongside new subcategories for STL files and audiobooks. Kickstarter says the aim is to help backers find projects that match their interests and help creators reach the right audience.",
        "Kickstarter said creators can choose it while building a campaign and after launch. So we select it for every RPG project we prepare and check it again before review.",
        "Kickstarter's own pledge manager also changed during the year. Since August 20, 2026, creators can let backers change their orders and add items themselves, and since October 28, 2026, creators can edit backer orders directly. For an RPG with print, PDF and bundle rewards, that makes post campaign changes easier to handle.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Three 2026 Kickstarter changes every RPG creator should use",
          tips: [
            {label: "TTRPG subcategory", text: "Added May 8, 2026. Select it while you build the campaign, then check it again before review."},
            {label: "Backer self serve add ons", text: "Since August 20, 2026, backers can change their orders and add items if you allow it."},
            {label: "Edit backer orders", text: "Since October 28, 2026, you can edit a backer's order directly, which helps when PDF, print and bundle choices change."},
          ],
          source: "Kickstarter release notes",
        },
      ],
      takeaway: "Select Kickstarter's tabletop roleplaying game subcategory for every TTRPG launch, and plan post campaign order changes around the 2026 pledge manager tools.",
    },
    "zine-events": {
      paragraphs: [
        "If you are launching a short adventure or a small zine, a February event can bring you an audience you don't have yet. There are two to compare, and they run on different platforms.",
        "Zine Quest is Kickstarter's annual open call for small format RPG zines, held each February. In 2026, creators launched their campaign during February and filled in a form so Kickstarter could feature it in a curated collection promoted through the month.",
        "When we checked on November 25, 2026, Kickstarter had not yet posted details for 2027, so watch its updates blog in January.",
        "Zinetopia is BackerKit's version, and it only runs on BackerKit. The 2027 event runs from February 2 to 19, 2027, and applications are open through January 4, 2027.",
        "Every Zinetopia project must launch and end inside that window, be a new product rather than a reprint, and be run and fulfilled on BackerKit. BackerKit reviews each application, and creators who join a themed banner must offer a limited freebie.",
        "Choose the event by where you want your backers to live. A first zine with no audience can gain a lot from a shared promotion. A larger core book usually does better with its own date and a longer prelaunch.",
      ],
      takeaway: "A first RPG zine can borrow an audience from Zine Quest or Zinetopia in February. A core book usually does better with its own launch date.",
    },
    "digital-delivery": {
      paragraphs: [
        "Most RPG campaigns sell a PDF, a print book or both, so digital delivery shapes your rewards. We decide how backers will get their files before we design a single reward tier graphic.",
        "BackerKit and DriveThruRPG now connect directly. Since June 2026, projects on BackerKit's crowdfunding platform can offer instant access rewards, where a backer clicks through to their DriveThruRPG library straight after pledging.",
        "BackerKit's pledge manager can also send digital rewards into backers' DriveThruRPG libraries after a campaign. That matters if you run your Kickstarter pledge manager on BackerKit, and our [pledge manager comparison](/guides/pledge-managers-compared) sets BackerKit beside the other options.",
        "The setup has a few requirements you should sort out early. You need a DriveThruRPG publisher account and an application key with distribution switched on, and each title is linked by its DriveThruRPG product ID.",
        "Files are not sent automatically, so someone has to start the distribution and send the notification email. Backers without a DriveThruRPG account get one created from the email on their order.",
        "If you plan to use another tool, write down who sends the files, when, and what a backer sees. Then put that same wording in your rewards and FAQ, so a PDF reward reads as a clear promise.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three questions settle how your RPG PDFs reach backers",
          start: "Your TTRPG rewards include PDFs",
          nodes: [
            {question: "Will you run the pledge manager on BackerKit?", yes: "Its pledge manager can send files into backers' DriveThruRPG libraries", no: "Write down who sends the files, when, and what a backer sees"},
            {question: "Do you have a DriveThruRPG publisher account and an application key with distribution switched on?", yes: "Link each title by its DriveThruRPG product ID", no: "Set up the account and key before you promise library delivery"},
            {question: "Is someone named to start the distribution and send the notification email?", yes: "Use the same delivery wording in rewards and FAQ", no: "Name that person now, because files are not sent automatically"},
          ],
          end: "PDF delivery reads as a clear promise on the campaign page",
          source: "BackerKit help center, DriveThruRPG integration in Pledge Manager",
        },
      ],
      takeaway: "Plan TTRPG PDF delivery before you design reward tiers. BackerKit can send files to DriveThruRPG libraries, but someone still has to start each distribution.",
    },
    audience: {
      paragraphs: [
        "TTRPG marketing works best when people can read or play part of the game before they are asked to pledge. Roleplayers buy on tone, system and how a session feels, so a sample does more selling than any trailer.",
        "Kickstarter reports that 32% of prelaunch followers pledge on average once a campaign goes live, compared with 17% of people who follow after launch. That's why every channel below should point to your prelaunch page or your own email signup.",
        "Our guide to [Kickstarter followers before launch](/guides/kickstarter-followers-before-launch) shows how many you need. We usually build the plan from these channels, in roughly this order of warmth.",
      ],
      visuals: [
        {
          kind: "bars",
          title: "Prelaunch followers pledge at almost twice the rate of later followers",
          unit: "%",
          bars: [
            {label: "Followed before launch", value: 32, highlight: true},
            {label: "Followed after launch", value: 17},
          ],
          caption: "Average share of followers who pledge once a campaign is live.",
          source: "Kickstarter, The Anatomy of a Great Kickstarter Prelaunch Page",
        },
      ],
      takeaway: "Give RPG players a free quickstart or sample, then send every channel to your Kickstarter prelaunch page, where followers convert best.",
    },
    page: {
      takeaway: "A TTRPG Kickstarter page explains the system, required books and a session before the lore, with PDF, print and bundle rewards kept separate.",
    },
    timeline: {
      paragraphs: [
        "A first RPG launch needs more lead time than most creators expect, mostly because audience building is slow. Kickstarter recommends sharing the prelaunch page at least one week before launch, and first time creators only get that page after project approval.",
        "So in our planning, the email list starts 3 months or more before launch. Review comes early enough for the prelaunch page to open 6 to 12 weeks out, and nobody submits later than two weeks before the date.",
        "The schedule below is an example for a first launch. A returning creator with a mailing list can compress it, and a large core book usually needs longer. If you are aiming for Zinetopia, add the application deadline of January 4, 2027, to the top.",
      ],
      takeaway: "Start the RPG email list three months or more before launch, and submit for review early so the prelaunch page can open 6 to 12 weeks out.",
    },
    help: {
      paragraphs: [
        "We design and run tabletop launches for a living, and TTRPGs are one of our core categories. Our [ScentedRealms campaign](/work/scented-realms), for example, introduced a new accessory for the RPG table.",
        "You can run a small zine launch yourself with this guide, a free sample and steady weekly posting. The catch is that writing, layout and audience building all want your evenings at once, and the audience work is the part that slips.",
        "Our [TTRPG campaign page design](/ttrpg-kickstarter-campaign-design) covers page structure, copy and section graphics built from your artwork, with sample spreads and reward tiers laid out for print and PDF.",
        "For a full launch, our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) add prelaunch, paid advertising and live campaign support. Send us your premise and a sample spread, and we'll start with a free opening mockup.",
      ],
      takeaway: "A small RPG zine is a fair first solo launch. For a core book, we handle the page, prelaunch and ads while you keep writing.",
    },
  },
};
