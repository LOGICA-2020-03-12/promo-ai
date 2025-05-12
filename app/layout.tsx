import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "L OGICA - AI, GenAI, Computer Vision & Deep Learning Blog",
  description: "Exploring the frontiers of artificial intelligence, generative AI, computer vision, and deep learning.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XF8TYF5TFT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XF8TYF5TFT');
          `}
        </Script>
      </body>
    </html>
  )
}
