"use client";

import { motion } from "framer-motion";
import { StarDivider } from "./Ornaments";

const EASE = [0.22, 1, 0.36, 1] as const;

const base = [4, 5, 6, 7, 8, 9].map((e) => `/memories/memory-${e}.jpeg`);
const photos = [...base, ...base];

export default function Memories() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0D0506 0%, #12070A 50%, #0D0506 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-raleway text-[10px] md:text-xs tracking-[0.38em] uppercase mb-3"
            style={{ color: "rgba(212,175,55,0.55)" }}
          >
            Moments We Treasure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="font-cinzel text-gold text-4xl md:text-5xl font-semibold tracking-wide"
          >
            Our Memories
          </motion.h2>
          <StarDivider />
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0D0506, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0D0506, transparent)" }}
        />
        <div
          className="flex gap-4 md:gap-5 w-max"
          style={{ animation: "memoryScroll 90s linear infinite" }}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500"
              style={{ width: 280, height: 340 }}
            >
              <img
                src={src}
                alt={`Memory ${(i % base.length) + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] filter saturate-[0.85] group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/20 rounded-sm transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant italic text-center text-lg mt-14"
          style={{ color: "rgba(212,175,55,0.4)" }}
        >
          Every moment with you becomes a memory worth keeping forever.
        </motion.p>
      </div>
    </motion.section>
  );
}
