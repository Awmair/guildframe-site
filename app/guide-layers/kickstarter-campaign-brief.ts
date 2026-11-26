import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-version": {
      paragraphs: [
        "This is the list we send after every enquiry. It works for an everyday product, a tabletop game or a book, because a campaign page always needs the same raw material: what the thing is, proof that it exists, what each reward includes and when it can ship.",
        "You do not need every row finished, so send what you have and mark the gaps. A gap we know about is easy to plan around. A gap we find halfway through the design is what moves launch dates.",
        "If you are still working out the whole launch, our guide on [how to launch a Kickstarter campaign](/guides/how-to-launch-a-kickstarter-campaign) shows where the brief fits.",
      ],
      takeaway: "A Kickstarter campaign brief covers eight things: summary, files, facts, rewards, production, audience, platform and dates, and one approver. Send it with the gaps marked rather than waiting until it is perfect.",
    },
    "summary": {
      paragraphs: [
        "Write it the way you would explain the project to a friend who has never heard of it. Say what it is, who it is for and what it does that the alternatives do not.",
        "Three or four plain sentences beat a page of features, because the opening section of the campaign is built from this paragraph.",
        "Kickstarter asks creators to show what they are trying to create, how they plan to make it happen, the progress so far, the budget and the story behind it. The summary covers the first and the last of those. The rest of the brief covers the middle three.",
        "What the paragraph leads with depends on what you are making, as the comparison below shows. If you have already written a pitch for a factory, a publisher or a friend, send that too.",
      ],
      visuals: [
        {
          kind: "compare",
          title: "The summary leads with something different for a product, a game and a book",
          columns: [
            {name: "Product", points: ["The problem it solves, in one sentence", "Who it is for", "What it does that alternatives do not"], verdict: "Proof later: specs and a working prototype"},
            {name: "Game", points: ["What players do on a turn", "Who it is for", "What makes it different"], verdict: "Proof later: a sample turn and component list"},
            {name: "Book", points: ["Genre and premise", "Format", "Who it is for"], verdict: "Proof later: a sample chapter and page count"},
          ],
          caption: "The structure of the brief stays the same in every category. Only the lead and the proof change.",
        },
      ],
      takeaway: "Your one paragraph summary becomes the opening section of the Kickstarter page. Say what it is, who it is for and why it beats the alternatives.",
    },
    "files": {
      paragraphs: [
        "Put everything in one shared folder and name files by what they are and how final they are, such as front_view_final.jpg or box_render_draft.png. Include prototype photos even when they are rough, because they tell us what can be shown honestly today.",
        "For a hardware or product design project, Kickstarter requires a working prototype and does not allow photorealistic renderings. So the brief needs real photos or footage of the prototype, and any render should be labeled so we place it correctly. Our guide to [Kickstarter prototype rules](/guides/kickstarter-prototype-rules) covers the detail.",
        "Brand files help too: a logo as a vector or a large transparent file, your colors and your fonts. If none exist yet, say so.",
        "We can work from product photos alone, which is how Secubix started: product images and a short brief, with the market research and copy written from the product features. For the shots themselves, see our [Kickstarter product photography guide](/guides/kickstarter-product-photography), and for upload sizes our [Kickstarter image sizes guide](/guides/kickstarter-image-sizes).",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three checks decide whether an image goes into the brief folder as it is",
          start: "You have an image you want on the campaign page",
          nodes: [
            {question: "Is this a hardware or product design project?", yes: "Go on to the prototype check", no: "Go to the label check, and mark any render as a render"},
            {question: "Is the image a real photo or footage of the working prototype?", yes: "Go on to the label check", no: "Kickstarter does not allow photorealistic renderings here, so shoot the prototype instead"},
            {question: "Is the file named as final or draft?", yes: "Ready for the folder", no: "Rename it first, such as front_view_final.jpg"},
          ],
          end: "Add it to the shared folder for the campaign designer",
          source: "Kickstarter rules for hardware and product design projects",
        },
      ],
      takeaway: "Label every file in the brief as final, draft or render. Product and hardware projects need real photos of a working prototype, because Kickstarter does not allow photorealistic renderings.",
    },
    "rewards": {
      paragraphs: [
        "Reward lists scattered across messages are the most common reason a page needs rework. Keep one sheet with a row per reward: name, contents, price, any limit, shipping regions and the delivery month.",
        "Prices do not need to be final, but each one should have a cost behind it. Kickstarter takes a 5% platform fee and, for a US project, payment processing of 3% plus $0.20 per pledge, so a reward priced at cost loses money.",
        "Our guide to [pricing Kickstarter rewards for a physical product](/guides/kickstarter-reward-pricing-physical-products) shows how to build each price. Our [funding goal guide](/guides/kickstarter-funding-goal) shows how to build the goal from the same sheet.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four habits keep the reward sheet from causing rework",
          tips: [
            {label: "One sheet, one row per reward", text: "Name, contents, price, limit, shipping regions and delivery month all live in the same row."},
            {label: "Change it in one place", text: "When a reward changes, update the sheet and tell us, so the change reaches the page once."},
            {label: "Put a cost behind every price", text: "Draft prices are fine, as long as each one starts from what the reward costs to make and ship."},
            {label: "Leave room for fees", text: "A US project pays 5% to Kickstarter plus 3% and $0.20 per pledge, so a reward priced at cost loses money."},
          ],
          source: "Kickstarter fee page",
        },
      ],
      takeaway: "Keep every Kickstarter reward in one sheet with contents, price, limit, regions and delivery month. Price above cost, because fees come off every pledge.",
    },
    "production-audience": {
      paragraphs: [
        "Production status shapes the page more than most creators expect. The delivery date on every reward, the risks section and the way the prototype is presented all depend on whether you have a quote, a sample or only a plan.",
        "Send the supplier name if you can, the minimum order and the date a sample is due. Our guide to [manufacturing quotes before Kickstarter](/guides/manufacturing-quotes-before-kickstarter) lists what a usable quote includes.",
        "Audience numbers shape the rest. A creator with a large email list needs a page that converts people who already like the project. A creator starting from zero needs a page that explains the project to strangers arriving from ads.",
        "Both are fine starting points, and we just need the real number. Our guide on [followers before launch](/guides/kickstarter-followers-before-launch) explains why it matters for the goal.",
      ],
      takeaway: "Tell your campaign designer where production and your audience really stand. A quote, a sample or only a plan changes the delivery dates and risks section, and list size changes who the page is written for.",
    },
    "not-yet": {
      paragraphs: [
        "First time creators often wait for things a designer can handle or that come later. You do not need polished copy, a finished video, a website or a perfect logo before you send the brief. Rough notes are enough for copy, because writing the page is part of the work.",
        "Our Launch Ready package is $2,500 and covers the launch strategy, the campaign page with its copy, graphics and setup, and the campaign video, made from the product images and videos you provide.",
        "Brand to Launch is $3,500 and adds branding and a professional website. Ad spend, ad management, prelaunch email campaigns, live campaign management and platform fees are quoted separately on top of either package, and the full scope is on our [pricing page](/campaign-design#pricing).",
      ],
      visuals: [
        {
          kind: "compare",
          title: "Send the facts now, because the polish is part of the design work",
          columns: [
            {name: "Send with the brief", points: ["One paragraph summary", "Files labeled final, draft or render", "Draft reward sheet with costs", "Production status and audience numbers", "Launch window and one approver"], verdict: "These facts change the page, so we need them first", highlight: true},
            {name: "Can wait or come from us", points: ["Polished campaign copy", "A finished video", "A website", "A perfect logo"], verdict: "Rough notes are enough to start"},
          ],
        },
      ],
      takeaway: "You do not need polished copy, a video, a website or a perfect logo before sending a Kickstarter campaign brief. Send the facts and the rough notes, and the page writing follows.",
    },
    "next": {
      takeaway: "After you send the brief, we agree scope, price and dates in writing before work starts. You can ask for a free opening section first, with no obligation to book.",
    },
  },
};
