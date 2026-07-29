import Image from "next/image";

import { compareProjects, compareVisual } from "../api";

export default function ComparePage() {
  return (
    <main className="bg-[#0b0e12]">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src={compareVisual.image}
          alt="Compare properties"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_54.8%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute inset-y-0 left-1/3 hidden w-px bg-white/12 lg:block" />
        <div className="absolute inset-y-0 left-2/3 hidden w-px bg-white/12 lg:block" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-10 sm:px-6 lg:px-8">
          <div className="hidden lg:block">
            <div
              className="absolute left-1/2 top-[22%] -translate-x-1/2 text-[56px] leading-none text-white/35"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              VS
            </div>
            <div
              className="absolute left-[66.666%] top-[22%] -translate-x-1/2 text-[56px] leading-none text-white/35"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              VS
            </div>
          </div>

          <div className="mt-auto">
            <div className="rounded-[28px] border border-white/10 bg-black/18 p-4 backdrop-blur-md sm:p-6 lg:p-8">
              <div className="grid gap-4 lg:grid-cols-3 lg:gap-0">
                {compareProjects.map((project, index) => (
                  <div
                    key={project.name}
                    className={`px-2 py-4 text-center sm:px-4 lg:px-8 ${
                      index < compareProjects.length - 1
                        ? "lg:border-r lg:border-white/10"
                        : ""
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.34em] text-white/65 sm:text-xs">
                      {project.location}
                    </p>
                    <h2
                      className="mt-3 text-3xl leading-[1.08] text-white sm:text-4xl"
                      style={{
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                      }}
                    >
                      {project.name}
                    </h2>
                    <div className="mt-5 flex items-center justify-center gap-3 text-white/40">
                      <span className="h-px w-8 bg-white/20" />
                      <span
                        className="text-xl text-white/32 lg:hidden"
                        style={{
                          fontFamily: "Cormorant Garamond, Georgia, serif",
                        }}
                      >
                        VS
                      </span>
                      <span className="h-px w-8 bg-white/20" />
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                      <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                        <p className="text-[10px] uppercase tracking-[0.26em] text-white/55">
                          Starting At
                        </p>
                        <p className="mt-2 text-lg font-semibold text-[#d5b468] sm:text-xl">
                          {project.price}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                        <p className="text-[10px] uppercase tracking-[0.26em] text-white/55">
                          Completion
                        </p>
                        <p className="mt-2 text-sm font-medium text-white/88 sm:text-base">
                          {project.completion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
