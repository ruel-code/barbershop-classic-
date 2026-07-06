"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export function Lokasi() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#1a1a1a]" id="lokasi">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-8">
            Lokasi & Jam
          </h2>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-sm tracking-wider text-[#f59e0b] mb-2 flex items-center gap-2">
                <MapPin size={16} /> Alamat
              </p>
              <p className="text-[#a3a3a3] leading-relaxed">
                Jl. Barbershop No. 12, Kelapa Gading
                <br />
                Jakarta Utara, 14240
              </p>
            </div>
            <div>
              <p className="font-mono text-sm tracking-wider text-[#f59e0b] mb-2 flex items-center gap-2">
                <Clock size={16} /> Jam Operasional
              </p>
              <div className="grid grid-cols-2 gap-4 text-[#a3a3a3]">
                <div>
                  <p className="font-semibold text-[#f5f5f5]">Senin - Sabtu</p>
                  <p>09:00 - 21:00</p>
                </div>
                <div>
                  <p className="font-semibold text-[#f5f5f5]">Minggu</p>
                  <p>10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://wa.me/6282219893871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#f59e0b] hover:underline group font-medium"
              >
                Booking via WhatsApp
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-8 h-[400px] rounded-2xl overflow-hidden border border-[#f59e0b]/10"
        >
          <div className="w-full h-full bg-[#0f0f0f] flex items-center justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2041')",
              }}
            />
            <div className="relative z-10 text-center">
              <MapPin size={48} className="text-[#f59e0b] mx-auto mb-4" />
              <p className="font-mono text-sm tracking-wider text-[#a3a3a3]">
                  Google Maps
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
