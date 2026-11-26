import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-26",
  updated: "2026-11-26",
  slug: "kickstarter-product-photography",
  title: "Kickstarter Product Photography: Shot List, Renders and GIFs",
  seoTitle: "Kickstarter Product Photography: Shot List and Brief",
  description: "Kickstarter product photography made simple: photos versus renders, a full shot list, lifestyle and studio shots, GIFs and what to brief a photographer.",
  tag: "Products",
  answer: "Kickstarter product photography should prove the product is real and show how it works: a clean main image, studio shots of every angle and detail, lifestyle shots in use and short GIFs of key features. Hardware and product design projects cannot use photorealistic renders, so plan the shoot around the real prototype.",
  relatedSlugs: ["kickstarter-prototype-rules", "kickstarter-image-sizes", "how-to-design-a-kickstarter-page", "tech-gadget-kickstarter-launch-guide", "how-to-launch-a-product-on-kickstarter"],
  servicePath: "/campaign-design",
  serviceLabel: "Kickstarter campaign page design",
  sources: [
    { label: "How to Launch a Product on Kickstarter, Part 2: How to Tell Your Product Story", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-launch-a-product-on-kickstarter-part-2-how-to-tell-your-product-story/" },
    { label: "What are the rules for hardware and product design projects?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects" },
    { label: "Can I use AI generated content in my project?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236759-can-i-use-ai-generated-content-in-my-project" },
    { label: "How to Use Images to Effectively Communicate Your Project's Rewards (March 24, 2023)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-use-images-to-effectively-communicate-your-projects-rewards" },
    { label: "How to Launch a Product on Kickstarter, Part 1: Creating Your Prototype and Manufacturing Plan", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-launch-a-product-on-kickstarter-part-1-creating-your-prototype-and-manufacturing-plan/" },
  ],
  sections: [
    {
      id: "what-photos-prove",
      title: "What Kickstarter product photography has to prove",
      paragraphs: [
        "Kickstarter product photography has two jobs: prove the product is real and show how it works. Kickstarter's product story guide asks for a main image that is clear, simple and works as a thumbnail, without overlays, logos, text or graphics.",
        "The same guide asks you to show how the product works with photos or a second video, and notes that a natural setting helps backers picture it in their own lives.",
      ],
      source: 0,
      visual: {
        kind: "stats",
        title: "Four kinds of image do most of the work on a product page",
        stats: [
          { value: "Main", label: "The project image", note: "Clean product, works as a thumbnail" },
          { value: "Studio", label: "Every angle and detail", note: "What exactly backers receive" },
          { value: "Lifestyle", label: "In use, in context", note: "Helps backers picture owning it" },
          { value: "Motion", label: "GIFs and short clips", note: "Proves each feature works" },
        ],
      },
      takeaway: "Good Kickstarter product photography proves the product is real and shows it working. Plan every shot around one of those two jobs.",
    },
    {
      id: "photos-vs-renders",
      title: "Photos versus renders: what Kickstarter allows",
      paragraphs: [
        "Hardware and product design projects on Kickstarter must show working prototypes and may not use photorealistic renderings. Design and Technology projects also need a video of a real prototype, and AI renderings cannot stand in for it.",
        "So for a product, photos of the real prototype carry the page, and any illustration has to look clearly illustrated. Our [Kickstarter prototype rules guide](/guides/kickstarter-prototype-rules) covers the rules in full.",
      ],
      source: 1,
      visual: {
        kind: "flow",
        title: "Can this image go on your product page?",
        start: "You have a product image to place",
        nodes: [
          { question: "Is it a photo or video of the real prototype or sample?", yes: "Keep checking", no: "On a hardware or product design page, swap a photorealistic render for a photo" },
          { question: "Does it match what backers will receive?", yes: "Keep checking", no: "Label it as a prototype and say what will change" },
          { question: "Is it free of generative AI edits?", yes: "Keep checking", no: "Disclose it, and never use AI to show the product itself" },
          { question: "Does it read clearly on a phone at story width?", yes: "Place it", no: "Crop tighter or split it into two images" },
        ],
        end: "Ready for the page",
        caption: "Our check, based on Kickstarter's hardware rules and AI content article.",
      },
      takeaway: "For a product page, real photos beat renders every time, and on hardware projects photorealistic renders are not allowed. Label each prototype photo with its stage.",
    },
    {
      id: "shot-list",
      title: "The Kickstarter product photography shot list",
      paragraphs: [
        "A shot list stops the shoot from ending with forty near identical hero images and no photo of the charging port. We write it from the page outline, so every section already has its image.",
        "Here is the list we start from for a physical product. Cut what does not apply and add a shot for each feature your page claims.",
      ],
      visual: {
        kind: "checklist",
        title: "Shoot these before anything artistic",
        groups: [
          { name: "Studio", items: ["Front, back, sides and top on a plain background", "Close ups of buttons, ports, seams and materials", "Scale shot in a hand or beside a familiar object", "Everything in the box, laid out flat", "Each color or finish side by side"] },
          { name: "Lifestyle", items: ["The product in use by a real person", "Where it lives: desk, bag, kitchen, bike", "Before and after, if it solves a visible problem"] },
          { name: "Proof", items: ["The prototype on the workbench", "Work in progress sketches and earlier versions", "Testing, such as a drop or water test, if you claim it"] },
          { name: "Motion", items: ["Three to five second loop for each key feature", "Unboxing in one take", "Main function in one continuous clip"] },
        ],
      },
      table: {
        headers: ["Shot", "Where it goes on the page", "Why it matters"],
        rows: [
          ["Clean front view", "Project image and opening section", "First impression and thumbnail"],
          ["Scale in hand", "Specifications section", "Stops size surprises at delivery"],
          ["Everything in the box", "Reward tiers", "Shows exactly what each pledge gets"],
          ["Feature close ups and GIFs", "Feature sections", "One proof per claim"],
          ["Prototype on the bench", "Production and risks section", "Shows real progress"],
        ],
      },
      takeaway: "Write the Kickstarter product photography shot list from your page outline. Every feature you claim needs its own photo or GIF.",
    },
    {
      id: "lifestyle-vs-studio",
      title: "Lifestyle versus studio shots",
      paragraphs: [
        "Studio shots answer what it is, and lifestyle shots answer whether it fits your life. A product page needs both, in roughly that order.",
        "We place studio shots where backers make decisions, such as specs and reward tiers. Lifestyle shots go in the opening and between sections, where they keep people scrolling.",
      ],
      source: 0,
      visual: {
        kind: "compare",
        title: "Studio shots inform, lifestyle shots persuade",
        columns: [
          { name: "Studio", points: ["Plain background, even light", "Every angle and detail", "Easy to cut out for graphics"], verdict: "For specs, rewards and comparisons", highlight: true },
          { name: "Lifestyle", points: ["Real setting and a real person", "Shows scale and use", "Sets the mood of the brand"], verdict: "For the opening and story breaks" },
        ],
      },
      takeaway: "Use studio shots where backers decide and lifestyle shots where they need a reason to keep reading. A product page with only one kind feels either cold or vague.",
    },
    {
      id: "gifs",
      title: "GIFs and short loops that show the product working",
      paragraphs: [
        "Kickstarter's product story guide says photos, sketches and animated GIFs offer different angles on a project. For a product, a GIF is the fastest proof that a feature works.",
        "Keep each loop to one action and film it on a tripod, so the product stays still while the feature moves. Kickstarter accepts GIFs, and our [image size cheat sheet](/guides/kickstarter-image-sizes) has the export limits.",
      ],
      source: 0,
      visual: {
        kind: "tips",
        title: "Five habits for GIFs that load and convince",
        tips: [
          { label: "One action per loop", text: "A button press, a fold, a light turning on. Two actions in one GIF read as noise." },
          { label: "Lock the camera", text: "Film on a tripod so only the product moves. Shaky loops look like renders." },
          { label: "Three to five seconds", text: "Long enough to see the result, short enough to load quickly on a phone." },
          { label: "Loop cleanly", text: "End where you started, so the loop does not jump." },
          { label: "Caption beside it", text: "Put the feature name in the text next to the GIF, not burned into the frame." },
        ],
      },
      takeaway: "A short, steady GIF of one feature working is the strongest proof on a product page. Plan one for every claim that involves movement.",
    },
    {
      id: "brief-photographer",
      title: "What to brief a product photographer",
      paragraphs: [
        "A good brief saves a second shoot day. We send photographers a one page brief with the shot list, the page outline and the stage of every unit they will handle.",
        "These are the items the brief should cover, so the photographer arrives with the right lenses, backgrounds and props:",
      ],
      list: [
        "The shot list, marked with the page section each shot serves",
        "Which units are working prototypes and which are looks like models",
        "Backgrounds and colors that match your brand and page design",
        "Who appears in lifestyle shots, with model releases signed",
        "File delivery: raw files, edited JPGs and the crops you need",
        "Which close ups must stay unedited, so they honestly show the material",
      ],
      visual: {
        kind: "steps",
        title: "From brief to page in five steps",
        steps: [
          { label: "Outline the page", detail: "Each section names the image it needs" },
          { label: "Write the shot list", detail: "Studio, lifestyle, proof and motion" },
          { label: "Prepare the units", detail: "Clean, charged and labeled by stage" },
          { label: "Shoot and review on set", detail: "Check each shot against the list before you pack up" },
          { label: "Edit and export", detail: "Crops for the project image, story and rewards" },
        ],
      },
      takeaway: "Brief your photographer from the page outline, not from a mood board. A shot list tied to sections is the cheapest way to avoid a second shoot.",
    },
    {
      id: "brief-3d-artist",
      title: "What to brief a 3D artist, and where renders still help",
      paragraphs: [
        "On a hardware or product design page, photorealistic renders are out, but illustration still has a place. Exploded diagrams, cutaway line art and clearly drawn reward graphics explain things a photo cannot.",
        "Brief a 3D or graphic artist with the CAD files, the style you want and a clear instruction that nothing should pass for a photo. In other categories, renders are common, and we still label them so backers know what is real.",
      ],
      source: 1,
      list: [
        "CAD or STEP files of the current design, with the revision noted",
        "The style: line art, flat color or clearly stylized shading",
        "Which views you need, such as exploded, cutaway or dimensions",
        "Where each graphic sits on the page and at what width",
        "A reminder that nothing should look like a photograph of the product",
      ],
      takeaway: "Use a 3D artist for diagrams and graphics that explain, never for lifelike images that pretend. Real photos show the product; illustrations explain it.",
    },
    {
      id: "export-and-reward-images",
      title: "Reward images, labels and export",
      paragraphs: [
        "Kickstarter lets you add an image to each reward tier, and its reward image guide asks for the items in each tier to be spelled out clearly. It also asks for consistent styling between story images and reward images.",
        "We build reward images from the studio shots, so each tier shows exactly what is in the box. Sizes for every slot are in our [Kickstarter image sizes guide](/guides/kickstarter-image-sizes), so we do not repeat them here.",
      ],
      source: 3,
      takeaway: "Build reward images from your studio shots and keep the style consistent across the page. Check the sizes once, then export every crop in one pass.",
    },
    {
      id: "how-we-help",
      title: "How we turn your product photos into a page",
      paragraphs: [
        "Our Creator Launch package builds your Kickstarter page and campaign video from your product images and videos, on the platform and ready for you to submit, for $2,500. We send you the shot list first, so the photos you commission fit the page we design.",
        "Our [Kickstarter campaign page design](/campaign-design) service covers that work. To talk through your product first, share your project through the [enquiry form](/buy) or book a 30 minute call.",
      ],
      takeaway: "Shoot to a shot list built from the page, and the page almost designs itself.",
    },
  ],
  faqs: [
    { question: "Can I use renders instead of photos on Kickstarter?", answer: "Not photorealistic renders on hardware and product design projects. Kickstarter requires a working prototype and photos of the real thing, so plan your shoot around the prototype and use illustration only where it clearly looks illustrated." },
    { question: "What product photos does a Kickstarter page need?", answer: "A clean main image, studio shots of every angle and detail, a scale shot, everything in the box, lifestyle shots in use, proof shots of the prototype and short GIFs of each key feature." },
    { question: "Should I hire a photographer or shoot product photos myself?", answer: "You can shoot studio basics yourself with a plain background, steady light and a tripod. Lifestyle shots and close ups of materials usually look better from a professional with the right lenses and lighting." },
    { question: "How many photos does a Kickstarter product page need?", answer: "Enough for one image per page section and one proof per feature claim. Write the shot list from your page outline and the number follows from that." },
    { question: "Can I use GIFs on Kickstarter?", answer: "Yes. Kickstarter accepts GIFs, and its product story guide mentions animated GIFs as a way to show different angles of a project. Keep each loop to one action and check the export limits in our image sizes guide." },
    { question: "Can I use AI to edit my product photos?", answer: "Kickstarter allows generative AI if you disclose it, but AI renderings cannot stand in for a real prototype. We keep AI out of anything that shows the product itself." },
  ],
};
