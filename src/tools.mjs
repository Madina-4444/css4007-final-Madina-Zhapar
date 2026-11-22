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

  return {
    topic,
    questions: Array.from({ length: questionCount }, (_, index) => ({
      question: `Sample question ${index + 1} about ${topic}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct_index: 0,
      explanation: `This is a sample explanation for ${topic}.`
    }))
  };
}