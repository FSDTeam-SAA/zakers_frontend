import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ComparePropertiesBanner() {
  return (
    <section className="w-full bg-slate-900 px-4 py-16 sm:px-8 md:px-16 lg:px-24 lg:py-20">
      <div className="container mx-auto overflow-hidden bg-slate-900">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          {/* Left Content Side */}
          <div className="flex flex-1 flex-col justify-center space-y-6 ">
            <span className="text-base font-normal text-[#D4A32A] sm:text-xl lg:text-2xl">
              Make an Informed Decision
            </span>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Compare Miami Developments Side by Side
              </h2>

              <p className="font-sans text-base leading-relaxed text-stone-200 sm:text-lg lg:text-xl">
                Evaluate pricing, amenities, completion dates, and projected
                returns across our curated portfolio of residences.
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/compare"
                className="group inline-flex items-center gap-3 rounded-sm bg-[#D4A32A] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b88c22] hover:shadow-lg"
              >
                <span>Compare Properties</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative h-64 w-full flex-1 sm:h-80 lg:h-[438px]">
            <Image
              src="/compare-banner.png"
              alt="Compare Miami Developments"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
