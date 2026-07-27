import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Meridian Group delivered beyond every expectation. My Cielo residence has appreciated 28% since purchase. The team's white-glove service is unmatched.",
    author: "Victoria Hartmann",
    role: "Private Equity Investor",
    initials: "VH",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "As an international investor, finding a developer I trust in Miami was paramount. Meridian's transparency and quality craftsmanship made the decision effortless.",
    author: "James Okonkwo",
    role: "CEO, Atlantic Ventures",
    initials: "JO",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The attention to detail in our Azure penthouse is extraordinary. Every material, every finish was selected with an artisan's care. This is genuinely exceptional living.",
    author: "Sophia Delacroix",
    role: "Luxury Lifestyle Curator",
    initials: "SD",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Working with this team provided unprecedented clarity throughout our pre-construction investment. The portfolio performance speaks for itself.",
    author: "Marcus Vance",
    role: "Real Estate Strategist",
    initials: "MV",
    rating: 5,
  },
];

export default function ClientStories() {
  return (
    <section className="w-full bg-stone-50 px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-20">
      <div className="mx-auto container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-normal text-primary sm:text-base lg:text-2xl">
            Client Stories
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Voices of <span className="text-primary">Distinction</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Decorative Background Quote Icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-amber-500/10" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm font-light leading-relaxed text-zinc-900/70">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-8 flex items-center gap-4 border-t border-amber-500/10 pt-6">
                {/* Initials Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-sm font-semibold text-zinc-950 font-serif">
                  {item.initials}
                </div>

                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-primary">
                    {item.author}
                  </span>
                  <span className="text-xs text-stone-500/70 sm:text-sm">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
