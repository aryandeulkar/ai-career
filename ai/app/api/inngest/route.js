import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";
import { serve } from "inngest/next";

console.log("generateIndustryInsights:", generateIndustryInsights);


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});
