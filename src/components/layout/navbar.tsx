"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Explore Map", href: "/explore-map" },
    { label: "Find My Project", href: "#" },
    { label: "Neighborhoods", href: "/neighborhoods", hasDropdown: true },
    { label: "Waterfront Estates", href: "/waterfront-estates" },
    { label: "Insights", href: "/insights" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md">
      <div className="container mx-auto flex h-24 items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo.svg"
            alt="MCS Logo"
            width={1000}
            height={1000}
            className="h-10 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium text-white/90 lg:flex lg:space-x-8">
          {navLinks.map((link, idx) =>
            link.hasDropdown ? (
              <div
                key={idx}
                className="group relative flex cursor-pointer items-center space-x-1 transition-colors hover:text-primary"
              >
                <span>{link.label}</span>
                <ChevronDown className="h-4 w-4 text-white/80 transition-transform group-hover:rotate-180" />
              </div>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop Right Action Button */}
        <div className="hidden lg:block">
          <Button className="rounded-none bg-primary px-7 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#b88c22]">
            INQUIRE
          </Button>
        </div>

        {/* Mobile Hamburger Menu (Shadcn Sheet Component) */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l border-white/10 bg-black/15 p-6 text-white backdrop-blur-xl"
            >
              <SheetHeader className="text-left border-b border-white/10 pb-4">
                <SheetTitle className="text-white">
                  <Image
                    src="/logo.svg"
                    alt="MCS Logo"
                    width={1000}
                    height={1000}
                    className="h-20 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Links */}
              <div className="mt-8 flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-base font-medium text-white/90 hover:text-primary"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                ))}

                <div className="pt-6">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-none bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#b88c22]"
                  >
                    INQUIRE
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
