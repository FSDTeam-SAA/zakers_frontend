import { Button } from "@/components/ui/button";

export default function ConsultationCta() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(201,162,39,0.16),rgba(255,255,255,0.04))] p-8 sm:p-10 lg:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
            Next step
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                Want the full homepage managed inside this same feature module?
              </h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                The design is now centered in your `Home` feature so we can keep
                extending it with more sections, API data, or separate subpages
                without mixing everything into the app route directly.
              </p>
            </div>
            <Button className="h-12 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.22em]">
              Request Next Section
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
