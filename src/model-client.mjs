import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.LLM_API_KEY,
});

export async function complete(messages, tools = []) {
  const response = await client.chat.completions.create({
    model: process.env.LLM_MODEL,
    messages,
  });

  return {
    text: response.choices[0].message.content,
    toolCalls: [],
  };
}
