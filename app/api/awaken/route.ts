import OpenAI from "openai";
import { z } from "zod";
import { setData } from "@store/rxState"; // Importing setPrompt

export async function POST(req: Request) {
  //拿到json
  const json = await req.json();
  //部分解析
  const result = z
    .object({
      prompt: z.string(),
    })
    .safeParse(json);

  //从result拿到error和data
  if (result.error) {
    return new Response(result.error.message, { status: 422 });
  }

  const { prompt } = result.data;
  console.log("--prompt--", prompt);
  setData(prompt); // Store the prompt in rxState
  

  return new Response(JSON.stringify({ message: "Prompt received", prompt }), {
    status: 200,
    headers: { "Content-Type$": "application/json" },
  });
}


export const runtime = "edge";