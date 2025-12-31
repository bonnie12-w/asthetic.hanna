import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex h-[88px] items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="font-serif text-[22px] tracking-tight text-neutral-900 hover:text-neutral-700 transition"
          >
            Aesthetic Finds by Hanna
          </Link>

          {/* NAV */}
          <nav className="flex items-center gap-12">
            <Link
              href="/"
              className="text-[15px] tracking-wide text-neutral-700 hover:text-neutral-900 transition"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-[15px] tracking-wide text-neutral-700 hover:text-neutral-900 transition"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>

      {/* subtle divider */}
      <div className="h-px w-full bg-neutral-200/70" />
    </header>
  )
}
