import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    specifications: {
      paragraphs: [
        "Here is the short version of the sizes we export to, because a graphic can only read well if it survives the upload.",
        "Kickstarter limits story images to 50 MB, recommends JPEG, PNG or GIF, and suggests scaling them to 700 pixels wide or more. Reward and add on images need a 3:2 ratio and at least 348 × 232 pixels.",
        "Gamefound converts description images to WebP and recommends 840 to 1200 pixels wide, with a 20 MB cap. For every field, the cover image and the video specs in one place, use our [Kickstarter image sizes guide](/guides/kickstarter-image-sizes). The size is the easy part, so most of this guide is about readability.",
      ],
      takeaway: "Export Kickstarter story images at 700 pixels wide or more and reward images at 3:2. Size is the easy part of mobile readability.",
    },
    test: {
      takeaway: "Upload one representative section and check it on a phone before designing the rest. A backer should never pinch to choose a reward.",
    },
    simplify: {
      takeaway: "Give each campaign graphic one main job. Splitting a crowded reward graphic keeps labels large enough to read on a phone.",
    },
    media: {
      visuals: [
        {
          kind: "flow",
          title: "Three checks before an animated or detailed graphic goes live",
          start: "You have exported one story section",
          nodes: [
            {question: "Does a still frame explain the point on its own?", yes: "Motion can add to the story", no: "Redesign the frame, because some animated GIFs show as static images"},
            {question: "Did the GIF stay animated in the current Kickstarter editor?", yes: "Keep it under the 50 MB limit", no: "Convert the animation to WEBP under the 50 MB limit"},
            {question: "Do the labels still read on a phone after compression?", yes: "Export the remaining sections the same way", no: "Enlarge the labels, because a larger source file won't rescue them"},
          ],
          end: "Section ready for the campaign page",
          source: "Kickstarter Help Center, adding images and media",
        },
      ],
      takeaway: "Kickstarter compresses every uploaded image, so test labels after upload. Each animated graphic needs a still frame that explains the point alone.",
    },
    review: {
      visuals: [
        {
          kind: "tips",
          title: "How we run the fresh reader test on a campaign page",
          tips: [
            {label: "Pick a real task", text: "Ask them to find one reward, such as the base game with an expansion or the print book with its PDF."},
            {label: "Watch, don't help", text: "Note where they hesitate. Searching several graphics means the comparison is hard to find."},
            {label: "Check the rest in one pass", text: "Look at contrast, heading order, links and essential text at the same time."},
            {label: "Measure against a list", text: "Use the page checklist so the test has facts to measure against."},
          ],
        },
      ],
      takeaway: "Ask someone who has never seen your project to find a specific reward on a phone. Where they hesitate is where the page needs work.",
    },
    navigation: {
      paragraphs: [
        "Kickstarter story headings can create a table of contents, and image sections can also receive a heading label. Use names such as gameplay, rewards and shipping that help a reader find an answer.",
        "The section links work on desktop and mobile web, but Kickstarter says the feature is not supported in its app. Check the page in both contexts and keep the story understandable without that navigation.",
      ],
      visuals: [
        {
          kind: "compare",
          title: "Story table of contents links work on the web, not in the Kickstarter app",
          columns: [
            {name: "Desktop web", points: ["Section links work", "Headings act as navigation"]},
            {name: "Mobile web", points: ["Section links work", "Short heading names help most"]},
            {name: "Kickstarter app", points: ["Table of contents not supported", "The story must make sense without it"], highlight: true},
          ],
          source: "Kickstarter Help Center, adding a story table of contents",
        },
      ],
      takeaway: "Use plain story headings like gameplay, rewards and shipping. They build a table of contents on the web, and the page must still read in the app.",
    },
    help: {
      takeaway: "Readable phone graphics come from decisions made before layout. We test every uploaded section on a phone before you approve it.",
    },
    "working-checklist": {
      takeaway: "Check the uploaded section, not the file on your monitor, because Kickstarter compression changes what a backer sees.",
    },
  },
};
