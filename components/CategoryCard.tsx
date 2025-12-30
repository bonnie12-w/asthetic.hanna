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
      <div className="mx-auto w-full max-w-[320px]">
        {/* IMAGE */}
        <div className="relative aspect-[5/6] overflow-hidden rounded-sm">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="320px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* VERY SOFT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* TITLE */}
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="font-serif text-lg text-white md:text-xl">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
