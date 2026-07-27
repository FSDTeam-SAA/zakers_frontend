"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-900 px-4 pt-16 pb-8 text-white/60 sm:px-8 md:px-16 lg:px-24">
      <div className="mx-auto container">
        {/* Top / Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 pb-16 border-b border-white/10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info & Social Links (4 Cols) */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="The Miami Condo Source Logo"
                width={110}
                height={110}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm font-normal leading-relaxed text-white/60 sm:text-base">
              A curated gateway to Miami&apos;s most exclusive pre-construction
              residences, waterfront condominiums, and private investment
              opportunities.
            </p>

            {/* Social Links with React Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaXTwitter, href: "#", label: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-300 hover:border-[#D4A32A] hover:text-[#D4A32A]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Group (5 Cols) */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-5">
            {/* Explore Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium text-[#D4A32A]">Explore</h3>
              <ul className="flex flex-col gap-2.5 text-sm sm:text-base">
                <li>
                  <Link
                    href="/neighborhoods"
                    className="transition-colors hover:text-white"
                  >
                    Neighborhoods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developments"
                    className="transition-colors hover:text-white"
                  >
                    Developments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investment"
                    className="transition-colors hover:text-white"
                  >
                    Investment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Neighborhoods Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium text-[#D4A32A]">
                Neighborhoods
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm sm:text-base">
                <li>
                  <Link
                    href="/brickell"
                    className="transition-colors hover:text-white"
                  >
                    Brickell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/edgewater"
                    className="transition-colors hover:text-white"
                  >
                    Edgewater
                  </Link>
                </li>
                <li>
                  <Link
                    href="/downtown-miami"
                    className="transition-colors hover:text-white"
                  >
                    Downtown Miami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/miami-beach"
                    className="transition-colors hover:text-white"
                  >
                    Miami Beach
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sunny-isles"
                    className="transition-colors hover:text-white"
                  >
                    Sunny Isles
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium text-[#D4A32A]">Company</h3>
              <ul className="flex flex-col gap-2.5 text-sm sm:text-base">
                <li>
                  <Link
                    href="/advisors"
                    className="transition-colors hover:text-white"
                  >
                    Our Advisors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="transition-colors hover:text-white"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="transition-colors hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="transition-colors hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section (3 Cols) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-base font-medium text-[#D4A32A]">Newsletter</h3>
            <p className="text-sm font-normal text-white/60 sm:text-base">
              Receive exclusive listings and market insights.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 flex items-center border-b border-stone-200/40 pb-2 transition-colors focus-within:border-[#D4A32A]"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-[#D4A32A] transition-transform duration-200 hover:translate-x-1"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 pt-8 text-xs sm:flex-row sm:text-sm">
          <p className="text-white/40">
            © {new Date().getFullYear()} The Miami Condo Source. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 transition-colors hover:text-[#D4A32A] hover:underline"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
