import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GBC - Gobindo Chakraborty",
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
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-inter bg-primary-bg text-primary-text flex min-h-full flex-col overflow-x-hidden text-base leading-[150%] font-normal">
        <main>{children}</main>
      </body>
    </html>
  );
}
