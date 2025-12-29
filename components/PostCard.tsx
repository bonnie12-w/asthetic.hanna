import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  image: string;
  slug: string;
}

export default function PostCard({ title, image, slug }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-lg font-serif text-[#1C1C1C]">
        {title}
      </h3>
    </Link>
  );
}
