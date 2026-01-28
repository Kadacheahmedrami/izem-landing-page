import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "IZEM Energy Drink | Unleash Your Inner Lion",
    template: "%s | IZEM Energy"
  },
  description: "Zero sugar, 75mg caffeine, 100% natural ingredients. The energy drink for ambitious champions.",
  keywords: ["energy drink", "zero sugar", "natural energy", "IZEM", "caffeine", "algerian brand", "premium energy", "clean energy", "vitamin b complex"],
  authors: [{ name: "IZEM Energy Team" }],
  creator: "IZEM Energy Team",
  publisher: "IZEM Energy",
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://izem-energy.com",
    title: "IZEM Energy Drink | Unleash Your Inner Lion",
    description: "Zero sugar, 75mg caffeine, 100% natural ingredients. The energy drink for ambitious champions.",
    siteName: "IZEM Energy",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "IZEM Energy Drink - Unleash Your Inner Lion",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IZEM Energy Drink | Unleash Your Inner Lion",
    description: "Zero sugar, 75mg caffeine, 100% natural ingredients. The energy drink for ambitious champions.",
    images: ["/images/image.png"],
    creator: "@izem_energy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
    yahoo: 'yahoo-site-verification-token',
    yandex: 'yandex-site-verification-token',
  },
  alternates: {
    canonical: 'https://izem-energy.com',
  },
  category: "beverages",
}

export const viewport: Viewport = {
  themeColor: "#84cc16",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ClickSpark
          sparkColor="#84cc16"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
