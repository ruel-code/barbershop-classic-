"use client";

import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-accent bg-[#1a1a1a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 pointer-events-none" />
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Pesan Antrian Sekarang
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Gak mau nunggu lama? Booking dulu via WhatsApp, datang langsung
                potong.
              </p>
              <a
                href="https://wa.me/6282219893871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-[#0f0f0f] font-semibold rounded-xl hover:bg-accent-hover hover:scale-105 transition-all duration-300 font-sans text-lg"
              >
                <MessageSquareText size={22} />
                Booking via WA
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
