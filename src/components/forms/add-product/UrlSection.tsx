import SearchButton from "@/components/button/SearchButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UrlSection() {
  return (
    <section className="flex justify-between items-end">
      <section className="flex flex-col gap-4 w-full">
        <Label className="font-bold border-b border-black">Url:</Label>

        <Input
          placeholder="https://www.loja.com..."
          type="url"
          name="url"
          className="w-fit"
        />
      </section>

      <SearchButton />
    </section>
  );
}
