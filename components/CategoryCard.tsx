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
    <div className="group relative overflow-hidden rounded-sm">
      <div className="relative aspect-[4/5]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-3">
        <h3 className="text-base">{title}</h3>
      </div>
    </div>
  );
}
