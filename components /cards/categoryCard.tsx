import Image from "next/image"
import Link from "next/link"

type CategoryCardProps = {
  title: string
  image: string
  href?: string
}

export default function CategoryCard({
  title,
  image,
  href = "/blog",
}: CategoryCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden">
      {/* IMAGE */}
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* TITLE OVERLAY */}
      <div className="absolute bottom-6 left-6">
        <h3 className="font-playfair text-h3 text-white drop-shadow-sm">
          {title}
        </h3>
      </div>
    </Link>
  )
}
