import type { Metadata } from "next";
import { Silkscreen, JetBrains_Mono, DotGothic16 } from "next/font/google";
import "./globals.css";

const display = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jp = DotGothic16({
  subsets: ["latin", "japanese"],
  weight: "400",
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Arnav Kshirsagar — Cybersecurity Student | サイバーセキュリティ",
  description:
    "Portfolio of Arnav Kshirsagar, a B.Tech Computer Science student in Pune focused on cybersecurity, seeking an internship in Japan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${jp.variable}`}>
      <body className="bg-coal font-body text-cream antialiased">{children}</body>
    </html>
  );
}
