import ProductsCard from "@/components/cards/ProductsCard";
import getProducts from "./queries/getProducts";
import { Input } from "@/components/ui/input";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="p-4 flex flex-col gap-4">
      <div className="place-items-center">
        <h1 className="text-2xl font-bold border-b border-black w-fit cursor-default">
          Melhores Avaliados
        </h1>
      </div>
      <h3 className="font-bold border-b border-black w-fit cursor-pointer">
        Para Voçê:
      </h3>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
