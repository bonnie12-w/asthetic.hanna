import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-surface mt-sectionDesktop">
      <div className="container py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* BRAND */}
        <p className="font-playfair text-lg">
          Aesthetic Finds by Anna
        </p>

        {/* NAV */}
        <nav className="flex gap-8 text-small uppercase tracking-wide text-secondary">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/blog" className="hover:opacity-70 transition">
            Blog
          </Link>
        </nav>

        {/* COPYRIGHT */}
        <p className="text-small text-secondary">
          © {new Date().getFullYear()} Aesthetic Finds by Anna
        </p>
      </div>
    </footer>
  )
}
