import Link from "next/link"
import CategoryCard from "../components/CategoryCard"

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
      {/* HERO */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl leading-tight text-neutral-900 md:text-5xl">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>

          <p className="mt-5 text-lg text-neutral-600">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-block bg-neutral-900 px-7 py-4 text-sm tracking-wide text-white transition hover:bg-neutral-700"
          >
            Explore Decor Ideas
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-serif text-3xl text-neutral-900">
            Browse by Room
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-neutral-600">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  )
}
