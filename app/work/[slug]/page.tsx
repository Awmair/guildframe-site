import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, workDate } from "../../case-studies";
import { SeoArticlePage } from "../../components/SeoArticlePage";
import { ResponsiveImage } from "../../components/ResponsiveImage";
import { pageMetadata } from "../../site-config";

export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = caseStudies.find(p => p.slug === slug);
  if (!p) notFound();
  return pageMetadata({ title: p.seoTitle, description: p.description, path: `/work/${p.slug}`, kind: "article", publishedTime: workDate, modifiedTime: workDate });
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = caseStudies.find(p => p.slug === slug);
  if (!p) notFound();
  return <SeoArticlePage slug={p.slug} path={`/work/${p.slug}`} collectionLabel="Past work" collectionHref="/work" category={p.category} title={`${p.name}: campaign design`} description={p.description} answer={p.brief} published={workDate} updated={workDate} readTime="4 min read" toc={[{ id: "role", label: "My contribution" }, { id: "presentation", label: "The campaign presentation" }, { id: "takeaway", label: "For your own launch" }]} faqs={[{question: "What did Umair contribute to this campaign?", answer: p.role}, {question: "Are these paid advertising results?", answer: "This case study describes campaign presentation and creative. It does not attribute the campaign total to Guildframe advertising or report an ad return."}]} sources={[{ label: `${p.name} published campaign`, publisher: "Kickstarter", href: p.href }]}>
    <figure className="gf-case-image"><ResponsiveImage src={`/images/work/${p.image}.webp`} alt={p.alt} width={1200} height={675} sizes="(max-width: 800px) calc(100vw - 40px), 760px" fetchPriority="high" /><figcaption>{p.imageContext}</figcaption></figure>
    <h2 id="role">My contribution</h2><p>{p.role}</p><p className="gf-case-credit">{p.credit}</p>
    <h2 id="presentation">{p.headline}</h2>
    {p.decisions.map((decision, i) => <section className="gf-case-decision" key={decision.title}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div><h3>{decision.title}</h3><p>{decision.copy}</p></div></section>)}
    {p.testimonial && <figure className="gf-case-quote"><blockquote><p>{p.testimonial.quote}</p></blockquote><figcaption>{p.name} client: {p.testimonial.client}</figcaption></figure>}
    <h2 id="takeaway">What to carry into your own launch</h2><p>{p.lesson}</p>
    <p>For a project like this, send the product details, usable images and proposed rewards together. Mark any specifications that are still changing. That makes it possible to plan the page around what a backer can actually choose.</p>
    <p><Link href={p.servicePath}>{p.serviceLabel}</Link> · <Link href={`/guides/${p.guide}`}>{p.guideLabel}</Link></p>
    <aside className="article-callout"><strong>See the published campaign</strong><p><a href={p.href} target="_blank" rel="noopener noreferrer">Open {p.name} on Kickstarter</a>. This case study describes campaign creative, not paid advertising performance or responsibility for the project&apos;s total funding.</p></aside>
    <nav className="gf-service-related" aria-label="More campaign case studies">{caseStudies.filter(other => other.slug !== p.slug).map(other => <Link key={other.slug} href={`/work/${other.slug}`}>{other.name}</Link>)}</nav>
  </SeoArticlePage>;
}
