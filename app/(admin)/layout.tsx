import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import SessionProvider from "@/lib/SessionProvider";
import AdminSidebar from "@/components/AdminSidebar";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin | Shade E-Commerce App",
  description: "E-Commerce App built with Top-Notch Tech Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="flex">
              <AdminSidebar />
              {children}
            </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
