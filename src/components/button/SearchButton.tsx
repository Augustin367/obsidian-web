"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="cursor-pointer hover:bg-black/80"
    >
      {pending ? "Pesquisando..." : "Pesquisar"}
    </Button>
  );
}
