// Front

import z from "zod";

export const ScrapedProductSchema = z.object({
  title: z.string(),

  family: z.string().optional(),
  model: z.string().optional(),

  originalPrice: z.number(),

  color: z.string().optional(),
  storage: z.string().optional(),
  ram: z.string().optional(),

  imageUrl: z.string().url().optional(),
  images: z.array(z.string().url()).default([]),

  sourceUrl: z.string().url(),

  source: z.enum(["AMAZON", "SHOPEE", "MERCADOLIVRE"]),

  brand: z.enum(["APPLE", "SAMSUNG"]).optional(),
  category: z
    .enum([
      "TABLET",
      "NOTEBOOK",
      "HEADPHONE",
      "ACCESSORY",
      "SMARTPHONE",
      "SMARTWATCH",
    ])
    .optional(),

  metadata: z.record(z.string(), z.any()).optional(),
});

export type ScrapedProductType = z.infer<typeof ScrapedProductSchema>;
