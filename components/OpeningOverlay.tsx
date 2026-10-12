"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MandalaSVG, StarIcon } from "./Ornaments";
import { OpeningCornerOrnaments } from "./WaveDivider";

const EASE = [0.22, 1, 0.36, 1] as const;

function GoldLetter({
  char,
  fromX,
}: {
  char: string;
  fromX: number;
}) {
  return (
    <motion.span
      className="font-cinzel select-none"
      style={{
        fontSize: "clamp(5.5rem, 18vw, 9.5rem)",
        lineHeight: 1,
        letterSpacing: "0.05em",
        background:
          "linear-gradient(150deg, #7A5C1E 0%, #C9952A 25%, #F5E6A3 50%, #D4AF37 75%, #8B6914 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      initial={{ opacity: 0, x: fromX, filter: "blur(8px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
    >
      {char}
    </motion.span>
  );
}

export default function OpeningOverlay({
  onDone,
}: {
  onDone: () => void;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setShow(false);
      onDone();
    }, 4200);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 38% 42%, #1F0B14 0%, #0D0506 65%)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.035,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "256px 256px",
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 48%, rgba(139,26,26,0.22) 0%, transparent 65%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
          {[
            { size: 300, border: "rgba(212,175,55,0.14)", delay: 0.4 },
            { size: 370, border: "rgba(212,175,55,0.1)", delay: 0.55 },
            { size: 430, border: "rgba(212,175,55,0.06)", delay: 0.7 },
          ].map((ring) => (
            <motion.div
              key={ring.size}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: ring.size,
                height: ring.size,
                border: `1px solid ${ring.border}`,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: EASE, delay: ring.delay }}
            />
          ))}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 2.2, ease: EASE, delay: 0.5 }}
          >
            <MandalaSVG />
          </motion.div>
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 178,
              height: 178,
              border: "1px solid rgba(183,110,121,0.3)",
              borderTopColor: "rgba(183,110,121,0.65)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
          />
          <div className="relative z-10 flex items-center gap-4 md:gap-7">
            <GoldLetter char="M" fromX={-70} />
            <motion.div
              className="flex flex-col items-center gap-1.5"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 1.1 }}
            >
              <motion.div
                style={{
                  width: 1,
                  height: 28,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(212,175,55,0.5), transparent)",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.4 }}
              />
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path
                  d="M11 0 L13.2 7.5 L22 11 L13.2 14.5 L11 22 L8.8 14.5 L0 11 L8.8 7.5Z"
                  fill="#D4AF37"
                  fillOpacity="0.55"
                />
              </svg>
              <motion.div
                style={{
                  width: 1,
                  height: 28,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(212,175,55,0.5), transparent)",
                  transformOrigin: "bottom",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.4 }}
              />
            </motion.div>
            <GoldLetter char="N" fromX={70} />
          </div>
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2.5 mt-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.6 }}
          >
            <div className="flex items-center gap-5">
              <motion.div
                style={{
                  height: 1,
                  width: 55,
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.55))",
                  transformOrigin: "right",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.9 }}
              />
              <span
                className="font-cormorant italic text-lg md:text-xl"
                style={{ color: "rgba(245,230,163,0.65)" }}
              >
                Mahima &amp; Nitin
              </span>
              <motion.div
                style={{
                  height: 1,
                  width: 55,
                  background:
                    "linear-gradient(to left, transparent, rgba(212,175,55,0.55))",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.9 }}
              />
            </div>
            <span
              className="font-raleway text-xs tracking-[0.38em] uppercase"
              style={{ color: "rgba(212,175,55,0.38)" }}
            >
              22 · July · 2026
            </span>
            <span
              className="font-cormorant italic text-sm"
              style={{ color: "rgba(183,110,121,0.5)" }}
            >
              #MahikeSang
            </span>
          </motion.div>
          <motion.div
            className="absolute bottom-10"
            style={{
              width: 110,
              height: 1.5,
              background: "rgba(212,175,55,0.1)",
              overflow: "hidden",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.85), transparent)",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 2.4,
              }}
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="opacity-[0.06]">
              <StarIcon size={420} opacity={1} />
            </div>
          </motion.div>
          <OpeningCornerOrnaments />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
