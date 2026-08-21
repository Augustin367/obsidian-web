// Front

export const PRODUCT_SOURCES = ["AMAZON", "SHOPEE", "MERCADOLIVRE"] as const;

export type ProductSource = (typeof PRODUCT_SOURCES)[number];

export const PRODUCT_CATEGORIES = [
  "TABLET",
  "NOTEBOOK",
  "HEADPHONE",
  "ACCESSORY",
  "SMARTPHONE",
  "SMARTWATCH",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const PRODUCT_BRANDS = ["APPLE", "SAMSUNG"] as const;

export type ProductBrand = (typeof PRODUCT_BRANDS)[number];

export type ProductFormState = {
  title: string;
  color: string;
  storage: string;
  ram: string;

  originalPrice: number;
  profit: number;

  imageUrl: string;
  images: string[];

  sourceUrl: string;
  source: ProductSource;

  description: string;

  brand?: ProductBrand;
  family?: string;
  category?: ProductCategory;
  model?: string;

  metadata?: Record<string, unknown>;
};

export type ScrapedProduct = {
  title?: string;
  color?: string;
  storage?: string;
  ram?: string;
  description?: string;

  originalPrice?: number;

  sourceUrl?: string;
  source?: ProductSource;

  imageUrl?: string;
  images?: string[];

  brand?: ProductBrand;
  family?: string;
  category?: ProductCategory;
  model?: string;

  metadata?: Record<string, unknown>;
};

export type Product = {
  id: string;
  title: string;
  brand?: ProductBrand;
  category?: ProductCategory;
  family?: string;
  model?: string;
  imageUrl: string;
  profit: number;
  salePrice: number;
  originalPrice: number;
  createdAt: Date;
};
