import getProduct from "@/app/queries/getProduct";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <main className="p-6">
      <div className="place-items-center">
        <Card
          className="items-center justify-center 
        text-center w-fit p-4 shadow shadow-black
        hover:scale-103"
        >
          <CardHeader className="w-full place-items-center">
            <CardTitle className="font-bold text-xl w-fit shadow shadow-black rounded-full p-2 hover:scale-105 cursor-default">
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="items-center justify-center p-4 flex flex-col gap-6">
            <section className="flex gap-10">
              <div className="shadow shadow-black p-2 rounded-lg hover:scale-103">
                <Image
                  src={product.imageUrl ?? ""}
                  alt={product.title}
                  height={250}
                  width={250}
                  className="object-cover"
                />
              </div>
              <div className="shadow shadow-black rounded-lg hover:scale-105 p-4 flex flex-col justify-between text-2xl font-bold">
                <div className="shadow shadow-black rounded-full p-2 hover:scale-105 cursor-default">
                  {product.color}
                </div>
                <div className="shadow shadow-black rounded-full p-2 hover:scale-105 cursor-default">
                  {product.memory}
                </div>
                <div className="shadow shadow-black rounded-full p-2 hover:scale-105 cursor-default">
                  {product.salePrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </section>
            <div>{product.description}</div>
            <div className="flex flex-col gap-4">
              <Button
                variant={"outline"}
                className="font-bold shadow shadow-black cursor-pointer text-lg"
              >
                Adicionar ao Carrinho
              </Button>
              <Button
                variant={"outline"}
                className="shadow shadow-black font-bold cursor-pointer text-lg"
              >
                Comprar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
