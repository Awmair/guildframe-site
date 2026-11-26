import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "scope": {
      takeaway: "Board game Kickstarter campaign design quotes are only comparable when every designer prices the same list of sections, reward graphics and review rounds.",
    },
    "worked-design-brief": {
      paragraphs: [
        "Suppose a fictional game, Harbour Council, has a core box, a deluxe edition and one optional card pack. The creator already has final illustrations and a draft rulebook.",
        "The example below shows how to describe the design job. It is a sample brief, not Guildframe's standard file count or an extra package.",
        "Count the reward choices as well as the page sections. If the deluxe edition replaces wooden pieces with metal ones, the comparison must show that substitution clearly. Adding a second language later can create another set of copy, image labels and approval checks even if the layout stays the same.",
      ],
      takeaway: "Turn your page outline into a deliverables list with inputs and acceptance checks, and count editions, add ons and languages as separate work.",
    },
    "price": {
      paragraphs: [
        "A design fee and a launch budget are different numbers, so keep them apart from the start. Our Launch Ready package is $2,500. It covers the launch strategy, page structure, campaign copy, section graphics, reward setup and the campaign video, all made from your supplied artwork, images and videos, and we agree the file list, review process and schedule before starting.",
        "Brand to Launch is $3,500 and adds branding and a professional website. Either way, ad spend, ad management, prelaunch email campaigns, live campaign management, platform fees and any outside production are quoted or budgeted on their own lines.",
        "Other designers' prices depend on their scope, so one published fee is not an industry average. Separate lines are the honest way to compare our quote with anyone else's.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three questions show which campaign design package fits your board game",
          start: "You are pricing campaign design for a board game",
          nodes: [
            {question: "Can you show the main product clearly in final art or photos?", yes: "Continue", no: "Request the free opening mockup to see what is missing"},
            {question: "Are your rules and rewards settled?", yes: "Continue", no: "Settle them first, because changes after layout become new scope"},
            {question: "Do you already have a logo and a website?", yes: "Continue", no: "Brand to Launch adds both, at $3,500"},
          ],
          end: "Launch Ready fits, at $2,500",
          source: "Guildframe campaign design scope and price",
        },
      ],
      takeaway: "Our Launch Ready package is $2,500 and Brand to Launch is $3,500. Ad spend, ad management, prelaunch emails, live campaign management, platform fees and production are always separate lines.",
    },
    "assets": {
      takeaway: "Final art and confirmed rewards make a smaller design job than prototype photos and unfinished rules, so tell the designer exactly what is ready.",
    },
    "design-cost-drivers": {
      visuals: [
        {
          kind: "tips",
          title: "Campaign design workload grows with new material, repeated versions and changed scope",
          tips: [
            {label: "Supplied or produced", text: "A usable component spread costs less than photographing, cutting out and arranging every item."},
            {label: "Adapted or written", text: "Adapting approved copy is a smaller job than writing it while the rules still change."},
            {label: "Correction or new scope", text: "A typo fix in approved copy is not the same request as a new reward structure after layout."},
            {label: "One feedback owner", text: "Agree the review rounds and who collects feedback before work starts."},
            {label: "Extra work in writing", text: "Ask how extra work is quoted, and approve it before it begins."},
          ],
        },
      ],
      takeaway: "Ask any designer which decisions would change the quote, and agree review rounds and a single feedback owner up front.",
    },
    "booking": {
      visuals: [
        {
          kind: "steps",
          title: "Booking campaign design with us starts with four facts and ends with a written scope",
          steps: [
            {label: "Send the basics", detail: "Game summary, artwork link, platform and planned launch date"},
            {label: "Pick a starting point", detail: "A free opening mockup or a package enquiry"},
            {label: "Get it in writing", detail: "Deliverables, fees and review dates"},
            {label: "Then commit", detail: "Only once the written scope matches your brief"},
          ],
          source: "Guildframe campaign design scope and price",
        },
      ],
      takeaway: "Book board game campaign design against a written brief that lists sections, files, review rounds and timing.",
    },
    "scope-sheet": {
      takeaway: "Ask every provider for creative, prelaunch, ad management and media spend on separate lines, because a design fee is never a complete marketing budget.",
    },
    "design-scope-template": {
      takeaway: "Share the same completed scope template with every designer, so each campaign design quote prices the same job.",
    },
  },
};
