import Header from "@/components/shared/Header";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 px-4 md:px-10">
      <Header />
      <main>{children}</main>
    </div>
  );
}
