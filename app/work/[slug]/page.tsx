import { notFound } from "next/navigation";
import { caseStudies, workDate, workPublishedDate } from "../../case-studies";
import { CaseStudyStory } from "../../components/work/CaseStudyStory";
import { pageMetadata } from "../../site-config";

export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = caseStudies.find(p => p.slug === slug);
  if (!p) notFound();
  return pageMetadata({ title: p.seoTitle, description: p.description, path: `/work/${p.slug}`, kind: "article", publishedTime: workPublishedDate, modifiedTime: workDate });
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = caseStudies.find(p => p.slug === slug);
  if (!p) notFound();
  return <CaseStudyStory
    project={p}
    path={`/work/${p.slug}`}
    title={`${p.name}: campaign design`}
    published={workPublishedDate}
    updated={workDate}
    readTime="4 min read"
    faqs={[{ question: "What did Umair contribute to this campaign?", answer: p.role }, { question: "Are these paid advertising results?", answer: "This case study describes campaign presentation and creative. It does not attribute the campaign total to Guildframe advertising or report an ad return." }]}
    sources={[{ label: `${p.name} published campaign`, publisher: "Kickstarter", href: p.href }]}
  />;
}
