"use client";

import { ChevronUp, Scissors } from "lucide-react";

const navLinks = [
  { name: "Layanan", href: "#layanan" },
  { name: "Galeri", href: "#harga" },
  { name: "Lokasi", href: "#lokasi" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0f0f] py-12 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#f59e0b]/10 pt-6">
          <div className="mb-6 md:mb-0">
            <a
              href="/"
              className="font-display text-2xl font-bold tracking-wider text-[#f59e0b] flex items-center gap-2"
            >
              <Scissors size={20} />
              CLASSIC
            </a>
            <p className="font-mono text-xs text-[#a3a3a3] mt-2 opacity-80">
              &copy; 2026 Barbershop Classic. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#a3a3a3] hover:text-[#f59e0b] transition-colors font-mono text-sm tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="text-[#a3a3a3] hover:text-[#f59e0b] transition-colors"
              aria-label="Kembali ke atas"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
