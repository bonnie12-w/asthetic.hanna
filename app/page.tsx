import Link from "next/link"
import CategoryCard from "@/components/CategoryCard"

export default function HomePage() {
  const categories = [
    {
      title: "Living Room Decor",
      href: "/blog?category=living-room",
      imageUrl: "/livingroom.jpg",
    },
    {
      title: "Entryway Styling",
      href: "/blog?category=entryway",
      imageUrl: "/entryway.jpg",
    },
    {
      title: "Bathroom Aesthetics",
      href: "/blog?category=bathroom",
      imageUrl: "/bathroom.jpg",
    },
    {
      title: "Bedroom Inspiration",
      href: "/blog?category=bedroom",
      imageUrl: "/bedroom.jpg",
    },
  ]

  return (
    <main>
      {/* HERO */}
      <section className="py-32 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Warm, Modern Home Decor Ideas
          </h1>
          <p className="mt-8 text-lg text-muted-foreground">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl">
            Browse by Room
          </h2>

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-muted-foreground">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  )
}
