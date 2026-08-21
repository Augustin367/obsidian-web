import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldType } from "@/lib/types/forms";

export default function ProductField({
  label,
  value,
  placeholder,
  onChange,
}: FieldType) {
  return (
    <Card className="p-4 shadow-sm shadow-black place-items-center">
      <Label className="font-bold border-black border-b">{label}</Label>

      <Input
        value={value}
        placeholder={placeholder}
        className="w-fit text-center"
        onChange={(e) => onChange(e.target.value)}
      />
    </Card>
  );
}
