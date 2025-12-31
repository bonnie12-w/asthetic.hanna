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
      <section className="pt-32 pb-36 text-center">
        <h1 className="mx-auto max-w-4xl font-serif text-[44px] leading-[1.25] tracking-tight text-neutral-900/95 md:text-[56px]">
          Warm, Modern Home Decor Ideas for Elevated Living
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-[1.7] text-neutral-600">
          Curated aesthetics for interiors that feel intentional and timeless
        </p>

        <a
          href="/blog"
          className="inline-block mt-12 rounded-md bg-neutral-900 px-10 py-4 text-[15px] tracking-wide text-white transition hover:bg-neutral-800"
        >
          Explore Decor Ideas
        </a>
      </section>

      {/* CATEGORIES */}
      <section className="py-32">
        <h2 className="mb-20 text-center font-serif text-3xl text-neutral-900">
          Browse by Room
        </h2>

        <div className="mx-auto max-w-[1200px] flex flex-wrap justify-center gap-x-20 gap-y-24">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-[26px] leading-[1.6] text-neutral-700 md:text-[30px]">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  )
}
