import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="section-padding">
        <div className="container-main text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>
          <p className="text-[#555555] mb-10">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>
          <a
            href="#categories"
            className="inline-block border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition"
          >
            Explore Decor Ideas
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="section-padding bg-[#FAFAFA]">
        <div className="container-main">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard title="Living Room Decor" image="/living.jpg" />
            <CategoryCard title="Entryway Styling" image="/entryway.jpg" />
            <CategoryCard title="Bathroom Aesthetics" image="/bathroom.jpg" />
            <CategoryCard title="Bedroom Inspiration" image="/bedroom.jpg" />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl mb-12 text-center">Latest Articles</h2>

          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <div className="aspect-[16/10] bg-[#FAFAFA] mb-4" />
              <h3 className="text-xl">
                Creating a Calm Living Room with Neutral Tones
              </h3>
            </div>

            <div>
              <div className="aspect-[16/10] bg-[#FAFAFA] mb-4" />
              <h3 className="text-xl">
                How to Style a Minimal Entryway That Feels Warm
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="section-padding bg-[#FAFAFA]">
        <div className="container-main max-w-2xl text-center">
          <p className="text-lg">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>
    </main>
  );
}
