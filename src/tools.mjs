import { complete } from "./model-client.mjs";
import notes from "./data/statistics-notes.json" with { type: "json" };

export function searchStatisticsTopic(topic) {
  if (!topic || typeof topic !== "string") {
    throw new Error("Topic is required.");
  }

  const result = notes[topic];

  if (!result) {
    return "Topic not found in the statistics knowledge base.";
  }

  return result;
}
export async function generateQuiz(topic, questionCount = 3) {

  if (!topic || typeof topic !== "string") {
    throw new Error("Topic is required.");
  }

  if (!Number.isInteger(questionCount) || questionCount <= 0) {
    throw new Error("Question count must be positive.");
  }

  const response = await complete([
    {
      role: "system",
      content: `
Generate a statistics quiz.

Return ONLY valid JSON.

Format:

{
  "topic": "",
  "questions": [
    {
      "question": "",
      "options": ["","","",""],
      "correct_index": 0,
      "explanation": ""
    }
  ]
}
`
    },
    {
      role: "user",
      content: `Generate ${questionCount} multiple-choice questions about ${topic}.`
    }
  ]);

  return JSON.parse(response.text);
}