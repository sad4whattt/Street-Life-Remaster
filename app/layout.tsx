import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SLR",
  description:
    "Street Life Remaster - The ultimate hood experience on Roblox. Rule the streets, build your empire, and dominate in the most intense turf wars.",
  keywords: ["Roblox", "Hood Game", "Street Life", "Gang Wars", "Turf Wars", "SLR"],
  authors: [{ name: "Street Life Remaster Team" }],
  creator: "SLR",
  publisher: "SLR",
  openGraph: {
    title: "SLR - Street Life Remaster",
    description: "The ultimate hood experience on Roblox. Rule the streets and build your empire.",
    siteName: "SLR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLR - Street Life Remaster",
    description: "The ultimate hood experience on Roblox. Rule the streets and build your empire.",
    creator: "@SLRGame",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
