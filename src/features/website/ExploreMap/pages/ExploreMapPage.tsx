import Image from "next/image";
import Link from "next/link";
import { BedDouble, CalendarDays, Crosshair, Expand, Minus, Plus } from "lucide-react";

import {
  exploreMapAdvantages,
  exploreMapLocations,
  exploreMapProperties,
  exploreMapVisual,
} from "../api";

function HeroSection() {
  return (
    <section className="relative min-h-[780px] overflow-hidden">
      <Image
        src={exploreMapVisual.heroImage}
        alt="Explore Miami through the map"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.40)_54.8%,rgba(0,0,0,0.80)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[563px] bg-[linear-gradient(70deg,rgba(201,168,76,0.10)_0%,rgba(201,168,76,0)_60%)]" />

      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-[12%] right-[26%] rounded-sm bg-[#b6b0a4]/85 px-3 py-1 text-[11px] tracking-[0.12em] text-[#1f2228]">
          EDGEWATER
        </div>
        <div className="absolute top-[38%] right-[20%] rounded-sm bg-[#b6b0a4]/85 px-3 py-1 text-[11px] tracking-[0.12em] text-[#1f2228]">
          DOWNTOWN MIAMI
        </div>
        <div className="absolute top-[44%] right-[4%] rounded-sm bg-[#b6b0a4]/85 px-3 py-1 text-[11px] tracking-[0.12em] text-[#1f2228]">
          MIAMI BEACH
        </div>
        <div className="absolute top-[68%] right-[17%] rounded-sm bg-[#b6b0a4]/85 px-3 py-1 text-[11px] tracking-[0.12em] text-[#1f2228]">
          BRICKELL
        </div>
        <div className="absolute bottom-[8%] right-[16%] rounded-sm bg-[#b6b0a4]/85 px-3 py-1 text-[11px] tracking-[0.12em] text-[#1f2228]">
          COCONUT GROVE
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[780px] max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
          Interactive Property Discovery
        </p>
        <h1
          className="mt-4 text-4xl leading-[1.12] text-white sm:text-5xl lg:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Explore Miami Through The Map
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          Discover Miami&apos;s finest luxury developments with our
          neighborhood-first experience designed to surface pricing, status, and
          lifestyle context in one elegant flow.
        </p>
      </div>
    </section>
  );
}

