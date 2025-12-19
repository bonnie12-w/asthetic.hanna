import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1C1C1C] font-inter">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
