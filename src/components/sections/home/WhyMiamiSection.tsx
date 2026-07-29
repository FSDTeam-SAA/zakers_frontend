import Link from "next/link";
import { TrendingUp, DollarSign, Building, Award } from "lucide-react";

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ElementType;
}

const statsData: StatItem[] = [
  {
    id: 1,
    value: "34%",
    label: "Average ROI (5yr)",
    icon: TrendingUp,
  },
  {
    id: 2,
    value: "$890B",
    label: "Miami Market Value",
    icon: DollarSign,
  },
  {
    id: 3,
    value: "12,000+",
    label: "Annual Relocations",
    icon: Building,
  },
  {
    id: 4,
    value: "AAA",
    label: "Investment Grade Rating",
    icon: Award,
  },
];

export default function WhyMiamiSection() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-50 px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-20">
      {/* Background Gradient Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-transparent to-orange-400/50" />

      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & CTA */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6">
            <div className="space-y-2">
              <span className="text-sm font-normal text-[#D4A32A] sm:text-base lg:text-2xl">
                For Owners & Investors
              </span>

              <h2 className="font-serif text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Why Miami is the World&apos;s{" "}
                <span className="text-[#D4A32A]">Premier Investment</span>{" "}
                Destination
              </h2>
            </div>

            <p className="text-base text-stone-500/80 sm:text-lg">
              A valuation based on comparable closings, active inventory, and
              assignment activity in your building or neighborhood.
            </p>

            <div className="pt-2">
              <Link
                href="/list-property"
                className="inline-flex items-center justify-center rounded-sm bg-[#D4A32A] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b88c22] hover:shadow-md"
              >
                List Your Property
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Stats Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {statsData.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white p-6 text-center transition-all duration-300 hover:shadow-md"
                >
                  {/* Stat Icon */}
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-50">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Value */}
                  <span className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span className="mt-1 text-sm font-semibold text-zinc-900/60 sm:text-base">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
