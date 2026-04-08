import AddProductForm from "../forms/AddProductForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ScrapCard() {
  return (
    <Card className="shadow-md shadow-black">
      <CardHeader>
        <CardTitle className="text-2xl border-b border-black font-bold">
          Scrap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AddProductForm />
      </CardContent>
    </Card>
  );
}
