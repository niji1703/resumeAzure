import { Inter, Noto_Sans_JP } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoSansJP.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}