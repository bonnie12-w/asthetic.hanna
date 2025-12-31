import Image from "next/image"

export default function HomePage() {
  return (
    <main className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Image Render Test</h1>

      <div className="w-[300px]">
        <Image
          src="/bathroom.jpg"
          alt="Bathroom"
          width={300}
          height={375}
        />
      </div>

      <div className="w-[300px]">
        <Image
          src="/bedroom.jpg"
          alt="Bedroom"
          width={300}
          height={375}
        />
      </div>
    </main>
  )
}
