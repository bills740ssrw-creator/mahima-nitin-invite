"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const chapters = [
  {
    num: "I",
    title: "The Match",
    subtitle: "arranged by family, chosen by heart",
    text: 'Some stories begin with a swipe, some with a chance encounter. Ours began with a common friend and families who thought, "These two should meet!" When we met for the first time, something felt different. Amid the introductions and tea, there was a quiet feeling in both our hearts — a sudden, silent recognition of home.',
  },
  {
    num: "II",
    title: "The Friendship",
    subtitle: "growing stronger with every passing day",
    text: "What started as an arranged meeting soon turned into countless hours of conversations, shared dreams, and a bond that grew stronger with every passing day. Over the last two years, we have discovered not only love but also a deep friendship, unwavering respect, and a partnership built on mutual understanding.",
  },
  {
    num: "III",
    title: "The Promise",
    subtitle: "laughter, support, and choice",
    text: "We've laughed through the little things, stood by each other through busy schedules, and learned that the best relationships are not just about finding the right person — they're about choosing that person every single day. What began as a match made by our families has become a love story written by our hearts.",
  },
];

function ScrollCorner({ position }: { position: string }) {
  const posClass =
    position === "top-left"
      ? "top-5 left-5"
      : position === "top-right"
        ? "top-5 right-5"
        : position === "bottom-left"
          ? "bottom-5 left-5"
          : "bottom-5 right-5";
  const rotClass =
    position === "top-left"
      ? "rotate-0"
      : position === "top-right"
        ? "rotate-90 origin-center"
        : position === "bottom-left"
          ? "-rotate-90 origin-center"
          : "rotate-180 origin-center";
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 40 40"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="0.8"
      strokeOpacity="0.45"
      className={`absolute ${posClass} ${rotClass}`}
    >
      <path d="M2 38 L2 2 C2 2, 8 8, 18 2 M2 2 C2 2, 8 8, 2 18" />
      <path
        d="M6 34 L6 6 C6 6, 12 12, 22 6 M6 6 C6 6, 12 12, 6 22"
        strokeWidth="0.4"
        strokeOpacity="0.25"
      />
      <circle cx="2" cy="2" r="1.5" fill="#D4AF37" fillOpacity="0.65" stroke="none" />
    </svg>
  );
}

function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-12 pointer-events-none select-none">
      <div
        style={{
          height: 0.5,
          width: 80,
          background:
            "linear-gradient(to right, transparent, rgba(212,175,55,0.25))",
        }}
      />
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          d="M10 0 C11.5 5 15 5 20 10 C15 15 15 18.5 10 20 C8.5 15 5 15 0 10 C5 5 5 1.5 10 0 Z"
          fill="#D4AF37"
          fillOpacity="0.85"
        />
        <circle cx="10" cy="10" r="3" fill="#D4AF37" fillOpacity="0.5" />
      </svg>
      <div
        style={{
          height: 0.5,
          width: 80,
          background:
            "linear-gradient(to left, transparent, rgba(212,175,55,0.25))",
        }}
      />
    </div>
  );
}

function PersonCard({
  title,
  subtitle,
  image,
  detail,
  imageStyle,
}: {
  title: string;
  subtitle: string;
  image: string;
  detail: string;
  imageStyle?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative group"
    >
      <div className="relative w-full aspect-[4/5] rounded-full overflow-hidden flex flex-col items-center justify-center border border-gold/25 bg-[#170C0E]/60 mx-auto max-w-[280px]">
        <div className="absolute inset-2 border border-gold/20 rounded-full pointer-events-none z-10" />
        <div className="absolute inset-3 rounded-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter saturate-[0.85] group-hover:scale-105 transition-transform duration-700"
            style={imageStyle}
          />
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center z-20">
          <h4 className="font-cinzel text-xl text-gold-light font-semibold tracking-wide drop-shadow-lg">
            {title}
          </h4>
          <span className="font-raleway text-[9px] tracking-[0.25em] uppercase text-gold/80 font-bold">
            {subtitle}
          </span>
        </div>
      </div>
      <p className="font-cormorant italic text-sm text-[#FFF8F0]/60 text-center mt-5 px-4 leading-relaxed">
        {detail}
      </p>
    </motion.div>
  );
}

function Chapter({ ch, index }: { ch: (typeof chapters)[0]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative flex flex-col md:flex-row items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1A0E11] border-2 border-gold items-center justify-center shadow-md z-10"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </motion.div>
      <div
        className={`w-full md:w-[45%] ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:order-last"} text-center px-4`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -35 : 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative inline-block w-full"
        >
          <span className="font-cinzel text-xs tracking-[0.25em] text-rose-gold font-bold block mb-1">
            Chapter {ch.num}
          </span>
          <h3 className="font-cinzel text-xl md:text-2xl text-gold-light font-semibold tracking-wide mb-1 leading-tight">
            {ch.title}
          </h3>
          <span className="font-cormorant italic text-[11px] text-gold/60 block mb-4">
            {ch.subtitle}
          </span>
          <p className="font-cormorant text-base md:text-lg text-[#FFF8F0]/80 leading-relaxed">
            {ch.text}
          </p>
        </motion.div>
      </div>
      <div className="hidden md:block w-[45%]" />
    </div>
  );
}

