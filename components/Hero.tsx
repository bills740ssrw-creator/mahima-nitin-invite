"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const dust = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: (i * 47 + 13) % 100,
  top: (i * 31 + 7) % 100,
  size: 1 + (i % 3),
  delay: (i % 10) * 0.4,
  duration: 4 + (i % 5),
}));

function ScrollHint() {
  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ animation: "scrollBounce 2.2s ease-in-out infinite" }}
    >
      <span
        className="font-raleway text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(212,175,55,0.6)" }}
      >
        Scroll
      </span>
      <svg width="14" height="24" viewBox="0 0 18 28">
        <rect
          x="2"
          y="2"
          width="14"
          height="24"
          rx="7"
          stroke="#D4AF37"
          strokeWidth="0.8"
          fill="none"
          strokeOpacity="0.4"
        />
        <circle cx="9" cy="8" r="2" fill="#D4AF37" fillOpacity="0.7">
          <animate attributeName="cy" values="8;16;8" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden brocade-bg"
      style={{
        background:
          "radial-gradient(ellipse at center, #1E070F 0%, #0D0506 75%)",
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {dust.map((d) => (
          <span
            key={d.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              background: "#D4AF37",
              opacity: 0.5,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
              boxShadow: "0 0 4px rgba(212,175,55,0.6)",
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(13,5,6,0.75) 100%)",
        }}
      />
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 py-16"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={rise}
          transition={{ duration: 0.8 }}
          className="font-raleway text-[11px] md:text-xs tracking-[0.4em] uppercase mb-8"
          style={{ color: "rgba(245,230,163,0.7)" }}
        >
          Together With Our Families
        </motion.p>
        <div className="relative mb-6 flex items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            className="absolute w-[390px] h-[390px] max-w-[95vw] max-h-[95vw] sm:w-[440px] sm:h-[440px] md:w-[580px] md:h-[580px] opacity-80 pointer-events-none"
            style={{
              backgroundImage: 'url("/images/gold_crest.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="relative z-10 py-16 px-10 sm:py-20 sm:px-16 flex flex-col items-center justify-center min-h-[300px] min-w-[300px] sm:min-h-[340px] sm:min-w-[340px] md:min-h-[460px] md:min-w-[460px]">
            <motion.p
              variants={rise}
              transition={{ duration: 0.8 }}
              className="font-cormorant italic text-[9px] sm:text-[10px] md:text-xs mb-4 text-[#FFF8F0]/70"
            >
              We joyfully invite you to celebrate the union of
            </motion.p>
            <motion.h1
              variants={rise}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-cinzel text-gold-light text-shimmer leading-none tracking-wide text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem]"
            >
              Mahima
            </motion.h1>
            <motion.div
              variants={rise}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 my-2"
            >
              <div
                style={{
                  height: 0.5,
                  width: 45,
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.5))",
                }}
              />
              <span className="font-cormorant italic text-lg md:text-2xl text-gold/80">
                &amp;
              </span>
              <div
                style={{
                  height: 0.5,
                  width: 45,
                  background:
                    "linear-gradient(to left, transparent, rgba(212,175,55,0.5))",
                }}
              />
            </motion.div>
            <motion.h1
              variants={rise}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-cinzel text-gold-light text-shimmer leading-none tracking-wide text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem]"
            >
              Nitin
            </motion.h1>
          </div>
        </div>
        <motion.div variants={rise} transition={{ duration: 0.8 }} className="mt-6 mb-8">
          <p className="font-cinzel tracking-[0.25em] text-xs md:text-sm text-gold mb-1.5">
            22 · JULY · 2026
          </p>
          <p
            className="font-raleway text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,230,163,0.55)" }}
          >
            Charkhi Dadri, Haryana
          </p>
        </motion.div>
        <motion.div
          variants={rise}
          transition={{ duration: 0.8 }}
          className="px-6 py-2 rounded-full"
          style={{
            border: "1.5px solid rgba(212,175,55,0.25)",
            background: "rgba(212,175,55,0.04)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <span className="font-cormorant italic text-base md:text-xl text-gold-light tracking-[0.15em]">
            #MahikeSang
          </span>
        </motion.div>
      </motion.div>
      <ScrollHint />
    </section>
  );
}
