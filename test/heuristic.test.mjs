import test from "node:test";
import assert from "node:assert/strict";

import { analyzeHeuristic } from "../dist/heuristic.js";

test("analyzeHeuristic returns bounded scores and a verdict", () => {
  const result = analyzeHeuristic(Buffer.alloc(4096, 0));

  for (const value of Object.values(result.scores)) {
    assert.ok(value >= 0 && value <= 100);
  }

  assert.ok(result.vibe_coded_probability >= 0 && result.vibe_coded_probability <= 100);
  assert.ok(Array.isArray(result.red_flags));
  assert.ok(Array.isArray(result.good_parts));
  assert.ok(typeof result.verdict === "string" && result.verdict.length > 0);
});
