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
      {/* THIS container MUST have aspect + relative */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-none">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Title INSIDE image */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-serif text-2xl text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
