// Front

import { useEffect, useState } from "react";
import { ProductFormState, ScrapedProduct } from "../types/product";
import { initialProductForm } from "../constants/product";
import { mapScrapedProduct } from "../mappers/mapScrappedProduct";

export function useProductForm(scraped?: ScrapedProduct) {
  const [profitInput, setProfitInput] = useState("");

  const [formData, setFormData] =
    useState<ProductFormState>(initialProductForm);

  const calculatedSalePrice = formData.originalPrice + formData.profit;

  function setProfit(value: string) {
    const raw = value.replace(/[^\d]/g, "");

    if (!raw) {
      setProfitInput("");

      setFormData((prev) => ({
        ...prev,
        profit: 0,
      }));

      return;
    }

    const number = Number(raw) / 100;

    setProfitInput(
      number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    );

    setFormData((prev) => ({
      ...prev,
      profit: number,
    }));
  }

  useEffect(() => {
    if (!scraped) return;

    const mapped = mapScrapedProduct(scraped);

    setFormData({
      ...mapped,
      profit: 0,
    });

    setProfitInput("");
  }, [scraped]);

  return {
    formData,
    setFormData,
    profitInput,
    setProfit,
    salePrice: calculatedSalePrice,
  };
}
