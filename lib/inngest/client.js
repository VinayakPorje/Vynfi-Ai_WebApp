import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "vynfi", // Unique app ID
  name: "vynfi",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});