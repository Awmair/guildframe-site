import Link from "next/link";
import { contentDates, formatContentDate } from "../../content-dates";
import { GuideVisual } from "../../components/GuideVisual";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleStatGrid,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../../site-config";

const benchmarkPath = "/resources/kickstarter-tabletop-games-benchmark";
const benchmarkCsvPath = "/data/kickstarter-tabletop-games-benchmark-2024.csv";

export const metadata = pageMetadata({
  title: "Highest Funded Tabletop Kickstarters of 2024",
  description:
    "The ten highest funded tabletop Kickstarters of 2024, with funding and backers, plus Kickstarter's 6,646 launches and 80% success rate in one sourced table.",
  path: "/resources/kickstarter-tabletop-games-benchmark",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.kickstarterTabletopBenchmark,
  keywords: [
    "highest funded tabletop Kickstarters",
    "most funded board game Kickstarter 2024",
    "Kickstarter tabletop games statistics",
    "board game Kickstarter benchmark",
    "tabletop crowdfunding data",
  ],
});

const faqs = [
  {
    question: "What was the highest funded tabletop Kickstarter of 2024?",
    answer:
      "Brandon Sanderson's Cosmere RPG, with more than $15.1 million from 55,106 backers. Altered TCG was second with more than $6.7 million and Trench Crusade third with more than $3.3 million.",
  },
  {
    question: "How much did the ten highest funded tabletop Kickstarters raise?",
    answer:
      "At least $41.1 million combined, using Kickstarter's rounded figures. That is at least 18.7% of the $220 million pledged to all successful tabletop campaigns in 2024, from 232,773 backer counts.",
  },
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
    <>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Dataset",
        "@id": absoluteUrl(`${benchmarkPath}#dataset`),
        name: "2024 Kickstarter tabletop games funding benchmark",
        description:
          "Kickstarter's published 2024 tabletop totals plus the ten highest funded tabletop campaigns, with the reproducible ratios Guildframe derived from them.",
        url: absoluteUrl(benchmarkPath),
        isPartOf: { "@id": absoluteUrl(benchmarkPath) },
        creator: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
        temporalCoverage: "2024",
        datePublished: "2026-07-17",
        dateModified: contentDates.kickstarterTabletopBenchmark,
        isAccessibleForFree: true,
        measurementTechnique:
          "Division and summation of the totals Kickstarter published on February 5, 2025. No campaign level values were estimated.",
        variableMeasured: [
          "Tabletop projects launched",
          "Successfully funded projects",
          "Amount pledged to successful campaigns",
          "Reported success rate",
          "Top campaign funding",
          "Top campaign backer counts",
        ],
        isBasedOn: "https://updates.kickstarter.com/kickstarter-biggest-platform-for-games/",
        distribution: {
          "@type": "DataDownload",
          encodingFormat: "text/csv",
          contentUrl: absoluteUrl(benchmarkCsvPath),
          name: "2024 tabletop Kickstarter benchmark CSV",
        },
      }}
    />
    <SeoArticlePage
      slug="kickstarter-tabletop-games-benchmark"
      path={benchmarkPath}
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="In this benchmark"
      category="Tabletop crowdfunding data"
      title="Highest Funded Tabletop Kickstarters of 2024: Benchmark Data"
      description="The ten highest funded tabletop Kickstarters of 2024, Kickstarter's published category totals and the ratios we derived from them."
      answer="The highest funded tabletop Kickstarter of 2024 was Brandon Sanderson's Cosmere RPG at more than $15.1 million from 55,106 backers, followed by Altered TCG and Trench Crusade. Across the category, Kickstarter reported 6,646 tabletop launches, 5,314 funded projects for an 80% success rate, and $220 million pledged to successful campaigns."
      published="2026-07-17"
      updated={contentDates.kickstarterTabletopBenchmark}
      readTime="7 minute read"
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
        { id: "findings", label: "Top line findings" },
        { id: "headline-data", label: "Headline data" },
        { id: "derived", label: "Derived benchmarks" },
        { id: "top-campaigns", label: "Top campaigns" },
        { id: "methodology", label: "Methodology" },
        { id: "commerce", label: "Commerce implications" },
        { id: "plan", label: "Use it in your plan" },
        { id: "download", label: "Download the data" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="findings">Top line findings from the highest funded tabletop Kickstarters</h2>
      <p>
        Here is what the 2024 numbers say before you read the full tables. Every
        figure below comes from Kickstarter&apos;s own 2024 games retrospective,
        and the ratios are our arithmetic on those published totals.
      </p>
      <ul>
        <li><strong>One campaign set the pace.</strong> Cosmere RPG raised more than $15.1 million, more than the next three campaigns combined.</li>
        <li><strong>The top ten took a large share.</strong> The ten highest funded campaigns raised at least $41.1 million, at least 18.7% of all money pledged to successful tabletop projects.</li>
        <li><strong>Most projects funded.</strong> 5,314 of 6,646 tabletop launches succeeded, an 80% success rate and Kickstarter&apos;s highest in 15 years.</li>
        <li><strong>Big crowds and big pledges are different routes.</strong> Twisted Cryptids drew the second largest crowd at 33,210 backers, while Altered TCG raised more per backer than any other top ten campaign.</li>
        <li><strong>The average hides the spread.</strong> The simple mean is about $41,400 per successful project, but Kickstarter did not publish a median, so a typical campaign is likely far smaller.</li>
      </ul>
      <GuideVisual
        data={{
          kind: "bars",
          title: "Cosmere RPG raised more than the next three campaigns combined",
          bars: [
            { label: "Cosmere RPG", value: 15.1, display: "$15.1M+", highlight: true },
            { label: "Altered TCG", value: 6.7, display: "$6.7M+" },
            { label: "Trench Crusade", value: 3.3, display: "$3.3M+" },
            { label: "Twisted Cryptids", value: 3.1, display: "$3.1M+" },
            { label: "Discworld RPG", value: 3.0, display: "$3.0M+" },
            { label: "Root: The Homeland Expansion", value: 2.4, display: "$2.4M+" },
            { label: "DC20", value: 2.2, display: "$2.2M+" },
            { label: "Terraria: The Board Game", value: 2.0, display: "$2.0M+" },
            { label: "Return To The 7th Citadel", value: 1.7, display: "$1.7M+" },
            { label: "Thunder Road Vendetta: Carnival of Chaos", value: 1.6, display: "$1.6M+" },
          ],
          caption: "Funding of the ten highest funded tabletop Kickstarters of 2024, in US dollars. Kickstarter published rounded figures with plus signs, so each bar is a lower bound.",
          source: "Kickstarter, 2024 Was a Big Year for Games on Kickstarter",
        }}
      />

      <ArticleDefinition term="Benchmark scope">
        This reference summarizes Kickstarter&apos;s published 2024 tabletop games
        totals and derives a small set of reproducible ratios. It measures campaign
        funding activity, not fulfillment quality, profitability or store revenue.
      </ArticleDefinition>

      <ArticleCallout><strong>Source review: {formatContentDate(contentDates.kickstarterTabletopBenchmark)}.</strong> These figures cover 2024. Kickstarter published them in February 2025. Its <a href="https://updates.kickstarter.com/a-year-in-review-2025-kickstarter-highlights/">2025 Highlights</a> article does not supply the same annual tabletop totals. We have kept the historical year rather than presenting these numbers as 2025 or 2026 data.</ArticleCallout>
      <aside className="article-next-step"><h2>Use the benchmark to frame questions, not forecast your funding.</h2><p>The published success rate does not give the probability that your own game will fund. The mean also combines campaigns with very different audiences, rewards and costs. Build your <Link href="/guides/board-game-kickstarter-marketing-plan">launch plan</Link> and <Link href="/guides/kickstarter-advertising-budget-board-games">advertising budget</Link> from your actual offer and economics.</p><p>If you need help preparing those stages, see <Link href="/kickstarter-launch-services">Guildframe&apos;s tabletop launch services</Link> and the <Link href="/work">campaign creative case studies</Link>.</p></aside>
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
          ["Top 10 pledged per backer", "$41.1M / 232,773", "At least about $177", "A lower bound because the funding figures are rounded down"],
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
      <p>
        Dividing each campaign&apos;s published funding by its backer count shows
        two different routes to the top ten. Some campaigns got there on crowd
        size, and others on a high average pledge per backer.
      </p>
      <GuideVisual
        data={{
          kind: "bars",
          title: "Altered TCG backers pledged the most per person, about $447",
          bars: [
            { label: "Altered TCG", value: 447, display: "$447+", highlight: true },
            { label: "Cosmere RPG", value: 274, display: "$274+" },
            { label: "Discworld RPG", value: 174, display: "$174+" },
            { label: "Trench Crusade", value: 164, display: "$164+" },
            { label: "Terraria: The Board Game", value: 131, display: "$131+" },
            { label: "Thunder Road Vendetta: Carnival of Chaos", value: 119, display: "$119+" },
            { label: "Return To The 7th Citadel", value: 112, display: "$112+" },
            { label: "DC20", value: 106, display: "$106+" },
            { label: "Twisted Cryptids", value: 93, display: "$93+" },
            { label: "Root: The Homeland Expansion", value: 87, display: "$87+" },
          ],
          caption: "Our calculation: published funding divided by published backers, rounded to the nearest dollar. Each figure is a lower bound because the funding totals were rounded down.",
          source: "Kickstarter 2024 games retrospective, Guildframe calculation",
        }}
      />

      <h2 id="methodology">Methodology and limitations</h2>
      <ol>
        <li><strong>Source selection:</strong> the benchmark uses Kickstarter&apos;s own 2024 Games retrospective as the primary dataset.</li>
        <li><strong>Calculations:</strong> Guildframe divided or summed the published totals without estimating missing campaign level values.</li>
        <li><strong>Rounded figures:</strong> top campaign funding was published with plus signs, so the combined $41.1 million is a lower bound.</li>
        <li><strong>Backer counts:</strong> a person may back more than one campaign. The combined count is not a unique audience total.</li>
        <li><strong>Commercial outcomes:</strong> pledges are not store revenue, profit, fulfillment success or long term customer value.</li>
      </ol>

      <h2 id="commerce">Plan delivery and store sales after funding</h2>
      <p>
        A successful campaign creates an audience and a delivery obligation. It
        does not automatically create a permanent product catalog, buying process
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

      <h2 id="plan">Use these numbers in your own launch plan</h2>
      <p>
        The top ten are outliers, so we use this benchmark to frame questions, not
        to set a funding goal. Your own goal should come from your reward costs and
        audience, which our <Link href="/guides/board-game-kickstarter-funding-goal">funding goal guide</Link> walks
        through. The per backer figures are a useful prompt for your reward ladder,
        and the <Link href="/guides/board-game-kickstarter-reward-pricing">reward pricing guide</Link> shows how to build one.
      </p>
      <p>
        We plan tabletop launches for a living, from the prelaunch audience to the
        campaign page and paid advertising. If you want that work done with you,
        see our <Link href="/kickstarter-launch-services">Kickstarter launch services for tabletop games</Link> or
        go straight to <Link href="/buy">booking a project</Link>.
      </p>

      <h2 id="download">Download the benchmark data</h2>
      <p>
        The campaign level table is available as a clean CSV for analysis,
        attribution and reuse. Preserve the original Kickstarter source when
        publishing derived work.
      </p>
      <p>
        <a href={benchmarkCsvPath} download>
          Download the 2024 tabletop Kickstarter benchmark CSV
        </a>
      </p>
    </SeoArticlePage>
    </>
  );
}
