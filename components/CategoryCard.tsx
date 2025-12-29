"use client";

import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-3">
        <h3 className="text-lg">{title}</h3>
      </div>
    </div>
  );
}
