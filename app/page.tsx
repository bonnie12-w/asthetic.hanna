import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] leading-tight">
            Warm, Modern Home Decor Ideas for Elevated Living
          </h1>

          <p className="mt-6 text-lg text-[#555555] max-w-2xl mx-auto">
            Curated aesthetics for interiors that feel intentional and timeless
          </p>

          <Link
            href="/blog"
            className="inline-block mt-10 rounded-full border border-[#1C1C1C] px-10 py-4 text-sm tracking-wide text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition"
          >
            Explore Decor Ideas
          </Link>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="bg-[#FAFAFA] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-serif text-3xl text-[#1C1C1C]">
            Browse by Room
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Living Room Decor", image: "/categories/living-room.jpg" },
              { title: "Entryway Styling", image: "/categories/entryway.jpg" },
              { title: "Bathroom Aesthetics", image: "/categories/bathroom.jpg" },
              { title: "Bedroom Inspiration", image: "/categories/bedroom.jpg" },
            ].map((item) => (
              <div
                key={item.title}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <p className="absolute bottom-6 left-6 font-serif text-xl text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND STATEMENT ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-2xl leading-relaxed text-[#1C1C1C]">
            Aesthetic Finds by Hanna curates modern home decor ideas designed to
            inspire calm, warmth, and quiet luxury.
          </p>
        </div>
      </section>

    </main>
  );
}
