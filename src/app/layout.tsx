import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quicka Nig Ltd - International Logistics",
  description: "Global Shipping Partner providing Custom Brokerage, Freights, and Bonded Terminal services.",
};

import SplashScreen from "@/components/ui/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
