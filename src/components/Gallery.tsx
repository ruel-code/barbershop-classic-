"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=2070",
    label: "Classic Cut",
  },
  {
    src: "https://images.unsplash.com/photo-1567898514-8e0c2e3c9c6f?q=80&w=1972",
    label: "Modern Pompadour",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665666?q=80&w=2070",
    label: "Clean Shave",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070",
    label: "Undercut",
  },
  {
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2070",
    label: "Fade Haircut",
  },
];

export function Gallery() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#1a1a1a]" id="harga">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4"
        >
          Galeri
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#a3a3a3] mb-12 max-w-xl"
        >
          Beberapa hasil potongan terbaik dari barber kami.
        </motion.p>

        <div className="masonry">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="masonry-item group overflow-hidden rounded-2xl relative"
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ minHeight: idx % 2 === 0 ? "380px" : "280px" }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono text-xs tracking-wider text-white">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
