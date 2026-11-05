import assert from "node:assert/strict";
import test from "node:test";
import { calculateLaunchEconomics } from "../app/launch-economics.ts";

const example = { pledge: 60, variableCost: 30, feesPercent: 8, failedPercent: 5, reserve: 5, adSpend: 1000, fixedFees: 500, costPerLead: 2, conversionPercent: 5 };
test("keeps collected revenue, reserve, media and fixed fees separate", () => {
  const result = calculateLaunchEconomics(example);
  assert.ok(result);
  assert.equal(result.leads, 500);
  assert.equal(result.expectedPledges, 25);
  assert.equal(result.collectedBackers, 23.75);
  assert.ok(Math.abs(result.available - 20.2) < 1e-8);
  assert.ok(Math.abs(result.headroom - -1020.25) < 1e-8);
  assert.ok(Math.abs(result.ceilingPerLead - 0.9595) < 1e-8);
  assert.equal(result.requiredCollectedBackers, 75);
});
test("does not count failed pledges as collected revenue", () => {
  const result = calculateLaunchEconomics({...example, failedPercent: 100});
  assert.equal(result.collectedBackers, 0);
  assert.equal(result.headroom, -1500);
  assert.equal(result.ceilingPerLead, 0);
});
test("zero conversion and zero spend remain explicit scenarios", () => {
  assert.equal(calculateLaunchEconomics({...example, conversionPercent: 0}).headroom, -1500);
  assert.equal(calculateLaunchEconomics({...example, adSpend: 0}).headroom, -500);
});
test("a reward without contribution has no break even backer count", () => {
  const result = calculateLaunchEconomics({...example, variableCost: 70});
  assert.equal(result.requiredCollectedBackers, null);
  assert.equal(result.ceilingPerLead, 0);
  assert.ok(result.headroom < -1500);
});
test("rejects unsafe or incomplete numeric scenarios", () => {
  for (const patch of [{pledge: 0}, {costPerLead: 0}, {adSpend: -1}, {feesPercent: 100}, {failedPercent: 101}, {conversionPercent: 101}, {variableCost: NaN}, {reserve: Infinity}, {adSpend: Number.MAX_VALUE, costPerLead: Number.MIN_VALUE}]) {
    assert.equal(calculateLaunchEconomics({...example, ...patch}), null);
  }
});

test("an exact decimal break even does not invent another backer or a loss", () => {
  const result = calculateLaunchEconomics({pledge:1, variableCost:0.9, feesPercent:0, failedPercent:0, reserve:0, adSpend:1, fixedFees:0, costPerLead:0.1, conversionPercent:100});
  assert.equal(result.requiredCollectedBackers, 10);
  assert.equal(result.headroom, 0);
  const shortfall = calculateLaunchEconomics({pledge:1, variableCost:0.9, feesPercent:0, failedPercent:0, reserve:0, adSpend:1, fixedFees:0.01, costPerLead:0.1, conversionPercent:100});
  assert.equal(shortfall.requiredCollectedBackers, 11);
  assert.equal(shortfall.headroom, -0.01);
});
