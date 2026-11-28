import { ask } from "./agent.mjs";

console.log("TOPIC SEARCH");
console.log(await ask("ANOVA"));

console.log("\nQUIZ GENERATION");
console.log(await ask("Generate quiz about ANOVA"));