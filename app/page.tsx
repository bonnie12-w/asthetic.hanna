import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryCard from "@/components/category-card"
import PostCard from "@/components/post-card"

export default function HomePage() {
  const categories = [
    {
      title: "Living Room Decor",
      href: "/blog?category=living-room",
      imageUrl: "/living-room.jpg",
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

  const latestPosts = [
    {
      title: "Creating a Calm Living Space with Neutral Tones",
      slug: "calm-living-space-neutral-tones",
      imageUrl: "/post-living-room.jpg",
      date: "Dec 30, 2025",
    },
    {
      title: "Essential Elements for a Welcoming Entryway",
      slug: "welcoming-entryway-essentials",
      imageUrl: "/post-entryway.jpg",
      date: "Dec 30, 2025",
    },
    {
      title: "Spa-Inspired Bathroom Design Ideas",
      slug: "spa-inspired-bathroom-design",
      imageUrl: "/post-bathroom.jpg",
      date: "Dec 30, 2025",
    },
    {
      title: "The Art of Layering Textures in the Bedroom",
      slug: "layering-textures-bedroom",
      imageUrl: "/post-bedroom.jpg",
      date: "Dec 31, 2025",
    },
  ]

  return (
    <main className="bg-white text-[#1C1C1C]">
      {/* HERO */}
      <section className="px-6 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>
          <p className="mt-6 text-lg text-[#555555] leading-relaxed">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-black text-white px-10 py-6 text-base hover:bg-[#E6DED5] hover:text-black transition"
          >
            <Link href="/blog">Explore Decor Ideas</Link>
          </Button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
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

      {/* LATEST POSTS */}
      <section className="bg-[#FAFAFA] px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
            Latest Inspiration
          </h2>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-[#555555]">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  )
}
