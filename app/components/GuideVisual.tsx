/**
 * Server-rendered infographics for guides, resources and service pages.
 * Every word stays in the HTML so search engines and AI answers can read it.
 * Data lives beside the content (a `visual` on a guide section, or passed
 * directly by a page). Keep labels short and every figure sourced.
 */

export type GuideVisualStep = { label: string; detail?: string };
export type GuideVisualColumn = { name: string; points: string[]; verdict?: string; highlight?: boolean };
export type GuideVisualBar = { label: string; value: number; display?: string; highlight?: boolean };
export type GuideVisualStat = { value: string; label: string; note?: string };
export type GuideVisualEvent = { when: string; label: string; detail?: string; highlight?: boolean };
export type GuideVisualPart = { label: string; share: number; display?: string };
export type GuideVisualGroup = { name: string; items: string[] };
export type GuideVisualFlowNode = { question: string; yes: string; no: string };
export type GuideVisualTip = { label: string; text: string };

type Base = { title: string; caption?: string; source?: string };

export type GuideVisualData =
  | (Base & { kind: "steps"; steps: GuideVisualStep[] })
  | (Base & { kind: "compare"; columns: GuideVisualColumn[] })
  | (Base & { kind: "bars"; unit?: string; bars: GuideVisualBar[] })
  | (Base & { kind: "stats"; stats: GuideVisualStat[] })
  | (Base & { kind: "timeline"; events: GuideVisualEvent[] })
  | (Base & { kind: "split"; total?: string; parts: GuideVisualPart[] })
  | (Base & { kind: "checklist"; groups: GuideVisualGroup[] })
  | (Base & { kind: "flow"; start: string; nodes: GuideVisualFlowNode[]; end: string })
  | (Base & { kind: "tips"; tips: GuideVisualTip[] });

function Caption({ data }: { data: GuideVisualData }) {
  if (!data.caption && !data.source) return null;
  return (
    <figcaption className="gv-caption">
      {data.caption}
      {data.caption && data.source ? " " : null}
      {data.source ? <span className="gv-source">Source: {data.source}</span> : null}
    </figcaption>
  );
}

function Body({ data }: { data: GuideVisualData }) {
  switch (data.kind) {
    case "steps":
      return (
        <ol className="gv-steps">
          {data.steps.map((step, i) => (
            <li key={step.label}>
              <span className="gv-token" aria-hidden="true">{i + 1}</span>
              <strong>{step.label}</strong>
              {step.detail ? <span>{step.detail}</span> : null}
            </li>
          ))}
        </ol>
      );
    case "compare":
      return (
        <div className="gv-compare" style={{ ["--gv-cols" as string]: String(data.columns.length) }}>
          {data.columns.map((col) => (
            <section key={col.name} className={col.highlight ? "is-highlight" : undefined}>
              <h3>{col.name}</h3>
              <ul>{col.points.map((p) => <li key={p}>{p}</li>)}</ul>
              {col.verdict ? <p className="gv-verdict">{col.verdict}</p> : null}
            </section>
          ))}
        </div>
      );
    case "bars": {
      const max = Math.max(...data.bars.map((b) => b.value), 1);
      return (
        <ul className="gv-bars">
          {data.bars.map((bar) => (
            <li key={bar.label} className={bar.highlight ? "is-highlight" : undefined}>
              <span className="gv-bar-label">{bar.label}</span>
              <span className="gv-bar-track" aria-hidden="true">
                <span className="gv-bar-fill" style={{ width: `${Math.max(2, (bar.value / max) * 100)}%` }} />
              </span>
              <span className="gv-bar-value">{bar.display ?? `${bar.value}${data.unit ?? ""}`}</span>
            </li>
          ))}
        </ul>
      );
    }
    case "stats":
      return (
        <dl className="gv-stats">
          {data.stats.map((s) => (
            <div key={`${s.value}-${s.label}`}>
              <dt>{s.value}</dt>
              <dd>
                <strong>{s.label}</strong>
                {s.note ? <span>{s.note}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      );
    case "timeline":
      return (
        <ol className="gv-timeline">
          {data.events.map((e) => (
            <li key={`${e.when}-${e.label}`} className={e.highlight ? "is-highlight" : undefined}>
              <span className="gv-when">{e.when}</span>
              <strong>{e.label}</strong>
              {e.detail ? <span>{e.detail}</span> : null}
            </li>
          ))}
        </ol>
      );
    case "split": {
      const sum = data.parts.reduce((t, p) => t + p.share, 0) || 1;
      return (
        <div className="gv-split">
          {data.total ? <p className="gv-split-total">{data.total}</p> : null}
          <div className="gv-split-bar" aria-hidden="true">
            {data.parts.map((p, i) => (
              <span key={p.label} className={`gv-split-seg gv-seg-${(i % 6) + 1}`} style={{ flexGrow: p.share / sum }} />
            ))}
          </div>
          <ul className="gv-split-legend">
            {data.parts.map((p, i) => (
              <li key={p.label}>
                <span className={`gv-swatch gv-seg-${(i % 6) + 1}`} aria-hidden="true" />
                <strong>{p.display ?? `${Math.round((p.share / sum) * 100)}%`}</strong> {p.label}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    case "flow":
      return <FlowBody data={data} />;
    case "tips":
      return (
        <ul className="gv-tips">
          {data.tips.map((t) => (
            <li key={t.label}>
              <strong>{t.label}</strong>
              <span>{t.text}</span>
            </li>
          ))}
        </ul>
      );
    case "checklist":
      return (
        <div className="gv-checklist">
          {data.groups.map((g) => (
            <section key={g.name}>
              <h3>{g.name}</h3>
              <ul>{g.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ))}
        </div>
      );
  }
}

function FlowBody({ data }: { data: Extract<GuideVisualData, { kind: "flow" }> }) {
  return (
    <ol className="gv-flow">
      <li className="gv-flow-start"><strong>{data.start}</strong></li>
      {data.nodes.map((n) => (
        <li key={n.question} className="gv-flow-node">
          <p className="gv-flow-q">{n.question}</p>
          <p className="gv-flow-no"><span className="gv-flow-tag">No</span>{n.no}</p>
          <p className="gv-flow-yes"><span className="gv-flow-tag">Yes</span>{n.yes}</p>
        </li>
      ))}
      <li className="gv-flow-end"><strong>{data.end}</strong></li>
    </ol>
  );
}

export function GuideVisual({ data }: { data: GuideVisualData }) {
  return (
    <figure className={`gv gv--${data.kind}`}>
      <p className="gv-title">{data.title}</p>
      <Body data={data} />
      <Caption data={data} />
    </figure>
  );
}
