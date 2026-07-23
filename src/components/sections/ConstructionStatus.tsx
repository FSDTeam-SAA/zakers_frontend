import { Building2, HardHat, Clock, CheckCircle2 } from "lucide-react";

interface StatusCard {
  id: number;
  title: string;
  description: string;
  count: string;
  icon: React.ElementType;
}

const statusData: StatusCard[] = [
  {
    id: 1,
    title: "Pre-Construction",
    description: "Lock in early pricing before ground breaks.",
    count: "24 Projects",
    icon: Building2,
  },
  {
    id: 2,
    title: "Under Construction",
    description: "Track progress on rising towers.",
    count: "18 Projects",
    icon: HardHat,
  },
  {
    id: 3,
    title: "Completing",
    description: "Final finishes underway, move-in near.",
    count: "9 Projects",
    icon: Clock,
  },
  {
    id: 4,
    title: "Delivered",
    description: "Move-in ready residences available now.",
    count: "31 Projects",
    icon: CheckCircle2,
  },
];

export default function ConstructionStatus() {
  return (
    <section className="w-full bg-stone-50 px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-24">
      <div className="mx-auto container">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-medium tracking-wide text-[#D4A32A] sm:text-base">
            Real-Time Availability
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-stone-950 sm:text-4xl md:text-5xl">
            Construction Status
          </h2>
        </div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statusData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center justify-between rounded-2xl border border-stone-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center">
                  {/* Icon Wrapper */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/5 transition-colors duration-300 group-hover:bg-[#D4A32A]/10">
                    <IconComponent className="h-6 w-6 text-slate-900 transition-colors duration-300 group-hover:text-[#D4A32A]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-normal text-zinc-900 sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Project Count Badge/Text */}
                <div className="mt-6">
                  <span className="text-base font-semibold text-[#D4A32A]">
                    {item.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
