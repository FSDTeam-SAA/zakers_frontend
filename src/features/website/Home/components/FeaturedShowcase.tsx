import Image from "next/image";

import SectionHeading from "./SectionHeading";

const cards = [
  {
    title: "Waterfront Collection",
    tag: "Miami Beach",
    image: "/luxury-pool.png",
  },
  {
    title: "Urban Investment Picks",
    tag: "Brickell",
    image: "/compare-banner.png",
  },
  {
    title: "Private Advisory Matches",
    tag: "Edgewater",
    image: "/advisor.png",
  },
];

export default function FeaturedShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured blocks"
          title="Homepage sections that immediately show depth and value"
          description="Instead of a single banner only, the page now includes visually distinct content areas that make the site feel more complete."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a140f]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d09] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  {card.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Purpose-built homepage content card with strong imagery,
                  concise copy, and a luxury brand tone.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
