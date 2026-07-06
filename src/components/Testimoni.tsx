"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rizky",
    avatar: "RZ",
    rating: 5,
    text: "Potongannya rapi, suasanya enak. Barbershop langganan gua sekarang.",
  },
  {
    name: "Dimas",
    avatar: "DM",
    rating: 5,
    text: "Harga murah, hasilnya premium. Shave-nya bersih banget ga iritasi.",
  },
  {
    name: "Fajar",
    avatar: "FJ",
    rating: 4,
    text: "Barbernya ramah, ngerti mau model apa. Pasti balik lagi.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Testimoni() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f5f5f5]">
            Kata Mereka
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={itemAnim}
              className="min-w-[300px] md:min-w-0 md:w-1/3 flex-shrink-0 snap-start"
            >
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#f59e0b]/5 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center font-display text-lg text-[#f59e0b]">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#f5f5f5]">{review.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < review.rating
                              ? "fill-[#f59e0b] text-[#f59e0b]"
                              : "text-[#a3a3a3]"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#a3a3a3] leading-relaxed text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
