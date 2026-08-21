"use server";

import { scrapSchema } from "@/lib/schemas/scrap";
import { ScrapedProductSchema } from "@/lib/schemas/scrapedProduct.schema";
import { State } from "@/lib/types/actions";

export async function scrapProduct(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const url = formData.get("url");

  const parsed = scrapSchema.safeParse({
    url: typeof url === "string" ? url : "",
  });

  if (!parsed.success) {
    return { error: "URL inválida" };
  }

  try {
    const res = await fetch(`${process.env.API_URL}/products/scrap`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: parsed.data.url }),
    });

    if (!res.ok) {
      const error = await res.text();

      console.error(error);

      return {
        error: error || "Erro ao buscar produto",
      };
    }

    const rawData = await res.json();

    const parsedData = ScrapedProductSchema.safeParse(rawData);

    if (!parsedData.success) {
      return { error: "Dados inválidos retornados pela API" };
    }

    return { data: parsedData.data };
  } catch (err) {
    return { error: "Erro ao buscar produto" };
  }
}
