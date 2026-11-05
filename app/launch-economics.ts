export type LaunchEconomicsInput = {
  pledge: number;
  variableCost: number;
  feesPercent: number;
  failedPercent: number;
  reserve: number;
  adSpend: number;
  fixedFees: number;
  costPerLead: number;
  conversionPercent: number;
};

export function calculateLaunchEconomics(input: LaunchEconomicsInput) {
  const values = Object.values(input);
  if (values.some(value => !Number.isFinite(value) || value < 0)
    || input.pledge <= 0 || input.costPerLead <= 0
    || input.feesPercent >= 100 || input.failedPercent > 100
    || input.conversionPercent > 100) return null;

  // Remove binary arithmetic noise before comparing a monetary balance or
  // rounding a required count up. Keep more precision than the displayed cents.
  const stable = (value: number) => Number(value.toPrecision(14));
  const contribution = stable(input.pledge * (1 - input.feesPercent / 100) - input.variableCost);
  const available = stable(contribution - input.reserve);
  const leads = input.adSpend / input.costPerLead;
  const expectedPledges = leads * input.conversionPercent / 100;
  const collectedBackers = expectedPledges * (1 - input.failedPercent / 100);
  const grossContribution = stable(collectedBackers * available);
  const headroom = stable(grossContribution - stable(input.adSpend + input.fixedFees));
  const ceilingPerLead = Math.max(0, available) * input.conversionPercent / 100 * (1 - input.failedPercent / 100);
  const requiredCollectedBackers = available > 0 ? Math.ceil(stable((input.adSpend + input.fixedFees) / available)) : null;
  const result = { contribution, available, leads, expectedPledges, collectedBackers, headroom, ceilingPerLead, requiredCollectedBackers };
  if (Object.values(result).some(value => value !== null && !Number.isFinite(value))) return null;
  return result;
}
