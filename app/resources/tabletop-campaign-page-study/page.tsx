import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleStatGrid,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { JsonLd } from "../../components/JsonLd";
import { contentDates, formatContentDate } from "../../content-dates";
import {
  campaignPageStudy,
  campaignStudyCaptureDate,
  campaignStudyCsvPath,
  campaignStudyStatusLabels,
  type CampaignObservation,
} from "../../data/campaign-page-study";
import { absoluteUrl, pageMetadata } from "../../site-config";

const path = "/resources/tabletop-campaign-page-study";
const title = "Tabletop Campaign Page Study: 25 Public Examples";
const description =
  "Explore 25 public tabletop campaign examples covering gameplay, reward choices, shipping and previews, with source notes, unknowns and a downloadable CSV.";
const reviewDate = contentDates.campaignPageStudy;

export const metadata = pageMetadata({
  title,
  description,
  path,
  kind: "article",
  publishedTime: reviewDate,
  modifiedTime: reviewDate,
});

const fields = [
  { key: "explanation", label: "Gameplay explanation" },
  { key: "rewards", label: "Reward comparison" },
  { key: "shipping", label: "Shipping information" },
  { key: "preview", label: "Rules or sample offer" },
  { key: "mobile", label: "Mobile legibility" },
] as const;

const faqs = [
  {
    question: "How were these 25 tabletop campaigns selected?",
    answer:
      "Guildframe selected a convenience sample for product variety and public source availability: six board games, two card game projects, seven tabletop RPGs, five miniature or terrain projects and five accessories. Discovery searches included terms such as how to play, rulebook, quickstart, terrain and shipping. The sample cannot estimate how common these features are across crowdfunding.",
  },
  {
    question: "Does an unknown entry mean the campaign lacks that feature?",
    answer:
      "No. Unknown means the retrieved material did not establish the feature. Some sections were images, some reward requests timed out, and two Kickstarter pages returned navigation without their campaign bodies. Those limitations remain in the data.",
  },
  {
    question: "Did this study test mobile readability or funding performance?",
    answer:
      "No mobile views were inspected, so mobile legibility is unknown for all 25 entries. The review did not collect funding outcomes, conversion rates or advertising results, and does not connect any page feature to financial performance.",
  },
  {
    question: "How can I cite the study and check its observations?",
    answer:
      "Cite Guildframe, Tabletop Campaign Page Study: 25 Public Examples, with the capture date shown on this page. Download the CSV for every status, evidence note and source URL. Cite individual campaign creators when discussing their examples or artwork.",
  },
];

function Evidence({ observation, fallbackUrl, sourceLabel }: { observation: CampaignObservation; fallbackUrl: string; sourceLabel: string }) {
  return (
    <>
      <strong>{campaignStudyStatusLabels[observation.status]}.</strong>{" "}
      {observation.note}{" "}
      {observation.status === "observed" && (
        <a href={observation.sourceUrl ?? fallbackUrl} aria-label={sourceLabel}>Source</a>
      )}
    </>
  );
}

