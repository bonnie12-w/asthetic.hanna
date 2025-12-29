import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight">
          Warm, Modern Home Decor Ideas for Elevated Living
        </h1>
        <p className="mt-6 text-[#555555] text-lg">
          Curated aesthetics for interiors that feel intentional and timeless
        </p>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard
              title="Living Room Decor"
              image="/images/living-room.jpg"
            />
            <CategoryCard
              title="Entryway Styling"
              image="/images/entryway.jpg"
            />
            <CategoryCard
              title="Bathroom Aesthetics"
              image="/images/bathroom.jpg"
            />
            <CategoryCard
              title="Bedroom Inspiration"
              image="/images/bedroom.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
