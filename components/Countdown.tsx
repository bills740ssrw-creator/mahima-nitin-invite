"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const TARGET = new Date("2026-07-22T19:00:00+05:30").getTime();

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

function CountdownCard({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      className="paper-card flex flex-col items-center justify-center py-6 md:py-8 px-4"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 + index * 0.1 }}
    >
      <div className="fine-gold-border" />
      <motion.span
        className="font-cinzel text-maroon block leading-none font-semibold"
        style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.35 + index * 0.1 }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span
        className="font-raleway uppercase tracking-[0.25em] mt-3 block text-[10px] md:text-xs font-semibold"
        style={{ color: "rgba(139,26,26,0.55)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0D0506 0%, #180A0F 50%, #0D0506 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,26,26,0.15) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.svg
          width="260"
          height="35"
          viewBox="0 0 280 40"
          fill="none"
          className="mx-auto mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
        >
          <path
            d="M10 35 Q70 5 140 5 Q210 5 270 35"
            stroke="#D4AF37"
            strokeWidth="0.6"
            fill="none"
            strokeOpacity="0.35"
          />
          <path
            d="M30 35 Q90 12 140 12 Q190 12 250 35"
            stroke="#D4AF37"
            strokeWidth="0.4"
            strokeDasharray="3 3"
            fill="none"
            strokeOpacity="0.25"
          />
          <circle cx="140" cy="5" r="3" fill="#D4AF37" fillOpacity="0.8" />
        </motion.svg>
        <motion.p
          className="font-raleway text-[10px] md:text-xs tracking-[0.38em] uppercase mb-4 text-gold-light/65"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          The Big Day Is Near
        </motion.p>
        <motion.h2
          className="font-cormorant italic text-gold text-3xl md:text-5xl mb-2 font-medium"
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          Till We Say Forever
        </motion.h2>
        <div className="flex items-center justify-center gap-4 my-3">
          <div
            style={{
              height: "0.5px",
              width: 80,
              background: "linear-gradient(to right, transparent, #D4AF37)",
            }}
          />
          <svg width="10" height="10" viewBox="0 0 12 12">
            <path
              d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5Z"
              fill="#D4AF37"
              fillOpacity="0.8"
            />
          </svg>
          <div
            style={{
              height: "0.5px",
              width: 80,
              background: "linear-gradient(to left, transparent, #D4AF37)",
            }}
          />
        </div>
        <div className="mt-10 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <CountdownCard value={days} label="Days" index={0} />
          <CountdownCard value={hours} label="Hours" index={1} />
          <CountdownCard value={minutes} label="Minutes" index={2} />
          <CountdownCard value={seconds} label="Seconds" index={3} />
        </div>
        <motion.p
          className="font-cormorant text-base md:text-lg mt-8"
          style={{ color: "rgba(245,230,163,0.55)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          22 July 2026 · Phere &amp; Reception · 7:00 PM onwards
        </motion.p>
      </div>
    </section>
  );
}
