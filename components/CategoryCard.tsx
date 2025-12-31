import Image from "next/image"
import Link from "next/link"

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
    <Link href={href} className="block">
      <div className="mx-auto w-[260px]">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={230}
            height={280} // 4:5 ratio
            className="rounded-sm object-cover"
          />

          {/* Dark overlay for readability*/}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-sm" />

          {/* Title INSIDE image*/}
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
