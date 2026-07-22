import {
  ArticleCallout,
  ArticleDefinition,
  ArticleStatGrid,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "2024 Kickstarter Tabletop Games Funding Benchmark",
  description:
    "A source backed Kickstarter tabletop games benchmark with 2024 funding, success rate and top campaign data plus transparent calculations.",
  path: "/resources/kickstarter-tabletop-games-benchmark",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: "2026-07-17",
  keywords: [
    "Kickstarter tabletop games statistics",
    "board game Kickstarter benchmark",
    "tabletop crowdfunding data",
  ],
});

const faqs = [
  {
    question: "How many tabletop game projects launched on Kickstarter in 2024?",
    answer:
      "Kickstarter reported 6,646 tabletop game project launches in 2024. It also reported 5,314 successfully funded projects and an 80% success rate.",
  },
  {
    question: "How much did successful tabletop campaigns raise in 2024?",
    answer:
      "Kickstarter reported $220 million pledged to successful tabletop game campaigns in 2024. Dividing that total by 5,314 successful projects gives a simple mean of approximately $41,400 per successful project, although the distribution is highly uneven.",
  },
  {
    question: "Can I use this dataset in an article or presentation?",
    answer:
      "Yes. Cite Kickstarter as the original source and Guildframe for the derived calculations or downloadable table. The top campaign funding values are lower bounds because Kickstarter published them as rounded figures with plus signs.",
  },
];

