import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function AddProductForm() {
  const data = "";
  return (
    <Card className="shadow-sm shadow-black">
      <CardContent className="place-items-center">
        <form className="flex flex-col gap-6 w-full">
          <section className="flex flex-col gap-2">
            <section className="flex justify-between items-end">
              <section>
                <div>
                  <Label className="font-bold">Url:</Label>
                </div>
                <div>
                  <Input placeholder="https://www.amazon.com/..." type="url" />
                </div>
              </section>
              <div>
                <Button>Pesquisar</Button>
              </div>
            </section>
          </section>
          {!data && (
            <section className="shadow-sm shadow-black rounded-lg p-4 flex flex-col gap-2">
              <section className="p-4 shadow-sm shadow-black rounded-lg flex flex-col gap-4 items-center">
                <section className="p-2 shadow-sm shadow-black rounded-lg">
                  <div>
                    <Label>Imagem:</Label>
                  </div>
                  <div>
                    <Button>Imagem</Button>
                  </div>
                </section>
                <section className="p-2 shadow-sm shadow-black rounded-lg">
                  <div>
                    <Label>Título:</Label>
                  </div>
                  <div>
                    <Input
                      placeholder="Iphone"
                      type="string"
                      className="w-18"
                    />
                  </div>
                </section>
                <section className="p-2 shadow-sm shadow-black rounded-lg">
                  <div>
                    <Label>Memória:</Label>
                  </div>
                  <div>
                    <Input placeholder="200Gb" type="string" className="w-18" />
                  </div>
                </section>
                <section className="p-2 shadow-sm shadow-black rounded-lg">
                  <div>
                    <Label>Cor:</Label>
                  </div>
                  <div>
                    <Input placeholder="Azul" type="string" className="w-18" />
                  </div>
                </section>
                <section className="p-2 shadow-sm shadow-black rounded-lg">
                  <div>
                    <Label>Preço:</Label>
                  </div>
                  <div>
                    <Input placeholder="R$500" type="string" className="w-18" />
                  </div>
                </section>
              </section>
              <section className="place-items-center">
                <div>
                  <Button>Salvar</Button>
                </div>
              </section>
            </section>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