export default function TabletopCampaignPageStudyPage() {
  const textCount = campaignPageStudy.filter((row) => row.sourceAccess === "campaign_text").length;
  const limitedCount = campaignPageStudy.length - textCount;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Dataset",
          "@id": absoluteUrl(`${path}#dataset`),
          name: "Guildframe tabletop campaign page observations, November 2026",
          description:
            "A declared convenience sample of 25 public tabletop crowdfunding campaigns, recording observable information, source access limitations and unknowns. No mobile view or funding outcome was measured.",
          url: absoluteUrl(path),
          creator: { "@id": absoluteUrl("/#organization") },
          publisher: { "@id": absoluteUrl("/#organization") },
          datePublished: reviewDate,
          dateModified: reviewDate,
          temporalCoverage: campaignStudyCaptureDate,
          isAccessibleForFree: true,
          measurementTechnique:
            "Manual review of retrieved public campaign text, selected native reward lists and one labelled creator source. Coding uses observed, unknown and not applicable. Image contents, linked file permissions and rendered mobile views were not tested. Two campaign bodies were unavailable and remain in the sample.",
          variableMeasured: fields.map((field) => field.label),
          isBasedOn: campaignPageStudy.map((row) => row.campaignUrl),
          distribution: {
            "@type": "DataDownload",
            name: "Tabletop campaign page study CSV with 25 source linked records",
            encodingFormat: "text/csv",
            contentUrl: absoluteUrl(campaignStudyCsvPath),
          },
        }}
      />
      <SeoArticlePage
        slug="tabletop-campaign-page-study"
        path={path}
        collectionLabel="Resources"
        collectionHref="/resources"
        schemaType="TechArticle"
        category="Original campaign research"
        sidebarTitle="In this study"
        title={title}
        description={description}
        answer={`Guildframe reviewed a convenience sample of 25 public tabletop crowdfunding campaigns on ${formatContentDate(campaignStudyCaptureDate)}. The notes record gameplay explanation, reward comparisons, shipping information and rules or samples. Text was available for ${textCount} campaigns; ${limitedCount} returned navigation without the campaign body. Every entry includes its source and coverage limits. Mobile legibility was not inspected.`}
        published={reviewDate}
        updated={reviewDate}
        readTime="15 minute read"
        toc={[
          { id: "scope", label: "Scope and coverage" },
          { id: "examples", label: "Useful examples" },
          { id: "sample", label: "The 25 campaigns" },
          { id: "evidence", label: "Source notes" },
          { id: "methodology", label: "Methodology" },
          { id: "download", label: "Download and cite" },
          { id: "faq", label: "Quick answers" },
        ]}
        faqs={faqs}
        sources={campaignPageStudy.map((row) => ({
          label: `${row.title}: creator campaign page`,
          publisher: row.platform,
          href: row.campaignUrl,
        }))}
      >
        <h2 id="scope">What this review measures</h2>
        <ArticleDefinition term="A source linked observation study">
          This is an example library of information a prospective backer can look
          for. It records what the reviewed public material establishes. It does
          not rank campaigns, estimate conversion or evaluate whether creators
          fulfilled their promises.
        </ArticleDefinition>
        <ArticleStatGrid
          stats={[
            { value: "25", label: "Campaigns in the fixed sample", note: "Five product groups" },
            { value: String(textCount), label: "Campaigns with retrieved text", note: "Image contents remain outside the review" },
            { value: String(limitedCount), label: "Campaign bodies unavailable", note: "Retained with unknown feature values" },
            { value: "0", label: "Mobile views inspected", note: "All 25 mobile entries are unknown" },
          ]}
        />
        <ArticleCallout>
          <strong>Capture date: {formatContentDate(campaignStudyCaptureDate)}.</strong>{" "}
          Campaigns span different launch years and stages. Pages can change after
          capture. Unknown means unverified in this review; it makes no claim that
          a creator omitted the feature. A listed rules or sample offer records its
          presence, without confirming file permissions or download success.
        </ArticleCallout>
        <p>
          The sample contains six board games, two card game projects, seven
          tabletop RPGs, five miniature or terrain projects and five accessories.
          It includes a cancelled campaign and both older and recent projects.
          Selection favoured product variety and sources that could be inspected.
          Search terms also included the features being studied, so these counts
          cannot estimate their prevalence across crowdfunding.
        </p>
        <ArticleTable
          caption="Observation coverage within this convenience sample only"
          headers={["Field", "Observed", "Unknown", "Not applicable"]}
          rows={fields.map((field) => [
            field.label,
            String(campaignPageStudy.filter((row) => row[field.key].status === "observed").length),
            String(campaignPageStudy.filter((row) => row[field.key].status === "unknown").length),
            String(campaignPageStudy.filter((row) => row[field.key].status === "not_applicable").length),
          ])}
        />

        <h2 id="examples">Five examples to use in a campaign brief</h2>
        <h3>Explain a decision the player actually makes</h3>
        <p>
          <a href={campaignPageStudy[6].campaignUrl}>Quartz</a> explains when to
          reveal another card, when to stop and what causes a cave in. The{" "}
          <a href={campaignPageStudy[7].campaignUrl}>Riposte! and Cell Block 18 story</a>{" "}
          connects card choices to scoring or escape. For your page, write one
          concrete turn, its decision and its consequence before commissioning
          gameplay graphics.
        </p>
        <h3>Make differences between reward choices explicit</h3>
        <p>
          <a href={`${campaignPageStudy[2].campaignUrl}/pledge_levels`}>POND&apos;s native rewards</a>{" "}
          distinguish the standard edition, deluxe components and an expansion. The{" "}
          <a href={campaignPageStudy[20].campaignUrl}>MiniMover story</a> makes a
          simpler comparison between one tool and five. Use a shared item list to
          show what changes between choices. Our{" "}
          <Link href="/guides/kickstarter-reward-tier-graphics">reward comparison guide</Link>{" "}
          explains how to prepare that list.
        </p>
        <h3>Separate the pledge decision from later shipping charges</h3>
        <p>
          <a href={campaignPageStudy[8].campaignUrl}>The Fifth Season</a> gives
          collection timing, regional estimates and destination restrictions.
          <a href={campaignPageStudy[7].campaignUrl}> Riposte! and Cell Block 18</a>{" "}
          also states when shipping and tax are collected. These are historical
          wording examples. Confirm your own destinations, assumptions and fee
          timing with the person handling fulfilment before using the{" "}
          <Link href="/guides/kickstarter-shipping-delivery-page">shipping page guide</Link>.
        </p>
        <h3>Say what a preview contains and how finished it is</h3>
        <p>
          <a href={campaignPageStudy[8].campaignUrl}>The Fifth Season&apos;s quickstart offer</a>{" "}
          identifies rules, prepared characters and an adventure. The{" "}
          <a href={campaignPageStudy[10].campaignUrl}>Sophont campaign</a> labels its
          free First Cut rules as a work in progress. Give readers the format,
          contents and revision status beside your link, then test access with a
          signed out session. This study records the offers without testing those
          destination permissions.
        </p>
        <h3>Distinguish files, physical miniatures and required equipment</h3>
        <p>
          <a href={campaignPageStudy[16].campaignUrl}>Fighting Fantasy Heroes</a>{" "}
          separates printable files, produced miniatures and a collector box. That
          distinction belongs beside the reward choice. A creator can then use the{" "}
          <Link href="/guides/miniatures-stl-kickstarter-launch-guide">miniatures and STL launch guide</Link>{" "}
          to gather scale, format, printing and assembly facts for their own brief.
        </p>

        <h2 id="sample">The fixed sample of 25 campaigns</h2>
        <p>
          Select a campaign name for its evidence notes. Observed records the
          presence of information in the reviewed source, without rating its
          completeness or accuracy. Not applicable follows the field rules below.
        </p>
        <div className="article-table-wrap" role="region" aria-label="25 campaign observations" tabIndex={0}>
          <table>
            <caption>Public campaign information captured on {formatContentDate(campaignStudyCaptureDate)}</caption>
            <thead><tr><th scope="col">Campaign</th><th scope="col">Gameplay</th><th scope="col">Rewards</th><th scope="col">Shipping</th><th scope="col">Rules or sample</th></tr></thead>
            <tbody>
              {campaignPageStudy.map((row) => (
                <tr key={row.id}>
                  <th scope="row"><a href={`#campaign-${row.id}`}>{row.title}</a></th>
                  <td>{campaignStudyStatusLabels[row.explanation.status]}</td>
                  <td>{campaignStudyStatusLabels[row.rewards.status]}</td>
                  <td>{campaignStudyStatusLabels[row.shipping.status]}</td>
                  <td>{campaignStudyStatusLabels[row.preview.status]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="evidence">Evidence and source limits for every campaign</h2>
        <p>
          These notes cover the public campaign story, plus native rewards where
          explicitly identified. Images and videos were not visually inspected.
          Mobile legibility is unknown for every record. The CSV includes that
          field for each campaign.
        </p>
        {campaignPageStudy.map((row) => (
          <section key={row.id} id={`campaign-${row.id}`} aria-labelledby={`campaign-title-${row.id}`}>
            <h3 id={`campaign-title-${row.id}`}>{row.id}. {row.title}</h3>
            <p><strong>{row.category}.</strong> {row.theme}. <a href={row.campaignUrl}>Open the creator&apos;s campaign on {row.platform}</a>.</p>
            <ul>
              <li><strong>Gameplay explanation: </strong><Evidence observation={row.explanation} fallbackUrl={row.campaignUrl} sourceLabel={`${row.title}: gameplay evidence source`} /></li>
              <li><strong>Reward comparison: </strong><Evidence observation={row.rewards} fallbackUrl={row.campaignUrl} sourceLabel={`${row.title}: reward comparison evidence source`} /></li>
              <li><strong>Shipping information: </strong><Evidence observation={row.shipping} fallbackUrl={row.campaignUrl} sourceLabel={`${row.title}: shipping evidence source`} /></li>
              <li><strong>Rules or sample offer: </strong><Evidence observation={row.preview} fallbackUrl={row.campaignUrl} sourceLabel={`${row.title}: rules or sample evidence source`} /></li>
            </ul>
            <p><strong>Coverage: </strong>{row.scopeNote}</p>
            {row.supplementalSources && <p>Additional creator provenance: {row.supplementalSources.map((source) => <a key={source.url} href={source.url}>{source.label}</a>)}. This source does not replace the unavailable campaign body.</p>}
          </section>
        ))}

        <h2 id="methodology">Methodology and coding rules</h2>
        <p>
          Guildframe manually reviewed public text returned by a read only web
          tool on {formatContentDate(campaignStudyCaptureDate)}. Discovery searches
          used campaign names and combinations of board game, card game,
          roleplaying, how to play, rulebook, quickstart, miniatures, terrain, STL,
          dice and shipping. The selection is a reproducible fixed list of URLs,
          rather than a random draw or a complete platform directory.
        </p>
        <p>
          The retrieval tool can return cached text, so the capture date identifies
          this review rather than a guaranteed update date for every source.
          Revisit the linked creator page before relying on a particular reward
          or delivery term.
        </p>
        <ol>
          <li>Use the exact campaign URL in the CSV. Record whether story text or only navigation can be retrieved.</li>
          <li>Read available story text. Inspect native reward listings where the evidence note names that source.</li>
          <li>Record an observable statement or offer with its source URL. Keep claims about product quality or delivery performance outside the review.</li>
          <li>Use Unknown when images, missing bodies, request failures or limited source coverage prevent verification. A section heading alone does not establish its contents.</li>
          <li>Record mobile legibility as Unknown unless a rendered mobile view is separately inspected.</li>
          <li>Keep the original rows if access fails. A later reviewer can add a dated revision after checking the same sources.</li>
        </ol>
        <ArticleTable
          caption="What counts as an observation"
          headers={["Field", "Coding rule"]}
          rows={[
            ["Gameplay explanation", "A concrete goal, player action, rule or system requirement is described. Miniatures, terrain and accessories use Not applicable; their product facts remain in the notes."],
            ["Reward comparison", "At least two reward choices or editions have an explicit difference in contents, format, quantity or access. A list of products alone is insufficient."],
            ["Shipping information", "Text describes fee collection, destinations, costs or delivery arrangements. A platform estimated dispatch date alone is insufficient. Digital only delivery is marked Not applicable to physical shipping."],
            ["Rules or sample offer", "A public rules, quickstart, preview, sample page or test file offer is directly identified. Link or embed presence is recorded; destination permissions and file contents are not tested. A rulebook included in a purchased reward alone is insufficient."],
            ["Mobile legibility", "Unknown for every entry because this review did not inspect rendered mobile pages."],
          ]}
        />
        <p>
          This is a single review of accessible text, with no second reviewer or
          visual scoring. Source availability and discovery terms affect what can
          be observed. The review contains no funding outcome dataset, traffic,
          conversion, advertising or fulfilment measurements. It cannot establish
          which presentation choices cause a campaign to fund.
        </p>

        <h2 id="download">Download the data and cite a specific example</h2>
        <p>
          The CSV contains 25 records with the campaign URL, capture date,
          product group, access status, five field statuses and evidence notes.
          Unknown values are retained. Use those notes when citing an example so
          its coverage limits travel with the observation.
        </p>
        <p><a className="seo-button" href={campaignStudyCsvPath} download>Download the 25 campaign CSV</a></p>
        <p>
          Suggested citation: Guildframe. <em>Tabletop Campaign Page Study: 25
          Public Examples.</em> Captured {formatContentDate(campaignStudyCaptureDate)}.
          Link to this page and the relevant creator source. Campaign artwork and
          creator claims remain attributed to their owners.
        </p>
        <aside className="article-next-step">
          <h2>Turn the examples into a brief for your own page</h2>
          <p>
            Record your gameplay decision, reward differences, delivery wording
            and preview link in the{" "}
            <Link href="/resources/tabletop-campaign-launch-worksheet">campaign launch worksheet</Link>.
            Then inspect the assembled page on a phone using the{" "}
            <Link href="/guides/kickstarter-campaign-graphics-mobile-readability">mobile graphics guide</Link>.
          </p>
          <p>
            Guildframe&apos;s <Link href="/campaign-design">campaign design service</Link>{" "}
            can help turn confirmed product facts into copy and graphics. See the{" "}
            <Link href="/work">three campaign design case studies</Link> for that
            separate creative work.
          </p>
        </aside>
      </SeoArticlePage>
    </>
  );
}
