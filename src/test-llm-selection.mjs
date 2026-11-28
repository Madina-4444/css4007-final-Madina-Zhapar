import { ask } from "./agent.mjs";

console.log("REQUEST 1");
console.log(await ask("Explain ANOVA"));

console.log("\nREQUEST 2");
console.log(await ask("Generate a quiz about ANOVA"));