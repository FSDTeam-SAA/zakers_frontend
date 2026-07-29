const items = [
  "Tailored lead funnel",
  "Premium visual rhythm",
  "Mobile-friendly sections",
  "Feature-based architecture",
  "Easy future extension",
];

export default function InsightsStrip() {
  return (
    <section className="border-y border-white/10 bg-black/20 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div
            key={item}
            className="text-sm font-medium uppercase tracking-[0.25em] text-white/60"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
