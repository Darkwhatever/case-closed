import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "../lib/reactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "../components/ui/toast";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const lachesis = localFont({
  src: "../../public/fonts/Lachesis Regular.ttf",
  variable: "--font-lachesis-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Case Closed",
  description: "Step up and become the greatest detective in fiction",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${lachesis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <QueryProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <main className="min-h-screen w-full overflow-x-hidden">
                {children}
              </main>
            </Suspense>
            <Toaster />
            <ReactQueryDevtools />
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
