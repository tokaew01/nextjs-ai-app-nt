import { Suspense } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/navbar";

const mitr = localFont({
  src: [
    {
      path: "../../../public/fonts/Mitr-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mitr-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mitr-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mitr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบ E-Commerce",
  description: "เรียนรู้การเขียน Nex.tjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={mitr.variable}>
      <body>
        <Suspense fallback={<div className="h-16 border-b bg-background" />}>
        <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