function PropertyCard({
  property,
  highlighted = false,
}: {
  property: (typeof exploreMapProperties)[number];
  highlighted?: boolean;
}) {
  return (
    <article className="flex items-center">
      <div className="relative h-[286px] w-[176px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
        />
        <div className="absolute left-3 top-3 rounded-[4px] bg-primary px-2.5 py-1 text-[11px] text-[#1a1a1a]">
          {property.statusLabel}
        </div>
      </div>
      <div className="flex-1 rounded-r-[4px] border border-l-0 border-[#e8e5df] bg-[#faf8f5] px-6 py-4">
        <h3
          className="text-[34px] leading-[1.2] text-[#1a1a1a] sm:text-[48px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          {property.name}
        </h3>
        <p className="mt-1 text-xl text-[#676767] sm:text-2xl">
          {property.neighborhood}
        </p>
        <p className="mt-3 text-xl text-primary sm:text-2xl">{property.price}</p>
        <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-[#676767] sm:text-base">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{property.completion}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-[#6b6b6b]">{property.developer}</p>
        <Link
          href="/properties/cora-merrick-park"
          className={`mt-4 flex w-full items-center justify-center rounded-[4px] border-2 px-8 py-4 text-sm font-semibold ${
            highlighted
              ? "border-primary bg-primary text-white"
              : "border-primary bg-transparent text-primary"
          }`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

function ExplorerSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <div className="w-full lg:w-[675px]">
          <div className="lg:sticky lg:top-28">
            <h2
              className="text-[34px] leading-[1.2] text-[#1a1a1a] sm:text-[48px]"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              Luxury Property Explorer
            </h2>
            <p className="mt-2 text-xl text-[#676767] sm:text-2xl">
              Showing 7 of 56 Luxury Developments
            </p>
            <div className="mt-8 rounded-[4px] border border-[#e8e5df] bg-[#e8e5df] p-[17px] text-sm text-[#676767]">
              Search by name or neighborhood
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap gap-2">
                {["All", "Pre Construction", "Under Construction", "Move-In Ready"].map(
                  (item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-[4px] border px-4 py-2 text-base ${
                        index === 0
                          ? "border-primary bg-primary text-[#1a1a1a]"
                          : "border-[#e8e5df] bg-white text-[#1a1a1a]/70"
                      }`}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Waterfront", "Luxury Collection"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-[4px] border border-[#e8e5df] bg-white px-4 py-2 text-base text-[#1a1a1a]/70"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {exploreMapProperties.map((property, index) => (
                <PropertyCard
                  key={property.name}
                  property={property}
                  highlighted={index === 0}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-[900px] flex-1">
          <div className="relative overflow-hidden rounded-[2px] border border-[#e8e5df] lg:sticky lg:top-28 lg:h-[1540px]">
            <Image
              src={exploreMapVisual.mapImage}
              alt="Brickell map"
              width={900}
              height={1540}
              className="h-full w-full object-cover"
            />

            <div className="absolute left-6 top-6 rounded-[4px] border border-[#e8e5df] bg-white p-4">
              <p className="text-base text-[#1a1a1a]">Legend</p>
              <div className="mt-2 space-y-2 text-sm text-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>Pre Construction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0d1b34]" />
                  <span>Under Construction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#007a55]" />
                  <span>Move-In Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6b6b6b]" />
                  <span>Sold Out</span>
                </div>
              </div>
            </div>

            <div className="absolute right-6 top-6 flex flex-col gap-2">
              {[Plus, Minus, Crosshair, Expand].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-white text-[#1a1a1a] shadow-[0px_1px_3px_rgba(0,0,0,0.1)]"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>

            {exploreMapLocations.map((location, index) => {
              const bg =
                location.status === "under-construction"
                  ? "bg-[#0d1b34]"
                  : location.status === "move-in-ready"
                    ? "bg-[#007a55]"
                    : "bg-primary";
              const outer =
                index === 3 ? "bg-[rgba(201,162,39,0.30)]" : "bg-transparent";

              return (
                <div
                  key={`${location.top}-${location.left}-${index}`}
                  className="absolute flex flex-col items-center"
                  style={{ top: location.top, left: location.left }}
                >
                  <div className={`absolute -top-1 h-9 w-9 rounded-full ${outer}`} />
                  <div
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white ${bg} shadow-[0px_4px_7px_rgba(13,27,52,0.35)]`}
                  >
                    <div className="h-3.5 w-3.5 rounded-full border border-white" />
                  </div>
                  <div className={`mt-1 h-1.5 w-1.5 rounded-full ${bg}`} />
                </div>
              );
            })}

            <div className="absolute left-[12%] top-[30%] w-[240px] max-w-[80%] rounded-[4px] border border-[#e8e5df] bg-white p-4 shadow-lg">
              <h3
                className="text-[26px] leading-[1.2] text-[#1a1a1a]"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                Aurelia Residences
              </h3>
              <p className="mt-1 text-xl text-[#676767]">Brickell</p>
              <p className="mt-2 text-xl text-primary">From $1.2M</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#676767]">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4" />
                  <span>1–4 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>Est. 2027</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-[#6b6b6b]">Related Group</p>
              <Link
                href="/properties/cora-merrick-park"
                className="mt-3 flex w-full items-center justify-center rounded-[4px] bg-primary px-6 py-3 text-sm font-semibold text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantageSection() {
  return (
    <section className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base text-primary">The Advantage</p>
          <h2
            className="mt-3 text-[34px] leading-[1.2] text-slate-900 sm:text-[48px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            Why Search With Our Interactive Map
          </h2>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {exploreMapAdvantages.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[4px] border border-stone-200 bg-white p-10 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 text-primary">
                <span className="text-lg">{index + 1}</span>
              </div>
              <h3
                className="mt-6 text-[28px] leading-8 text-slate-900"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="relative overflow-hidden bg-[#0d1424] px-4 py-20 sm:px-6 lg:px-8">
      <Image
        src={exploreMapVisual.heroImage}
        alt="Miami residences"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(13,20,36,0.78)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2
          className="text-4xl leading-[1.2] text-white sm:text-5xl"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Looking for the Perfect <span className="text-primary">Miami Residence?</span>
        </h2>
        <p className="mt-4 text-base leading-7 text-white/75">
          Receive exclusive pricing, floor plans, private presentations, and
          personalized recommendations from our luxury real estate advisors.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-[4px] bg-primary px-6 py-3 text-sm font-semibold text-white"
          >
            Schedule Presentation
          </button>
          <button
            type="button"
            className="rounded-[4px] border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary"
          >
            Request Floor Plans
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ExploreMapPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ExplorerSection />
      <AdvantageSection />
      <BottomCta />
    </main>
  );
}
