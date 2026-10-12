"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sparkles = Array.from({ length: 20 }, (_, i) => ({
  cx: `${(i * 37 + 13) % 100}%`,
  cy: `${(i * 53 + 7) % 100}%`,
  r: 1 + (i % 3),
  delay: (i * 0.7) % 4,
  duration: 3 + (i % 4),
}));

export default function EnvelopeScreen({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opening || opened) return;
    setOpening(true);
    setTimeout(() => {
      setOpened(true);
      setTimeout(() => onOpen(), 1200);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        backgroundImage: 'url("/images/watercolor_burgundy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <svg width="100%" height="100%">
          {sparkles.map((s, i) => (
            <circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#D4AF37"
              className="animate-pulse"
              style={{
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        className="relative flex flex-col items-center z-10 w-full max-w-[460px] px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-raleway text-xs md:text-sm tracking-[0.25em] uppercase text-center mb-8 text-gold-light/85"
        >
          An Invitation Awaits You
        </motion.p>
        <div
          className="relative w-full aspect-[1.5/1] cursor-pointer"
          onClick={handleClick}
          style={{ perspective: "1000px" }}
        >
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #3d0a13 0%, #1a0307 100%)",
              border: "1.5px solid rgba(212, 175, 55, 0.15)",
              boxShadow:
                "0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="absolute inset-1 rounded"
              style={{ border: "0.5px solid rgba(212,175,55,0.25)" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformOrigin: "top center", zIndex: 10 }}
              animate={
                opening
                  ? { rotateX: -160 }
                  : { rotateX: 0 }
              }
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <svg width="200" height="110" viewBox="0 0 200 110" fill="none">
                <path
                  d="M0 0 L100 70 L200 0"
                  fill="url(#flapGrad)"
                  stroke="rgba(212,175,55,0.4)"
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient id="flapGrad" x1="0" y1="0" x2="200" y2="110">
                    <stop offset="0%" stopColor="#4a1020" />
                    <stop offset="100%" stopColor="#2a0810" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]">
              <svg width="44" height="44" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="#8B1A1A"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <circle
                  cx="22"
                  cy="22"
                  r="12"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M22 12 L24 20 L32 22 L24 24 L22 32 L20 24 L12 22 L20 20Z"
                  fill="#D4AF37"
                  fillOpacity="0.8"
                />
              </svg>
            </div>
            <p
              className="absolute bottom-8 left-1/2 -translate-x-1/2 font-cormorant italic text-gold-light/60 text-sm z-[5]"
              style={{ pointerEvents: "none" }}
            >
              Tap to open
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
