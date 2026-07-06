"use client";

import { motion } from "framer-motion";
import { Scissors, Zap, Sparkles, Star } from "lucide-react";

const services = [
  {
    name: "Cukur Rambut",
    price: "25K",
    time: "30 menit",
    icon: Scissors,
    desc: "Potongan rapi sesuai gaya kamu",
  },
  {
    name: "Shave",
    price: "35K",
    time: "45 menit",
    icon: Zap,
    desc: "Cukur kumis & jenggot, hasil bersih",
  },
  {
    name: "Kids",
    price: "20K",
    time: "20 menit",
    icon: Sparkles,
    desc: "Khusus anak-anak, sabar & ramah",
  },
  {
    name: "Komplit",
    price: "50K",
    time: "60 menit",
    icon: Star,
    desc: "Cukur + shave + creambath",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Layanan() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0f0f0f]" id="layanan">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm tracking-[0.2em] text-[#f59e0b] mb-2 uppercase">
            Price List
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f5f5]">
            Layanan & Harga
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemAnim}
                whileHover={{ y: -6 }}
                className="group bg-[#1a1a1a] rounded-2xl p-8 border border-[#f59e0b]/5 hover:border-[#f59e0b]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-5 text-[#f59e0b] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#f5f5f5] mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-2xl font-bold text-[#f59e0b]">
                    {service.price}
                  </span>
                  <span className="font-mono text-xs text-[#a3a3a3]">
                    / {service.time}
                  </span>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
