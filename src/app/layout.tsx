import type { Metadata } from "next";
import { Inter, Oswald, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/gallery-cards.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisableContextMenu from "./disable-context-menu";

// Configuración base del sitio
const siteConfig = {
  name: "Cefortte",
  title: "Cefortte - Centro de Capacitación en Seguridad Industrial",
  description:
    "Centro especializado en capacitación en seguridad industrial. Cursos certificados NOM-STPS, OSHA, NFPA e ISO 45001. Formación premium para empresas en México.",
  url: "https://cefforte.com.mx",
  ogImage: "https://cefforte.com.mx/og-image.jpg", // Imagen 1200x630px
  keywords: [
    "capacitación seguridad industrial",
    "cursos seguridad industrial México",
    "NOM-STPS",
    "OSHA México",
    "prevención riesgos laborales",
    "formación industrial",
    "ISO 45001",
    "trabajo en alturas",
    "espacios confinados",
    "montacargas certificación",
    "NFPA 70E",
    "brigadas emergencia",
    "protección civil empresas",
  ],
  author: "Cefortte",
  locale: "es_MX",
  type: "website",
};

// Metadata principal del sitio
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Cefortte", // Para páginas internas: "Cursos | Cefortte"
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [{ name: siteConfig.author }],

  creator: siteConfig.author,

  publisher: siteConfig.author,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Cefortte - Capacitación en Seguridad Industrial",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@cerfortte", // Actualizar con el usuario real de Twitter
    site: "@cerfortte",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Íconos y manifest (el favicon vuelve a la configuración automática de Next; solo se mantiene el manifest)
  manifest: "/manifest.json",

  // Verificaciones (agregar cuando tengas las cuentas)
  verification: {
    google: "tu-codigo-de-verificacion-google",
    // yandex: 'tu-codigo-yandex',
    // bing: 'tu-codigo-bing',
  },

  // Alternativas de idioma (si planeas expandir)
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "es-MX": siteConfig.url,
    },
  },

  // Otros metadatos importantes
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
    "application-name": siteConfig.name,
    "msapplication-TileColor": "#2563eb", // Actualizar con tu color principal
    "theme-color": "#ffffff",
  },
};

// Viewport (Next.js 14+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

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

// Layout principal
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        {/* CSS externo (Font Awesome) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />

        {/* Meta tags adicionales para compatibilidad */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${firaCode.variable} antialiased`}>
        <DisableContextMenu />
        <Header />
        {children}
        <Footer />
        {/* Scripts adicionales si los necesitas */}
        {/* Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}

        <Script src="https://cdn.vinonuevo.com/vercel/nav.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
