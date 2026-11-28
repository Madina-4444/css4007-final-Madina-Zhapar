import { complete } from "./model-client.mjs";
import { searchStatisticsTopic, generateQuiz } from "./tools.mjs";

export async function ask(message) {

  const decision = await complete([
    {
      role: "system",
      content: `
You are a tool selection agent.

Available tools:

1. searchStatisticsTopic
Use for explanations and definitions.

2. generateQuiz
Use when the user requests a quiz, test, or questions.

Return only:
searchStatisticsTopic
or
generateQuiz
      `
    },
    {
      role: "user",
      content: message
    }
  ]);

  const tool = decision.text.trim();

  if (tool === "generateQuiz") {
    return await generateQuiz("ANOVA", 3);
  }

  return searchStatisticsTopic("ANOVA");
}