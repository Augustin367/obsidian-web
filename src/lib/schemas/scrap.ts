import z from "zod";

export const scrapSchema = z.object({
  url: z.url().min(6).optional(),
});
