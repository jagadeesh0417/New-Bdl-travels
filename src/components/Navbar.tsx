"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Gallery", href: "gallery" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${
        scrolled ? "header-scrolled" : "header-transparent"
      }`}
    >
      <div className="header-container">
        <div className="header-inner">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#0A4DFF] font-bold text-lg">BDL</span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-sm tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-3xl bg-none border-none cursor-pointer"
          >
            &#9776;
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-[#0A4DFF] z-40 ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative p-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="fixed top-4 right-4 text-white text-3xl bg-none border-none cursor-pointer z-50"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center pt-20">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollToSection(link.href);
                setMobileOpen(false);
              }}
              className="w-full py-4 text-xl font-bold text-center text-white hover:bg-blue-400 transition"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
