import { Input } from "@/components/ui/input";
import getProducts from "../queries/getProducts";
import { Banknote, Heart, ShoppingCart } from "lucide-react";
import ProductsCard from "@/components/cards/ProductsCard";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className="p-4 flex flex-col gap-4 items-center">
      <div className="place-items-center">
        <Input
          placeholder="Buscar"
          className="font-bold text-center shadow shadow-black"
        />
      </div>
      <section className="w-full">
        <div className="font-bold border-b border-black w-fit">
          Todos os produtos:
        </div>
      </section>
      <div className="grid grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
