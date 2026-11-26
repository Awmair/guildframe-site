import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "order": {
      paragraphs: [
        "Backers read a product page on a phone, from the top, so the order matters as much as the content. This is the order we use for product pages, with the job each section does.",
        "The page is one step in a longer plan. Our guide on [how to launch a product on Kickstarter](/guides/how-to-launch-a-product-on-kickstarter) covers the steps before and after it.",
      ],
      takeaway: "A product Kickstarter page runs from the opening through how it works, proof, specs, prototype, rewards, shipping, team and risks to the FAQ. Each section answers the next question a backer asks.",
    },
    "top": {
      paragraphs: [
        "Kickstarter advises a title that says what the project is about and a subtitle that sums up the campaign. Keep the product name in the title and the benefit in the subtitle. The main image should show the product itself, clearly, because it also appears in search and on shares.",
        "The opening section is the most important part of the page. In one screen it should show the product, say what it does in one line and give the early price or the saving.",
        "Secubix is a good example of a product that needs that one line before any feature list. It records the license plate of a car that hits your parked Vespa.",
        "A video is optional. Kickstarter says a project video is not required to launch, though projects with compelling videos tend to succeed at a much higher rate.",
        "If you make one, our [campaign video guide](/guides/kickstarter-campaign-video-planning) covers length and planning. Our [Kickstarter product photography guide](/guides/kickstarter-product-photography) covers the main image, and our [image sizes guide](/guides/kickstarter-image-sizes) covers the exports.",
      ],
      visuals: [
        {
          kind: "checklist",
          title: "The top of a product page has to work in one phone screen",
          groups: [
            {name: "Title and subtitle", items: ["Product name in the title", "The benefit in the subtitle"]},
            {name: "Main image", items: ["The product itself, shown clearly", "Readable in search and on shares"]},
            {name: "Opening section", items: ["The product on screen", "What it does, in one line", "The early price or the saving"]},
            {name: "Video", items: ["Optional to launch", "Worth planning if you can make a compelling one"]},
          ],
          source: "Kickstarter guide to your campaign page",
        },
      ],
      takeaway: "Put the product name in the Kickstarter title, the benefit in the subtitle and the product itself in the main image. The opening screen shows what it does in one line and the early price.",
    },
    "how-it-works": {
      paragraphs: [
        "Show the product being used before you list what is inside it. Three to five steps or scenes work well: unbox, set up, use, the moment it solves the problem. A backer should be able to picture owning it from the images alone.",
        "Then answer the comparison every backer is already making. Name what people use today, whether that is a competitor, a cheaper option or nothing at all, and say plainly what your product does differently.",
        "Only claim what you can show. If a feature has a test result, a measurement or a certification, put it beside the claim, and run each claim through the checks below.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three checks decide whether a feature claim stays on the product page",
          start: "You want to claim a feature on the page",
          nodes: [
            {question: "Can you back it with a photo, test result, measurement or certification?", yes: "Go on to the image check", no: "Cut the claim, because the page only claims what you can show"},
            {question: "Does the image show the working prototype rather than a photorealistic render?", yes: "Go on to the text check", no: "Replace it, because Kickstarter does not allow photorealistic renderings for product projects"},
            {question: "Is the claim written in the page text, not only inside a graphic?", yes: "Ready to place", no: "Add it to the text, so it survives compression and search engines can read it"},
          ],
          end: "Place the proof right beside the claim in the features section",
          source: "Kickstarter rules for hardware and product design projects",
        },
      ],
      takeaway: "Show your product in use in three to five scenes, then answer the obvious comparison. Every feature claim on a product Kickstarter page needs proof beside it.",
    },
    "proof": {
      paragraphs: [
        "Specs belong in text as well as graphics, so they survive compression and can be read by search engines. Give size, weight, materials, battery life or capacity, compatibility and anything a buyer would check before paying. Then list exactly what is in the box for each reward.",
        "Kickstarter requires a working prototype for hardware and product design projects and does not allow photorealistic renderings. It also asks how you will produce the product and whether you have made anything like it before.",
        "So this section shows the real prototype, the stage it is at and the production plan. Our [prototype rules guide](/guides/kickstarter-prototype-rules) and [prototype and risks guide](/guides/kickstarter-prototype-risks-disclosure) cover how to label each image honestly. Our guide to [manufacturing quotes before Kickstarter](/guides/manufacturing-quotes-before-kickstarter) covers the production stage.",
      ],
      visuals: [
        {
          kind: "compare",
          title: "The proof section shows the real product and keeps the facts in text",
          columns: [
            {name: "Show", points: ["Photos or footage of the working prototype", "A specs table in plain text", "What is in the box, per reward", "Your manufacturer stage and production plan", "Anything similar you have made before"], highlight: true},
            {name: "Avoid", points: ["Photorealistic renderings", "Specs that only appear inside graphics", "Unlabeled renders", "A production plan with no stage named"]},
          ],
          source: "Kickstarter rules for hardware and product design projects",
        },
      ],
      takeaway: "Kickstarter requires a working prototype for product projects. Show real prototype photos, a plain text specs table, what is in the box and your manufacturer stage.",
    },
    "rewards": {
      paragraphs: [
        "Most product pages need only a few rewards: a limited early price, the standard price and a bundle of two or more units. Each tier should show its contents, its price and its delivery month, so the difference between tiers is visible at a glance.",
        "Our [reward tier graphics guide](/guides/kickstarter-reward-tier-graphics) shows how to lay out the comparison. Our guide to [pricing Kickstarter rewards for a physical product](/guides/kickstarter-reward-pricing-physical-products) shows how to set each price.",
        "State where you ship and when shipping is charged, during the campaign or later in a pledge manager. Our [shipping and delivery guide](/guides/kickstarter-shipping-delivery-page) covers the wording.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four rules keep product rewards easy to choose",
          tips: [
            {label: "Keep the tiers few", text: "A limited early price, the standard price and a bundle of two or more units cover most product pages."},
            {label: "Show the same three facts per tier", text: "Contents, price and delivery month, laid out so the difference between tiers is clear at a glance."},
            {label: "Say when shipping is charged", text: "Name your shipping regions and whether shipping is paid during the campaign or later in a pledge manager."},
            {label: "Price with fees inside", text: "Kickstarter's fees come off every pledge, so build them into each tier price from the start."},
          ],
        },
      ],
      takeaway: "Most product Kickstarter pages need three rewards: early price, standard price and a bundle. Show contents, price and delivery month on each, with fees already in the price.",
    },
    "trust": {
      paragraphs: [
        "Kickstarter asks creators to show how they plan to make the project happen, the progress so far, the budget and the story behind it. The team and risks sections carry most of that.",
        "Say who you are, what you have made before and which steps are still open, such as tooling, certification or a final sample.",
        "Kickstarter's own page guide also asks creators to disclose any use of AI, for example in artwork, writing or rendering. Add that note where it applies, then finish with an FAQ that answers the questions product backers ask.",
      ],
      visuals: [
        {
          kind: "checklist",
          title: "Team, risks and FAQ together answer whether you can deliver",
          groups: [
            {name: "Team", items: ["Who you are", "What you have made before"]},
            {name: "Risks", items: ["Open steps such as tooling, certification or a final sample", "How you will handle each one"]},
            {name: "Disclosure", items: ["Any use of AI in artwork, writing or rendering"]},
            {name: "FAQ", items: ["Compatibility", "Warranty and returns", "Delivery", "What happens if a date slips"]},
          ],
          source: "Kickstarter guide to your campaign page",
        },
      ],
      takeaway: "Use the team, risks and FAQ sections of a product Kickstarter page to show you can deliver. Name the open steps, disclose any AI use and answer warranty, returns and delivery.",
    },
    "our-page-package": {
      takeaway: "Our Creator Launch package is $2,500 for the strategy, the campaign video and a product Kickstarter page built in this order. Founder Launch at $3,500 adds branding and a website.",
    },
  },
};
