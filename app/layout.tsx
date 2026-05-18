import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://luciano-fredes-portfolio.vercel.app"),
  title: "Luciano Fredes | Fullstack Developer",
  description:
    "Desarrollador Fullstack especializado en Next.js, TypeScript y .NET. Construyo plataformas completas, seguras y orientadas al usuario. Disponible para nuevas oportunidades.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "React",
    ".NET",
    "PostgreSQL",
    "Luciano Fredes",
    "Buenos Aires",
  ],
  authors: [{ name: "Luciano Fredes" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://luciano-fredes-portfolio.vercel.app",
    siteName: "Luciano Fredes | Portfolio",
    title: "Luciano Fredes | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en Next.js, TypeScript y .NET. Disponible para nuevas oportunidades.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luciano Fredes | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en Next.js, TypeScript y .NET. Disponible para nuevas oportunidades.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>{children}</LanguageProvider>

        {/* Vercel Analytics — tracking gratuito en tu dashboard de Vercel */}
        {/* Corré: pnpm add @vercel/analytics  antes de deployar */}
        <Analytics />
      </body>
    </html>
  );
}