import type { LaunchGuide, LaunchSection } from "./launch-guides";

type BuyerAddition = {
  after: string;
  section: LaunchSection;
  template?: boolean;
};

type BuyerRevision = {
  template: LaunchGuide["sources"][number];
  additions: BuyerAddition[];
  faqs: LaunchGuide["faqs"];
};

const buyerRevisions: Record<string, BuyerRevision> = {
  "choose-board-game-kickstarter-marketing-agency": {
    template: {
      label: "Download the agency and freelancer proposal comparison (TXT)",
      publisher: "Guildframe",
      href: "/downloads/buyer-guides/agency-proposal-comparison.txt",
    },
    additions: [
      {
        after: "work",
        section: {
          id: "agency-or-freelancer",
          title: "Compare an agency with a freelancer for the same job",
          paragraphs: [
            "A freelancer can be a good fit for a defined task when someone on your team can manage the other launch work. An agency may coordinate several stages, but ask who will actually do them. The business label does not tell you how many people are available or who covers an absence.",
            "For a hypothetical game with approved artwork and a working email list, the gap might be campaign copy and reward graphics. A specialist can quote that job. If the same creator also needs a signup page, email delivery, ads and daily campaign support, the brief needs owners for those jobs and the handoffs between them. One person can cover several roles only if the scope and schedule allow it.",
          ],
          table: {
            headers: ["Question", "Freelancer or independent studio", "Agency"],
            rows: [
              ["Who does the work?", "Name the person and any outside specialists", "Name the people assigned to your project"],
              ["Who coordinates the launch?", "Confirm whether you or the provider manages other suppliers", "Confirm which stages the account lead actually coordinates"],
              ["What happens during an absence?", "Agree cover, notice and access to unfinished files", "Ask who can take over and whether that cover is included"],
              ["What are you comparing?", "The agreed deliverables, availability and handoff", "The same deliverables, availability and handoff"],
            ],
          },
        },
      },
      {
        after: "cost",
        section: {
          id: "commission-base",
          title: "Check what a commission actually applies to",
          paragraphs: [
            "Consider two hypothetical proposals that use the same percentage. One applies it to all collected campaign pledges. The other applies it to pledges credited to the provider's agreed tracking links. A supporter from your existing audience could enter the first fee calculation even if they never saw the provider's ad. The percentage alone cannot tell you the bill.",
            "Ask each provider to calculate its fee against the same low, expected and high campaign scenarios, using your own figures. Include any setup fee, minimum payment and recurring charge. Agree how cancelled pledges, refunds, shipping, tax and late pledges affect the base. For a fixed fee, check what changes would require another quote. Neither model makes sense until the work and payment terms are clear.",
          ],
        },
      },
      {
        after: "proposal-comparison",
        template: true,
        section: {
          id: "proposal-template",
          title: "Send the same comparison sheet to each provider",
          paragraphs: [
            "Download the plain text comparison below and give every provider the same brief and support dates. It includes separate fields for service fees, media spend, percentage calculations, named workers and handoff files. Keep blank answers visible rather than filling them with assumptions.",
            "Use the completed sheet during the call. If one quote leaves out email setup or ends before the campaign closes, ask for that work separately before comparing the total commitment. You can use the sheet without signing up for a mailing list.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Should I hire a Kickstarter agency or a freelancer?",
        answer: "Compare the work and coordination your team needs. A freelancer can own a defined task; an agency may cover several stages. Ask for named workers, support dates, cover and handoff terms from either provider. The business label does not establish capacity or results.",
      },
      {
        question: "Is a fixed fee better than commission for Kickstarter marketing?",
        answer: "Compare both against the same scope and your campaign scenarios. A fixed fee needs clear deliverables and change limits. Commission needs a defined revenue base, exclusions, attribution method and payment terms. Include minimums, setup fees and media spend before deciding.",
      },
    ],
  },
  "board-game-kickstarter-campaign-design-cost": {
    template: {
      label: "Download the campaign design scope template (TXT)",
      publisher: "Guildframe",
      href: "/downloads/buyer-guides/campaign-design-scope.txt",
    },
    additions: [
      {
        after: "scope",
        section: {
          id: "worked-design-brief",
          title: "Turn the page outline into a deliverables list",
          paragraphs: [
            "Suppose a fictional game, Harbour Council, has a core box, a deluxe edition and one optional card pack. The creator already has final illustrations and a draft rulebook. The example below shows how to describe the design job. It is a sample brief, not Guildframe's standard file count or an extra package.",
            "Count the reward choices as well as the page sections. If the deluxe edition replaces wooden pieces with metal ones, the comparison must show that substitution clearly. Adding a second language later can create another set of copy, image labels and approval checks even if the layout stays the same.",
          ],
          table: {
            headers: ["Example deliverable", "Inputs the creator supplies", "How to accept it"],
            rows: [
              ["Page outline and campaign copy", "Game summary, rules and approved product facts", "The creator checks the claim and purpose of each section"],
              ["One sample turn graphic", "A real starting position, player choice and result", "A new reader can follow the choice without the designer teaching it"],
              ["Core box component spread", "Final component images and quantities", "The image agrees with the approved contents list"],
              ["Core and deluxe comparison", "The exact items included or replaced in each edition", "The differences remain readable in the phone preview"],
              ["Optional card pack panel", "Card count, compatibility and whether it is included", "The panel distinguishes an optional purchase from a reward inclusion"],
              ["Production and delivery section", "The creator's approved progress, risks and shipping information", "The page describes the current plan without inventing promises"],
              ["Exports and editable files", "Chosen platform and agreed file formats", "Files open correctly and the platform preview uses the approved version"],
            ],
          },
        },
      },
      {
        after: "assets",
        section: {
          id: "design-cost-drivers",
          title: "Ask which decisions would change the quote",
          paragraphs: [
            "The workload grows when the brief needs new material or repeated versions. Supplying a usable component spread is different from asking someone to photograph, cut out and arrange every item. Adapting approved copy is different from writing the product explanation while the rules are still changing.",
            "Ask the designer to distinguish corrections from changed scope. Fixing a typo in approved copy and replacing the reward structure after layout are different requests. Agree the review rounds, who collects feedback and how the provider quotes extra work before approving it.",
          ],
          table: {
            headers: ["Cost driver", "What to settle in the brief"],
            rows: [
              ["Unfinished or missing assets", "Who produces new art, photos, renders or copy"],
              ["Editions, bundles and languages", "How many versions and comparisons the quote covers"],
              ["Review process", "Included rounds, one feedback owner and approval dates"],
              ["Platform assembly", "Whether the provider delivers files or also assembles and reviews the page"],
              ["Changes after approval", "The request, extra fee and effect on the delivery date"],
            ],
          },
        },
      },
      {
        after: "scope-sheet",
        template: true,
        section: {
          id: "design-scope-template",
          title: "Use a scope template before requesting a price",
          paragraphs: [
            "The downloadable template has a row for each section, the supplied assets, the person who confirms the facts and the files you expect to receive. Complete it with your real reward matrix and share the same version with each designer.",
            "Leave illustration, photography, video, advertising and live support on separate lines when they are needed. A campaign page quote cannot settle those costs unless the proposal names them. Guildframe's current campaign design scope and fee remain on the dedicated design page.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What makes one Kickstarter campaign design quote higher than another?",
        answer: "Compare the copy and graphics, missing asset production, reward versions, languages, review rounds, platform assembly and final files. A lower total can reflect fewer deliverables. Use the same brief before comparing prices.",
      },
      {
        question: "How do I budget for design before all the rewards are final?",
        answer: "Share the current reward matrix and mark unresolved choices. Ask what the quote assumes and which later changes require approval and another fee. Finish the decisions that affect component images and reward comparisons before final layout.",
      },
    ],
  },
  "kickstarter-prelaunch-email-list": {
    template: {
      label: "Download the audience scenarios and sample welcome email (TXT)",
      publisher: "Guildframe",
      href: "/downloads/buyer-guides/prelaunch-email-planning.txt",
    },
    additions: [
      {
        after: "followers",
        section: {
          id: "audience-target-scenarios",
          title: "Set a list target with scenarios you can change",
          paragraphs: [
            "There is no list count that guarantees funding. Start with how many backers you want this channel to contribute, then test several assumptions. In this hypothetical example, a creator wants 200 backers in total and plans for 80 of them to come from the email audience. The other 120 still need a separate plan.",
            "The calculation is required reachable subscribers = desired email backers divided by the assumed subscriber to backer rate. The rates below are invented sensitivity inputs, not industry benchmarks or predictions. Count each eligible address once, exclude unsubscribed and undeliverable contacts, and replace the assumptions with evidence from your own audience when you have it.",
          ],
          table: {
            headers: ["Hypothetical assumption", "Calculation for 80 email backers", "Required reachable subscribers"],
            rows: [
              ["4% eventually pledge", "80 divided by 0.04", "2,000"],
              ["8% eventually pledge", "80 divided by 0.08", "1,000"],
              ["12% eventually pledge", "80 divided by 0.12, rounded up", "667"],
            ],
          },
        },
      },
      {
        after: "audience-target-scenarios",
        section: {
          id: "audience-overlap",
          title: "Keep overlapping audiences out of the total",
          paragraphs: [
            "A hypothetical report with 1,000 email subscribers and 600 Kickstarter followers does not establish an audience of 1,600 different people. Someone can subscribe and follow the same project. Keep the two counts in separate columns, with the date and any known overlap, rather than forecasting pledges from their sum.",
            "Use a consistent definition for the email model: one eligible subscriber, one assumed chance of backing during the campaign. Do not count that person's launch email click and platform notification as two potential backers. Report attributed pledges with the tracking method and its limits; attribution does not prove that one message caused the pledge.",
          ],
        },
      },
      {
        after: "sequence",
        section: {
          id: "sample-welcome-email",
          title: "Give the welcome email an actual game decision",
          paragraphs: [
            "This is an illustrative draft for the fictional Harbour Council game. It assumes the signup form promised a sample round plus development notes and the launch announcement. Replace the game details and sample link before using it.",
            "Subject: Your first decision in Harbour Council",
            "Thanks for asking for a look at Harbour Council. It is a strategy game for two to four players about running rival harbours. Each turn, you claim cargo from a shared market to store or use for a shipping contract. Taking the last timber crate can finish your contract while leaving another harbour short.",
            "Read the two page sample round: [link to the promised sample]. It shows the starting board, both choices and what happens next.",
            "I will send development notes and the Kickstarter launch announcement to this address. You can reply with a question about the game or leave using the unsubscribe link below. [Creator name and studio contact details]",
            "The final email needs your real sender details, working sample and unsubscribe links. Keep those service links, even when the sample is the main action. A clear welcome message delivers the signup promise before asking the reader to back anything.",
          ],
        },
      },
      {
        after: "signup-route",
        template: true,
        section: {
          id: "email-planning-template",
          title: "Download the target worksheet and welcome draft",
          paragraphs: [
            "The plain text worksheet includes the audience calculation, a place to record overlap and the complete sample email. It also asks you to name the person who checks the sample, sends the emails and reviews actual pledges after launch. Download it without an email signup and replace the fictional details with your own game.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How many email subscribers do I need before launching a board game on Kickstarter?",
        answer: "Work backwards from the backers you want email to contribute and compare several subscriber to backer assumptions. For example, 80 backers at an assumed 8% would require 1,000 reachable subscribers. That is hypothetical arithmetic, not a benchmark or a funding guarantee. Product costs and backers from other channels still need their own plan.",
      },
      {
        question: "Can I add Kickstarter followers to my email list count?",
        answer: "Record them separately. Some people may follow the project and subscribe to your emails, so adding the totals can count them twice. A platform follow also does not grant permission to add someone to an external mailing list.",
      },
    ],
  },
  "kickstarter-campaign-video-planning": {
    template: {
      label: "Download the campaign video production brief (TXT)",
      publisher: "Guildframe",
      href: "/downloads/buyer-guides/campaign-video-production-brief.txt",
    },
    additions: [
      {
        after: "jobs",
        section: {
          id: "video-production-options",
          title: "Choose the production work before asking for a quote",
          paragraphs: [
            "An edit of supplied footage, a new shoot and a sequence built from 3D assets need different inputs. Send examples of what you already have and ask the provider to identify the missing work. Agree the main video, any gameplay recording and any vertical adaptation as distinct deliverables.",
            "A box rotation may establish what the product looks like. It cannot show a turn by itself. Spend the production effort on the evidence the viewer needs, then ask for a quote against that shot list. These are scope options, not price bands or a recommended production budget.",
          ],
          table: {
            headers: ["Production option", "What you need to supply or book", "What can add work"],
            rows: [
              ["Edit existing footage", "Usable recordings, approved script and a list of missing shots", "Repairing poor audio, replacing unreadable shots or recording pickups"],
              ["Record a tabletop demonstration", "A playable prototype, players or presenter, location and shot list", "Extra filming days, new product versions or an incomplete demonstration"],
              ["Build motion or 3D scenes", "Artwork or models, product dimensions and approved component facts", "Creating models, changing materials or revising animation after approval"],
              ["Adapt a separate vertical clip", "A script and shots that work in the vertical frame", "New captions, reframing or extra footage when the horizontal crop fails"],
            ],
          },
        },
      },
      {
        after: "brief",
        section: {
          id: "worked-video-shot-list",
          title: "Pair each line of the script with proof on screen",
          paragraphs: [
            "For the fictional Harbour Council game, the outline below shows one useful sequence. It is an illustrative production brief, not footage of a real client project. The rulebook and reward sheet still need to confirm every product claim before recording.",
          ],
          table: {
            headers: ["Script job", "Planned shot", "Check before approval"],
            rows: [
              ["Explain the game", "Show the whole harbour board and the players' work areas", "The viewer can identify the product and the play setup"],
              ["Show one decision", "Hold on the choice between using the last timber for a contract and storing stone for later", "The labels and components remain readable"],
              ["Show the consequence", "Show the completed contract and the timber no longer available to the next player", "The sequence follows the current rules"],
              ["Explain the reward", "Show the core box contents separately from deluxe replacements", "The shot cannot imply that an optional extra is included"],
              ["Explain the funding purpose", "Let the creator describe the next production step", "The statement matches the campaign's real development stage"],
            ],
          },
        },
      },
      {
        after: "scope",
        template: true,
        section: {
          id: "video-brief-template",
          title: "Download a brief the producer can quote",
          paragraphs: [
            "Use the free production brief to record the video's job, existing assets, missing shots, formats, captions, music permissions, review rounds and final files. It keeps the main campaign video separate from the optional Discovery Mode clip and the gameplay recording.",
            "Confirm whether you receive the editable project, caption files and licensed media as well as the finished video. Give one person responsibility for checking product facts and collecting feedback. That makes a quote easier to assess and helps prevent conflicting changes during the edit.",
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What changes the cost of a Kickstarter campaign video?",
        answer: "The quote depends on whether the producer edits usable footage, records new material or creates motion and 3D scenes. Missing shots, audio work, presenters, formats, captions, rights and review rounds also affect the work. Ask for a quote against a written brief rather than treating one video's price as a standard budget.",
      },
      {
        question: "Can I use one edit for the main video, gameplay and Discovery Mode?",
        answer: "Some footage can be reused, but agree each video's job and final files. The main introduction, a detailed gameplay recording and a vertical Discovery clip need different pacing or framing. Check the actual crop and playback before approving an adaptation.",
      },
    ],
  },
};

export function reviseBuyerGuide(guide: LaunchGuide): LaunchGuide {
  const revision = buyerRevisions[guide.slug];
  if (!revision) return guide;

  const sources = [...guide.sources];
  let templateSource = sources.findIndex(source => source.href === revision.template.href);
  if (templateSource === -1) {
    templateSource = sources.length;
    sources.push(revision.template);
  }

  const existingIds = new Set(guide.sections.map(section => section.id));
  const additions = revision.additions.filter(addition => !existingIds.has(addition.section.id));
  const sections: LaunchSection[] = [];
  const included = new Set<string>();
  const append = (section: LaunchSection) => {
    sections.push(section);
    included.add(section.id);
    for (const addition of additions.filter(item => item.after === section.id)) {
      append(addition.template ? { ...addition.section, source: templateSource } : addition.section);
    }
  };

  for (const section of guide.sections) append(section);
  for (const addition of additions) {
    if (!included.has(addition.section.id)) {
      append(addition.template ? { ...addition.section, source: templateSource } : addition.section);
    }
  }

  const existingQuestions = new Set(guide.faqs.map(faq => faq.question));
  return {
    ...guide,
    sections,
    sources,
    faqs: [...guide.faqs, ...revision.faqs.filter(faq => !existingQuestions.has(faq.question))],
  };
}
