import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    tracker: {
      paragraphs: [
        "Kickstarter already has a tracker, so you rarely need a third party tool to see where pledges come from.",
        "You create custom referral tags in the Promotion tab of the project editor before launch, or from the creator dashboard once the campaign is live. Each tag gives you a link. The dashboard then reports the pledges, share of funds and amount pledged through it.",
        "The same Promotion tab takes your Google Analytics 4 measurement ID and your Meta Pixel ID. Add both before launch, because neither can be added once the project has ended, and Google data can take up to 24 hours to appear.",
        "Kickstarter also says a collaborator can't add the Analytics ID, so the creator account has to do it.",
      ],
      takeaway: "Kickstarter referral tags, GA4 and the Meta Pixel all live in the Promotion tab. Set them up from the creator account before launch.",
    },
    measurements: {
      paragraphs: [
        "Before launch, we write down the decisions the numbers need to support. A landing page report tells you which traffic reached the page and signed up.",
        "Your email platform shows delivery and clicks, and Kickstarter reports pledges attributed to its referral links. These are different stages, so their totals won't match, and that's expected.",
        "Define a successful signup as the completed action your form actually records, not a button click. Record the date range and time zone for every export, so the team compares the same period.",
      ],
      takeaway: "Match each tracker to one question, and never expect landing page, email and Kickstarter totals to agree.",
    },
    "referral-tags": {
      paragraphs: [
        "Give each referral tag a name that identifies its placement, such as the newsletter, one partner or one ad set. Then keep the generated URL intact. Kickstarter allows up to 20,000 tags, so there's no reason to share one link everywhere.",
        "The referral report shows attributed pledges and amounts. Since October 13, 2026, the dashboard's Backer Source data also lists dropped pledges for each tag, which shows what a placement actually collected.",
        "Kickstarter still doesn't provide backer level referral records, so use the report within that limit. The decision path below covers every link you share.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Every link you share needs the right tracker and a phone test",
          start: "You have a link to share",
          nodes: [
            {question: "Does it point to your Kickstarter project?", yes: "Create a referral tag for it", no: "Add UTMs from your naming list instead"},
            {question: "Does the tag name one placement, such as the newsletter or one ad set?", yes: "Keep the generated URL intact", no: "Make a separate tag, since Kickstarter allows up to 20,000"},
            {question: "Does it open the right public project on a phone?", yes: "Log it in your link record", no: "Fix the redirect or rewritten link and test again"},
          ],
          end: "Publish the link and read it in the referral report",
          source: "Kickstarter Help Center, custom referral tags",
        },
      ],
      takeaway: "Give every placement its own Kickstarter referral tag. With up to 20,000 allowed, one shared link everywhere wastes the report.",
    },
    utm: {
      paragraphs: [
        "Google Analytics uses UTM parameters to identify campaign traffic. Fill source, medium and campaign the same way every time.",
        "Values are case sensitive, so a newsletter recorded with two spellings appears as two sources. We keep a small approved naming list and copy from it.",
        "For an owned landing page, an illustrative query string is ?utm_source=creator_newsletter&utm_medium=email&utm_campaign=orbit_launch&utm_content=rules_preview. This example does not contain a real Kickstarter referral tag, so use the URL generated in your dashboard for that part.",
        "Links in your [prelaunch email list](/guides/kickstarter-prelaunch-email-list) are the first place this naming list pays off.",
      ],
      takeaway: "UTM values are case sensitive, so copy every link from one approved naming list.",
    },
    test: {
      paragraphs: [
        "A tracking link only works if it survives the route a real person takes. So we open each published link on a phone, then verify the measurement we control.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Test every tracking link the way a backer will use it",
          tips: [
            {label: "Phone first", text: "Check the destination, redirects and parameter spelling on a phone."},
            {label: "Delivered email", text: "If your email tool rewrites links, test the delivered email, not only the draft."},
            {label: "Short links", text: "Make sure a shortened link reaches the intended page with the tracking preserved."},
            {label: "Owned signup page", text: "Complete the form, then check the confirmation and the email delivery."},
            {label: "Campaign link", text: "Confirm the correct public project opens."},
            {label: "No test pledges", text: "Don't place a paid pledge just to make a dashboard number appear."},
          ],
        },
      ],
      takeaway: "A tracking link is ready only once it has opened the right page on a phone with its tags intact.",
    },
    report: {
      paragraphs: [
        "Here is a hypothetical USD example. Spending $600 on ads for $1,800 in attributed pledges gives a ROAS of 3.0 on pledge value.",
        "If $150 of those pledges drops, the collected attributed amount is $1,650 and the ratio falls to 2.75. Production, shipping, fees and service costs still sit outside both ratios.",
        "Don't add an advertising platform's attributed revenue to Kickstarter's attributed revenue as if they were separate sales. Keep each report labeled, explain its limits and reconcile against collected funds when available.",
        "Our [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to set the spending ceiling before you read any ratio.",
      ],
      takeaway: "Report ROAS on collected pledges as well as attributed pledges, and never add ad platform revenue to Kickstarter's.",
    },
    help: {
      paragraphs: [
        "We set up tracking as part of our paid advertising and live campaign management, because ad decisions are only as good as the links behind them. Before the first paid click, we build the referral tag list and connect GA4 and the Meta Pixel. Then we test every link on a phone and agree who reads which report.",
        "You can run this yourself with a spreadsheet and an afternoon. The honest limit is keeping it clean once the campaign is live and links multiply.",
        "If you'd rather hand that over, see our [Kickstarter advertising for board games](/kickstarter-advertising) service, or start earlier with [Kickstarter prelaunch marketing for board games](/kickstarter-prelaunch-marketing).",
      ],
      takeaway: "Build the referral tag list, connect GA4 and the Meta Pixel, and test every link before the first paid click.",
    },
  },
};
