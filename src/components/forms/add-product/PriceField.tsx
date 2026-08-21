import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PriceFieldType } from "@/lib/types/forms";

export default function PriceField({
  label,
  value,
  onChange,
  readOnly = false,
}: PriceFieldType) {
  return (
    <Card className="p-4 shadow-sm shadow-black rounded-lg place-items-center">
      <Label className="font-bold border-black border-b">{label}</Label>

      {readOnly ? (
        <div className="p-2 w-50 text-center rounded-md text-sm shadow-sm shadow-black ">
          {value}
        </div>
      ) : (
        <Input
          value={value}
          placeholder="R$ 0,00"
          className="w-fit text-center"
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}
    </Card>
  );
}
