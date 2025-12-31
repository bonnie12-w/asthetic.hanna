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
    <Link href={href} className="group block">
      <div className="relative h-[420px] overflow-hidden rounded-sm">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* title */}
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="font-serif text-2xl md:text-3xl text-white leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
