"use client";

import { useEffect, useState } from "react";
import { business, navLinks } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-charcoal/95 text-white shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#top" className="font-display text-lg font-bold tracking-tight md:text-xl">
          {business.shortName}
          <span className="ml-1.5 hidden font-sans text-sm font-normal text-white/70 sm:inline">
            Remodeling & Landscaping
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${business.phoneTel}`}
            className="rounded-sm bg-pine px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-pine-deep"
          >
            {business.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/25 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-charcoal px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${business.phoneTel}`}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
