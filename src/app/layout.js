import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "../contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextDigits - Agence Digitale au Maroc | Solutions Web & Marketing Digital",
  description: "NextDigits vous accompagne dans votre transformation digitale. Web design, marketing digital, SEO et stratégie de marque sur-mesure. Plus de 80 clients satisfaits.",
  keywords: "agence digitale, web design, marketing digital, SEO, Maroc, Rabat, développement web, stratégie digitale",
  authors: [{ name: "NextDigits" }],
  openGraph: {
    title: "NextDigits - Agence Digitale au Maroc",
    description: "Solutions digitales sur-mesure pour votre entreprise",
    type: "website",
    locale: "fr_FR",
    url: "https://nextdigits.com",
    siteName: "NextDigits",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextDigits - Agence Digitale",
    description: "Solutions digitales sur-mesure pour votre entreprise",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#48A9FE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}