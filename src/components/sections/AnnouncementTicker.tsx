export default function AnnouncementTicker() {
  const items = [
    "◆ New Launch: Cielo Brickell",
    "◆ Pre-Sales Open: Azure Edgewater",
    "◆ Limited Units: Lumière Wynwood",
    "◆ Investment Grade Returns",
    "◆ Exclusive Private Viewings Available",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#D4A32A] py-4 text-neutral-950">
      {/* Marquee Wrapper */}
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {/* First Set */}
        <div className="flex items-center gap-12 pr-12">
          {items.map((item, index) => (
            <span
              key={index}
              className="text-sm font-semibold uppercase tracking-widest sm:text-base"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Duplicate Set for Seamless Infinite Loop */}
        <div className="flex items-center gap-12 pr-12" aria-hidden="true">
          {items.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="text-sm font-semibold uppercase tracking-widest sm:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}