import CategoryCard from "@/components/CategoryCard"

export default function HomePage() {
  const categories = [
    {
      title: "Living Room Decor",
      href: "/blog",
      imageUrl: "/livingroom.jpg",
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
      <section className="py-24 text-center">
        <h1 className="font-serif text-5xl text-neutral-900">
          Warm, Modern Home Decor Ideas for Elevated Living
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          Curated aesthetics for interiors that feel intentional and timeless
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="py-32">
        <h2 className="mb-12 text-center font-serif text-3xl">
          Browse by Room
        </h2>

        <div className="mx-auto max-w-[1200px] flex flex-wrap justify-center gap-x-20 gap-y-24">
          {categories.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </div>
      </section>
    </main>
  )
}
