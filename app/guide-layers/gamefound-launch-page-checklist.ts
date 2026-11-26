import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "stage": {
      visuals: [
        {
          kind: "steps",
          title: "Check these seven Gamefound sections in the stage backers will see",
          caption: "Run the list again for each stage, because a finished preview stage proves nothing about crowdfunding.",
          steps: [
            {label: "Opening"},
            {label: "Gameplay or product use"},
            {label: "Contents"},
            {label: "Rewards"},
            {label: "Shipping"},
            {label: "Production"},
            {label: "Risks"},
          ],
          source: "Gamefound Help Center, project description sections",
        },
      ],
      takeaway: "Gamefound keeps a separate description for each stage, so check your launch page section list against the exact stage you are about to open.",
    },
    "copy": {
      visuals: [
        {
          kind: "tips",
          title: "Copying Gamefound sections between stages can overwrite finished work",
          tips: [
            {label: "Look before you copy", text: "Check whether the target stage already holds edits you want to keep."},
            {label: "Keep an approved copy", text: "Save the approved text and file list so you can reconcile changes."},
            {label: "Inspect the destination", text: "Check headings, media, links and publication state in the target stage."},
            {label: "Judge the target view", text: "The source view is not an accurate preview of the destination."},
          ],
          source: "Gamefound Help Center, copying section descriptions",
        },
      ],
      takeaway: "Copy Gamefound section descriptions only after checking the destination stage, then inspect the result there.",
    },
    "publish": {
      takeaway: "Gamefound sections are unpublished by default, so publish each one in the right stage and match reward names to the page graphics.",
    },
    "tester": {
      visuals: [
        {
          kind: "flow",
          title: "A Gamefound stage is ready to open when the public view matches Tester Mode",
          start: "Your stage content is written",
          nodes: [
            {question: "Are you editing the stage you plan to open?", yes: "Continue", no: "Switch stage, because each one has its own description"},
            {question: "Is copied content checked in this stage?", yes: "Continue", no: "Inspect headings, media, links and publication state"},
            {question: "Is every intended section published?", yes: "Continue", no: "Publish it, because sections start unpublished"},
            {question: "Does checkout work in Tester Mode for each backer situation?", yes: "Continue", no: "Fix rewards or settings and test again"},
            {question: "Does the public view match after you leave Tester Mode?", yes: "Continue", no: "Find what a test override was hiding and fix it"},
          ],
          end: "The creator approves the stage",
          source: "Gamefound Help Center, Tester Mode",
        },
      ],
      takeaway: "Use Gamefound Tester Mode to see stages, groups and checkout as a backer would, then confirm the real public view before you sign off.",
    },
    "adfound": {
      paragraphs: [
        "Adfound is Gamefound's own advertising service, and its fee is worked out differently from running ads in your own account. Gamefound's billing article says Adfound is free during the Upcoming phase of a dedicated campaign.",
        "During crowdfunding, late pledges or the pledge manager, it charges 5% of the revenue attributed to your ads, and catalog campaigns are charged 15%.",
        "Attribution uses Meta's 7 day click and 1 day view window. Adfound sets the final fee 7 days after the campaign ends, once that window closes, and then issues an invoice.",
        "The dashboard shows spending and fees, so track both against your launch budget. Decide before launch whether Adfound or your own [Kickstarter and Gamefound advertising](/kickstarter-advertising) plan runs each stage.",
      ],
      takeaway: "Adfound is free in the Upcoming phase, then takes 5% of attributed revenue, or 15% for catalog campaigns. Budget that fee next to your ad spend.",
    },
    "indiegogo": {
      paragraphs: [
        "Creators often ask whether the Indiegogo news changes their launch. Gamefound announced on July 24, 2025 that it would acquire Indiegogo and its community of 38 million members.",
        "The announcement said Gamefound would continue as a tabletop crowdfunding platform, that its technology would power Indiegogo's categories and that Gamefound campaigns would be featured on Indiegogo for extra exposure.",
        "For the checklist on this page, nothing changes. You still build and check the page in Gamefound's own editor, stages and Tester Mode. If you are still choosing where to launch, our [Kickstarter vs Gamefound comparison](/guides/kickstarter-vs-gamefound) puts fees, audience and tools side by side.",
      ],
      takeaway: "The Indiegogo acquisition does not change how you check a Gamefound launch page, because the editor, stages and Tester Mode work the same.",
    },
    "signoff": {
      paragraphs: [
        "Approval works best as a short written list, not a feeling that the page looks done. Review the editing restrictions for the stage you are about to enter, and settle the reward names, contents and prices before a change becomes restricted. Keep any remaining placeholder content out of the public version.",
        "Have the creator approve the finished stage, then verify the public URL after launch. A polished export of the page graphics does not prove that publication, reward settings or checkout are correct.",
        "If you want a second pair of hands on the whole launch, that is what our [Gamefound launch services for tabletop creators](/gamefound-launch-services) cover.",
      ],
      takeaway: "Settle reward names, contents and prices before Gamefound's editing restrictions apply, and verify the public URL once the stage opens.",
    },
    "working-checklist": {
      takeaway: "Run the final Gamefound launch checklist in the platform preview with the person who approves the project settings.",
    },
  },
};
