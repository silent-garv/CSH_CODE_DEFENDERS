
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarWrapper } from "@/components/navbar-wrapper";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Trace-Net",
  description: "Created with v0",
  generator: "v0.app",
};


import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            /* font-family: GeistSans, sans-serif; */
            /* --font-sans: GeistSans; */
            /* --font-mono: GeistMono; */
          }
        `}</style>
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarWrapper />
          <Suspense fallback={<div>Loading...</div>}>
            <main className="min-h-[calc(100dvh-56px)] px-4 py-4 md:px-6 md:py-6">
              {children}
            </main>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
