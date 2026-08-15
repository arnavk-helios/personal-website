import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Arnav Kshirsagar — B.Tech CS Student & Cybersecurity Enthusiast",
  description:
    "Portfolio of Arnav Kshirsagar — B.Tech Computer Science and Engineering student, Team Leader at Smart India Hackathon (HACKHORIZON_STR), and builder in secure systems, networking, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink text-fog antialiased">{children}</body>
    </html>
  );
}
