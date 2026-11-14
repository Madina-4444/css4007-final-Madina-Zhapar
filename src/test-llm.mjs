import { complete } from "./model-client.mjs";

const result = await complete([
  {
    role: "user",
    content: "Say hello in one sentence."
  }
]);

console.log(result.text);
