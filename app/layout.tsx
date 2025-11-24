import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ApolloProviderWrapper } from "@/shared/providers/ApolloProvider";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Click",
  description:
    "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ApolloProviderWrapper>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster theme="dark" position="top-right" richColors />
          <Analytics />
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
