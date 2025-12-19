import { getPostBySlug, getAllSlugs } from "@/lib/posts"
import Image from "next/image"

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <article className="pb-24">
      {/* HERO IMAGE */}
      <div className="w-full h-[70vh] relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-[820px] mx-auto px-6 mt-20">
        <h1 className="font-playfair text-5xl mb-6">{post.title}</h1>
        <p className="text-[#555] mb-16">{post.description}</p>

        <div className="prose prose-neutral max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  )
}
