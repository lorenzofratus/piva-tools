import Footer from "@components/footer";
import clsx from "clsx/lite";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P.IVA Tools by Lorenzo Fratus",
  description: "Collezione di strumenti per la gestione della Partita IVA ad uso personale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classString = clsx("mx-auto flex min-h-screen max-w-screen-md flex-col", outfit.variable, "antialiased");

  return (
    <html lang="it">
      <body className={classString}>
        <main className="flex flex-1 flex-col items-center justify-center p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
