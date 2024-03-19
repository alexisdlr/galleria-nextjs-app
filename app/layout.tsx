import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const LibreBaskerville = Libre_Baskerville({
  style: "normal",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galleria Art - Next.js",
  description: "Galleria Art - Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LibreBaskerville.className}>{children}</body>
    </html>
  );
}
