"use client";

import { useActionState, useEffect } from "react";
import { scrapProduct } from "@/app/actions/scrap";
import UrlSection from "./add-product/UrlSection";
import { ScrapedProduct } from "@/lib/types/product";

export default function SearchForm({
  onScraped,
}: {
  onScraped: (data: ScrapedProduct | undefined) => void;
}) {
  const [state, action] = useActionState(scrapProduct, null);

  useEffect(() => {
    if (state?.data) {
      onScraped(state.data);
    }

    if (state?.error) {
      onScraped(undefined);
    }
  }, [state, onScraped]);

  return (
    <>
      <form action={action} onSubmit={() => onScraped(undefined)}>
        <UrlSection />
      </form>

      {state?.error && (
        <div className="text-red-500 font-bold">{state.error}</div>
      )}
    </>
  );
}
