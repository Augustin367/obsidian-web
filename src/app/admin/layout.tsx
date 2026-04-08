import SideBar from "../../components/bars/SideBar";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <div>
        <SideBar />
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
