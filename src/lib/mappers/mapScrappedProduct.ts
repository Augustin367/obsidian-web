// Front

import { ProductFormState, ScrapedProduct } from "../types/product";

export function mapScrapedProduct(data: ScrapedProduct): ProductFormState {
  return {
    imageUrl: data.imageUrl ?? "",
    images: data.images ?? [],

    color: data.color ?? "",
    title: data.title ?? "",
    storage: data.storage ?? "",
    ram: data.ram ?? "",

    originalPrice: data.originalPrice ?? 0,
    profit: 0,

    sourceUrl: data.sourceUrl ?? "",
    source: data.source ?? "AMAZON",

    brand: data.brand,
    category: data.category,
    model: data.model,
    family: data.family,

    description: data.description ?? "",

    metadata: data.metadata,
  };
}
