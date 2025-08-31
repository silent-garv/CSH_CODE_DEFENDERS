
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarWrapper } from "@/components/navbar-wrapper";
import { Suspense } from "react";
import { AuthProvider } from "@/components/auth-provider";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Trace-Net",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <NavbarWrapper />
            <Suspense fallback={<div>Loading...</div>}>
              <main className="min-h-[calc(100dvh-56px)] px-4 py-4 md:px-6 md:py-6">
                {children}
              </main>
            </Suspense>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
