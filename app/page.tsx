import CategoryCard from "@/components/CategoryCard"
import PostCard from "@/components/PostCard"
import { getLatestPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getLatestPosts(4)

  return (
    <>
      {/* HERO */}
      <section className="w-full py-24 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl mb-6">
          Warm, Modern Home Decor Ideas for Elevated Living
        </h1>
        <p className="text-[#555] text-lg mb-10">
          Curated aesthetics for interiors that feel intentional and timeless
        </p>
        <a
          href="/blog"
          className="inline-block px-8 py-4 bg-[#E6DED5] text-sm uppercase tracking-wide"
        >
          Explore Decor Ideas
        </a>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1280px] mx-auto px-6 py-24 grid md:grid-cols-4 gap-8">
        <CategoryCard title="Living Room Decor" image="/images/living.jpg" />
        <CategoryCard title="Entryway Styling" image="/images/entryway.jpg" />
        <CategoryCard title="Bathroom Aesthetics" image="/images/bathroom.jpg" />
        <CategoryCard title="Bedroom Inspiration" image="/images/bedroom.jpg" />
      </section>

      {/* LATEST POSTS */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <h2 className="font-playfair text-3xl mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-24 text-center bg-[#FAFAFA]">
        <p className="max-w-3xl mx-auto font-playfair text-2xl">
          Aesthetic Finds by Anna curates modern home decor ideas designed to inspire calm, warmth, and quiet luxury.
        </p>
      </section>
    </>
  )
}
