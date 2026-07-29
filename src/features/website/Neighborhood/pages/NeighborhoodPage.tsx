import Image from "next/image";
import Link from "next/link";

import {
  neighborhoodDevelopments,
  neighborhoodPins,
  neighborhoodStats,
  neighborhoodVisual,
} from "../api";

function HeroSection() {
  return (
    <section className="relative min-h-[750px] overflow-hidden">
      <Image
        src={neighborhoodVisual.heroImage}
        alt="Explore Brickell developments"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_54.8%,rgba(0,0,0,0.8)_100%)]" />
      <div className="relative mx-auto flex min-h-[750px] max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-white/85">Miami&apos;s Financial Heart</p>
        <h1
          className="mt-4 text-4xl leading-[1.12] text-white sm:text-6xl lg:text-[72px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Explore Brickell Developments
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-white/80 sm:text-base">
          Brickell is Miami&apos;s soaring financial district, where glass towers
          rise above a dense, walkable core of restaurants, boutiques, and
          waterfront parks. It remains the city&apos;s most active
          pre-construction corridor for buyers seeking urban sophistication and
          strong rental demand.
        </p>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-2xl text-primary">Neighborhood Overview</p>
          <h2
            className="mt-3 text-4xl text-[#1a1a1a] sm:text-5xl lg:text-[72px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            Life in Brickell
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-[#676767] sm:text-2xl">
            Brickell is Miami&apos;s soaring financial district, where towers
            rise above a dense, walkable core of restaurants, boutiques, and
            waterfront parks. It remains the city&apos;s most active
            pre-construction corridor for buyers seeking urban sophistication
            and strong rental demand.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {neighborhoodStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-4xl text-[#1a1a1a] sm:text-[48px]"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xl text-[#676767] sm:text-2xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[4px] border border-[#e8e5df] shadow-[0px_30px_70px_-30px_rgba(13,27,52,0.35)]">
          <div className="relative h-[440px] bg-[#0d1b34]">
            <Image
              src={neighborhoodVisual.mapImage}
              alt="Brickell map"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[rgba(13,27,52,0.25)]" />

            {neighborhoodPins.map((pin, index) => (
              <div
                key={`${pin.top}-${pin.left}-${index}`}
                className="absolute"
                style={{ top: pin.top, left: pin.left }}
              >
                <div
                  className={`flex items-center justify-center rounded-full border-2 border-white shadow-[0px_6px_16px_-4px_rgba(0,0,0,0.5)] ${
                    pin.primary ? "h-[35px] w-[35px] bg-white" : "h-6 w-6 bg-primary"
                  }`}
                >
                  <div
                    className={`rounded-full ${
                      pin.primary ? "h-[13px] w-[13px] bg-[#0d1b34]" : "h-3 w-3 bg-white"
                    }`}
                  />
                </div>
              </div>
            ))}

            <div className="absolute left-5 top-5 rounded-[8px] border border-white/20 bg-[rgba(13,27,52,0.7)] p-1 backdrop-blur">
              <div className="grid gap-px">
                {["+", "-", "◎", "⤢"].map((symbol) => (
                  <button
                    key={symbol}
                    type="button"
                    className="flex h-9 w-9 items-center justify-center text-white"
                  >
                    {symbol}
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute right-5 top-5 rounded-[8px] border border-white/20 bg-[rgba(13,27,52,0.7)] px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur">
              North up
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopmentsSection() {
  const cards = Array.from({ length: 9 }, (_, index) => ({
    ...neighborhoodDevelopments[index % neighborhoodDevelopments.length],
  }));

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base text-primary">Brickell Listings</p>
            <h2
              className="mt-3 text-4xl text-[#1a1a1a] sm:text-5xl"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              Developments in Brickell
            </h2>
          </div>
          <button
            type="button"
            className="rounded-[4px] border border-[#e8e5df] px-4 py-2 text-sm text-[#676767]"
          >
            Sort: Newest
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="overflow-hidden border border-[#e8e5df] bg-white"
            >
              <div className="relative h-[220px]">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
                <div className="absolute right-3 top-3 rounded-[3px] bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                  {card.status}
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-[28px] text-[#1a1a1a]"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#676767]">
                  Elevated design, walkable dining, and immediate proximity to
                  Brickell&apos;s most in-demand corridors.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-[#676767]">
                  <div>
                    <p className="uppercase">Starting</p>
                    <p className="mt-1 text-sm text-[#1a1a1a]">{card.price}</p>
                  </div>
                  <div>
                    <p className="uppercase">Completion</p>
                    <p className="mt-1 text-sm text-[#1a1a1a]">{card.completion}</p>
                  </div>
                  <div>
                    <p className="uppercase">Beds</p>
                    <p className="mt-1 text-sm text-[#1a1a1a]">{card.beds}</p>
                  </div>
                </div>
                <Link
                  href="/properties/cora-merrick-park"
                  className="mt-5 flex w-full items-center justify-center rounded-[4px] bg-primary px-5 py-3 text-sm font-semibold text-white"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <Image
        src={neighborhoodVisual.ctaImage}
        alt="Luxury pool"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(12,12,14,0.88)]" />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(201,168,76,0.08)_0%,rgba(201,168,76,0)_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2
          className="text-4xl text-[#f5f0e8] sm:text-5xl lg:text-[72px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Need guidance choosing the right project?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-[#e8e5df]/65">
          Brett Fraser has access to off-market pricing and allocation priority.
        </p>
        <button
          type="button"
          className="mt-8 rounded-[4px] bg-primary px-8 py-4 text-sm font-semibold text-white"
        >
          Speak With Brett
        </button>
      </div>
    </section>
  );
}

export default function NeighborhoodPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <OverviewSection />
      <DevelopmentsSection />
      <CtaSection />
    </main>
  );
}
