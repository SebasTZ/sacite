import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: "SACITE PERÚ - Comunidad Artística Nacional",
  description:
    "Comunidad Artística SACITE PERÚ - Conectamos clientes con artistas profesionales. Contrata espectáculos únicos desde 1962.",
  generator: "v0.app",
  keywords: ["artistas peruanos", "espectáculos", "circo", "entretenimiento", "eventos", "SACITE"],
  authors: [{ name: "SACITE PERÚ" }],
  openGraph: {
    title: "SACITE PERÚ - Comunidad Artística Nacional",
    description: "Conectamos clientes with artistas profesionales peruanos",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${sourceSansPro.variable}`}>
      <head>
        <style>{`
html {
  --font-heading: ${playfairDisplay.style.fontFamily};
  --font-body: ${sourceSansPro.style.fontFamily};
}
        `}</style>
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
