import type { Metadata } from "next";
import { Baloo_Tamma_2 } from 'next/font/google';
import "./globals.css";

const balooTamma2 = Baloo_Tamma_2({
  subsets: ['latin'],
  variable: '--font-baloo-tamma-2',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Mì gạo chũ",
  description: "Mì gạo chũ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${balooTamma2.variable} antialiased bg-[var(--base)]`}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        {children}
      </body>
    </html>
  );
}
