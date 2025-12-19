"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "h-16 border-b border-black/5" : "h-20"
      }`}
    >
      <div className="container h-full flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-playfair text-xl tracking-wide"
        >
          Aesthetic Finds by Anna
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-10 text-small uppercase tracking-wide">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/blog" className="hover:opacity-70 transition">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
