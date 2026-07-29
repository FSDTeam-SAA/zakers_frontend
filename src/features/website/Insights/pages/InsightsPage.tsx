import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";

import { insightCategories, insightPosts } from "../api";
import type { InsightPost } from "../types";

function HeroSection() {
  return (
    <section className="relative min-h-[750px] overflow-hidden bg-[#120d09]">
      <Image
        src="https://www.figma.com/api/mcp/asset/ee5bb568-ca3a-4a3d-8835-9fba4420544f"
        alt="Miami skyline"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.40)_54.8%,rgba(0,0,0,0.80)_100%)]" />

      <div className="relative mx-auto flex min-h-[750px] max-w-7xl items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[12px] font-normal tracking-[0.28em] text-white/90 sm:text-base">
            MARKET INTELLIGENCE · MIAMI NEW DEVELOPMENT
          </p>
          <h1
            className="mt-5 text-5xl leading-[1.1] text-white sm:text-6xl lg:text-[72px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            New Construction Intelligence
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Pre-construction analysis, neighborhood intelligence, and buyer
            guides — updated regularly.
          </p>
        </div>
      </div>
    </section>
  );
}

function CategoryTabs() {
  return (
    <div className="border-b border-[#e8e5df] pb-4">
      <div className="flex flex-wrap gap-3">
        {insightCategories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={
              index === 0
                ? "rounded-[4px] bg-primary px-5 py-2.5 text-sm font-semibold text-[#0d1b34]"
                : "rounded-[4px] border border-[#e8e5df] bg-white px-5 py-2.5 text-sm font-normal text-[#6b6b6b]"
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  category,
  description,
  date,
  readTime,
  image,
  href,
}: InsightPost) {
  return (
    <article className="overflow-hidden rounded-[4px] border border-[#e8e5df] bg-white">
      <div className="relative h-[240px] sm:h-[280px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8">
        <p className="text-xs tracking-[0.18em] text-primary">{category}</p>
        <h3
          className="mt-3 text-[26px] leading-[1.2] text-[#1a1a1a]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#676767] sm:text-base">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-[#e8e5df] pt-6">
          <div className="flex items-center gap-3 text-xs tracking-[0.12em] text-[#676767] sm:text-sm">
            <span>{date}</span>
            <span className="h-1 w-1 rounded-full bg-[#9b9b9b]" />
            <span>{readTime}</span>
          </div>
          <Link
            href={href}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e5df] text-[#676767]"
          >
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image
        src="https://www.figma.com/api/mcp/asset/2b7d8968-cfd4-444b-b009-2f3580a784f7"
        alt="Luxury pool"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(17,12,8,0.72)]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p
          className="text-4xl leading-[1.2] text-[#f5f0e8] sm:text-5xl lg:text-[72px]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          Receive Miami Market Intelligence
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#e8e5df]/80 sm:text-xl">
          Brett Fraser&apos;s exclusive list receives pre-launch pricing,
          off-market inventory, and monthly market updates before anything
          reaches public channels.
        </p>
        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="h-14 flex-1 rounded-[4px] border border-[#e8e5df] bg-white px-5 text-base text-[#676767] outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-[4px] bg-primary px-8 text-sm font-semibold tracking-[0.16em] text-white"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  const cards: InsightPost[] = Array.from({ length: 12 }, (_, index) => ({
    ...insightPosts[index % insightPosts.length],
  }));

  return (
    <main className="bg-[#faf8f5]">
      <HeroSection />

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CategoryTabs />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {cards.map((card, index) => (
              <InsightCard key={`${card.title}-${index}`} {...card} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />

      <button
        type="button"
        className="fixed right-6 bottom-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)]"
        aria-label="Open WhatsApp"
      >
        <ArrowRight className="h-7 w-7 rotate-[-45deg] text-[#25d366]" />
      </button>
    </main>
  );
}