export default function OurStory() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-28 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #0D0506 0%, #15080A 50%, #0D0506 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#14080A] shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]">
        <div
          className="absolute inset-0 opacity-[0.3] pointer-events-none"
          style={{
            backgroundImage: 'url("/images/watercolor_burgundy.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.18) 0%, rgba(139,26,26,0.06) 50%, transparent 100%)",
          }}
        />
        <ScrollCorner position="top-left" />
        <ScrollCorner position="top-right" />
        <ScrollCorner position="bottom-left" />
        <ScrollCorner position="bottom-right" />
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-[5]" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-[5]" />
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/35 to-transparent pointer-events-none z-[5]" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/35 to-transparent pointer-events-none z-[5]" />
        <div className="absolute left-0 right-0 top-0 h-8 md:h-10 flex items-center z-10 pointer-events-none">
          <div
            className="absolute inset-x-0 h-8 md:h-10 rounded-full shadow-xl"
            style={{
              background:
                "linear-gradient(to bottom, #0a0304 0%, #14080A 25%, #14080A 75%, #0a0304 100%)",
              border: "0.5px solid rgba(255,255,255,0.05)",
            }}
          />
          <div
            className="w-5 h-8 rounded-l-md z-20"
            style={{
              background:
                "linear-gradient(135deg, #F5E6A3 0%, #D4AF37 50%, #8B6914 100%)",
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.3), 2px -2px 5px rgba(0,0,0,0.4)",
            }}
          />
          <div
            className="flex-1 h-3.5 z-10 opacity-90"
            style={{
              background:
                "linear-gradient(to bottom, #1E070F, #3A1218 50%, #1E070F)",
              borderBottom: "0.5px solid rgba(0,0,0,0.4)",
            }}
          />
          <div
            className="w-5 h-8 rounded-r-md z-20"
            style={{
              background:
                "linear-gradient(135deg, #F5E6A3 0%, #D4AF37 50%, #8B6914 100%)",
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.3), -2px -2px 5px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto z-10 w-full py-12 px-6 sm:px-12 md:px-16">
        <div className="text-center mb-16">
          <p className="font-raleway text-[10px] md:text-xs tracking-[0.38em] uppercase text-gold/60 mb-3">
            How It All Began
          </p>
          <h2 className="font-cinzel text-gold-light text-4xl md:text-5xl font-semibold tracking-wide">
            Our Story
          </h2>
          <FloralDivider />
        </div>
        <div className="relative max-w-xl mx-auto mb-24 p-3 bg-[#24181B]/40 backdrop-blur-sm rounded-lg shadow-2xl border border-gold/25">
          <div className="absolute inset-1.5 border border-gold/30 rounded pointer-events-none" />
          <div className="absolute inset-2 border border-dashed border-gold/15 rounded pointer-events-none" />
          <img
            src="/images/couples-pic.jpeg"
            alt="Mahima & Nitin"
            loading="lazy"
            decoding="async"
            className="w-full object-cover filter saturate-[0.9] aspect-[3/4] rounded-sm"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
        <div className="relative w-full max-w-3xl mx-auto mb-28 py-6">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1px] h-[90%] bg-gradient-to-b from-gold/10 via-gold/35 to-gold/10 top-12 bottom-12 pointer-events-none" />
          <div className="space-y-12 md:space-y-20">
            {chapters.map((ch, i) => (
              <Chapter key={ch.num} ch={ch} index={i} />
            ))}
          </div>
        </div>
        <FloralDivider />
        <div className="text-center mb-12">
          <p className="font-raleway text-[10px] tracking-[0.35em] uppercase text-rose-gold font-bold">
            The Two Hearts
          </p>
          <h3 className="font-cinzel text-xl md:text-2xl text-gold-light tracking-wider font-semibold mt-1">
            Groom &amp; Bride
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto mb-16">
          <PersonCard
            title="Flt Lt Nitin"
            subtitle="The Groom"
            image="/images/groom.jpeg"
            detail="A guardian of the skies — he soars through the heavens, protecting the nation with courage and honour."
            imageStyle={{ transformOrigin: "70% 70%", objectPosition: "30% 40%" }}
          />
          <PersonCard
            title="Dr Mahima"
            subtitle="The Bride"
            image="/images/bride.jpeg"
            detail="A healer by heart — she spends her days caring for lives and bringing comfort to those who need it most."
            imageStyle={{ transform: "scale(2.5)", transformOrigin: "45% 40%", objectPosition: "30% 45%" }}
          />
        </div>
        <p className="font-cormorant italic text-center text-lg md:text-xl mt-16 text-gold/70 max-w-md mx-auto leading-relaxed">
          While their worlds may seem apart, they have found in each other a
          dedication, love, and partnership that soars without limits.
        </p>
      </div>
    </motion.section>
  );
}
