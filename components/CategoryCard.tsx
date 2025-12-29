import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-md">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/20" />

      <h3 className="absolute bottom-6 left-6 text-white text-2xl font-serif">
        {title}
      </h3>
    </div>
  );
}
