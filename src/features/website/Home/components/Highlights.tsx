import { Building2, Compass, LineChart, ShieldCheck } from "lucide-react";

import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Building2,
    title: "Signature project curation",
    description:
      "Feature only the developments that match your positioning and buyer intent.",
  },
  {
    icon: Compass,
    title: "Neighborhood storytelling",
    description:
      "Guide visitors through location benefits with a cleaner content hierarchy.",
  },
  {
    icon: LineChart,
    title: "Market insight framing",
    description:
      "Blend luxury presentation with practical investment signals and momentum.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-first experience",
    description:
      "Use testimonial, stats, and advisor cues that make inquiry decisions easier.",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why this home page works"
          title="A clean feature-driven layout with premium content blocks"
          description="The section flow is designed to feel polished and intentional, while still being easy to maintain inside your current project structure."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
