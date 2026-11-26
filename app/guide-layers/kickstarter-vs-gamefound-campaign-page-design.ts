import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "platform-choice": {
      paragraphs: [
        "This guide is about how the campaign page is built once you have picked a platform. If you are still deciding where to launch, read our [Kickstarter vs Gamefound comparison](/guides/kickstarter-vs-gamefound) first. Fees, audience, pledge manager tools and add ons usually matter more than the page editor.",
        "Once the platform is settled, come back here. The rest of this guide covers what changes in the story, the rewards and the checks before launch, so the page you design fits the editor you will actually use.",
      ],
      takeaway: "Choose Kickstarter or Gamefound on fees, audience, pledge manager tools and add ons first. Then design the campaign page for the editor you picked.",
    },
    common: {
      paragraphs: [
        "Most of the work is the same on both platforms. Start with one list of content: the premise, gameplay, components and production facts.",
        "Those details stay the same when the platform changes, so decide where each belongs in the chosen editor only after the list is approved.",
        "The difference is in how each platform assembles and reveals that content. The comparison below sums it up, and the sections after it explain each point. This guide covers page preparation, so it doesn't predict which platform will raise more money.",
      ],
      takeaway: "Kickstarter and Gamefound campaign pages share the same content. Approve one list of premise, gameplay, components and production facts before you build either.",
    },
    kickstarter: {
      visuals: [
        {
          kind: "compare",
          title: "Kickstarter's preview link and prelaunch page serve different readers",
          columns: [
            {name: "Preview link", points: ["Its own URL", "Shows the draft campaign", "For detailed feedback before launch"]},
            {name: "Prelaunch page", points: ["Its own public URL", "Title, subtitle, image and creator information", "Description editable on desktop, not shown in the app"], verdict: "Title and image must explain the idea alone", highlight: true},
          ],
          source: "Kickstarter Help Center, setting up a prelaunch page",
        },
      ],
      takeaway: "On Kickstarter, the prelaunch page is often the first thing people see. Make sure its title and image explain the idea without the description.",
    },
    gamefound: {
      visuals: [
        {
          kind: "steps",
          title: "Gamefound reveals page sections stage by stage",
          steps: [
            {label: "Preview", detail: "Story and reward sections, published sections only"},
            {label: "Crowdfunding", detail: "More sections become visible when this stage begins"},
            {label: "Pledge management", detail: "Further sections for backers finishing their orders"},
          ],
          caption: "Creators can add and rearrange sections. A published section shows only once its stage begins.",
          source: "Gamefound Help Center, project detailed description",
        },
      ],
      takeaway: "Plan a Gamefound campaign page in stages. Decide what belongs in preview and what belongs in the live campaign, then check visibility after upload.",
    },
    assets: {
      paragraphs: [
        "Files that look right on a design canvas can break once uploaded. That's why we export for the editor first and check the uploaded result second.",
        "The [mobile graphics guide](/guides/kickstarter-campaign-graphics-mobile-readability) covers sizes and readability.",
        "We design for either platform as part of our [Kickstarter campaign design](/campaign-design) service, with a separate [Gamefound page design](/gamefound-campaign-design) option. We confirm the platform before agreeing the files and deliverables.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four export habits that survive the upload on either platform",
          tips: [
            {label: "Keep editable sources", text: "Keep editable source files for every graphic, so a late reward change is a quick edit."},
            {label: "Follow current media guidance", text: "Export images using the platform's own current media guidance, and check it again before launch."},
            {label: "Split tall graphics", text: "Break the page into sections, because a single tall image makes every label too small on a phone."},
            {label: "Check the live page", text: "After upload, look at spacing, compression, labels and reward names on the actual page."},
          ],
        },
      ],
      takeaway: "Export campaign graphics in sections for the chosen editor, then check spacing, compression and reward names on the uploaded page.",
    },
    "stage-checks": {
      paragraphs: [
        "The last difference shows up on launch day. Kickstarter launch is manual after approval, and setting a Target Launch Date does not publish the project.",
        "Gamefound descriptions and reward visibility depend on the stage and publication settings. So a finished draft in one stage is not proof that the next public stage is complete.",
        "Use the dedicated launch guides to review the selected platform. Keep the factual reward plan consistent across either platform and adapt the layout to its actual editor, and the page will read the same wherever backers find it.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Is the page really ready to go public?",
          start: "Your campaign page draft is finished",
          nodes: [
            {question: "Are you launching on Kickstarter?", yes: "Check the prelaunch page and the preview separately", no: "On Gamefound, check every section in the stage you will promote, using Tester Mode"},
            {question: "Do the prelaunch title and image explain the idea on their own?", yes: "The app view works as well as desktop", no: "Rewrite them, because the app doesn't show the description"},
            {question: "Has Kickstarter approved the project?", yes: "You can launch whenever you are ready", no: "Wait for approval, since a Target Launch Date does not publish the project"},
          ],
          end: "Press launch yourself",
          source: "Kickstarter Help Center and Gamefound Tester Mode guide",
        },
      ],
      takeaway: "Kickstarter never launches on its own after approval, and Gamefound shows sections by stage. Check the public stage you will promote, not just the draft.",
    },
    "working-checklist": {
      takeaway: "One approved reward sheet keeps the Kickstarter and Gamefound versions of your page on the same facts.",
    },
  },
};
