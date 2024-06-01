import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const { messages } = await req.json();

    const result = await streamText({
      model: openai("gpt-4-turbo"),
      //   messages,
      prompt,
    });

    return result.toAIStreamResponse();
  } catch (error) {
    // if (error instanceof OpenAI.APIError) {
    //   // OpenAI API error handling
    //   const { name, status, headers, message } = error;
    //   return NextResponse.json({ name, status, headers, message }, { status });
    // }
    if (error) {
      return NextResponse.json(
        { message: "An unexpected error occurred:" },
        { status: 500 }
      );
    } else {
      // General error handling
      console.error("An unexpected error occurred:", error);
      throw error;
    }
  }
}
