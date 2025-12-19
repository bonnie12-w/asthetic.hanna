import Image from "next/image"

export const MDXComponents = {
  h2: (props: any) => (
    <h2
      {...props}
      className="font-playfair text-h2 mt-24 mb-8"
    />
  ),

  p: (props: any) => (
    <p
      {...props}
      className="text-secondary leading-[1.7] mb-8"
    />
  ),

  img: ({ src, alt }: { src: string; alt: string }) => (
    <div className="my-24">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1600}
        className="w-full h-auto"
      />
    </div>
  ),
}
