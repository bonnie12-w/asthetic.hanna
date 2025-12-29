import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl">
      {/* Image container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      {/* Overlay title */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white text-lg font-medium tracking-wide drop-shadow">
          {title}
        </h3>
      </div>
    </div>
  );
}
