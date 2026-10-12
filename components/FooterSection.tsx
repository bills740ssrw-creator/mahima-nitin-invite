"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StarDivider } from "./Ornaments";

const EASE = [0.22, 1, 0.36, 1] as const;

function RingsSVG() {
  return (
    <svg
      width="80"
      height="50"
      viewBox="0 0 80 50"
      fill="none"
      className="mx-auto mb-6"
      opacity="0.65"
    >
      <circle cx="28" cy="25" r="16" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
      <circle cx="52" cy="25" r="16" stroke="#B76E79" strokeWidth="1.2" fill="none" />
      <circle cx="28" cy="25" r="3.5" fill="#D4AF37" fillOpacity="0.3" />
      <circle cx="52" cy="25" r="3.5" fill="#B76E79" fillOpacity="0.3" />
      <path
        d="M36 18 Q40 14 44 18"
        stroke="#D4AF37"
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer
      className="relative pt-20 pb-12 px-6 overflow-hidden text-center"
      style={{
        background: "linear-gradient(180deg, #0D0506 0%, #070203 100%)",
      }}
    >
      <svg
        width="100%"
        height="24"
        viewBox="0 0 600 30"
        preserveAspectRatio="none"
        className="block"
        opacity="0.25"
      >
        <path
          d="M0 15 Q75 0 150 15 Q225 30 300 15 Q375 0 450 15 Q525 30 600 15"
          stroke="#D4AF37"
          strokeWidth="0.8"
          fill="none"
        />
        {[0, 150, 300, 450, 600].map((cx) => (
          <circle key={cx} cx={cx} cy="15" r="2" fill="#D4AF37" fillOpacity="0.5" />
        ))}
      </svg>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(139,26,26,0.1) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-2xl mx-auto mt-12">
        <RingsSVG />
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
        >
          <h2 className="font-cinzel text-shimmer leading-tight tracking-wide font-semibold text-3xl md:text-5xl">
            #MahikeSang
          </h2>
        </motion.div>
        <motion.p
          className="font-cormorant italic text-xl md:text-2xl mb-1.5 text-gold-light/80"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          Mahima &amp; Nitin
        </motion.p>
        <motion.p
          className="font-raleway text-[10px] tracking-[0.25em] uppercase mb-8 text-gold/45"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          22 · July · 2026
        </motion.p>
        <StarDivider />
        <motion.p
          className="font-cormorant italic text-base md:text-lg mb-12 px-4 text-[#FFF8F0]/45 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          &quot;Two souls, one heartbeat. The journey of forever begins
          today.&quot;
        </motion.p>
        <motion.div
          className="grid grid-cols-2 gap-4 mb-8 text-left max-w-lg mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        >
          <div className="paper-card px-5 py-4 flex flex-col justify-center">
            <div className="fine-gold-border" />
            <p className="font-cinzel text-xs text-maroon font-semibold mb-1 tracking-wide">
              21 July
            </p>
            <p className="font-raleway text-[10px] text-maroon/65 font-medium">
              Lagan · Gurchari Night
            </p>
          </div>
          <div className="paper-card px-5 py-4 flex flex-col justify-center">
            <div className="fine-gold-border" />
            <p className="font-cinzel text-xs text-maroon font-semibold mb-1 tracking-wide">
              22 July
            </p>
            <p className="font-raleway text-[10px] text-maroon/65 font-medium">
              Barat · Phere · Reception
            </p>
          </div>
        </motion.div>
        <motion.div
          className="paper-card mb-12 py-5 px-6 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="fine-gold-border" />
          <p className="font-raleway text-[9px] tracking-[0.2em] uppercase mb-1.5 text-rose-gold font-bold">
            Main Venue
          </p>
          <p className="font-cinzel text-base text-maroon font-semibold tracking-wider">
            Four Seasons by TPM
          </p>
          <p className="font-raleway text-[10px] text-maroon/55 mt-1 tracking-wide">
            Near Mathura Road NH-2, Sikri, Faridabad, Haryana
          </p>
        </motion.div>
        <p className="font-raleway text-[9px] tracking-widest text-[#FFF8F0]/20 uppercase mb-4">
          Made with love, for our most cherished people.
        </p>
        <div className="flex items-center justify-center gap-4 font-raleway text-[9px] tracking-widest uppercase">
          <Link
            href="/privacy"
            className="text-[#FFF8F0]/25 hover:text-gold/60 transition-colors"
          >
            Privacy
          </Link>
          <span className="text-[#FFF8F0]/15">·</span>
          <Link
            href="/terms"
            className="text-[#FFF8F0]/25 hover:text-gold/60 transition-colors"
          >
            Terms
          </Link>
          <span className="text-[#FFF8F0]/15">·</span>
          <a
            href="mailto:family@example.com"
            className="text-[#FFF8F0]/25 hover:text-gold/60 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
