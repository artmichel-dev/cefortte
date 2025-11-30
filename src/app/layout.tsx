import type { Metadata } from "next";
import { Inter, Oswald, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CEFORTTE - Industrial Training",
  description: "Centro de Formación y Capacitación en Seguridad Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${firaCode.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Script src="/js/nav.js" strategy="afterInteractive" />
        <Script src="/js/input-mobile-fix.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
