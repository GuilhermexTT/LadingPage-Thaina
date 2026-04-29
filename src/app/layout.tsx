import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Thainá Carvalho | Estética Avançada & Harmonização",
  description: "Especialista em Harmonização Facial, Corporal e Rejuvenescimento. Resultados naturais e sofisticados em Osasco - São Paulo.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${montserrat.variable} font-body bg-soft-beige text-zinco`}>
        {children}
      </body>
    </html>
  );
}