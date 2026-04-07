import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Police de corps - Outfit (moderne, géométrique, élégante)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Police display - DM Sans pour les headings
const dmSans = DM_Sans({
  variable: "--font-clash",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Lycée Professionnel de Yamoussoukro | Excellence et Formation",
    template: "%s | Lycée Professionnel de Yamoussoukro",
  },
  description:
    "Centre d'excellence technique et formation professionnelle de qualité à Yamoussoukro, Côte d'Ivoire. 12 filières, 85% de réussite.",
  keywords: [
    "lycée professionnel",
    "yamoussoukro",
    "formation technique",
    "CAP",
    "BEP",
    "BAC PRO",
    "BTS",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "Lycée Professionnel de Yamoussoukro" }],
  openGraph: {
    title: "Lycée Professionnel de Yamoussoukro",
    description: "Excellence technique et formation professionnelle de qualité",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
