/**
 * Cent-Exact Bill & Tip Allocation Engine + Model Efficiency Scorer
 * Guarantees sum(allocationsCents) === totalWithTipCents with zero floating-point drift.
 */

export function allocateBillExactCents({ subtotalCents = 14850, tipPct = 18, peopleCount = 4 } = {}) {
  const safePeople = Math.max(1, Math.floor(peopleCount));
  const tipCents = Math.round((subtotalCents * tipPct) / 100);
  const totalCents = subtotalCents + tipCents;
  const baseShare = Math.floor(totalCents / safePeople);
  const remainder = totalCents - baseShare * safePeople;

  const sharesCents = Array.from({ length: safePeople }, (_, idx) =>
    idx < remainder ? baseShare + 1 : baseShare
  );

  return {
    subtotalCents,
    tipCents,
    totalCents,
    peopleCount: safePeople,
    sharesCents,
    sumMatchesTotal: sharesCents.reduce((a, b) => a + b, 0) === totalCents
  };
}
