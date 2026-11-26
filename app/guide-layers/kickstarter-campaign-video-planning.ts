import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "jobs": {
      paragraphs: [
        "The main campaign video introduces the project, and a playthrough explains the game's decisions. A short vertical clip must make sense when someone finds it in a mobile feed. One edit may not do all three jobs well.",
        "Decide what evidence you already have before commissioning footage. A clear prototype demonstration can be more useful than cinematic shots that never show what a player does.",
      ],
      takeaway: "Plan your Kickstarter campaign video, gameplay preview and Discovery Mode clip as three jobs. Each one answers a different question for a backer.",
    },
    "video-production-options": {
      paragraphs: [
        "An edit of supplied footage, a new shoot and a sequence built from 3D assets need different inputs. Send examples of what you already have and ask the provider to identify the missing work. Agree the main video, any gameplay recording and any vertical adaptation as distinct deliverables.",
        "A box rotation may show what the product looks like, but it cannot show a turn by itself. Spend production effort on the evidence a viewer needs, then ask for a quote against that shot list.",
        "These are scope options, not price bands or a recommended production budget.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Your existing footage decides which video production work you need",
          start: "You know the job of each video",
          nodes: [
            {question: "Do you have recordings of the game being played?", yes: "Continue", no: "Book a tabletop demonstration with a playable prototype"},
            {question: "Is the audio clear and is every component readable?", yes: "Continue", no: "Plan audio repair, replacement shots or pickups"},
            {question: "Can every needed shot be filmed with real components?", yes: "Continue", no: "Scope motion or 3D scenes from artwork and dimensions"},
            {question: "Does the story still work cropped to 9:16?", yes: "Continue", no: "Plan a separate vertical clip for Discovery Mode"},
          ],
          end: "Ask for a quote to edit the footage you have",
        },
      ],
      takeaway: "List the footage you already have before asking for a video quote. The gaps, not the style, decide whether you need an edit, a shoot or motion work.",
    },
    "specifications": {
      takeaway: "A Kickstarter main video is optional and can be up to 5120 MB. The Discovery Mode clip is vertical 9:16, with 60 to 90 seconds suggested.",
    },
    "brief": {
      paragraphs: [
        "Start with what someone must understand after watching. Identify the game, show the main activity and explain what funding will allow you to produce. Give the editor accurate reward names and approved component images.",
        "Record enough context that a short clip does not misrepresent what comes with a pledge. The brief itself only needs these five things.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Each tabletop category needs different proof on screen",
          tips: [
            {label: "Card games", text: "Plan close ups that keep the cards legible."},
            {label: "RPGs", text: "Show sample pages, not only the cover."},
            {label: "Miniatures", text: "Make it clear which shots are renders and which show a printed or painted model."},
          ],
        },
      ],
      takeaway: "A short video brief with the game in one sentence, the real reward names and the shots you need keeps every edit accurate.",
    },
    "worked-video-shot-list": {
      takeaway: "Pair every line of your Kickstarter video script with a shot that proves it, and check each claim against the current rulebook.",
    },
    "watch": {
      visuals: [
        {
          kind: "tips",
          title: "A campaign video has to work muted and on a small screen",
          tips: [
            {label: "Caption everything", text: "Someone should identify the product with the sound off."},
            {label: "Mind the edges", text: "Keep important labels away from the edges of a vertical crop."},
            {label: "Split crowded shots", text: "Use close ups for a card, a miniature or a rule instead of shrinking labels."},
            {label: "A phone is enough", text: "Good light, clear sound and a tripod beat cinematic shots that hide the game."},
          ],
        },
      ],
      takeaway: "Watch the final campaign video muted and on a phone before upload. If the game is clear there, it is clear everywhere.",
    },
    "scope": {
      takeaway: "Scope the campaign video separately from the page design, but share one outline so both use the same facts.",
    },
    "video-brief-template": {
      takeaway: "Use the free video production brief to get comparable quotes, and confirm which source files and caption files you receive.",
    },
    "working-checklist": {
      takeaway: "Settle the video job, the inputs and the page review before you book any filming.",
    },
  },
};
