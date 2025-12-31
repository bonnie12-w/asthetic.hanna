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
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          width={230}
         height={280}// 4:5 ratio
          className="rounded-sm object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="font-serif text-2xl md:text-3xl text-white leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
