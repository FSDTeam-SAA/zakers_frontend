import Image from "next/image";
import Link from "next/link";
import { BedDouble, CalendarDays, ChevronDown, SlidersHorizontal } from "lucide-react";

import {
  findMyProjectAdvisor,
  findMyProjectCards,
  findMyProjectCta,
  findMyProjectHero,
} from "../api";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d1117] pt-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1920&q=80"
          alt="Find my project hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative mx-auto flex min-h-[626px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-base text-white/90">{findMyProjectHero.eyebrow}</p>
        <h1
          className="mt-4 max-w-5xl text-4xl leading-tight text-white sm:text-6xl lg:text-[72px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          {findMyProjectHero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/90">
          {findMyProjectHero.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {findMyProjectHero.tags.map((tag) => (
            <div
              key={tag}
              className="rounded-[4px] border border-[#e8e5df] bg-white px-4 py-3 text-base text-[#1a1a1a] shadow-[0_2px_5px_rgba(13,27,52,0.05)]"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button
            type="button"
            className="rounded-[4px] bg-primary px-8 py-4 text-base font-semibold text-white"
          >
            {findMyProjectHero.primaryAction}
          </button>
          <button
            type="button"
            className="rounded-[4px] border-2 border-primary px-8 py-4 text-base font-semibold text-primary"
          >
            {findMyProjectHero.secondaryAction}
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-[#e8e5df] pb-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="pl-2 text-2xl leading-[1.2] text-[#6b6b6b]">8 Results Found</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex h-[42px] items-center gap-2 rounded-[4px] border border-[#e8e5df] bg-white px-4 text-[13px] text-[#0d1b34]"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filter
            </button>
            <button
              type="button"
              className="inline-flex h-[42px] items-center gap-2 rounded-[4px] border border-[#e8e5df] bg-white px-4 text-[13px] text-[#0d1b34]"
            >
              Sort: Best Match
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {findMyProjectCards.map((item) => (
            <article
              key={`${item.title}-${item.match}`}
              className="overflow-hidden rounded-[4px] border border-[#e8e5df] bg-white"
            >
              <div className="relative h-56">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute left-4 top-4 rounded-full bg-[#0d1b34] px-3 py-1.5 text-[11px] font-semibold text-white">
                  {item.match}
                </div>
                <div className="absolute right-3 top-4 rounded-[2px] bg-[#16b67a] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.025em] text-white">
                  {item.status}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl leading-[1.2] text-[#0d1b34]">{item.title}</h2>
                <p className="mt-1 text-base text-[#6b6b6b]">{item.location}</p>
                <p className="mt-2 text-xl font-semibold text-primary">{item.price}</p>

                <div className="mt-5 flex flex-wrap gap-6 text-base text-[#676767]">
                  <div className="inline-flex items-center gap-2">
                    <BedDouble className="h-4 w-4" />
                    {item.beds}
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {item.completion}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-[#e8e5df] bg-[#faf8f5] px-3 py-1.5 text-[10px] text-[#0d1b34]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Link
                    href={item.href}
                    className="flex-1 rounded-[4px] bg-primary px-6 py-4 text-center text-base font-semibold text-white"
                  >
                    View Project
                  </Link>
                  <Link
                    href="/compare"
                    className="flex-1 rounded-[4px] border-2 border-primary px-6 py-4 text-center text-base font-semibold text-primary"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
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
            src={findMyProjectAdvisor.image}
            alt={findMyProjectAdvisor.name}
            width={718}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl text-primary">A Different Kind of Advisor</p>
          <h2
            className="mt-4 text-[42px] text-[#0d0d0d] sm:text-[58px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            {findMyProjectAdvisor.name}
          </h2>
          <p className="mt-2 text-2xl text-[#0d0d0d]">{findMyProjectAdvisor.company}</p>
          <p className="mt-6 text-sm leading-7 text-[#676767] sm:text-base">
            {findMyProjectAdvisor.description}
          </p>
          <div className="mt-8 grid gap-4 border-t border-[#1c1f26]/8 pt-6 sm:grid-cols-4">
            {findMyProjectAdvisor.stats.map((item) => (
              <div
                key={item.label}
                className="sm:border-l sm:border-[#1c1f26]/8 sm:pl-4 first:border-l-0 first:pl-0"
              >
                <p className="text-base font-semibold text-[#1c1f26]">{item.value}</p>
                <p className="mt-1 text-xs uppercase text-[#676767]">{item.label}</p>
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
              src={findMyProjectAdvisor.logo}
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

function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src={findMyProjectCta.image}
          alt="Luxury pool"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(12,12,14,0.88)]" />
        <div className="absolute inset-0 bg-[linear-gradient(140.69deg,rgba(201,168,76,0.08)_0%,rgba(201,168,76,0)_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2
          className="max-w-6xl text-4xl leading-tight text-[#f5f0e8] sm:text-6xl lg:text-[72px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Still Looking For <span className="text-primary">The Perfect Property?</span>
        </h2>
        <p className="mt-6 max-w-[512px] text-xl leading-[1.2] text-[#e8e5df]/65">
          {findMyProjectCta.description}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-[4px] bg-primary px-8 py-4 text-base font-semibold text-white"
          >
            {findMyProjectCta.primaryAction}
          </button>
          <button
            type="button"
            className="rounded-[4px] border-2 border-primary px-8 py-4 text-base font-semibold text-primary"
          >
            {findMyProjectCta.secondaryAction}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function FindMyProjectPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ResultsSection />
      <AdvisorSection />
      <CtaSection />
    </main>
  );
}
