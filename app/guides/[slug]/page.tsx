import Link from "next/link";
import { notFound } from "next/navigation";
import { launchGuides, launchGuideDate } from "../../launch-guides";
import { pageMetadata } from "../../site-config";
import { SeoArticlePage, ArticleTable } from "../../components/SeoArticlePage";

export const dynamicParams = false;
export function generateStaticParams() { return launchGuides.map(g => ({ slug: g.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = launchGuides.find(g => g.slug === slug);
  if (!g) notFound();
  return pageMetadata({ title: g.seoTitle ?? g.title, description: g.description, path: `/guides/${slug}`, kind: "article", publishedTime: launchGuideDate, modifiedTime: launchGuideDate });
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = launchGuides.find(g => g.slug === slug);
  if (!g) notFound();
  const words = [g.title, g.description, g.answer, ...g.sections.flatMap(s => [s.title, ...s.paragraphs, ...(s.list ?? []), ...(s.table?.headers ?? []), ...(s.table?.rows.flat() ?? [])]), ...g.faqs.flatMap(f => [f.question, f.answer])].join(" ").split(/\s+/).length;
  const related = g.relatedSlugs.map(slug => launchGuides.find(guide => guide.slug === slug)).filter(guide => guide !== undefined);
  return <SeoArticlePage slug={g.slug} title={g.title} description={g.description} category={g.tag} answer={g.answer} published={launchGuideDate} updated={launchGuideDate} readTime={`${Math.max(1, Math.ceil(words / 200))} min read`} toc={g.sections.map(s => ({ id: s.id, label: s.title }))} faqs={g.faqs} sources={g.sources}>
    {g.sections.map(s => <section key={s.id}>
      <h2 id={s.id}>{s.title}</h2>
      {s.paragraphs.map(p => <p key={p}>{p}</p>)}
      {s.list && <ul>{s.list.map(x => <li key={x}>{x}</li>)}</ul>}
      {s.table && <ArticleTable caption={s.title} headers={s.table.headers} rows={s.table.rows} />}
      {s.source !== undefined && <p className="article-source-note">Source: <a href={g.sources[s.source].href}>{g.sources[s.source].label}</a>.</p>}
    </section>)}
    <aside className="article-callout"><strong>Need copy and graphics for your page?</strong><p><Link href={g.servicePath}>{g.serviceLabel}</Link> costs $975 USD. Send your game summary and artwork through the form below for a free opening mockup.</p></aside>
    <nav className="gf-service-related" aria-label="Related launch guides">{related.map(guide => <Link key={guide.slug} href={`/guides/${guide.slug}`}>{guide.title} ↗</Link>)}</nav>
  </SeoArticlePage>;
}
