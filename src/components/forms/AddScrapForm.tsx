"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export default function AddScrapForm() {
  const [isSearching, setIsSearching] = useState(true);
  return (
    <Card className="shadow-black shadow-sm">
      <CardHeader>
        <CardTitle className="font-bold border-b border-black">Url</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <section>
            <section className="flex gap-2 items-end">
              <section className="flex-1">
                <Input
                  className="border-black"
                  placeholder="https://www.amazon.com/..."
                  type="url"
                />
              </section>
              <section>
                <div>
                  <Button
                    onClick={() => setIsSearching(!isSearching)}
                    disabled={!isSearching}
                  >
                    Pesquisar
                  </Button>
                </div>
              </section>
            </section>
          </section>
        </form>
      </CardContent>
    </Card>
  );
}
