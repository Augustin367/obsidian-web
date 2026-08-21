// Front

import z from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Título obrigatório"),

  model: z.string().optional(),
  family: z.string().optional(),
  description: z.string().optional(),

  originalPrice: z.number().positive(),
  profit: z.number().nonnegative(),

  imageUrl: z.string().url().optional(),
  images: z.array(z.string().url()).default([]),

  color: z.string().optional(),
  storage: z.string().optional(),
  ram: z.string().optional(),

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

export type ProductType = z.infer<typeof productSchema>;
