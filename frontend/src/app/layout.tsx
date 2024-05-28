"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserOrderProvider } from "@/components";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

const AuthProvider = dynamic(() => import("@/components/AutoProvider"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <UserOrderProvider>{children}</UserOrderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
