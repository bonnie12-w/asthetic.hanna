import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-md">
      {/* Image wrapper */}
      <div className="relative w-full h-[360px] md:h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      {/* Title */}
      <div className="absolute bottom-6 left-6">
        <h3 className="font-serif text-2xl text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
