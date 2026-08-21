// Front

import z from "zod";

export const scrapSchema = z.object({
  url: z.string().url("URL inválida"),
});

export type ScrapType = z.infer<typeof scrapSchema>;
