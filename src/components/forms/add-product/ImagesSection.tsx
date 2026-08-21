import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DataType } from "@/lib/types/forms";
import Image from "next/image";

export default function ImagesSection({ formData }: DataType) {
  const images = formData.images.filter(Boolean);

  return (
    <Card className="p-4 shadow shadow-black rounded-lg place-items-center">
      <div>
        <Label className="font-bold border-b border-black text-md">
          Imagens
        </Label>
      </div>
      <div className="flex p-4 w-full gap-20 items-center justify-center shadow-sm shadow-black rounded-md">
        <div className="p-4 shadow shadow-black rounded-md">
          {formData.imageUrl && (
            <Image
              src={formData.imageUrl}
              alt={formData.title}
              width={300}
              height={300}
              className="object-cover"
            />
          )}
        </div>

        <div className="p-2 border-t border-l border-r shadow shadow-black rounded-md">
          {images.map((img, index) => (
            <Image
              key={`${img}-${index}`}
              src={img}
              alt={`image-${index}`}
              width={50}
              height={50}
              className="object-cover p-2 border-b border-black"
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
