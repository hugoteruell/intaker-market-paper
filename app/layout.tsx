import type { Metadata } from "next";
import { Inter_Tight, Newsreader, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Intaker · Decision Intelligence para Early-Career Hiring · Market Paper",
  description:
    "Paper de mercado sobre a perda de resolução no funil de contratação early-career nos Estados Unidos e o desenho de uma camada de inteligência comportamental complementar ao ATS. Maio 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="bg-paper text-ink font-sans">
        <SmoothScroll>{children}</SmoothScroll>
        <div className="paper-texture" aria-hidden />
      </body>
    </html>
  );
}
