import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Splito - Simplify Shared Expenses & Settle On-Chain Effortlessly",
  description: "Effortlessly manage shared expenses and settle payments securely on the blockchain with full transparency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
