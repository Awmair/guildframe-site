import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "formats": {
      visuals: [
        {
          kind: "flow",
          title: "Three questions name every miniatures or STL reward correctly",
          start: "You are setting up a miniatures reward",
          nodes: [
            {question: "Does the reward ship physical models?", yes: "Continue", no: "Call it a digital STL pack, and remember a digital main tier cannot take shippable add ons"},
            {question: "Does it also include file access?", yes: "Continue", no: "Call it a physical set and say files are not included"},
            {question: "Are the physical and digital contents listed separately?", yes: "Continue", no: "Split the contents list before the reward graphic is made"},
          ],
          end: "Call it a mixed bundle and show both halves",
          source: "Kickstarter Help Center, adding rewards",
        },
      ],
      takeaway: "Put the format in every miniatures Kickstarter reward name, such as physical terrain set or digital STL pack. Mostly file projects should check the STL subcategory.",
    },
    "visuals": {
      visuals: [
        {
          kind: "compare",
          title: "Renders, test prints and painted examples each support a different claim",
          columns: [
            {name: "Render", points: ["Shows the shape of the sculpt", "Label it as a render"], verdict: "Good for shape"},
            {name: "Test print", points: ["Shows a real physical example", "Label the print as a test"], verdict: "Good for a real example", highlight: true},
            {name: "Painted example", points: ["Shows detail in close up", "Say if the reward arrives painted or unpainted"], verdict: "Good for detail, not the reward state"},
          ],
        },
      ],
      takeaway: "Label every miniature image as a render, test print or painted example, and say what state the reward arrives in.",
    },
    "scale": {
      visuals: [
        {
          kind: "tips",
          title: "Scale and compatibility claims need approved numbers and careful wording",
          tips: [
            {label: "Approved measurements", text: "Use measurements you have approved, and say whether they include the base."},
            {label: "A scale reference", text: "Show one next to the model where it helps a backer judge size."},
            {label: "Terrain needs three facts", text: "Show footprint, height and the connection system, not only a scenic photo."},
            {label: "Style is not a license", text: "A model that fits another setting's look is not licensed for it, so name only approved systems."},
          ],
        },
      ],
      takeaway: "Give miniatures and terrain backers approved dimensions, a scale reference and only the compatibility claims you can stand behind.",
    },
    "files": {
      takeaway: "Tell STL backers the formats, versions, delivery method and license terms, and state exactly which print setup you tested.",
    },
    "rewards": {
      takeaway: "Keep digital delivery and physical shipping separate in the reward graphics, the story and the native Kickstarter reward fields.",
    },
    "working-checklist": {
      takeaway: "Every miniatures backer should know whether a reward arrives in a box, as a download or both before they pledge.",
    },
  },
};
