// Front

import { ScrapedProduct } from "./product";

export type State =
  | { data: ScrapedProduct; error?: undefined }
  | { error: string; data?: undefined }
  | null;
