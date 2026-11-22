import test from "node:test";
import assert from "node:assert/strict";

import { searchStatisticsTopic } from "../src/tools.mjs";

test("finds ANOVA topic", () => {
  const result = searchStatisticsTopic("ANOVA");

  assert.ok(result.includes("Analysis of Variance"));
});

test("returns not found for unknown topic", () => {
  const result = searchStatisticsTopic("UnknownTopic");

  assert.equal(
    result,
    "Topic not found in the statistics knowledge base."
  );
});

test("throws error when topic is missing", () => {
  assert.throws(() => searchStatisticsTopic());
});

import { generateQuiz } from "../src/tools.mjs";

test("generates structured quiz", async () => {
  const quiz = await generateQuiz("ANOVA", 3);

  assert.equal(quiz.topic, "ANOVA");
  assert.equal(quiz.questions.length, 3);
});

test("rejects invalid question count", async () => {
  await assert.rejects(
    () => generateQuiz("ANOVA", -1)
  );
});