import { EditableDataType, ProductFieldConfig } from "@/lib/types/forms";
import ProductField from "./ProductField";
import { Card } from "@/components/ui/card";

export default function DetailsSection({
  formData,
  setFormData,
}: EditableDataType) {
  const fields: ProductFieldConfig[] = [
    {
      label: "Título",
      key: "title",
      placeholder: "Iphone",
    },
    {
      label: "Armazenamento",
      key: "storage",
      placeholder: "256GB",
    },
    {
      label: "Ram",
      key: "ram",
      placeholder: "16GB",
    },
    {
      label: "Cor",
      key: "color",
      placeholder: "Azul",
    },
  ] as const;

  return (
    <Card className="p-4 shadow-black shadow-sm">
      {fields.map((field) => (
        <ProductField
          key={field.key}
          label={field.label}
          value={formData[field.key]}
          placeholder={field.placeholder}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              [field.key]: value,
            }))
          }
        />
      ))}
    </Card>
  );
}
