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
