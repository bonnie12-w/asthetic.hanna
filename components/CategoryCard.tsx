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
    <Link href={href} className="block">
      <div className="mx-auto max-w-[300px]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="300px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="font-serif text-lg text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
