import Image from "next/image";

import {
  waterfrontEstateEnclaves,
  waterfrontEstateListings,
  waterfrontEstatePins,
  waterfrontEstatesVisual,
} from "../api";

function HeroSection() {
  return (
    <section className="relative min-h-[750px] overflow-hidden">
      <Image
        src={waterfrontEstatesVisual.heroImage}
        alt="Miami waterfront estates"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_7.7%,rgba(0,0,0,0)_53.2%,rgba(0,0,0,0.85)_98.8%)]" />
      <div className="relative mx-auto flex min-h-[750px] max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-white/85 sm:text-base">
          Miami-dade County • Single Family
        </p>
        <h1
          className="mt-4 max-w-6xl text-4xl leading-[1.15] text-white sm:text-6xl lg:text-[72px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Waterfront estates in Miami&apos;s most exclusive enclaves.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          Closed single-family waterfront sales of $25M and above across
          Miami-Dade.
        </p>
      </div>
    </section>
  );
}

function ListingsMapSection() {
  return (
    <section className="bg-[#faf8f5]">
      <div className="mx-auto grid max-w-[1920px] items-start gap-4 pl-0 lg:grid-cols-[579px_minmax(0,1fr)] lg:pl-40">
        <div className="space-y-3 px-4 py-4 sm:px-6 lg:px-0">
          {waterfrontEstateListings.map((listing) => (
            <article
              key={listing.id}
              className={`rounded-l-[4px] border p-6 ${
                listing.highlighted
                  ? "border-primary bg-[#e8e5df]"
                  : "border-[#e8e5df] bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0d1b34] text-[10px] font-bold text-white">
                      {listing.id}
                    </div>
                    <h3 className="text-xl text-[#1a1a1a] sm:text-2xl">
                      {listing.address}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-[#676767]">{listing.area}</p>
                  <p className="mt-2 text-sm text-[#676767]">{listing.details}</p>
                  <div className="mt-4 inline-flex rounded-[4px] border-2 border-primary px-4 py-2 text-sm font-semibold text-primary">
                    {listing.badge}
                  </div>
                </div>
                <p
                  className="text-4xl text-primary sm:text-[48px]"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  {listing.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative h-[900px] overflow-hidden bg-[#e8e5df] lg:h-[1208px]">
          <Image
            src={waterfrontEstatesVisual.mapImage}
            alt="Miami waterfront islands map"
            fill
            className="object-cover"
          />

          {waterfrontEstatePins.map((pin, index) => (
            <div
              key={`${pin.top}-${pin.left}-${index}`}
              className="absolute flex flex-col items-center"
              style={{ top: pin.top, left: pin.left }}
            >
              <div
                className={`h-4 w-4 rounded-full border-2 border-white shadow-[0px_4px_7px_rgba(13,27,52,0.35)] ${
                  pin.color === "navy" ? "bg-[#0d1b34]" : "bg-primary"
                }`}
              />
            </div>
          ))}

          <div className="absolute left-6 bottom-6 rounded-[4px] border border-[#e8e5df] bg-white p-3 text-xs text-[#1a1a1a] shadow-md">
            <div className="space-y-1">
              <p className="font-semibold">Legend</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0d1b34]" />
                <span>Prime closed sale</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>Waterfront estate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnclavesSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#8a7118]">
            Gated islands and curated micro-markets
          </p>
          <h2
            className="mt-4 text-4xl text-[#1a1a1a] sm:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            The enclaves
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#676767] sm:text-base">
            Each pocket offers a distinct waterfront lifestyle, from private
            island estates to marina-centric neighborhoods with direct ocean
            access.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {waterfrontEstateEnclaves.map((enclave) => (
            <article
              key={enclave.name}
              className="rounded-[4px] border border-[#e8e5df] bg-[#e8e5df] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[24px] text-[#1a1a1a]"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  {enclave.name}
                </h3>
                <span className="rounded-[3px] border border-primary/50 px-2 py-1 text-[8px] font-semibold tracking-[0.48px] text-[#8a7118] uppercase">
                  {enclave.tag}
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-[#1a1a1a]">
                {enclave.summary}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#676767]">
                {enclave.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisorSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[718px_minmax(0,1fr)] lg:items-center">
        <div className="overflow-hidden rounded-[8px]">
          <Image
            src={waterfrontEstatesVisual.advisorImage}
            alt="Zach Akers"
            width={718}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl text-primary">A Different Kind of Advisor</p>
          <h2
            className="mt-4 text-[42px] text-[#0d0d0d] sm:text-[48px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            ZACH AKERS
          </h2>
          <p className="mt-2 text-2xl text-[#0d0d0d]">
            ONE Sotheby&apos;s International Realty
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#676767] sm:text-base">
            <p>
              Zach Akers is one of Miami&apos;s leading new development
              specialists, with more than $100 million in pre-construction sales
              across South Florida&apos;s most coveted residential projects.
            </p>
            <p>
              As an agent with ONE Sotheby&apos;s International Realty, he gives
              clients privileged access to Miami&apos;s next generation of luxury
              living, often before opportunities ever reach the open market.
            </p>
            <p>
              His practice blends market intelligence, developer fluency,
              deposit strategy, and white-glove execution for local and global
              buyers.
            </p>
          </div>

          <div className="mt-8 grid gap-4 border-t border-[#1c1f26]/8 pt-6 sm:grid-cols-4">
            {[
              ["$100M+", "Pre-Construction Sales"],
              ["16 Years", "Experience"],
              ["Florida Native", "Local Expertise"],
              ["Multilingual Team", "Global Client Service"],
            ].map(([value, label]) => (
              <div key={label} className="sm:border-l sm:border-[#1c1f26]/8 sm:pl-4 first:border-l-0 first:pl-0">
                <p className="text-base font-semibold text-[#1c1f26]">{value}</p>
                <p className="mt-1 text-xs uppercase text-[#676767]">{label}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-[4px] bg-primary px-8 py-4 text-sm font-semibold text-white"
          >
            Connect With Zach
          </button>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Image
              src={waterfrontEstatesVisual.advisorLogo}
              alt="ONE Sotheby's"
              width={147}
              height={32}
              className="h-8 w-auto object-contain opacity-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WaterfrontEstatesPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ListingsMapSection />
      <EnclavesSection />
      <AdvisorSection />
    </main>
  );
}
