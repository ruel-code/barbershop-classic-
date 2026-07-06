"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Kata Mereka
          </h2>
          <div className="w-20 h-1 bg-accent mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review, idx) => (
            <motion.div key={idx} variants={itemAnim}>
              <Card className="border-accent/5 bg-[#1a1a1a] h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <Avatar>
                      <AvatarFallback className="bg-accent/20 text-accent font-display">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < review.rating
                                ? "fill-accent text-accent"
                                : "text-muted-foreground"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
