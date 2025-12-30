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
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="font-serif text-lg text-white">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
