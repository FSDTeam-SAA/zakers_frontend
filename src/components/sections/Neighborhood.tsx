import Image from "next/image";
import Link from "next/link";

interface Neighborhood {
  id: number;
  name: string;
  image: string;
  href: string;
}

const neighborhoods: Neighborhood[] = [
  {
    id: 1,
    name: "Brickell",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 2,
    name: "Edgewater",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 3,
    name: "Downtown",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 4,
    name: "Miami Beach",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 5,
    name: "South of Fifth",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 6,
    name: "Sunny Isles",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 7,
    name: "Coconut Grove",
    image: "/banner.svg",
    href: "#",
  },
  {
    id: 8,
    name: "Coral Gables",
    image: "/banner.svg",
    href: "#",
  },
];

export default function Neighborhoods() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-medium tracking-wide text-[#D4A32A] sm:text-base">
            Explore Miami
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-zinc-900 sm:text-4xl md:text-5xl">
            Browse by Neighborhood
          </h2>
        </div>

        {/* Neighborhood Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {neighborhoods.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex h-56 w-full overflow-hidden rounded-[20px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Title Container */}
              <div className="relative z-10 flex h-full w-full items-end p-6">
                <h3 className="font-sans text-xl font-normal tracking-wide text-white transition-colors duration-300 group-hover:text-[#D4A32A] sm:text-2xl">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
