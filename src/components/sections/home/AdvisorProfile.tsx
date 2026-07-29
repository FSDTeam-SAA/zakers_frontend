import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Highlight {
  id: number;
  title: string;
  subtitle: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    title: "$100M+",
    subtitle: "Pre-Construction Sales",
  },
  {
    id: 2,
    title: "16 Years",
    subtitle: "Experience",
  },
  {
    id: 3,
    title: "Florida Native",
    subtitle: "Local Expertise",
  },
  {
    id: 4,
    title: "Multilingual Team",
    subtitle: "Global Client Service",
  },
];

export default function AdvisorProfile() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-20">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg sm:h-[500px] lg:col-span-5 lg:h-[624px]">
            <Image
              src="/advisor.png"
              alt="Zach Akers - ONE Sotheby's International Realty"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Bio & Content */}
          <div className="flex flex-col items-start space-y-6 lg:col-span-7">
            {/* Tagline & Name Header */}
            <div className="space-y-2">
              <span className="text-sm font-normal text-[#D4A32A] sm:text-base lg:text-2xl">
                A Different Kind of Advisor
              </span>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">
                ZACH AKERS
              </h2>
              <p className="text-lg font-normal text-stone-900 sm:text-2xl">
                ONE Sotheby&apos;s International Realty
              </p>
            </div>

            {/* Description Text */}
            <div className="space-y-4 text-base font-normal leading-relaxed text-stone-500">
              <p>
                Zach Akers is one of Miami&apos;s leading new development
                specialists, with more than $100 million in pre-construction
                sales across South Florida&apos;s most coveted residential
                projects — including Missoni Baia, Faena, Viceroy, and 619
                Brickell, home of Nobu Residences. A Florida native with 16
                years in the business, Zach has spent his career at the center
                of Miami&apos;s transformation. As an agent with ONE
                Sotheby&apos;s International Realty, the exclusive sales and
                marketing force behind many of the region&apos;s landmark
                towers, he gives his clients privileged access to Miami&apos;s
                next generation of luxury living — often before opportunities
                ever reach the open market.
              </p>
              <p>
                Zach&apos;s practice is built on deep fluency in the
                pre-construction process: evaluating developers, analyzing floor
                plans and line premiums, structuring deposit schedules, and
                guiding buyers from contract through closing. Leading a
                multilingual team of partner agents and backed by the
                Sotheby&apos;s International Realty network spanning 80+
                countries, he serves local buyers, investors, and international
                clients with sharp market intelligence and white-glove service
                at every step. For Zach, pre-construction is a front-row seat to
                Miami&apos;s future skyline — and he&apos;s made it his business
                to know every project on it.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="w-full py-2">
              <div className="grid grid-cols-2 gap-4 border-y border-neutral-800/10 py-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-neutral-800/10">
                {highlights.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center sm:px-3.5"
                  >
                    <span className="text-base font-semibold text-neutral-800 sm:text-lg">
                      {item.title}
                    </span>
                    <span className="mt-1 text-xs font-normal uppercase text-stone-500 sm:text-sm">
                      {item.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="w-full pt-2">
              <Link
                href="/connect"
                className="group flex w-full items-center justify-center gap-3 rounded-sm bg-[#D4A32A] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b88c22] sm:w-auto"
              >
                <span>Connect With Zach</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Partner/Sotheby&apos;s Logo */}
            <div className="pt-4 mx-auto">
              <Image
                src="/sotheby.png"
                alt="Sotheby's International Realty Logo"
                width={147}
                height={32}
                className="h-8 w-auto opacity-75 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
