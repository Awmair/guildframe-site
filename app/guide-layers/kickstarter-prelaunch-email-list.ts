import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    signup: {
      paragraphs: [
        "Explain the game in a few lines and show a product image or a readable sample. Say what people will receive: gameplay previews, progress notes and the launch announcement. Keep the form short enough to use on a phone.",
        "Match the signup promise to material you can actually provide. The cards below show what that looks like for three kinds of tabletop project, plus the two rules for your email tool.",
        "If you are building the list from nothing, start with playtesters and anyone who asked about the game at a game night. Send them all to this one signup page with a reason to join, like a sample round or a print and play file.",
        "Our guide on [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers) covers where the next people come from, one source at a time.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Match the signup promise to what you can actually send",
          tips: [
            {label: "Card game", text: "Show a few cards and a sample round."},
            {label: "RPG", text: "Offer a sample spread or a short playable scene."},
            {label: "Miniatures", text: "Show scale and exactly which physical products or files are planned."},
            {label: "Any mainstream email tool", text: "It needs to run a signup form, send the welcome email automatically and export your contacts. The list matters more than the software."},
            {label: "Your name on the account", text: "Keep the email account in your name, so the list stays yours after the campaign."},
          ],
        },
      ],
      takeaway: "A Kickstarter prelaunch email list grows when the signup page says exactly what subscribers get, and you can deliver it.",
    },
    followers: {
      takeaway: "Kickstarter followers and your prelaunch email list are separate audiences, and a follow never adds anyone to your list.",
    },
    "audience-target-scenarios": {
      paragraphs: [
        "There is no list count that guarantees funding. Start with how many backers you want this channel to contribute, then test several assumptions.",
        "In this hypothetical example, a creator wants 200 backers in total and plans for 80 of them to come from the email audience. The other 120 still need a separate plan.",
        "The calculation is required reachable subscribers = desired email backers divided by the assumed subscriber to backer rate. The rates below are invented sensitivity inputs, not industry benchmarks or predictions.",
        "Count each eligible address once and exclude unsubscribed and undeliverable contacts. Replace the assumptions with evidence from your own audience when you have it.",
      ],
      takeaway: "Size your Kickstarter email list from the backers you need it to bring, divided by a pledge rate you test, never from a benchmark.",
    },
    "audience-overlap": {
      visuals: [
        {
          kind: "flow",
          title: "Check whether your email list can carry its share of backers",
          start: "Your current list count",
          nodes: [
            {question: "Have you counted each eligible address once?", yes: "Remove unsubscribed and undeliverable contacts", no: "Remove duplicates before you forecast anything"},
            {question: "Did you keep Kickstarter followers out of that number?", yes: "Use the email count on its own", no: "Move followers into a separate column"},
            {question: "Does that count times your tested rate cover the backers you want from email?", yes: "This channel can carry its share", no: "Grow the list or plan more backers from other channels"},
            {question: "Do the remaining backers have their own plan?", yes: "The audience plan is complete for this scenario", no: "Plan where the other backers come from"},
          ],
          end: "Recheck the scenario with your own audience data",
          caption: "Uses the calculation from the scenarios above. The rates are yours to test, not benchmarks.",
        },
      ],
      takeaway: "Keep subscribers and followers in separate columns. In the example, 1,000 subscribers and 600 followers are not 1,600 different people.",
    },
    sequence: {
      paragraphs: [
        "The example below is a draft structure, not a prescribed sending frequency. Use your real game name, sample material and confirmed offer. Send each message when its contents are ready, and avoid announcing reward details that are still changing.",
        "A short welcome message thanks the reader and delivers the sample round you promised. It says they will hear about the campaign and launch date, and it points to the unsubscribe link. Make sure the actual signup promise matches that description.",
      ],
      takeaway: "Send each prelaunch email when its contents are ready, and never announce reward details that are still changing.",
    },
    "sample-welcome-email": {
      paragraphs: [
        "This is an illustrative draft for the fictional Harbour Council game. It assumes the signup form promised a sample round plus development notes and the launch announcement. Replace the game details and sample link before using it.",
        "Subject: Your first decision in Harbour Council",
        "Thanks for asking for a look at Harbour Council. It is a strategy game for two to four players about running rival harbours.",
        "Each turn, you claim cargo from a shared market to store or use for a shipping contract. Taking the last timber crate can finish your contract while leaving another harbour short.",
        "Read the two page sample round: [link to the promised sample]. It shows the starting board, both choices and what happens next.",
        "I will send development notes and the Kickstarter launch announcement to this address. You can reply with a question about the game or leave using the unsubscribe link below. [Creator name and studio contact details]",
        "The final email needs your real sender details, working sample and unsubscribe links. Keep those service links, even when the sample is the main action. A clear welcome message delivers the signup promise before asking the reader to back anything.",
      ],
      takeaway: "A good welcome email delivers the promised sample and shows one real game decision before it asks for anything.",
    },
    test: {
      takeaway: "Test the prelaunch signup with an address you control, on desktop and mobile, before you promote it.",
    },
    engagement: {
      takeaway: "Judge the list by clicks to game material and replies, not opens, which email software and privacy features distort.",
    },
    handoff: {
      visuals: [
        {
          kind: "checklist",
          title: "Who owns what on the prelaunch email list",
          groups: [
            {name: "The creator owns", items: ["The landing page", "The contact list", "The email account"]},
            {name: "Agree in writing", items: ["Who drafts messages", "Who confirms product facts", "Who presses send"]},
            {name: "Store with the launch brief", items: ["The approved sequence", "Reporting definitions"]},
          ],
        },
      ],
      takeaway: "Keep the list, the landing page and the email account in the creator's name, so the audience stays yours after the campaign.",
    },
    "signup-route": {
      takeaway: "A thank you message on the page is not proof. Confirm each step of the signup route with a real address.",
    },
    "email-planning-template": {
      takeaway: "Download the worksheet, replace the fictional details with your own game and name who checks, sends and reviews.",
    },
  },
};
