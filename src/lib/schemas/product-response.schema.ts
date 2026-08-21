// Front

import z from "zod";

export const ProductResponseSchema = z.object({
  id: z.string(),
  sourceUrl: z.string(),
  title: z.string(),

  color: z.string().nullable(),
  storage: z.string().nullable(),
  ram: z.string().nullable(),
  family: z.string().nullable(),
  description: z.string().nullable(),
  model: z.string().nullable(),

  imageUrl: z.string().nullable(),
  images: z.array(z.string()),

  originalPrice: z.coerce.number(),
  profit: z.coerce.number(),
  salePrice: z.coerce.number(),

  metadata: z.record(z.string(), z.unknown()).nullable(),

  brand: z.enum(["APPLE", "SAMSUNG"]).nullable(),
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
    .nullable(),

  createdAt: z.string(),
  updatedAt: z.string(),
});
