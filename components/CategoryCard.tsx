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
      className="group relative block overflow-hidden rounded-xl"
    >
      {/* Image wrapper controls SIZE */}
      <div className="relative aspect-[2/3] w-full bg-neutral-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={false}
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="font-serif text-xl text-white md:text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
