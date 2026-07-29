import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

import {
  propertyDetailsAdvisor,
  propertyDetailsAvailability,
  propertyDetailsEditorial,
  propertyDetailsGallery,
  propertyDetailsHighlights,
  propertyDetailsInfoCards,
  propertyDetailsOverview,
  propertyDetailsRelated,
  propertyDetailsSummary,
} from "../api";

function TopBar() {
  return (
    <section className="border-b border-[#e8e5df] bg-white pt-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/neighborhoods"
            className="flex items-center gap-3 text-sm font-medium tracking-[0.16em] text-[#1a1a1a]"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO PROPERTIES
          </Link>
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-[4px] border border-[#e8e5df]">
              <Image
                src={propertyDetailsGallery.thumbnails[0]}
                alt={propertyDetailsSummary.title}
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
              />
            </div>
            <p
              className="text-[28px] text-[#1a1a1a]"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              {propertyDetailsSummary.title}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-sm">
            <span className="rounded-[4px] border border-primary/50 bg-primary/10 px-4 py-2 font-semibold text-primary">
              {propertyDetailsSummary.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#9b9b9b]" />
            <span className="text-[#676767]">{propertyDetailsSummary.salesProgress}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#676767]">Starting From</span>
              <span
                className="text-[28px] text-[#1a1a1a]"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                {propertyDetailsSummary.startingFrom}
              </span>
            </div>
            <button
              type="button"
              className="rounded-[4px] bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              Inquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-[4px]">
            <Image
              src={propertyDetailsGallery.hero}
              alt={propertyDetailsSummary.title}
              width={1268}
              height={520}
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute left-6 top-6 rounded-[4px] bg-primary px-4 py-2 text-sm font-semibold text-white">
              {propertyDetailsSummary.statusLabel}
            </div>
          </div>
          <div className="grid gap-3">
            {propertyDetailsGallery.thumbnails.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-[4px]">
                <Image
                  src={image}
                  alt={`${propertyDetailsSummary.title} ${index + 1}`}
                  width={320}
                  height={164}
                  className="h-[164px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#676767]">
              <MapPin className="h-4 w-4" />
              <span>{propertyDetailsSummary.location}</span>
            </div>
            <h1
              className="mt-4 text-4xl text-[#1a1a1a] sm:text-[58px]"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              {propertyDetailsSummary.title}
            </h1>
            <p className="mt-3 text-lg text-[#676767]">
              {propertyDetailsSummary.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Request Pricing", "Request Floor Plans", "Save"].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-[4px] bg-primary px-6 py-4 text-sm font-semibold text-white"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-0 border-t border-[#e8e5df] lg:grid-cols-4">
          {[
            ["Starting Price", propertyDetailsSummary.startingFrom],
            ["Delivery", propertyDetailsSummary.delivery],
            ["Bedrooms", propertyDetailsSummary.bedrooms],
            ["Size Range", propertyDetailsSummary.sizeRange],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-[#e8e5df] px-6 py-8 text-center lg:border-r last:border-r-0">
              <p className="text-sm text-[#676767]">{label}</p>
              <p className="mt-3 text-lg text-[#1a1a1a]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base text-primary">Project Overview</p>
          <h2
            className="mt-3 text-4xl text-[#1a1a1a] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            {propertyDetailsOverview.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <p className="text-base leading-8 text-[#676767]">
            {propertyDetailsOverview.body}
          </p>
          <div className="overflow-hidden rounded-[4px] border border-[#e8e5df]">
            <Image
              src={propertyDetailsGallery.overviewImage}
              alt="Project overview"
              width={790}
              height={465}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Developer", propertyDetailsSummary.developer],
            ["Construction Stage", propertyDetailsSummary.stage],
            ["Delivery", propertyDetailsSummary.delivery],
            ["Neighborhood", propertyDetailsSummary.location],
          ].map(([label, value]) => (
            <div key={label} className="border border-[#e8e5df] px-6 py-8 text-center">
              <p className="text-sm text-[#676767]">{label}</p>
              <p className="mt-3 text-lg text-[#1a1a1a]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  const rows = [
    ["Starting Price", propertyDetailsSummary.startingFrom, "Price per (Sq Ft)", propertyDetailsSummary.pricePerSqFt],
    ["Stories", propertyDetailsSummary.stories, "Total Residences", propertyDetailsSummary.totalResidences],
    ["Bedrooms", propertyDetailsSummary.bedrooms, "Size Range (SF)", propertyDetailsSummary.sizeRange],
    ["Delivery", propertyDetailsSummary.delivery, "Construction Stage", propertyDetailsSummary.stage],
    ["Developer", propertyDetailsSummary.developer, "Deposit Structure", propertyDetailsSummary.depositStructure],
    ["Sales Progress", propertyDetailsSummary.salesProgress, "Rental Policy", propertyDetailsSummary.rentalPolicy],
  ];

  return (
    <section className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-base text-primary">Development Overview</p>
          <h2
            className="mt-3 text-4xl text-[#1a1a1a] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            {propertyDetailsOverview.detailHeading}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#676767]">
            {propertyDetailsOverview.detailBody}
          </p>
          <div className="mt-8 overflow-hidden rounded-[4px] border border-[#e8e5df]">
            <Image
              src={propertyDetailsGallery.interiorImages[0]}
              alt="Interior"
              width={815}
              height={210}
              className="h-[212px] w-full object-cover"
            />
          </div>
        </div>

        <div className="border border-[#e8e5df] bg-white p-6">
          {rows.map((row) => (
            <div
              key={row[0]}
              className="grid border-b border-[#e8e5df] py-4 last:border-b-0 sm:grid-cols-2"
            >
              <div className="flex items-center justify-between gap-4 px-2 py-2">
                <span className="text-sm text-[#676767]">{row[0]}</span>
                <span className="text-base text-[#1a1a1a]">{row[1]}</span>
              </div>
              <div className="flex items-center justify-between gap-4 px-2 py-2 sm:border-l sm:border-[#e8e5df]">
                <span className="text-sm text-[#676767]">{row[2]}</span>
                <span className="text-base text-[#1a1a1a]">{row[3]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base text-primary">Project Highlights</p>
          <h2
            className="mt-3 text-4xl text-[#0f172a] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            At a Glance
          </h2>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-4">
          {propertyDetailsHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[4px] border border-primary bg-[#faf8f5] px-6 py-7 text-center"
            >
              <p className="text-[28px] leading-7 text-[#18181b]">{item.value}</p>
              <p className="mt-3 text-base font-semibold text-[#78716c]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {propertyDetailsInfoCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[4px] border border-[#e7e5e4] bg-white px-6 py-6"
            >
              <p className="text-base font-semibold text-[#18181b]">{item.title}</p>
              <p className="mt-3 text-base text-[#78716c]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AvailabilitySection() {
  return (
    <section className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base text-primary">Floor Plans &amp; Availability</p>
          <h2
            className="mt-3 text-4xl text-[#18181b] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            Available Residences
          </h2>
        </div>

        <div className="mt-9 overflow-hidden rounded-[20px] border border-[#e7e5e4] bg-white">
          <div className="hidden bg-[#0f172a] text-center text-base text-white/70 lg:grid lg:grid-cols-[1.25fr_repeat(5,0.8fr)_1fr]">
            {[
              "Unit Type",
              "Bedrooms",
              "Bathrooms",
              "Interior Size",
              "Starting Price",
              "Status",
              "",
            ].map((label) => (
              <div key={label || "actions"} className="px-6 py-6">
                {label}
              </div>
            ))}
          </div>

          <div>
            {propertyDetailsAvailability.map((item) => (
              <div
                key={item.unitType}
                className="border-t border-[#e7e5e4] first:border-t-0 lg:grid lg:grid-cols-[1.25fr_repeat(5,0.8fr)_1fr] lg:items-center"
              >
                <div className="grid gap-4 p-6 text-center lg:contents">
                  <div className="lg:px-6 lg:py-6">
                    <p className="text-sm text-[#78716c] lg:hidden">Unit Type</p>
                    <p className="mt-1 text-base font-semibold text-[#0f172a]">
                      {item.unitType}
                    </p>
                  </div>
                  <div className="lg:px-6 lg:py-6">
                    <p className="text-sm text-[#78716c] lg:hidden">Bedrooms</p>
                    <p className="mt-1 text-base text-[#18181b]">{item.bedrooms}</p>
                  </div>
                  <div className="lg:px-6 lg:py-6">
                    <p className="text-sm text-[#78716c] lg:hidden">Bathrooms</p>
                    <p className="mt-1 text-base text-[#18181b]">{item.bathrooms}</p>
                  </div>
                  <div className="lg:px-6 lg:py-6">
                    <p className="text-sm text-[#78716c] lg:hidden">Interior Size</p>
                    <p className="mt-1 text-base text-[#18181b]">{item.interiorSize}</p>
                  </div>
                  <div className="lg:px-6 lg:py-6">
                    <p className="text-sm text-[#78716c] lg:hidden">Starting Price</p>
                    <p className="mt-1 text-base text-[#18181b]">{item.startingPrice}</p>
                  </div>
                  <div className="lg:px-6 lg:py-6">
                    <p className="text-sm text-[#78716c] lg:hidden">Status</p>
                    <div className="mt-1 inline-flex rounded-full bg-primary/20 px-3.5 py-1 text-sm text-[#a16207]">
                      {item.status}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 lg:px-6 lg:py-6">
                    <button
                      type="button"
                      className="rounded-full border-2 border-primary px-4 py-2 text-xs font-semibold tracking-[0.06em] text-primary"
                    >
                      FLOOR PLAN
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-[0.06em] text-white"
                    >
                      REQUEST
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InteriorGallerySection() {
  return (
    <section className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-base text-primary">Interior Gallery</p>
            <h2
              className="mt-3 text-4xl text-[#18181b] sm:text-[58px]"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              Every Interior, Considered
            </h2>
          </div>
          <p className="text-lg text-[#78716c] sm:text-2xl">
            Click any image to view in full screen
          </p>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_508px]">
          <div className="overflow-hidden rounded-[4px] border border-[#e7e5e4]">
            <Image
              src={propertyDetailsGallery.overviewImage}
              alt="Interior gallery main"
              width={1066}
              height={458}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="grid gap-6">
            {propertyDetailsGallery.interiorImages.slice(1).map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-[4px] border border-[#e7e5e4]"
              >
                <Image
                  src={image}
                  alt={`Interior gallery ${index + 2}`}
                  width={506}
                  height={218}
                  className="h-56 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialOpinionSection() {
  return (
    <section className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <p className="text-base text-primary">Editorial Opinion</p>
          <h2
            className="mt-3 text-4xl text-[#18181b] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            Our Take
          </h2>
        </div>

        <div className="mt-9 border-l-4 border-primary bg-white p-8 sm:p-12">
          <p className="text-2xl leading-10 text-[#18181b]">
            &ldquo;{propertyDetailsEditorial.quote}&rdquo;
          </p>
          <p className="mt-9 text-base leading-8 text-[#78716c]">
            {propertyDetailsEditorial.body}
          </p>
          <div className="mt-9 border-t border-[#e7e5e4] pt-6">
            <p
              className="text-base font-bold uppercase tracking-[0.08em] text-[#0f172a]"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              {propertyDetailsEditorial.author}
            </p>
          </div>
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
            src={propertyDetailsAdvisor.image}
            alt="Zach Akers"
            width={718}
            height={624}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl text-primary">A Different Kind of Advisor</p>
          <h2
            className="mt-4 text-[42px] text-[#0d0d0d] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            ZACH AKERS
          </h2>
          <p className="mt-2 text-2xl text-[#0d0d0d]">
            ONE Sotheby&apos;s International Realty
          </p>
          <p className="mt-6 text-sm leading-7 text-[#676767] sm:text-base">
            Zach Akers is one of Miami&apos;s leading new development specialists,
            with more than $100 million in pre-construction sales across South
            Florida&apos;s most coveted residential projects. His practice blends
            developer fluency, floor plan strategy, and white-glove execution
            for local and international clients.
          </p>
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
              src={propertyDetailsAdvisor.logo}
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

function RelatedSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base text-primary">Discover More</p>
          <h2
            className="mt-3 text-4xl text-[#1a1a1a] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            You May Also Like
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {propertyDetailsRelated.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="overflow-hidden border border-[#e8e5df] bg-white"
            >
              <div className="relative h-[240px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute left-4 top-4 rounded-[4px] bg-primary px-4 py-2 text-xs font-semibold text-white">
                  {item.status}
                </div>
              </div>
              <div className="p-7">
                <h3
                  className="text-[28px] text-[#1a1a1a]"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-[#676767]">{item.location}</p>
                <div className="mt-6 border-t border-[#e8e5df] pt-4">
                  <p
                    className="text-[28px] text-[#1a1a1a]"
                    style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PropertyDetailsPage() {
  return (
    <main className="bg-white">
      <TopBar />
      <GallerySection />
      <OverviewSection />
      <SpecsSection />
      <HighlightsSection />
      <AvailabilitySection />
      <InteriorGallerySection />
      <EditorialOpinionSection />
      <AdvisorSection />
      <RelatedSection />
    </main>
  );
}
