import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ComparisonProvider } from "@/context/ComparisonContext";
import Header from "@/features/auth/components/header";
import ComparisonBar from "@/features/auth/components/compare/useCompareBar";
import "./globals.css";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnUcuz-Net",
  description: "Cihaz Karşılaştırma Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        <ComparisonProvider>
          <main className="pt-28">{children}</main>


          <ComparisonBar></ComparisonBar>
        </ComparisonProvider>
        
      </body>
    </html>
  );
}
