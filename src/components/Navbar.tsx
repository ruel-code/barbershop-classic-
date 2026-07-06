"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Layanan", href: "#layanan" },
  { name: "Harga", href: "#harga" },
  { name: "Lokasi", href: "#lokasi" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f0f0f]/90 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4 w-full max-w-7xl mx-auto">
        <a href="/" className="font-display text-2xl font-bold tracking-wider text-[#f59e0b]">
          CLASSIC
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm tracking-wider text-[#a3a3a3] hover:text-[#f59e0b] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6282219893871"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#f59e0b] text-[#0f0f0f] font-semibold rounded-full hover:bg-[#d97706] transition-all duration-200 font-sans text-sm"
          >
            Booking
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#f59e0b] w-10 h-10 flex items-center justify-center"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-xl border-t border-[#1a1a1a] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-3 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-lg text-[#a3a3a3] hover:text-[#f59e0b] hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6282219893871"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl bg-[#f59e0b] text-[#0f0f0f] font-semibold text-center mt-2"
              >
                Booking
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
