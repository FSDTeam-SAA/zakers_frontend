import Image from "next/image";
import { MapPin } from "lucide-react";

interface Development {
  id: number;
  badge: string;
  location: string;
  title: string;
  description: string;
  price: string;
  completion: string;
  beds: string;
  image: string;
}

const developments: Development[] = [
  {
    id: 1,
    badge: "Now Selling",
    location: "Brickell, Miami",
    title: "Cielo Brickell",
    description:
      "Soaring 62 stories above Biscayne Bay, Cielo redefines ultra-luxury living with panoramic water views from every residence.",
    price: "$1.2M",
    completion: "Est. 2027",
    beds: "1–4 Beds",
    image: "https://placehold.co/515x288",
  },
  {
    id: 2,
    badge: "Coming Soon",
    location: "Downtown Austin",
    title: "Skyline Residences",
    description:
      "Experience urban elegance with floor-to-ceiling windows and rooftop amenities offering breathtaking cityscapes.",
    price: "$850K",
    completion: "Est. 2025",
    beds: "2–3 Beds",
    image: "https://placehold.co/515x288",
  },
  {
    id: 3,
    badge: "Available Now",
    location: "Silver Lake, Los Angeles",
    title: "The Horizon Lofts",
    description:
      "A fusion of modern design and historic charm, featuring open-concept layouts and vibrant community spaces.",
    price: "$950K",
    completion: "Ready to Move In",
    beds: "1–2 Beds",
    image: "https://placehold.co/515x288",
  },
];

export default function FeaturedDevelopments() {
  return (
    <section className="w-full bg-stone-50 px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-medium tracking-wide text-[#D4A32A] sm:text-base">
            Curated Selection
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-zinc-900 sm:text-4xl md:text-5xl">
            Featured Developments
          </h2>
        </div>

        {/* Developments Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {developments.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden sm:h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-[#D4A32A] px-3 py-1">
                  <span className="text-xs font-medium text-zinc-900">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <MapPin className="h-4 w-4 text-[#D4A32A]" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {item.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-stone-500 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Property Details Footer */}
                <div className="mt-6 border-t border-stone-200 pt-4">
                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div>
                      <p className="text-xs text-stone-500">Starting At</p>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500">Completion</p>
                      <p className="text-sm font-semibold text-stone-950">
                        {item.completion}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-500">Beds</p>
                      <p className="text-sm font-semibold text-stone-950">
                        {item.beds}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}