export default function KickstarterTabletopGamesBenchmarkPage() {
  return (
    <SeoArticlePage
      slug="kickstarter-tabletop-games-benchmark"
      path="/resources/kickstarter-tabletop-games-benchmark"
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="In this benchmark"
      category="Tabletop crowdfunding data"
      title="2024 Kickstarter Tabletop Games Funding Benchmark"
      description="A transparent reference for the scale, success rate and concentration of tabletop game funding on Kickstarter in 2024."
      answer="Kickstarter reported 6,646 tabletop game launches in 2024, 5,314 successfully funded projects, an 80% success rate and $220 million pledged to successful tabletop campaigns. The published figures imply roughly $41,400 pledged per successful project as a simple mean, while the ten highest funded campaigns accounted for at least $41.1 million."
      published="2026-07-17"
      updated="2026-07-17"
      readTime="6 minute read"
      faqs={faqs}
      sources={[
        {
          label: "2024 Was a Big Year for Games on Kickstarter",
          publisher: "Kickstarter",
          href: "https://updates.kickstarter.com/kickstarter-biggest-platform-for-games/",
        },
        {
          label: "How to Transition From Kickstarter to Shopify",
          publisher: "Shopify",
          href: "https://www.shopify.com/uk/blog/how-to-transition-from-kickstarter-to-shopify",
        },
      ]}
      toc={[
        { id: "headline-data", label: "Headline data" },
        { id: "derived", label: "Derived benchmarks" },
        { id: "top-campaigns", label: "Top campaigns" },
        { id: "methodology", label: "Methodology" },
        { id: "commerce", label: "Commerce implications" },
        { id: "download", label: "Download the data" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Benchmark scope">
        This reference summarizes Kickstarter&apos;s published 2024 tabletop games
        totals and derives a small set of reproducible ratios. It measures campaign
        funding activity, not fulfillment quality, profitability or store revenue.
      </ArticleDefinition>

      <h2 id="headline-data">Headline tabletop Kickstarter data</h2>
      <ArticleStatGrid
        stats={[
          { value: "6,646", label: "Tabletop projects launched", note: "Reported by Kickstarter for 2024" },
          { value: "5,314", label: "Successfully funded", note: "79.96% of reported launches" },
          { value: "$220M", label: "Pledged to successful campaigns", note: "Published aggregate total" },
          { value: "83%", label: "Share of Games pledges", note: "Attributed to tabletop projects" },
          { value: "80%", label: "Reported success rate", note: "Kickstarter's highest in 15 years" },
          { value: "1,332", label: "Not successfully funded", note: "Launches minus successful projects" },
        ]}
      />
      <p>
        Kickstarter published these figures on February 5, 2025. The source also
        reported $270 million pledged across the broader Games category and stated
        that tabletop projects received 83% of Games pledges.
      </p>

      <h2 id="derived">Derived benchmarks</h2>
      <ArticleTable
        caption="Guildframe calculations from Kickstarter's published 2024 totals"
        headers={["Measure", "Calculation", "Result", "Interpretation"]}
        rows={[
          ["Calculated success rate", "5,314 / 6,646", "79.96%", "Consistent with Kickstarter's rounded 80%"],
          ["Projects not successfully funded", "6,646 - 5,314", "1,332", "About one in five reported launches"],
          ["Simple mean pledged per success", "$220M / 5,314", "About $41,400", "Not a median and strongly affected by large campaigns"],
          ["Top 10 funding lower bound", "Sum of published rounded figures", "At least $41.1M", "At least 18.7% of the successful tabletop total"],
          ["Top 10 published backers", "Sum of reported backer counts", "232,773", "Counts are campaign level, not unique people"],
        ]}
      />
      <ArticleCallout>
        <strong>Important:</strong> the $41,400 figure is a simple arithmetic mean,
        not a typical result. Kickstarter did not publish the median, distribution
        or profitability of these campaigns in the cited release.
      </ArticleCallout>

      <h2 id="top-campaigns">The ten highest funded tabletop campaigns</h2>
      <ArticleTable
        caption="Kickstarter's ten highest funded tabletop game campaigns of 2024"
        headers={["Rank", "Campaign", "Published funding", "Backers"]}
        rows={[
          ["1", "Brandon Sanderson's Cosmere RPG", "$15.1M+", "55,106"],
          ["2", "Altered TCG", "$6.7M+", "14,997"],
          ["3", "Trench Crusade", "$3.3M+", "20,170"],
          ["4", "Twisted Cryptids", "$3.1M+", "33,210"],
          ["5", "Discworld RPG: Adventures in Ankh Morpork", "$3.0M+", "17,223"],
          ["6", "Root: The Homeland Expansion", "$2.4M+", "27,549"],
          ["7", "DC20", "$2.2M+", "20,684"],
          ["8", "Terraria: The Board Game", "$2.0M+", "15,237"],
          ["9", "Return To The 7th Citadel", "$1.7M+", "15,137"],
          ["10", "Thunder Road: Vendetta - Carnival of Chaos", "$1.6M+", "13,460"],
        ]}
      />

      <h2 id="methodology">Methodology and limitations</h2>
      <ol>
        <li><strong>Source selection:</strong> the benchmark uses Kickstarter&apos;s own 2024 Games retrospective as the primary dataset.</li>
        <li><strong>Calculations:</strong> Guildframe divided or summed the published totals without estimating missing campaign level values.</li>
        <li><strong>Rounded figures:</strong> top campaign funding was published with plus signs, so the combined $41.1 million is a lower bound.</li>
        <li><strong>Backer counts:</strong> a person may back more than one campaign. The combined count is not a unique audience total.</li>
        <li><strong>Commercial outcomes:</strong> pledges are not store revenue, profit, fulfillment success or long term customer value.</li>
      </ol>

      <h2 id="commerce">What the figures mean for post campaign commerce</h2>
      <p>
        A successful campaign creates an audience and a delivery obligation. It
        does not automatically create a permanent product catalog, customer journey
        or retail operating system. Shopify&apos;s migration guidance recommends
        preparing products, customer communication, fulfillment and the ongoing
        ecommerce infrastructure around the campaign.
      </p>
      <ul>
        <li>Separate backer fulfillment from new retail or preorder orders.</li>
        <li>Convert reward tiers into understandable products, variants and bundles.</li>
        <li>Keep delivery timing visible beside every purchase action.</li>
        <li>Retain campaign storytelling while shortening the path to a buying decision.</li>
        <li>Measure the store as a long term sales channel, not as another funding total.</li>
      </ul>

      <h2 id="download">Download the benchmark data</h2>
      <p>
        The campaign level table is available as a clean CSV for analysis,
        attribution and reuse. Preserve the original Kickstarter source when
        publishing derived work.
      </p>
      <p>
        <a href="/data/kickstarter-tabletop-games-benchmark-2024.csv" download>
          Download the 2024 tabletop Kickstarter benchmark CSV
        </a>
      </p>
    </SeoArticlePage>
  );
}
