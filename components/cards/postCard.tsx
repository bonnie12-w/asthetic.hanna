import Image from "next/image"
import Link from "next/link"

type Post = {
  slug: string
  title: string
  image: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* IMAGE */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <h3 className="mt-6 font-playfair text-h3">
        {post.title}
      </h3>
    </Link>
  )
}
