import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import PageTransition from "@/components/shared/PageTransition";

// Premium serif font with italic swash alternates
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
});

// Clean, modern sans-serif
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alchemy Unbounded",
  description: "A space for real transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased min-h-screen font-sans flex flex-col">
        <SmoothScrollProvider>
          <NavBar />
          <div className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
