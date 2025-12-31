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
            width={240}
            height={300} // 4:5 ratio
            className="rounded-sm object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-sm" />

          <div className="absolute bottom-3 left-3">
            <h3 className="font-serif text-lg text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
