// Front

import z from "zod";

export const createProductSchema = z.object({
  title: z.string().min(1),

  description: z.string().optional(),

  imageUrl: z.string().url().optional(),
  images: z.array(z.string()),

  color: z.string().optional(),
  storage: z.string().optional(),
  ram: z.string().optional(),
  family: z.string().optional(),
  model: z.string().optional(),

  originalPrice: z.number().positive(),
  profit: z.number().min(0),

  sourceUrl: z.string().url(),

  brand: z.enum(["APPLE", "SAMSUNG"]).optional(),
  source: z.enum(["AMAZON", "SHOPEE", "MERCADOLIVRE"]),
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

export type CreateProduct = z.infer<typeof createProductSchema>;
