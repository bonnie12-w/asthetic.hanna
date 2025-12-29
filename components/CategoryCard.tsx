import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={title}
        width={600}
        height={800}
        className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-105"
        priority
      />
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2">
        <h3 className="font-serif text-lg text-[#1C1C1C]">{title}</h3>
      </div>
    </div>
  );
}
