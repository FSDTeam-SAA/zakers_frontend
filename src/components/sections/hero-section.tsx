import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat font-sans text-white bg-[url('/banner.svg')]">
      {/* Main Hero Content */}
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-24 text-center sm:px-6 lg:pt-20">
        {/* Subtitle */}
        <p className="mb-3 text-xs tracking-widest uppercase text-white/90 sm:mb-4 sm:text-sm bg-[gray]/70 py-3 px-5 rounded-3xl font-medium">
          Miami&apos;s Premier Pre-Construction Advisory
        </p>

        {/* Main Heading */}
        <h1 className="mb-4 font-serif text-3xl font-[600] leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Miami&apos;s Most <br className="hidden sm:inline" />
          Exclusive New Developments
        </h1>

        {/* Description */}
        <p className="mb-8 text-xs font-light text-white/90 sm:mb-10 sm:text-sm md:text-base">
          Explore luxury pre-construction condos, waterfront residences, and
          investment opportunities across Miami.
        </p>

        {/* Action Buttons */}
        <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Button className="w-full sm:w-auto rounded-none bg-primary px-8 py-6 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#b88c22] sm:text-sm cursor-pointer">
            View Developments
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto rounded-none border border-primary bg-transparent px-8 py-6 text-xs font-medium uppercase tracking-wider text-white hover:bg-primary/20 hover:text-white sm:text-sm cursor-pointer"
          >
            Request Floor Plans
          </Button>
        </div>
      </div>
    </section>
  );
}
