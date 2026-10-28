import Link from "next/link";
import { guideWorkbooks } from "../guide-workbooks";

export function GuideWorkbookSection({slug}:{slug:string}) {
  const workbook=guideWorkbooks[slug];
  if(!workbook) return null;
  return <section className="guide-workbook" aria-labelledby="put-it-to-work">
    <div className="guide-workbook-heading"><span>Put it to work</span><h2 id="put-it-to-work">{workbook.goal}</h2></div>
    <ol className="guide-action-list">{workbook.actions.map((action,index)=><li key={action}><span aria-hidden="true">{String(index+1).padStart(2,"0")}</span><p>{action}</p></li>)}</ol>
    <div className="guide-workbook-example"><h3>A planning example</h3><p>{workbook.example}</p></div>
    <div className="guide-workbook-check"><h3>How to check your work</h3><p>{workbook.check}</p></div>
    <a className="guide-download" href={`/downloads/guides/${slug}.md`} download>Download the working checklist</a>
  </section>;
}
const paths=[
 {href:"/guides/board-game-kickstarter-funding-goal",label:"Set a deliverable funding goal",description:"Check production commitments and cash needs."},
 {href:"/guides/board-game-kickstarter-reward-pricing",label:"Price each reward",description:"Compare contribution across the core game and upgrades."},
 {href:"/guides/kickstarter-referral-tags-tracking",label:"Track your campaign links",description:"Keep traffic, pledges and collected revenue separate."},
 {href:"/guides/board-game-reviewer-outreach",label:"Plan reviewer previews",description:"Prepare prototypes, permissions and a realistic schedule."},
 {href:"/guides/board-game-kickstarter-launch-day-checklist",label:"Prepare launch day",description:"Give publication, announcements and support clear owners."},
 {href:"/guides/board-game-pledge-manager-checklist",label:"Test your pledge manager",description:"Check orders, payments and fulfilment exports."},
 {href:"/guides/board-game-kickstarter-marketing-plan",label:"Build your launch plan",description:"Put the work in order and name the owners."},
 {href:"/guides/kickstarter-advertising-budget-board-games",label:"Check your campaign budget",description:"Separate reward costs, service fees and ad spend."},
 {href:"/guides/board-game-kickstarter-page-checklist",label:"Review the campaign page",description:"Test what a new backer can understand."},
 {href:"/work",label:"See real campaign work",description:"Explore three projects and the creative decisions behind them."},
];
export function GuideReadingPath({slug}:{slug:string}) {
 const match = /budget|cost|pricing|funding|stretch|reward/.test(slug) ? [0,1,2,7] : /email|marketing|agency|prelaunch|tracking/.test(slug) ? [2,3,4,6] : /shopify|pledge|funded|international/.test(slug) ? [5,1,8,9] : [3,4,8,9];
 const selected = match.map(i=>paths[i]).filter(p=>p.href!==`/guides/${slug}`);
 return <nav className="guide-reading-path" aria-label="Continue planning your launch"><h2>Keep planning your launch</h2><div>{selected.map(p=><Link key={p.href} href={p.href}><strong>{p.label}</strong><span>{p.description}</span></Link>)}</div></nav>;
}
