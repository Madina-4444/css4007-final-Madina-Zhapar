import test from "node:test";
import assert from "node:assert/strict";

import { ask } from "../src/agent.mjs";

test("agent answers ANOVA question", () => {
  const result = ask("ANOVA");

  assert.ok(result.includes("Analysis of Variance"));
});

test("agent handles unknown topics", () => {
  const result = ask("UnknownTopic");

  assert.equal(
    result,
    "Topic not found in the statistics knowledge base."
  );
});
