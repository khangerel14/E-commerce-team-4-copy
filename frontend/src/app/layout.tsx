"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { UserOrderProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0Provider
          domain="dev-7gtwvyczke6ra0n2.us.auth0.com"
          clientId="OYbhi5QRT2JMxtzT6uHZjmLqIfLLmZ16"
          authorizationParams={{
            redirect_uri: window.location.origin + "/middleware",
          }}
        >
          <UserOrderProvider>{children}</UserOrderProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}
