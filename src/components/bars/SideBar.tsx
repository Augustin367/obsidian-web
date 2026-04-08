import Link from "next/link";
import { Button } from "../ui/button";
import { CirclePlus, Shield } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="p-2 h-full border-r border-black">
      <section className="flex flex-col gap-2">
        <div>
          <Link href={"/admin"}>
            <Button
              variant={"outline"}
              className="shadow-black shadow-sm border-none"
            >
              <Shield />
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"/admin/add"}>
            <Button
              variant={"outline"}
              className="shadow-black shadow-sm border-none"
            >
              <CirclePlus />
            </Button>
          </Link>
        </div>
      </section>
    </aside>
  );
}
