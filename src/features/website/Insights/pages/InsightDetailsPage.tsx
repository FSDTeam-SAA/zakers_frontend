import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";

import { insightDetail, insightPosts } from "../api";

function DetailsHero() {
  return (
    <section className="relative min-h-[750px] overflow-hidden bg-[#120d09]">
      <Image
        src={insightDetail.hero.image}
        alt={insightDetail.hero.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.40)_54.8%,rgba(0,0,0,0.80)_100%)]" />

      <div className="relative mx-auto flex min-h-[750px] max-w-7xl items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-sm text-white/90 sm:text-base">
            {insightDetail.hero.eyebrow}
          </p>
          <h1
            className="mt-5 text-4xl leading-[1.15] text-white sm:text-6xl lg:text-[72px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            {insightDetail.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
            {insightDetail.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function ArticleContent() {
  return (
    <section className="bg-[#faf8f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="space-y-10">
          {insightDetail.sections.slice(0, 2).map((section) => (
            <div key={section.title}>
              <h2
                className="text-[34px] leading-[1.2] text-[#1a1a1a] sm:text-[42px] lg:text-[48px]"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                {section.title}
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-[1.6] text-[#676767] sm:text-[22px] lg:text-[24px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <blockquote className="border-l-2 border-primary bg-white px-8 py-8 text-xl italic leading-[1.5] text-[#1a1a1a] sm:text-[22px] lg:text-[24px]">
            {insightDetail.quote}
          </blockquote>

          {insightDetail.sections.slice(2).map((section) => (
            <div key={section.title}>
              <h2
                className="text-[34px] leading-[1.2] text-[#1a1a1a] sm:text-[42px] lg:text-[48px]"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                {section.title}
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-[1.6] text-[#676767] sm:text-[22px] lg:text-[24px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisorSection() {
  return (
    <section className="bg-[#faf8f5] px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[718px_minmax(0,1fr)] lg:items-center">
        <div className="overflow-hidden rounded-[8px]">
          <Image
            src={insightDetail.advisor.image}
            alt={insightDetail.advisor.name}
            width={718}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xl text-primary sm:text-2xl">
            {insightDetail.advisor.label}
          </p>
          <h2
            className="mt-4 text-[42px] leading-[1.2] text-[#0d0d0d] sm:text-[48px]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            {insightDetail.advisor.name}
          </h2>
          <p className="mt-2 text-xl text-[#0d0d0d] sm:text-2xl">
            {insightDetail.advisor.role}
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#676767] sm:text-base">
            {insightDetail.advisor.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 border-t border-[#e8e5df] pt-6 sm:grid-cols-4">
            {insightDetail.advisor.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-semibold text-[#0d0d0d]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#676767]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e8e5df] pt-6">
            <button
              type="button"
              className="rounded-[4px] bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Contact Zach
            </button>
            <Image
              src={insightDetail.advisor.logo}
              alt="ONE Sotheby's International Realty"
              width={154}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedSection() {
  const related = insightPosts.slice(0, 3);

  return (
    <section className="bg-[#faf8f5] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-center text-[42px] leading-[1.2] text-[#1a1a1a]"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
        >
          You May Also Enjoy
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {related.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[4px] border border-[#e8e5df] bg-white"
            >
              <div className="relative h-[220px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.18em] text-primary">
                  {post.category}
                </p>
                <h3
                  className="mt-3 text-[24px] leading-[1.2] text-[#1a1a1a]"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#676767]">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[#e8e5df] pt-5">
                  <div className="flex items-center gap-3 text-xs tracking-[0.12em] text-[#676767]">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#9b9b9b]" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={post.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e5df] text-[#676767]"
                  >
                    <MoveUpRight className="h-4 w-4" />
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

function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image
        src="https://www.figma.com/api/mcp/asset/eac95722-a63a-43d9-82f0-ea6e72258369"
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

export default function InsightDetailsPage() {
  return (
    <main className="bg-[#faf8f5]">
      <DetailsHero />
      <ArticleContent />
      <AdvisorSection />
      <RelatedSection />
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
