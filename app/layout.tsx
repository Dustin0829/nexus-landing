import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorTrailer } from "@/components/cursor-trailer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nexus | Own Your Data, Always",
  description: "Securely store and share files onchain with Irys. Total privacy, pay-as-you-go, boundless control.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <CursorTrailer />
        </ThemeProvider>
      </body>
    </html>
  )
}
