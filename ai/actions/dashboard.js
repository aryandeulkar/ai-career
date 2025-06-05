"use server";

import { db } from "@/lib/inngest/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIInsights = async (industry) => {
  const prompt = `
    You are an expert industry analyst.

    Analyze the current state of the ${industry} industry and return insights in the following strict JSON format:

    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" },
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" },
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" },
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" },
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "High" | "Medium" | "Low",
      "topSkills": ["string", "string", "string", "string", "string"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["string", "string", "string", "string", "string"],
      "recommendedSkills": ["string", "string", "string", "string", "string"]
    }

    Rules:
    - Return only valid JSON (no markdown or code block).
    - Use realistic values.
    - growthRate must be a non-zero percentage (e.g. 6.5).
    - Do not return empty arrays.
  `;


  const result = await model.generateContent(prompt);

  const text = result.response.text();
  const cleanedText = text.replace(/```(?:json)?\n?|```/g, "").trim();

  // console.log("🧠 Gemini raw response:", cleanedText);

  let insights;

  try {
    insights = JSON.parse(cleanedText);
  } catch (err) {
    console.error("❌ Failed to parse JSON:", err);
    throw new Error("AI returned invalid JSON");
  }

  // 🔒 Enforce growthRate is a valid number
  if (typeof insights.growthRate === "string") {
    insights.growthRate = parseFloat(insights.growthRate.replace("%", "").trim());
  }
  if (
    typeof insights.growthRate !== "number" ||
    isNaN(insights.growthRate) ||
    insights.growthRate <= 0
  ) {
    console.warn("⚠️ Missing or invalid growthRate. Setting default 5.0");
    insights.growthRate = 5.0;
  }

  // console.log("✅ Final cleaned insights object:", insights);

  return insights;
};

  
export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  
  if (!user) throw new Error("User not found");
  if (!user.industry) throw new Error("User has no industry selected");
  
  let industryInsight = await db.industryInsights.findUnique({
    where: { industry: user.industry },
  });
  
  if (!industryInsight) {
    const insights = await generateAIInsights(user.industry);
    console.log("🧠 New AI-generated insights:", insights);
  
    industryInsight = await db.industryInsights.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
  }
  
  return industryInsight;
  
}

