import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-md group">
      {/* Image container */}
      <div className="relative w-full h-[320px] md:h-[360px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-end">
        <h3 className="p-6 text-white font-serif text-2xl leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
