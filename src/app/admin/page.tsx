import UsersCard from "@/components/cards/UsersCard";
import ProductsCard from "./components/ProductsCard";

export default function AdminPage() {
  return (
    <main className="p-4">
      <section className="flex flex-col gap-4">
        <div>
          <UsersCard />
        </div>
        <div>
          <ProductsCard />
        </div>
      </section>
    </main>
  );
}
