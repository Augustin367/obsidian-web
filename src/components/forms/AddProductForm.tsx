// Front

"use client";

import { createProduct } from "@/app/actions/create";
import { useProductForm } from "@/lib/hooks/useProductForm";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";
import { ScrapedProduct } from "@/lib/types/product";
import SearchForm from "./SearchForm";
import ProductPreview from "./ProductPreview";

export default function AddProductForm() {
  const [scraped, setScraped] = useState<ScrapedProduct>();

  const { formData, setFormData, profitInput, setProfit, salePrice } =
    useProductForm(scraped);

  const [saveError, setSaveError] = useState("");

  async function handleSave() {
    console.log("Enviando:", formData);

    const result = await createProduct(formData);

    if (result.error) {
      console.error(result.issues);
      setSaveError(result.error);
      return;
    }
  }

  return (
    <Card className="shadow-sm shadow-black">
      <CardContent className="flex flex-col gap-4">
        <SearchForm onScraped={setScraped} />

        {scraped && (
          <ProductPreview
            formData={formData}
            setFormData={setFormData}
            profitInput={profitInput}
            salePrice={salePrice}
            setProfit={setProfit}
            onSave={handleSave}
          />
        )}

        {saveError && <div className="text-red-500">{saveError}</div>}
      </CardContent>
    </Card>
  );
}
