import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-20 sm:px-8 sm:py-28 md:px-16 lg:px-24">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/luxury-pool.png"
          alt="Miami Luxury Residence Background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-neutral-950/85" />

        {/* Subtle Orange Gradient Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Main Heading */}
        <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Your New Miami{" "}
          <span className="text-[#D4A32A]">Residence Awaits</span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-stone-200/80 sm:text-xl lg:text-2xl">
          Take the first step toward an extraordinary life. Our private sales
          team is ready to guide you through an exclusive portfolio of
          Miami&apos;s most exceptional residences.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/book-consultation"
            className="group flex items-center justify-center gap-3 rounded-sm bg-[#D4A32A] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b88c22] hover:shadow-lg"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
