import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "review": {
      takeaway: "Kickstarter review takes up to 3 business days, plus about 3 more for each round of changes. Treat that as planning guidance and leave a buffer.",
    },
    "dependencies": {
      paragraphs: [
        "We start with the dependencies rather than a universal number of weeks. Your launch needs complete editor fields, accurate rewards, a finished page, platform review and owner approval, and production decisions may block some of those tasks.",
        "As Guildframe's planning example, we start the email list 3 months or more before launch, open the prelaunch page 6 to 12 weeks out and submit for review at least 2 weeks before the date.",
        "Each task gets an owner. We can prepare the copy and graphics, but the creator confirms prices, account information, product facts and delivery plans. Your [prelaunch page](/guides/kickstarter-prelaunch-page-guide) can go live while this work continues, so followers build up during review.",
      ],
      visuals: [
        {
          kind: "timeline",
          title: "Example: submit for review two weeks before a launch you planned three months out",
          caption: "Guildframe's planning example. Your dependencies set the real dates.",
          events: [
            {when: "3 months or more out", label: "Start the email list"},
            {when: "6 to 12 weeks out", label: "Open the prelaunch page", detail: "Followers build during the rest of the work"},
            {when: "2 weeks or more out", label: "Submit for review", detail: "Leaves room for requested changes", highlight: true},
            {when: "Launch day", label: "Creator clicks Launch"},
          ],
        },
      ],
      takeaway: "Build your Kickstarter launch timeline from dependencies and owners, then submit for review at least two weeks before the date you announce.",
    },
    "date": {
      visuals: [
        {
          kind: "flow",
          title: "Announce a public Kickstarter launch date only after four checks pass",
          start: "You have a launch date in mind",
          nodes: [
            {question: "Is the project submitted at least 2 weeks before that date?", yes: "Continue", no: "Keep the date private until you submit"},
            {question: "Is the project approved?", yes: "Continue", no: "Allow 3 more business days for each round of changes"},
            {question: "Has the final preview been checked after the last edit?", yes: "Continue", no: "Run the final page check on a phone and a desktop"},
            {question: "Is one named person ready to click Launch?", yes: "Continue", no: "Name them, because Kickstarter launches cannot be scheduled"},
          ],
          end: "Announce the date, then send links once the campaign is live",
          source: "Kickstarter Help Center, project review and launching",
        },
        {
          kind: "tips",
          title: "Launching on Kickstarter is a manual click, so plan the people around it",
          tips: [
            {label: "Name the launcher", text: "One person clicks Launch project after approval."},
            {label: "Confirm the time zone", text: "Agree the exact launch time with everyone sending announcements."},
            {label: "Check the public URL", text: "Agree who opens the public page right after launch and confirms it is live."},
            {label: "Prepare links early", text: "Draft announcement links in advance, then verify they point to the live campaign."},
          ],
          source: "Kickstarter Help Center, launching an approved project",
        },
      ],
      takeaway: "Kickstarter cannot launch your campaign automatically on a set date. Name the person who clicks Launch and agree who checks the public page.",
    },
    "duration": {
      visuals: [
        {
          kind: "stats",
          title: "Kickstarter campaigns run 1 to 60 days, and the deadline is fixed once you launch",
          stats: [
            {value: "1 to 60 days", label: "Allowed campaign length"},
            {value: "30 days or fewer", label: "Kickstarter's recommendation", note: "Not a funding guarantee"},
            {value: "Fixed", label: "Deadline after launch", note: "Duration cannot be adjusted"},
          ],
          source: "Kickstarter Help Center, maximum project duration",
        },
      ],
      takeaway: "Pick your Kickstarter campaign duration before launch, because the deadline cannot change afterwards. Kickstarter recommends 30 days or fewer.",
    },
    "final-check": {
      takeaway: "Any change made during Kickstarter review can ripple through graphics, rewards and FAQ, so run one full check after the last edit.",
    },
    "help": {
      takeaway: "Finish the page before submission, so the review buffer goes to Kickstarter's questions rather than your own fixes.",
    },
    "working-checklist": {
      takeaway: "Plan the whole launch calendar around review, and give every launch action an owner.",
    },
  },
  insertAfter: {
  "review": [
    {
      "id": "approval-review-process",
      "title": "How the Kickstarter review process works",
      "paragraphs": [
        "Review checks that a project follows Kickstarter's rules and has a specific, finite goal. The team may also suggest better ways to structure or present the project.",
        "You can't send a draft to review until every tab of the project editor is complete. After you click Send to review, the project follows one of two routes:"
      ],
      "visual": {
        "kind": "steps",
        "title": "Five steps from a finished draft to the launch button",
        "steps": [
          {
            "label": "Complete every editor tab",
            "detail": "Every tab must be filled in, including payment details"
          },
          {
            "label": "Click Send to review",
            "detail": "The button stays locked until every tab is done"
          },
          {
            "label": "Algorithm check",
            "detail": "Kickstarter evaluates the project's characteristics"
          },
          {
            "label": "Auto approval or manual review",
            "detail": "Manual review can take up to 3 business days"
          },
          {
            "label": "I'm ready to launch",
            "detail": "The button appears once you are approved"
          }
        ],
        "source": "Kickstarter Help Center, checked November 26, 2026"
      },
      "source": 3,
      "takeaway": "The Kickstarter review process starts only when every editor tab is complete, then an algorithm sends the project to auto approval or to a person."
    },
    {
      "id": "approval-manual-review",
      "title": "What triggers manual review on Kickstarter",
      "paragraphs": [
        "Kickstarter doesn't publish the full list of signals its algorithm uses. It does say every Design & Technology project gets a manual review, and that a past auto approval doesn't guarantee the same result next time.",
        "From the rules, and from projects we have taken through review, these are the points that most often bring questions. The flow shows how likely auto approval is for your project:"
      ],
      "list": [
        "A Design & Technology category, which always means manual review",
        "Hardware shown with photorealistic renders instead of a working prototype",
        "A missing manufacturing plan, or no word on whether you have made something similar",
        "Rewards you didn't make yourself, or anything resembling a financial return",
        "Items that may be illegal, heavily regulated or potentially dangerous, including health claims",
        "A goal or reward list that doesn't describe a specific, finite outcome"
      ],
      "visual": {
        "kind": "flow",
        "title": "Is your project likely to be approved without a manual review?",
        "start": "Your draft is complete and ready to send",
        "nodes": [
          {
            "question": "Is it outside the Design & Technology categories?",
            "yes": "Keep going",
            "no": "Manual review is certain, so plan for up to 3 business days"
          },
          {
            "question": "Does every product image show a real item, not a photorealistic render?",
            "yes": "Keep going",
            "no": "Replace renders with prototype photos before you submit"
          },
          {
            "question": "Are the rewards things you made, with no money or equity on offer?",
            "yes": "Keep going",
            "no": "Fix the rewards first, because these break Kickstarter's rules"
          },
          {
            "question": "Is the item legal, lightly regulated and safe for backers?",
            "yes": "Keep going",
            "no": "Check the prohibited items page and expect closer scrutiny"
          }
        ],
        "end": "Auto approval is possible, but never guaranteed",
        "caption": "Guildframe guide built from Kickstarter's published rules. The real algorithm is not public.",
        "source": "Kickstarter Help Center, checked November 26, 2026"
      },
      "source": 5,
      "takeaway": "Design & Technology projects always get Kickstarter manual review. For everyone else, renders, resold rewards and regulated items are the usual reasons a person looks closer."
    },
    {
      "id": "approval-avoid-delays",
      "title": "How to avoid Kickstarter approval delays",
      "paragraphs": [
        "Most delays we see come from the creator side, not from Kickstarter. A missing bank detail, a vague reward or an unclear prototype each add a round of changes.",
        "Kickstarter's own launch checklist says to verify your bank and identity early, and to click Continue at least two business days before launch. We go further and submit weeks ahead, using these habits:"
      ],
      "visual": {
        "kind": "tips",
        "title": "Six habits that keep Kickstarter review to a single round",
        "tips": [
          {
            "label": "Verify first",
            "text": "Confirm your ID, bank account and card before the page is finished. You need them in the same country as the project."
          },
          {
            "label": "Show the real thing",
            "text": "Use photos and video of the working prototype. For hardware, photorealistic renders are not allowed."
          },
          {
            "label": "Name the end point",
            "text": "Say exactly what backers receive, when, and what finishes the project."
          },
          {
            "label": "Explain production",
            "text": "Name your manufacturer or printer, your stage and any experience making something similar."
          },
          {
            "label": "Plain reward names",
            "text": "Each tier says what is inside it. Nothing reads like a share, a refund or a profit."
          },
          {
            "label": "Submit early",
            "text": "Send a first project to review four to six weeks out, and never less than 2 weeks before your date. Keep improving the page while you wait."
          }
        ],
        "caption": "Guildframe practice, built on Kickstarter's published rules and launch checklist."
      },
      "table": {
        "headers": [
          "Common cause of a delay",
          "Why it slows review",
          "Fix before you submit"
        ],
        "rows": [
          [
            "Account details unfinished",
            "You can't send to review until every tab is complete",
            "Verify ID, bank and card first"
          ],
          [
            "Renders on a hardware project",
            "Kickstarter doesn't allow photorealistic renders for hardware",
            "Swap in photos and video of the prototype"
          ],
          [
            "No manufacturing plan",
            "Product projects must explain how they will be made",
            "Add your maker, your stage and your experience"
          ],
          [
            "Vague rewards",
            "Review checks for a specific, finite outcome",
            "Name what is in each tier and when it ships"
          ],
          [
            "Regulated or risky items",
            "These can be prohibited or need closer checks",
            "Read the prohibited items page before you build"
          ],
          [
            "Busy periods",
            "High submission volume stretches turnaround",
            "Submit weeks early, not days"
          ]
        ]
      },
      "source": 10,
      "takeaway": "To avoid Kickstarter approval delays, verify your account first, show the real prototype, describe a finite outcome and submit weeks before your date."
    },
    {
      "id": "approval-rejected",
      "title": "What to do if your Kickstarter project is rejected",
      "paragraphs": [
        "If your project doesn't meet the rules, Kickstarter's advice is to refine and improve it. If you believe it was declined but does meet the rules, you can appeal.",
        "An appeal gives you 500 characters to explain why the project complies, and you can edit the page first based on the reviewer's response. If the appeal is declined, the process ends there, though you can still submit a different project."
      ],
      "visual": {
        "kind": "flow",
        "title": "Declined by Kickstarter: appeal, fix or move on?",
        "start": "Kickstarter declined your project",
        "nodes": [
          {
            "question": "Does the project meet Kickstarter's rules as written?",
            "yes": "Keep going",
            "no": "Refine the idea so it fits, or consider another platform"
          },
          {
            "question": "Was it declined recently?",
            "yes": "Keep going",
            "no": "Build a new draft and submit it fresh"
          },
          {
            "question": "Have you fixed everything the reviewer raised?",
            "yes": "Keep going",
            "no": "Edit the page first, then return to the appeal"
          },
          {
            "question": "Can you explain compliance in 500 characters?",
            "yes": "Keep going",
            "no": "Cut it to the one rule they cited and how you meet it"
          }
        ],
        "end": "Submit the appeal for reconsideration",
        "caption": "Built from Kickstarter's help centre articles on declined projects and appeals.",
        "source": "Kickstarter Help Center, checked November 26, 2026"
      },
      "source": 7,
      "takeaway": "If Kickstarter rejects your project, fix what the reviewer raised, then appeal in 500 characters if you meet the rules. A declined appeal ends that submission."
    },
    {
      "id": "approval-after-approval",
      "title": "After approval: the prelaunch page and the launch button",
      "paragraphs": [
        "Approval doesn't publish anything. After approval you launch whenever you are ready, and Kickstarter says launching is manual and can't be scheduled for a set date.",
        "For first time creators, approval also unlocks the Kickstarter prelaunch page in the Promotion tab. Repeat creators can open it before review, which is one more reason first launches should submit early."
      ],
      "table": {
        "headers": [
          "After approval",
          "First time creator",
          "Repeat creator"
        ],
        "rows": [
          [
            "Prelaunch page",
            "Opens only after submission and approval",
            "Available in the Promotion tab before review"
          ],
          [
            "Launch timing",
            "Manual click, whenever you are ready",
            "Manual click, whenever you are ready"
          ],
          [
            "Scheduling a launch",
            "Not possible",
            "Not possible"
          ],
          [
            "What we do next",
            "Open the prelaunch page and start collecting followers",
            "Point existing backers to the new page"
          ]
        ]
      },
      "source": 9,
      "takeaway": "For first time creators, Kickstarter approval is what unlocks the prelaunch page, and launching stays a manual click you make when ready."
    }
  ]
},
  faqs: [
  {
    "question": "Why is my Kickstarter project still under review?",
    "answer": "Manual review can take up to 3 business days, and longer when many projects are waiting or when changes have been requested. If you have passed that window, check for any message from Kickstarter, then contact Kickstarter support."
  },
  {
    "question": "Does every Kickstarter project get reviewed by a person?",
    "answer": "No. An algorithm sends some projects to auto approval and others to manual review. Every Design & Technology project gets a manual review."
  },
  {
    "question": "Can I launch my Kickstarter as soon as it is approved?",
    "answer": "Yes. Once approved, you launch whenever you are ready by clicking through the launch steps. Launching is manual and can't be scheduled for a set date."
  },
  {
    "question": "What happens if Kickstarter rejects my project?",
    "answer": "You can refine the project and submit again. If you believe it meets the rules, you can edit the page and submit an appeal with up to 500 characters. If the appeal is declined, that submission ends."
  },
  {
    "question": "Can I set up a Kickstarter prelaunch page before approval?",
    "answer": "Not on a first project. First time creators can set up the prelaunch page after the project has been submitted and approved. Repeat creators can reach the Promotion tab before review."
  }
],
  sources: [
  {
    "label": "How do I prepare to launch my project?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236409-how-do-i-prepare-to-launch-my-project"
  },
  {
    "label": "How long does it take to build and launch a project?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236411-how-long-does-it-take-to-build-and-launch-a-project"
  },
  {
    "label": "What are the rules for hardware and product design projects?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects"
  },
  {
    "label": "Can Kickstarter be used to fund anything?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236681-can-kickstarter-be-used-to-fund-anything"
  },
  {
    "label": "My project was declined but it meets the rules. What should I do next?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236519-my-project-was-declined-but-it-meets-the-rules-what-should-i-do-next"
  },
  {
    "label": "What should projects do if they don't meet Kickstarter's rules?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/hc/en-us/articles/115005134574-What-should-projects-do-if-they-don-t-meet-Kickstarter-s-rules"
  },
  {
    "label": "Setting up your project's prelaunch page",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
  },
  {
    "label": "12 things you must do before launching on Kickstarter (February 13, 2025)",
    "publisher": "Kickstarter",
    "href": "https://updates.kickstarter.com/12-things-you-must-do-before-launching-on-kickstarter/"
  },
  {
    "label": "Who can use Kickstarter?",
    "publisher": "Kickstarter",
    "href": "https://help.kickstarter.com/en-us/articles/16236650-who-can-use-kickstarter"
  }
],
};
