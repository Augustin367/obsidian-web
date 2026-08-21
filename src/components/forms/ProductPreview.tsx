"use client";

import { Card } from "../ui/card";
import ImagesSection from "./add-product/ImagesSection";
import DetailsSection from "./add-product/DetailsSection";
import SubmitSection from "./add-product/SubmitSection";
import { EditableDataType } from "@/lib/types/forms";
import PriceField from "./add-product/PriceField";

type Props = EditableDataType & {
  profitInput: string;
  salePrice: number;
  setProfit: (value: string) => void;
  onSave: () => void;
};

export default function ProductPreview({
  formData,
  setFormData,
  profitInput,
  salePrice,
  setProfit,
  onSave,
}: Props) {
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Card className="shadow shadow-black rounded-lg p-4 flex flex-col gap-4">
      <ImagesSection formData={formData} />

      <Card className="p-4 shadow shadow-black">
        <DetailsSection formData={formData} setFormData={setFormData} />

        <div className="flex flex-col gap-4 shadow shadow-black rounded-lg p-4">
          <PriceField
            label="Preço Original"
            value={formatCurrency(formData.originalPrice)}
            readOnly
          />

          <PriceField label="Lucro" value={profitInput} onChange={setProfit} />

          <PriceField
            label="Preço de Venda"
            value={formatCurrency(salePrice)}
            readOnly
          />
        </div>
      </Card>

      <div>
        <SubmitSection onSubmit={onSave} />
      </div>
    </Card>
  );
}
