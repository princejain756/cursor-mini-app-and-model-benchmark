import test from "node:test";
import assert from "node:assert/strict";
import { allocateBillExactCents } from "../src/exact-cents-allocator.mjs";

test("Cent-exact tip allocator eliminates penny rounding drift across uneven splits", () => {
  const split = allocateBillExactCents({ subtotalCents: 10000, tipPct: 17, peopleCount: 3 });
  assert.equal(split.totalCents, 11700);
  assert.equal(split.sumMatchesTotal, true);

  const uneven = allocateBillExactCents({ subtotalCents: 9999, tipPct: 15, peopleCount: 7 });
  assert.equal(uneven.sumMatchesTotal, true);
  assert.equal(uneven.sharesCents.length, 7);
});
