"use client";

import { useState } from "react";
import Link from "next/link";
import { calculateLaunchEconomics, type LaunchEconomicsInput } from "../launch-economics";

const defaults = { pledge: "60", variableCost: "30", feesPercent: "8", failedPercent: "5", reserve: "5", adSpend: "1000", fixedFees: "500", costPerLead: "2", conversionPercent: "5" };
const fields: { key: keyof LaunchEconomicsInput; label: string; help: string; max?: number }[] = [
  { key: "pledge", label: "Average pledge collected", help: "Use the reward value, excluding pass through shipping and tax." },
  { key: "variableCost", label: "Variable cost per collected reward", help: "Production, packing, delivery you cover and any fixed transaction charge." },
  { key: "adSpend", label: "Planned media spend", help: "The amount paid to the advertising platform." },
  { key: "costPerLead", label: "Assumed cost per signup", help: "Use a valid, permission based email signup. This is not a backer." },
  { key: "conversionPercent", label: "Signups who pledge (%)", help: "Your assumption before failed payments. Try a weaker scenario too.", max: 100 },
  { key: "fixedFees", label: "Fixed marketing and creative fees", help: "Only the fixed costs you want this audience to cover." },
  { key: "feesPercent", label: "Effective platform and payment fees (%)", help: "Replace the example with your current fee terms.", max: 99.99 },
  { key: "failedPercent", label: "Pledges not collected (%)", help: "Pledges that do not become a paid reward.", max: 100 },
  { key: "reserve", label: "Reserve per collected reward", help: "Money to retain before paying for acquisition." },
];
const number = (value: number) => value.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });

export function LaunchEconomicsCalculator() {
  const [inputs, setInputs] = useState(defaults);
  const parsed = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, value.trim() === "" ? NaN : Number(value)])) as LaunchEconomicsInput;
  const result = calculateLaunchEconomics(parsed);
  const renderField = (field: typeof fields[number]) => <label key={field.key} htmlFor={`economics-${field.key}`}>
    <span>{field.label}</span>
    <input id={`economics-${field.key}`} type="number" inputMode="decimal" min={field.key === "pledge" || field.key === "costPerLead" ? "0.01" : "0"} max={field.max} step="any" value={inputs[field.key]} aria-describedby={`economics-${field.key}-help`} onChange={event => setInputs(current => ({...current, [field.key]: event.target.value}))}/>
    <small id={`economics-${field.key}-help`}>{field.help}</small>
  </label>;
  return <section className="funding-calculator launch-economics" aria-labelledby="launch-economics-title" id="advertising-calculator">
    <span className="economics-eyebrow">Use your own numbers</span>
    <h2 id="launch-economics-title">Can your rewards support the ad budget?</h2>
    <p>Change the assumptions to see what remains after reward costs, advertising and fixed fees. Use one currency throughout. The starting values are an invented example, not typical campaign results.</p>
    <div className="funding-fields">{fields.slice(0, 6).map(renderField)}</div>
    <details className="economics-assumptions"><summary>Adjust fees, failed payments and reserve</summary><div className="funding-fields">{fields.slice(6).map(renderField)}</div></details>
    <div className="economics-results" role="status" aria-live="polite" aria-atomic="true">
      {result ? <>
        <div className="economics-main-result"><span>Remaining after these costs and reserve</span><strong>{number(result.headroom)}</strong><p>{result.headroom < 0 ? "This scenario does not cover the costs entered. Test lower acquisition costs, stronger margins or a smaller fixed scope." : "This scenario covers the costs entered. Check the assumptions and the rest of your production budget before committing spend."}</p></div>
        <dl><div><dt>Illustrative signups</dt><dd>{number(result.leads)}</dd></div><div><dt>Illustrative collected backers</dt><dd>{number(result.collectedBackers)}</dd></div><div><dt>Available per collected reward</dt><dd>{number(result.available)}</dd></div><div><dt>Lead cost ceiling before fixed fees</dt><dd>{number(result.ceilingPerLead)}</dd></div><div><dt>Collected backers needed to cover entered spend and fixed fees</dt><dd>{result.requiredCollectedBackers === null ? "No break even at this margin" : result.requiredCollectedBackers.toLocaleString("en-US")}</dd></div></dl>
      </> : <p>Complete every field with a valid number. Pledge value and signup cost must be above zero. Percentages must be between 0 and 100, with fees below 100.</p>}
    </div>
    <details className="economics-formulas"><summary>See the calculation and its limits</summary>
      <p>Available per collected reward = pledge × (1 − fee rate) − variable cost − reserve.</p>
      <p>Collected backers = media spend ÷ signup cost × pledge conversion rate × (1 − failed payment rate). Decimal backer counts are scenario averages, not predicted people.</p>
      <p>Remaining = collected backers × available per reward − media spend − fixed fees. The lead cost ceiling uses the same conversion and failure assumptions but excludes fixed fees.</p>
      <p>This models one average reward and a paid signup audience. It excludes minimum factory orders, unsold stock, tax, cash timing, other audiences and any costs you have not entered. Do not add email subscribers to platform followers without removing overlap.</p>
    </details>
    <noscript><p>The starting example is shown above. Enable JavaScript to change the values, or use the formulas with the downloadable worksheet.</p></noscript>
    <p className="economics-next"><a href="/downloads/launch-ad-budget-scenarios.csv" download>Download the worked scenario</a><Link href="/resources/tabletop-kickstarter-launch-kit">Get the editable launch kit</Link></p>
  </section>;
}
