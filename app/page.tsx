import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  return (
    <main className="bg-white text-[#1C1C1C]">
      {/* HERO */}
      <section className="w-full px-6 py-24 text-center">
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
          Warm, Modern Home Decor Ideas for Elevated Living
        </h1>
        <p className="text-[#555555] text-lg mb-8">
          Curated aesthetics for interiors that feel intentional and timeless
        </p>
        <button className="px-8 py-4 border border-[#1C1C1C] text-sm tracking-wide hover:bg-black hover:text-white transition">
          Explore Decor Ideas
        </button>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <h2 className="font-serif text-4xl text-center mb-16">
          Browse by Room
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CategoryCard
            title="Living Room Decor"
            image="/categories/living-room.jpg"
          />
          <CategoryCard
            title="Entryway Styling"
            image="/categories/entryway.jpg"
          />
          <CategoryCard
            title="Bathroom Aesthetics"
            image="/categories/bathroom.jpg"
          />
          <CategoryCard
            title="Bedroom Inspiration"
            image="/categories/bedroom.jpg"
          />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="px-6 py-24 text-center">
        <p className="max-w-2xl mx-auto text-xl text-[#555555] leading-relaxed">
          Aesthetic Finds by Hanna curates modern home decor ideas designed to
          inspire calm, warmth, and quiet luxury.
        </p>
      </section>
    </main>
  );
}
