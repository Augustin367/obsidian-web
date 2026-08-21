import { ProductResponseSchema } from "@/lib/schemas/product-response.schema";
import Image from "next/image";
import z from "zod";
import { Card } from "../ui/card";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

type Product = z.infer<typeof ProductResponseSchema>;

type Props = {
  product: Product;
};

export default function ProductsCard({ product }: Props) {
  return (
    <Card className="shadow shadow-black p-2 items-center justify-center hover:scale-105">
      <Link href={`/products/${product.id}`}>
        <section className="flex flex-col gap-4 items-center cursor-default p-2 justify-center">
          <div className="shadow shadow-black rounded-lg p-2 hover:scale-105">
            <Image
              src={product.imageUrl ?? "/placeholder.png"}
              alt={product.title}
              width={100}
              height={100}
            />
          </div>

          <h2 className="p-2 rounded-xl shadow shadow-black hover:scale-105 font-bold">
            {product.title}
          </h2>

          <div className="p-2 rounded-xl shadow shadow-black font-bold hover:scale-105">
            {product.salePrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>

          <div className="flex gap-4">
            <Button
              variant={"outline"}
              className="shadow shadow-black cursor-pointer w-fit"
            >
              <ShoppingCart />
            </Button>
            <Button
              variant={"outline"}
              className="shadow shadow-black cursor-pointer w-fit"
            >
              <Heart />
            </Button>
          </div>
        </section>
      </Link>
    </Card>
  );
}
