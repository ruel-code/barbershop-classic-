"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent mb-4 uppercase">
            Classic since 2024
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Barbershop <br />
            <span className="text-accent">Classic</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-sans">
            Bukan cuma cukur, ini gaya. Potongan rapih, harga pas, suasanya
            santai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#layanan"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-[#0f0f0f] font-semibold rounded-xl hover:bg-accent-hover hover:scale-[1.02] transition-all duration-300 font-sans text-lg"
            >
              Booking Sekarang
            </a>
            <a
              href="https://wa.me/6282219893871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-accent/30 text-foreground font-semibold rounded-xl hover:bg-white/5 transition-all duration-300 font-sans text-lg"
            >
              Via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
