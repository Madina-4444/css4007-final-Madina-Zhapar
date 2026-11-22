import { generateQuiz } from "./tools.mjs";

const quiz = await generateQuiz("ANOVA", 3);

console.log(JSON.stringify(quiz, null, 2));