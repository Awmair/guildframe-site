import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-version": {
      paragraphs: [
        "US tariffs on board games changed three times between 2025 and 2026, and most of the headlines covered only one of those changes. Here is where things stand on November 25, 2026.",
        "The Supreme Court ruled on February 20, 2026, that the president can't impose tariffs under IEEPA, the emergency powers law behind the 2025 tariffs. Then, from July 24, 2026, a new Section 301 tariff of 12.5% applies to goods from China, where many tabletop print runs are made.",
        "Separately, the de minimis exemption that let small parcels in duty free has been suspended since August 29, 2025. A 2025 law ends it for good on July 1, 2027.",
        "This guide is not legal or customs advice. Tariff rules change quickly and depend on your product codes, so confirm every figure with your freight forwarder or customs broker before you set a reward price.",
      ],
      takeaway: "Board games shipped into the US still pay tariffs in 2026. Section 301 at 12.5% applies to China, and de minimis no longer lets small parcels in duty free.",
    },
    "timeline": {
      takeaway: "A campaign that funds in one year and ships in the next can cross several tariff rule sets, so date every shipping estimate.",
    },
    "supreme-court": {
      takeaway: "The IEEPA ruling changed which tariff applies to board games, not whether US imports pay tariffs. Ask your broker about any refund claim on 2025 entries.",
    },
    "section-301": {
      takeaway: "Never budget one tariff percentage as your total. Ask your broker for the full duty stack on each reward's contents, by HTS code and country of origin.",
    },
    "de-minimis": {
      paragraphs: [
        "De minimis used to let parcels worth $800 or less enter the US without duty. Many creators outside the US relied on it to post rewards straight to backers. That exemption has been suspended since August 29, 2025.",
        "On June 24, 2026, CBP published two rules in the Federal Register. The first applies to courier and cargo shipments from that day, and those parcels must now go through formal or informal entry. The second creates a new postal informal entry for mail shipments of $2,500 or less, effective July 24, 2026.",
        "Under the postal process, the filer must be the owner or purchaser of the goods, or a licensed customs broker acting for them. The filer must also hold a customs bond. Duties are paid through Pay.gov and are no longer collected from the backer at delivery.",
        "The One Big Beautiful Bill Act, enacted on July 4, 2025, ends the exemption by law on July 1, 2027.",
        "This matters most if you ship parcels into the US from a warehouse abroad, such as an EU or UK fulfillment partner. It also matters if you post late pledges and replacement parts yourself. If you sell in the other direction, our guide to [selling miniatures internationally with VAT and IOSS](/guides/selling-miniatures-internationally-vat-ioss) covers what changes for backers in Europe and the UK.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Every reward parcel into the US now needs an entry route",
          start: "You are sending a reward parcel into the US",
          nodes: [
            {question: "Is it going by mail rather than courier or cargo?", yes: "Go on to the value check", no: "Courier and cargo parcels need formal or informal entry since June 24, 2026"},
            {question: "Is the mail shipment worth $2,500 or less?", yes: "Go on to the filer check", no: "Ask your broker which entry the shipment needs"},
            {question: "Is the filer the owner, the purchaser or a licensed broker with a customs bond?", yes: "Go on to filing", no: "Arrange a broker and a customs bond before you post"},
          ],
          end: "File postal informal entry and pay duty through Pay.gov",
          caption: "A summary of the June 24, 2026 CBP rules. Your broker confirms the route for each shipment.",
          source: "Federal Register, de minimis suspension rules (June 24, 2026)",
        },
      ],
      takeaway: "Since de minimis was suspended, small reward parcels into the US pay duty too. Plan who files the entry and who holds the customs bond before you post.",
    },
    "recover-the-cost": {
      paragraphs: [
        "Every dollar of duty has to be paid by someone, so the real decision is where it appears for the backer. There are three places it can sit, and each has a timing rule.",
        "Kickstarter's own tariff guidance says pledged rewards can't have their price changed during a live campaign. So once you launch, the reward price is fixed for existing backers, and any new cost moves into shipping or a surcharge.",
        "The Kickstarter Tariff Manager, launched in April 2025, adds a per item tariff surcharge in the Kickstarter Pledge Manager. You request it through a banner on the pledge manager page.",
        "The charge then shows as a separate line on the backer's payment page, and the money is included in your payout. It can only be applied to backers with a US shipping address.",
        "Kickstarter says backers who won't pay it should work with you on a changed pledge, a refund or another fix.",
      ],
      takeaway: "Decide before launch whether tariffs sit in the reward price, the shipping charge or a Tariff Manager surcharge, because reward prices lock once the campaign is live.",
    },
    "pricing-steps": {
      takeaway: "Treat the tariff as part of landed cost per copy, alongside factory price, freight, broker and fulfillment, and price board game rewards from that total.",
    },
    "backer-page": {
      paragraphs: [
        "Backers accept a tariff line far more readily when they've read about it before they pledge. Kickstarter's tariff advice to creators puts transparency first, because trust holds a community together through a price change.",
        "On the campaign page, we write a short tariff note next to the shipping table. The cards below show what goes in it.",
        "Our guide to [explaining Kickstarter shipping costs and delivery](/guides/kickstarter-shipping-delivery-page) shows how that note fits with regional rates and delivery dates.",
        "Keep the wording factual and dated. A backer who reads 'US duty estimate checked November 25, 2026, confirmed with our broker' trusts the number more than a vague warning.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "A tariff note backers trust answers four questions",
          tips: [
            {label: "Where it's made", text: "Name the country the game is printed in, because that sets the duty."},
            {label: "Included or later", text: "Say whether US duty is in the reward price or collected later in the pledge manager."},
            {label: "When it was checked", text: "Put the date of the estimate, so backers can see it is current."},
            {label: "Who confirmed it", text: "Mention that your broker confirmed the figure, rather than a guess."},
          ],
        },
      ],
      takeaway: "Put a short, dated tariff note beside the shipping table. Backers accept a US duty line far more readily when they read it before pledging.",
    },
    "how-we-help": {
      takeaway: "Your customs broker owns codes, entries and duty. We build reward tiers, the shipping section and backer messaging around the landed cost they confirm.",
    },
  },
};
