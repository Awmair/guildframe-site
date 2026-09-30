import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

export const metadata = pageMetadata({
  title: "Build a Tabletop Shopify Store With AI",
  description:
    "What AI coding tools can and cannot do when you build a board game, TTRPG or miniatures Shopify store, and the catalog decisions no model can make for you.",
  path: "/guides/build-a-tabletop-shopify-store-with-ai",
  kind: "article",
  publishedTime: contentDates.buildWithAi,
  modifiedTime: contentDates.buildWithAi,
  keywords: [
    "build a Shopify store with AI",
    "vibe coding Shopify theme",
    "AI Shopify theme development",
    "Claude Code Shopify",
    "board game Shopify store",
  ],
});

const faqs = [
  {
    question: "Can AI build a complete Shopify theme from scratch?",
    answer:
      "It can generate the files, and that is not the same as a finished storefront. AI coding tools produce workable Liquid sections, templates and CSS, but you still have to decide the catalog structure, verify the settings schema is operable by a merchant, check accessibility and mobile behaviour, and confirm every platform detail against current Shopify documentation. Treat the output as a first draft written by someone fast who has never seen your product line.",
  },
  {
    question: "Is it safe to use AI generated Liquid on a live store?",
    answer:
      "Not directly. Work on a development theme or a development store, keep the theme in version control, and preview every change before publishing. Shopify checkout cannot be edited from a theme, which removes the highest risk area, but a generated section can still break your cart, slow the page or ship inaccessible markup.",
  },
  {
    question: "Which AI tool is best for Shopify theme work?",
    answer:
      "The tool matters less than whether it can read current Shopify documentation and validate what it writes. Shopify publishes an official AI Toolkit that connects Claude Code, Codex, Cursor, Antigravity CLI, Hermes and Visual Studio Code to its developer docs, API schemas and Liquid validation. Use whichever of those you already know, and install the toolkit before you start.",
  },
  {
    question: "How much does building it yourself with AI actually save?",
    answer:
      "You save the build fee and pay in time and risk. The generation is fast, and the catalog modelling, testing, accessibility work and fixing what the model got wrong are not. If your catalog is a single game with two editions, building it yourself is realistic. If it has multiple editions, expansions, add ons and a fixed launch date, the time cost usually exceeds what people expect.",
  },
];

