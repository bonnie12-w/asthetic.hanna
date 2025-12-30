import CategoryCard from "@/components/CategoryCard"

export default function HomePage() {
  const categories = [
    {
      title: "Living Room Decor",
      href: "/blog",
      imageUrl: "/living-room.jpg",
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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>

          <a
            href="/blog"
            className="inline-block mt-8 rounded-md bg-neutral-900 px-8 py-4 text-white hover:bg-neutral-700 transition"
          >
            Explore Decor Ideas
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
            Browse by Room
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                href={category.href}
                imageUrl={category.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-neutral-600">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  )
}
