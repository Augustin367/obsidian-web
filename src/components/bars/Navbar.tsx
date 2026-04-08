import Link from "next/link";
import { Button } from "../ui/button";
import { Shield, ShoppingCart } from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="p-2 border-b border-black shadow-black/30 shadow-sm">
      <section className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Button variant={"outline"} className="shadow-black/30 shadow-sm">
              Obsidian
            </Button>
          </Link>
        </div>
        <section className="flex gap-2 items-center">
          <div>
            <Link href={"/admin"}>
              <Button variant={"outline"} className="shadow-black/30 shadow-sm">
                <Shield />
              </Button>
            </Link>
          </div>
          <div>
            <Button variant={"outline"} className="shadow-black/30 shadow-sm">
              <ShoppingCart />
            </Button>
          </div>
          <section>
            <div className="border p-1 rounded-full shadow-sm shadow-black/30 hover:bg-black/5">
              <Show when={"signed-out"}>
                <SignInButton />
              </Show>
            </div>
            <div>
              <Show when={"signed-in"}>
                <UserButton />
              </Show>
            </div>
          </section>
        </section>
      </section>
    </nav>
  );
}
