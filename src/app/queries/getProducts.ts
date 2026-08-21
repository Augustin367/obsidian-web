"use server";

import { ProductResponseSchema } from "@/lib/schemas/product-response.schema";
import z from "zod";

export default async function getProducts() {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: {
      tags: ["products"],
    },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data = await res.json();

  return z.array(ProductResponseSchema).parse(data);
}
