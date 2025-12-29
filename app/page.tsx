import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-16">
      
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-[#1C1C1C] mb-6">
          Warm, Modern Home Decor Ideas for Elevated Living
        </h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto">
          Curated aesthetics for interiors that feel intentional and timeless
        </p>
      </section>

      {/* BROWSE BY ROOM */}
      <section>
        <h2 className="text-4xl font-serif text-center mb-12">
          Browse by Room
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {[
            { title: "Living Room Decor", image: "/living.jpg" },
            { title: "Entryway Styling", image: "/entryway.jpg" },
            { title: "Bathroom Aesthetics", image: "/bathroom.jpg" },
            { title: "Bedroom Inspiration", image: "/bedroom.jpg" },
          ].map((item) => (
            <div key={item.title} className="relative overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={800}
                className="object-cover w-full h-[420px]"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end">
                <h3 className="text-white text-2xl font-serif p-6">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
