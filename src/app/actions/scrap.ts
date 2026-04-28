"use server";

import { scrapSchema } from "@/lib/schemas/scrap";

type State =
  | { data: any; error?: undefined }
  | { error: string; data?: undefined }
  | null;

export async function scrapProduct(
  prevState: State,
  formData: FormData
): Promise<State> {
  const url = formData.get("url");

  const parsed = scrapSchema.safeParse({ url });

  if (!parsed.success) {
    return { error: "URL inválida" };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_KEY}/products/scrap`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }
    );

    const data = await res.json();

    return { data };
  } catch (err) {
    return { error: "Erro ao buscar produto" };
  }
}