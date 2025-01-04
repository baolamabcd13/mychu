import type { Metadata } from "next";
import { Baloo_Tamma_2 } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";

const balooTamma2 = Baloo_Tamma_2({
  subsets: ["latin"],
  variable: "--font-baloo-tamma-2",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mì gạo chũ",
  description: "Mì gạo chũ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${balooTamma2.variable} antialiased bg-[var(--base)] min-h-screen- flex flex-col`}
      >
        <Header />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
