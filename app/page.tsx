import Link from "next/link"
import CategoryCard from "../components/category-card"

export default function HomePage() {
  const categories = [
    {
      title: "Living Room Decor",
      href: "/blog",
      imageUrl: "/living.jpg",
    },
    {
      title: "Entryway Styling",
      href: "/blog",
      imageUrl: "/entryway.jpg",
    },
    {
      title: "Bathroom Aesthetics",
      href: "/blog",
      imageUrl: "/bathroom.jpg",
    },
    {
      title: "Bedroom Inspiration",
      href: "/blog",
      imageUrl: "/bedroom.jpg",
    },
  ]

  return (
    <main>
      {/* HERO — V0 STYLE */}
      <section className="bg-neutral-50 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>

          <Link
            href="/blog"
            className="mt-10 inline-block bg-neutral-900 px-8 py-5 text-base text-white transition hover:bg-neutral-700"
          >
            Explore Decor Ideas
          </Link>
        </div>
      </section>

      {/* CATEGORIES — EXACT V0 GRID */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
            Browse by Room
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT — V0 */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-neutral-600 md:text-3xl">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  )
}
