import CategoryCard from "@/components/CategoryCard"

export default function HomePage() {
  const categories = [
    {
      title: "Living Room Decor",
      href: "/blog?category=livingroom",
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
       {/* Hero Section */}
      <section className="bg-secondary py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl leading-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>
            asChild
            className="mt-8 bg-foreground px-8 py-6 text-base text-white hover:bg-accent hover:text-foreground transition-colors"
          >
        </div>
      </section>

       {/* Featured Categories */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-serif text-3xl text-foreground md:text-4xl">Browse by Room</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
