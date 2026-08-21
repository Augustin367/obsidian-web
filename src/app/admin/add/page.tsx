import ScrapCard from "@/components/cards/ScrapCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAdd() {
  return (
    <main className="p-4">
      <section className="flex flex-col gap-4">
        <div>
          <ScrapCard />
        </div>
        <div>
          <Card className="shadow shadow-black">
            <CardHeader>
              <CardTitle className="font-bold border-b border-black text-lg">
                Add Admin
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
