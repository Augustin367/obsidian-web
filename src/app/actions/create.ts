"use server";

import { productSchema } from "@/lib/schemas/product";
import { ProductFormState } from "@/lib/types/product";
import { revalidateTag } from "next/cache";

export async function createProduct(data: ProductFormState) {
  const parsed = productSchema.safeParse(data);

  if (!parsed.success) {
    console.error(parsed.error.format());

    return {
      error: "Dados inválidos",
      issues: parsed.error.issues,
    };
  }

  console.log("Enviando para API:", parsed.data);

  const res = await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(parsed.data),
  });

  if (!res.ok) {
    const body = await res.text();

    throw new Error(`API ${res.status}\n${body}`);
  }

  revalidateTag("products", "max");

  return {
    data: await res.json(),
  };
}
