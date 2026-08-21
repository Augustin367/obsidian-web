import { ProductResponseSchema } from "@/lib/schemas/product-response.schema";

export default async function getProduct(id: string) {
  const res = await fetch(`${process.env.API_URL}/products/${id}`, {
    next: {
      tags: ["products", `product-${id}`],
    },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar produto");
  }

  const data = await res.json();

  return ProductResponseSchema.parse(data);
}
