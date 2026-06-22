import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ab3packaging.com"),
  title: "AB3 Packaging | Premium Food-Grade & Luxury Packaging",
  description:
    "AB3 Packaging crafts elegant, food-grade and luxury packaging solutions — from perfume tubes to bespoke retail boxes. Precision manufacturing with premium finishes.",
  keywords: [
    "packaging",
    "food grade packaging",
    "perfume packaging",
    "luxury packaging",
    "AB3 Packaging",
  ],
  openGraph: {
    title: "AB3 Packaging",
    description: "Premium food-grade and luxury packaging solutions",
    images: ["/hero-showcase.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
