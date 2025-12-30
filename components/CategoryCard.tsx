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
    <Link
      href={href}
      className="group block overflow-hidden"
    >
      {/* IMAGE CONTAINER — EXACT PROPORTION */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={false}
        />

        {/* SOFT OVERLAY (NOT HEAVY) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

        {/* TITLE */}
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="font-serif text-xl text-white md:text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
