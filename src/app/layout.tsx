import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const recursive = Recursive({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Assessment",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex flex-1 flex-col h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
