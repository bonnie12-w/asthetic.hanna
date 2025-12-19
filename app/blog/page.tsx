import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/PostCard"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24">
      <h1 className="font-playfair text-5xl mb-16">Blog</h1>

      <div className="grid md:grid-cols-2 gap-16">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
