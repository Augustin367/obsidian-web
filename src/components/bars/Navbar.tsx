import Link from "next/link";
import { Button } from "../ui/button";
import {
  Heart,
  House,
  Shield,
  ShoppingCart,
  Smartphone,
  UserCog,
} from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-black shadow-black/30 shadow-sm">
      <section className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Button
              variant={"outline"}
              className="shadow-black shadow cursor-pointer font-bold"
            >
              Obsidian
            </Button>
          </Link>
        </div>
        <section className="flex gap-2">
          <div>
            <Link href={"/"}>
              <Button
                variant={"outline"}
                className="shadow shadow-black cursor-pointer"
              >
                <House />
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/products"}>
              <Button
                variant={"outline"}
                className="shadow shadow-black cursor-pointer"
              >
                <Smartphone />
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/cart"}>
              <Button
                variant={"outline"}
                className="shadow-black shadow cursor-pointer"
              >
                <ShoppingCart />
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/favourites"}>
              <Button
                variant={"outline"}
                className="shadow shadow-black cursor-pointer"
              >
                <Heart />
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/profile"}>
              <Button
                variant={"outline"}
                className="shadow shadow-black cursor-pointer"
              >
                <UserCog />
              </Button>
            </Link>
          </div>
        </section>
        <section className="flex gap-2 items-center">
          <div>
            <Link href={"/admin"}>
              <Button
                variant={"outline"}
                className="shadow-black shadow cursor-pointer"
              >
                <Shield />
              </Button>
            </Link>
          </div>
          <section>
            <Show when={"signed-out"}>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="shadow shadow-black cursor-pointer"
                >
                  Login
                </Button>
              </SignInButton>
            </Show>
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
