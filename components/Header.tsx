import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="container-main h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-medium tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Aesthetic Finds by Hanna
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm text-[#555555]">
          <Link
            href="/"
            className="hover:text-[#1C1C1C] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#1C1C1C] transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
