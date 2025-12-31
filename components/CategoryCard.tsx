import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  title: string
  href: string
  imageUrl: string
}

export default function CategoryCard({
  title,
  href,
  imageUrl,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Title INSIDE image */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
