import Image from "next/image"
import { getPostBySlug, getAllSlugs } from "@/lib/posts"

export async function generateStaticParams() {
  const slugs = await getAllSlugs()

  return slugs.map(slug => ({
    slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  return (
    <article className="pb-sectionDesktop">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-[820px] mx-auto px-6 mt-24">
        <h1 className="font-playfair text-h1 mb-8">
          {post.title}
        </h1>

        <p className="text-secondary mb-20">
          {post.description}
        </p>

        {/* MDX CONTENT */}
        {post.content}
      </div>
    </article>
  )
}
