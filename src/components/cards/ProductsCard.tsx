import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ProductsCard() {
  return (
    <Card className="bg-black/90 text-white/90">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="text-2xl">Produtos</CardTitle>
      </CardHeader>
      <CardContent>
        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-slate-400">Totais</p>
            <p className="mt-1 text-xl font-semibold text-slate-100">—</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-slate-400">Online</p>
            <p className="mt-1 text-xl font-semibold text-slate-100">—</p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
