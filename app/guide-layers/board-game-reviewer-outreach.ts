import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    fit: {
      paragraphs: [
        "A long subscriber list is less useful if the channel rarely covers your kind of game. Look at several recent videos or articles. Check player count, complexity, session length and whether the reviewer covers prototypes, finished games or both.",
        "Build a shortlist with one sentence explaining the fit for each person. A quick party game, a campaign miniature game and a solo RPG need different introductions.",
        "Read the reviewer's submission policy before sending a generic pitch, because some do not accept unsolicited prototypes or paid previews.",
        "Reviews are not required to launch, but for a new creator an outside voice is the cheapest trust you can add. A backer who has never heard of you gets to see someone else play the game.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Pitch a board game reviewer only when the fit and the terms are clear",
          start: "A reviewer on your longlist",
          nodes: [
            {question: "Do their recent videos or articles cover games like yours?", yes: "Check player count, complexity and session length", no: "Leave them off, because a big audience for other games rarely helps"},
            {question: "Do they cover prototypes, not only finished games?", yes: "Read their submission policy", no: "Skip them for the prelaunch preview"},
            {question: "Does their policy accept your kind of request?", yes: "Ask about lead time, fees and format", no: "Respect it, since some take no unsolicited prototypes or paid previews"},
            {question: "Can their lead time fit your launch window?", yes: "Write their one sentence fit", no: "Plan the campaign without depending on their coverage"},
          ],
          end: "Send a short, specific pitch",
        },
      ],
      takeaway: "One well matched board game reviewer preview is worth more than a long list of channels that may never reply.",
    },
    brief: {
      takeaway: "Send a tidy folder with the rules, prototype status and launch window, so a reviewer never has to guess which date or image is current.",
    },
    outreach: {
      paragraphs: [
        "Keep the first message short enough to read in one go. Ask about fees and production terms without assuming the answer.",
        "Sending a copy does not buy a positive opinion or guarantee that anything will be published. The example opening below shows the five jobs a short pitch does.",
      ],
      visuals: [
        {
          kind: "steps",
          title: "Example: a reviewer pitch in five short lines",
          steps: [
            {label: "Show you know their coverage", detail: "Hi Sam, I saw your recent coverage of short cooperative games."},
            {label: "Name the game in one line", detail: "We are preparing a two player card game about repairing a research station."},
            {label: "Make one clear request", detail: "Would you consider a prototype preview?"},
            {label: "Link the facts", detail: "The current rules, component photos and play time details are here."},
            {label: "Ask before you set a date", detail: "Our target launch is in November, but I would like to check your availability before agreeing a date."},
          ],
          caption: "The game, reviewer and date are fictional. Replace them with accurate details.",
        },
      ],
      takeaway: "A board game reviewer pitch works when it shows you know their coverage, makes one request and asks about their dates before setting yours.",
    },
    schedule: {
      paragraphs: [
        "Ask how long they need after receiving a playable copy. Then allow for shipping, customs where relevant, missing parts and questions about the rules. Agree a publication window before adding the content to your campaign schedule.",
        "For example, a reviewer might ask for four weeks with the game. If shipping may take ten days, dispatching two weeks before launch will not meet that request.",
        "That is an illustrative planning problem, not a standard turnaround time. Find a workable date or prepare the campaign without depending on that coverage.",
      ],
      takeaway: "Work back from each reviewer's own lead time plus shipping, so previews land in your launch window rather than after it.",
    },
    use: {
      paragraphs: [
        "A paid walkthrough can still help someone understand the game, but it should not be presented as an independent verdict. These four rules keep reviewer content honest on your campaign page.",
        "We can place approved previews on the campaign page and explain what each one shows, as part of the prelaunch and page work. Bring the live links, permissions and confirmed product details with the rest of the campaign assets.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four rules before reviewer content goes on your Kickstarter page",
          tips: [
            {label: "Label the arrangement", text: "Ask how the creator labels a paid preview, a supplied copy or another commercial arrangement. Make that context clear wherever you feature it."},
            {label: "Agree the excerpt", text: "Settle the permitted quote or thumbnail, the credit and the link before you use it."},
            {label: "Keep the meaning", text: "Do not turn a qualified observation into an unqualified endorsement."},
            {label: "Flag changes", text: "If the prototype has changed since filming, explain the relevant difference."},
          ],
        },
      ],
      takeaway: "Label paid previews as paid and quote reviewers only with permission, so your Kickstarter page stays trustworthy.",
    },
  },
};
