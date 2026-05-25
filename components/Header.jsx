"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-ink-700"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Superior Garage Malaga"
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-widest text-accent-red border-l border-ink-600 pl-3">
            Malaga
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-md bg-accent-red px-4 py-2 text-sm font-semibold text-white hover:bg-accent-redDark transition-colors shadow-glow"
          >
            Book Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-ink-800"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-700 bg-ink-950/95 backdrop-blur">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-ink-800 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-accent-red px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-accent-redDark"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
