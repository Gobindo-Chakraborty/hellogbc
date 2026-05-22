import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GBC",
  description:
    "Official portfolio of Gobindo Chakraborty (GBC), a professional web developer and designer creating modern, responsive, and user-friendly websites with JavaScript, React, Next.js, and full-stack web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="dark"
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-primary-bg text-primary-text">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
