// Front

import { ProductFormState } from "../types/product";

export const initialProductForm: ProductFormState = {
  title: "",

  brand: undefined,
  category: undefined,
  family: undefined,
  model: undefined,

  color: "",
  storage: "",
  ram: "",

  imageUrl: "",
  images: [],

  originalPrice: 0,
  profit: 0,

  sourceUrl: "",
  source: "AMAZON",

  description: "",
};
