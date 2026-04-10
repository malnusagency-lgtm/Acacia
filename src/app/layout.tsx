import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#101413",
};

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Glacier group | Premium Cleaning & Fumigation in Nairobi",
  description:
    "Nairobi's most trusted cleaning and fumigation service. Home cleaning, office cleaning, fumigation, and move-in/out services. Eco-friendly products, professional teams, same-day service.",
  keywords: [
    "cleaning services Nairobi",
    "fumigation Nairobi",
    "home cleaning Kenya",
    "office cleaning Nairobi",
    "eco-friendly cleaning",
    "Glacier group",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFAB />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