export default function BuildWithAiGuidePage() {
  return (
    <SeoArticlePage
      slug="build-a-tabletop-shopify-store-with-ai"
      category="AI assisted Shopify builds"
      title="Build a Tabletop Shopify Store With AI"
      description="Use AI coding tools for Shopify theme work, then check the code, editor settings and product data before publishing."
      answer="AI coding tools can draft Shopify Liquid sections, product copy and structured data. Theme code cannot modify Shopify checkout. You still need to define editions, expansions, compatibility and delivery terms, then verify the generated code against Shopify documentation and test the store."
      published={contentDates.buildWithAi}
      updated={contentDates.buildWithAi}
      readTime="9 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Shopify AI Toolkit",
          publisher: "Shopify",
          href: "https://shopify.dev/docs/apps/build/ai-toolkit",
        },
        {
          label: "Build on Shopify with the AI tools you already use",
          publisher: "Shopify",
          href: "https://www.shopify.com/build-with-ai",
        },
        {
          label: "Shopify metafield definitions",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/custom-data/metafields/metafield-definitions",
        },
        {
          label: "Dawn theme repository",
          publisher: "Shopify on GitHub",
          href: "https://github.com/Shopify/dawn",
        },
      ]}
      toc={[
        { id: "what-it-means", label: "What it actually means" },
        { id: "where-it-helps", label: "Where AI helps" },
        { id: "where-it-breaks", label: "Where it breaks" },
        { id: "what-ai-cannot-know", label: "The part no model knows" },
        { id: "setup", label: "A working setup" },
        { id: "sample-prompts", label: "Three prompts to start" },
        { id: "when-to-stop", label: "When to stop" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Vibe coding, on Shopify">
        Describing what you want in plain language and letting an AI coding tool
        write and edit the code. On Shopify that means it edits your theme:
        Liquid templates, section files, JSON settings, CSS and JavaScript. It
        does not mean the tool builds your business logic, and it cannot touch
        checkout, which Shopify controls.
      </ArticleDefinition>

      <h2 id="what-it-means">What building with AI actually means on Shopify</h2>
      <p>
        A Shopify storefront is a theme: a folder of Liquid templates, section
        files and settings that Shopify renders around its own commerce engine.
        An AI coding tool opens that folder and edits it the way it would edit
        any other codebase. Those edits change the storefront shown to customers.
      </p>
      <p>
        Check three boundaries before you start. Checkout belongs to
        Shopify and cannot be edited from a theme. Anything requiring server
        side logic belongs in an app, not a theme. And the theme editor is the
        interface your future self uses to run the store, so a section that
        works but exposes no settings is a section you will be editing in code
        forever.
      </p>
      <p>
        Shopify now publishes an official AI Toolkit that connects coding tools
        to its developer documentation, API schemas and validation for Liquid
        and GraphQL. That matters more than the choice of tool, because the most
        common failure in AI generated Shopify code is confident invention of
        settings keys and API fields that do not exist.
      </p>

      <h2 id="where-it-helps">Where AI can help</h2>
      <p>
        AI is useful for repeated work that you can describe and check.
      </p>
      <ul>
        <li>
          Building new theme sections from a clear description, especially
          layout heavy ones like galleries, comparison blocks and content bands.
        </li>
        <li>
          Writing the settings schema so a section is editable in the theme
          editor rather than hardcoded.
        </li>
        <li>
          Planning metafield definitions from a description of your catalog.
        </li>
        <li>
          Drafting product copy, collection descriptions and alt text at volume,
          which you then edit for accuracy.
        </li>
        <li>Generating structured data, with one large caveat covered below.</li>
        <li>
          Repetitive template work: applying one pattern across many templates
          consistently.
        </li>
      </ul>

      <h2 id="where-it-breaks">Common errors to check in generated code</h2>
      <p>
        These are the failures worth expecting rather than discovering at
        launch.
      </p>
      <ArticleTable
        caption="Common failure modes in AI generated Shopify theme code"
        headers={["Area", "What goes wrong", "How to catch it"]}
        rows={[
          ["Settings schema", "Invented setting types and keys that the theme editor rejects", "Validate the schema before previewing, and open every section in the editor"],
          ["Empty states", "A block that renders an empty container when its metafield is unset", "Preview every section on a product that has none of the optional data"],
          ["Mobile behaviour", "Layouts built desktop first that overflow below 400 pixels", "Check every new section at 390 pixels wide before accepting it"],
          ["Accessibility", "Missing labels, unreachable controls and decorative markup announced to screen readers", "Tab through each section, and confirm every control is reachable and named"],
          ["Structured data", "Fabricated review counts and ratings on products that have neither", "Search generated markup for aggregateRating and remove it unless the reviews are real"],
          ["Platform drift", "Code written against an older Shopify API or theme architecture", "Install the Shopify AI Toolkit so the tool validates against current schemas"],
        ]}
      />
      <ArticleCallout>
        <strong>The one to watch hardest:</strong> fabricated{" "}
        <code>aggregateRating</code> in product structured data. Models add it
        because most product markup they have seen contains it. Publishing
        review markup for reviews that do not exist misrepresents your product
        and breaches search engine structured data policy. Check for it every
        time.
      </ArticleCallout>

      <h2 id="what-ai-cannot-know">Define your products before generating pages</h2>
      <p>
        Decide how the products relate before asking the tool to build their pages.
      </p>
      <p>
        A model can write a product page. It cannot tell you whether your deluxe
        edition should be a variant of the core game or its own product. That
        decision changes your inventory, your reporting, your collection pages,
        your URLs and what a customer can actually buy. It depends on facts
        about your line that exist only in your head.
      </p>
      <p>The decisions that no prompt will make for you:</p>
      <ul>
        <li>
          <strong>Editions.</strong> Core, deluxe and collector versions can be
          variants of one product or separate products. Separate products win
          when each needs its own media, description and discoverability.
          Variants can work when one attribute distinguishes the versions.
        </li>
        <li>
          <strong>Expansions.</strong> An expansion is its own product, and it
          needs to state which base game and which edition it requires, in a
          place the customer cannot miss.{" "}
          <Link href="/guides/sell-board-game-expansions-add-ons-shopify">
            The expansions and add ons guide
          </Link>{" "}
          covers the structure in full.
        </li>
        <li>
          <strong>Add ons.</strong> Campaign add ons are not pledge tiers.
          Rebuilding pledge tiers as Shopify products is the most common
          post campaign mistake.
        </li>
        <li>
          <strong>Preorders.</strong> The product status, payment approach,
          inventory rule and delivery language have to agree with each other.
          See{" "}
          <Link href="/guides/sell-board-game-preorders-on-shopify">
            the Shopify preorder guide
          </Link>
          .
        </li>
        <li>
          <strong>Backer boundaries.</strong> A backer fulfilling a pledge and a
          customer placing a retail order are different promises.{" "}
          <Link href="/guides/kickstarter-late-pledges-vs-shopify">
            Late pledges versus Shopify
          </Link>{" "}
          explains where each belongs.
        </li>
      </ul>
      <p>
        Feed those decisions to the tool as constraints and the output improves
        immediately. Skip them and you get a competent generic store that cannot
        express what you sell.
      </p>

      <h2 id="setup">A working setup</h2>
      <p>Whatever tool you use, the shape is the same.</p>
      <ol>
        <li>
          <strong>A development store or a development theme.</strong> Never
          edit a live theme directly.
        </li>
        <li>
          <strong>The Shopify CLI</strong>, so you can pull the theme, preview
          locally and push changes deliberately.
        </li>
        <li>
          <strong>Git.</strong> AI edits many files at once, and the ability to
          read a diff and revert cleanly is what makes the workflow safe.
        </li>
        <li>
          <strong>The Shopify AI Toolkit</strong>, so the tool reads current
          documentation and validates Liquid and GraphQL rather than guessing.
        </li>
        <li>
          <strong>A theme foundation.</strong> Dawn is lighter and simpler.
          Horizon is the newer default with deeper nested blocks and more
          flexibility, at the cost of a heavier structure. Either works. Neither
          ships the comparison, bundle or specification blocks a tabletop
          catalog needs, which is precisely the part you are building.
        </li>
        <li>
          <strong>A project rules file</strong> describing your conventions,
          your metafield namespace, and which files the tool must never touch.
          Without it, the model re invents your structure on every run.
        </li>
      </ol>

      <h2 id="sample-prompts">Three prompts to start with</h2>
      <p>
        These are written to be used as they are. Each one includes what it gets
        wrong, because the failure is the part that saves you time.
      </p>

      <h3>1. The project rules file</h3>
      <p>
        Run this first, in the theme repository, before any build prompt.
      </p>
      <blockquote>
        Read this Shopify theme repository and write a project rules file for
        yourself. Document the theme architecture, where sections, snippets and
        templates live, the CSS conventions already in use, and the naming
        pattern for section settings. List the files you must never edit
        directly. State that checkout is not editable from the theme. Add a rule
        that every new section must expose a settings schema, handle the case
        where optional content is empty, and work at 390 pixels wide. Ask me for
        anything you cannot determine from the repository rather than assuming
        it.
      </blockquote>
      <p>
        <strong>What it gets wrong:</strong> it will confidently document
        settings conventions that are not actually in the theme. Read the file
        and correct it before relying on it, because everything downstream
        inherits its mistakes.
      </p>

      <h3>2. The verification prompt</h3>
      <p>
        Run this after any prompt that produced code. It is the single most
        useful prompt in this workflow.
      </p>
      <blockquote>
        Review the code you just wrote. List every Shopify specific detail in it
        that you could not verify against current Shopify documentation,
        including setting types, Liquid objects, filters and API fields.
        Separately, list anything you inferred about my products rather than
        being told. Do not fix anything yet. Just tell me what is unverified.
      </blockquote>
      <p>
        <strong>Why it works:</strong> it converts silent invention into a list
        you can check. Anything that appears in the unverified list is where
        your store will break. Anything in the inferred list is a catalog
        decision you should be making rather than the model.
      </p>

      <h3>3. A tabletop product page section</h3>
      <blockquote>
        Build a Shopify theme section that displays what is in the box for a
        board game product. It reads a list metafield for components. It must
        expose a settings schema so a merchant can change the heading and toggle
        the section, render nothing at all when the metafield is empty rather
        than showing an empty container, use semantic list markup, and remain
        readable at 390 pixels wide. Do not invent metafield keys. Ask me for
        the exact namespace and key first.
      </blockquote>
      <p>
        <strong>What it gets wrong:</strong> without the final two sentences it
        will invent a metafield namespace, and the section will render nothing
        on a real store. The empty state and the mobile width are the two
        constraints models drop most often when they are not stated explicitly.
      </p>
      <ArticleCallout>The <Link href="/resources/tabletop-shopify-metafield-schema">tabletop metafield schema</Link> is published in full and free to use. Pair it with the examples in this guide.</ArticleCallout>

      <h2 id="when-to-stop">When to stop and hire someone</h2>
      <p>
        Consider getting help when:
      </p>
      <ul>
        <li>
          You have spent three days on a bug you still cannot describe
          accurately.
        </li>
        <li>
          Your launch date is fixed and tied to fulfilment or a campaign update.
        </li>
        <li>
          Your catalog has more than roughly twenty products with edition and
          expansion relationships between them.
        </li>
        <li>
          You cannot answer what happens when a backer emails about their pledge
          without guessing.
        </li>
        <li>
          You are about to publish a delivery promise you have not checked
          against your actual fulfilment schedule.
        </li>
      </ul>
      <p>
        Check the delivery promise against your fulfilment schedule before publishing. Use the{" "}
        <Link href="/done-for-you-shopify-store">
          store planning page
        </Link>{" "}
        to prepare your requirements, and{" "}
        <Link href="/guides/how-much-does-a-board-game-website-cost">
          the cost guide
        </Link>{" "}
        sets out what each route actually costs.
      </p>
    </SeoArticlePage>
  );
}
