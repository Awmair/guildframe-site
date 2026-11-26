import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    work: {
      paragraphs: [
        "Make a list of the work left before launch. You might already have a strong mailing list and need a campaign designer. Or you might have finished artwork but no landing page, email flow or way to reach players.",
        "Those are different briefs, and the [board game Kickstarter marketing plan](/guides/board-game-kickstarter-marketing-plan) helps you see which ones are still open.",
        "Relevant experience should show up in the decisions, not just the portfolio's theme. Ask the questions below for your format.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Ask how the agency would handle your tabletop format",
          tips: [
            {label: "Board game", text: "How will the team explain a turn, show components and compare editions?"},
            {label: "TCG", text: "How will it present starter decks and pack contents?"},
            {label: "RPG", text: "How will it present sample pages and tell books apart from PDFs?"},
          ],
        },
      ],
      takeaway: "Hire a Kickstarter marketing agency for the jobs you still need covered, not for a generic launch package.",
    },
    "agency-or-freelancer": {
      paragraphs: [
        "A freelancer can be a good fit for a defined task when someone on your team can manage the other launch work. An agency may coordinate several stages, but ask who will actually do them. The business label does not tell you how many people are available or who covers an absence.",
        "Take a hypothetical game with approved artwork and a working email list. The gap might be campaign copy and reward graphics, and a specialist can quote that job.",
        "If the same creator also needs a signup page, email delivery, ads and daily support, the brief needs owners for those jobs and their handoffs. One person can cover several roles only if the scope and schedule allow it.",
      ],
      takeaway: "Agency or freelancer, ask who actually does the work and who covers an absence. The business label will not tell you.",
    },
    proof: {
      paragraphs: [
        "Open the real campaign link, then ask which part the agency handled, when it joined and what the creator supplied. Page design, prelaunch consulting and paid advertising are separate contributions, and a portfolio should make the role clear.",
        "If advertising results are part of the pitch, ask about dates, spend, attribution windows and whether reported revenue includes organic pledges. Kickstarter's custom referral reports show attributed pledges and amounts, not a count of link clicks. Treat an entire campaign's funding total as context, rather than an ad result.",
      ],
      takeaway: "Judge an agency by its exact role on a real campaign link, and treat a whole campaign's funding total as context rather than an ad result.",
    },
    "red-flags": {
      takeaway: "A guarantee of backers or funding, or upfront payment without a written scope, is a reason to end the conversation.",
    },
    cost: {
      paragraphs: [
        "There is no single fee that covers every tabletop launch. A useful quote lists the work, the months or campaign stages covered and how extra changes are charged.",
        "A starting price may cover one service rather than the whole campaign. Our [Kickstarter agency cost guide](/guides/kickstarter-agency-cost) compares published prices if you want real numbers to test quotes against.",
        "Most agencies charge a fixed fee, a monthly retainer or a commission on pledges. The four steps below turn any of them into one total commitment.",
        "Guildframe's own prices are fixed, at $1,800 for the campaign page package and $5,900 for full campaign support, with ad spend billed separately. Fixed fees are not right for every launch, but you do know the bill before work starts.",
      ],
      visuals: [
        {
          kind: "steps",
          title: "Four steps turn any agency quote into a total you can compare",
          steps: [
            {label: "Setup and creative fees", detail: "The fixed part of the quote"},
            {label: "Add recurring fees", detail: "Multiplied by the billed periods"},
            {label: "Add any percentage fee", detail: "Worked out on its agreed revenue base"},
            {label: "List media, software and suppliers", detail: "On separate lines, with their payment dates"},
          ],
          caption: "Check payment dates as well as the total, because some work is due before Kickstarter funds are available.",
        },
      ],
      takeaway: "Compare Kickstarter agency quotes as a total commitment over the same campaign period, with ad spend on its own line.",
    },
    "commission-base": {
      paragraphs: [
        "Two hypothetical proposals can use the same percentage and still send very different bills. The difference is the revenue base each one applies it to.",
        "Ask each provider to calculate its fee against the same low, expected and high campaign scenarios, using your own figures. Include any setup fee, minimum payment and recurring charge.",
        "Agree how cancelled pledges, refunds, shipping, tax and late pledges affect the base. For a fixed fee, check what changes would require another quote.",
      ],
      visuals: [
        {
          kind: "compare",
          title: "The same commission percentage can produce very different bills",
          columns: [
            {name: "Base: all collected pledges", points: ["Includes supporters from your existing audience", "Charges for pledges from people who never saw the provider's ad"], verdict: "A bigger base and a bigger bill"},
            {name: "Base: pledges on agreed tracking links", points: ["Only pledges credited to the provider's links", "Depends on tracking you both agree in advance"], verdict: "Ties the fee to the provider's own links", highlight: true},
          ],
          caption: "Two hypothetical proposals using the same percentage.",
        },
      ],
      takeaway: "Neither a commission nor a fixed fee makes sense until the work and payment terms are clear, starting with the revenue base in writing.",
    },
    ownership: {
      takeaway: "You own the campaign, domain, ad accounts, email software and contact records. The agency gets access, not ownership.",
    },
    diy: {
      paragraphs: [
        "Keep a job in house when someone has both the skill and time to own it. Kickstarter's hiring advice recommends comparing the service with what you and your collaborators can do yourselves.",
        "Run each open job through the decision path, then use the situations in the table to write a brief before asking for quotes.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Book help only for the launch jobs your team cannot own",
          start: "A launch job without a clear owner",
          nodes: [
            {question: "Are your rewards, costs and artwork settled?", yes: "Look at each launch job in turn", no: "Start with an asset and readiness review"},
            {question: "Does someone on your team have the skill for this job?", yes: "Check their time next", no: "Brief a specialist or studio for that job"},
            {question: "Do they also have the time to own it through launch?", yes: "Name them as the owner", no: "Book only the gap your team cannot cover"},
          ],
          end: "Keep the job in house, with a named owner",
          source: "Kickstarter, questions to ask before hiring a marketing service",
        },
      ],
      takeaway: "Book the gap your team cannot cover, and keep any job in house where someone has both the skill and the time.",
    },
    guildframe: {
      paragraphs: [
        "Send your game summary, platform, current page or project link, usable artwork and possible launch date. Tell Umair what you already have and which work needs an owner. Include a service and media budget if you have set them.",
        "Guildframe quotes prelaunch, creative, paid advertising and live support around that brief. Service fees and ad spend are separate.",
        "Campaign design can also be booked on its own, with its scope and price on the design page. You can request a free mockup of one opening section, using your artwork, before booking creative work.",
        "Everything we offer is listed on our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) page.",
      ],
      takeaway: "Send your game summary, platform, artwork and launch date, and ask for the free opening mockup before you book creative work.",
    },
    "proposal-comparison": {
      paragraphs: [
        "Ask each agency to fill the same scope sheet. A design quote and an ads management proposal may both say 'campaign support' while covering different work. Put the actual deliverables next to the fee before comparing totals.",
        "For a fixed fee, record the covered items and revision limits. For a monthly fee, multiply by the agreed number of periods.",
        "For a percentage fee, write the exact revenue base and any exclusions. Add media, software and other suppliers separately, so you get a comparable commitment without pretending there is a standard market price.",
      ],
      takeaway: "Put every agency proposal on the same scope sheet and campaign period, so you compare deliverables as well as totals.",
    },
    "proposal-template": {
      takeaway: "Give every provider the same brief and the same comparison sheet, and keep blank answers visible rather than guessing them.",
    },
  },
};
