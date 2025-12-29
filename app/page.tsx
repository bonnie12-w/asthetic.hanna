import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-24">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CategoryCard
          title="Living Room Decor"
          image="/living-room.jpg"
        />
        <CategoryCard
          title="Entryway Styling"
          image="/entryway.jpg"
        />
        <CategoryCard
          title="Bathroom Aesthetics"
          image="/bathroom.jpg"
        />
        <CategoryCard
          title="Bedroom Inspiration"
          image="/bedroom.jpg"
        />
      </section>
    </main>
  );
}
