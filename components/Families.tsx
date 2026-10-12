"use client";

import { motion } from "framer-motion";
import { StarDivider } from "./Ornaments";

const EASE = [0.22, 1, 0.36, 1] as const;

type Member = {
  img: string;
  alt: string;
  title: string;
  subtitle?: string;
  frame: string;
  inner: string;
  position: string;
  baseScale?: string;
};

const groomFamily: Member[] = [
  {
    img: "/images/grooms-dad.jpeg",
    alt: "Groom's Father",
    title: "Father of the Groom",
    frame: "w-36 h-48 md:w-40 md:h-52 rounded-[50%]",
    inner: "rounded-[50%]",
    position: "center 15%",
  },
  {
    img: "/images/grooms-mother.jpeg",
    alt: "Groom's Mother",
    title: "Mother of the Groom",
    frame: "w-36 h-36 md:w-40 md:h-40 rounded-full",
    inner: "rounded-full",
    position: "center center",
  },
  {
    img: "/images/grooms-brother-wife.jpeg",
    alt: "Groom's Brother & Wife",
    title: "Brother & Sister-in-Law",
    frame: "w-36 h-36 md:w-40 md:h-40 rounded-full",
    inner: "rounded-full",
    position: "center center",
  },
  {
    img: "/images/man-of-honour.jpeg",
    alt: "Man of Honour",
    title: "Man of Honour",
    subtitle: "Brother of the Groom",
    frame: "w-36 h-36 md:w-40 md:h-40 rounded-full",
    inner: "rounded-full",
    position: "center 48%",
    baseScale: "4.2",
  },
];

const brideFamily: Member[] = [
  {
    img: "/images/brides-dad.jpeg",
    alt: "Bride's Father",
    title: "Father of the Bride",
    frame: "w-36 h-36 md:w-40 md:h-40 rounded-full",
    inner: "rounded-full",
    position: "center 15%",
  },
  {
    img: "/images/brides-mother.jpeg",
    alt: "Bride's Mother",
    title: "Mother of the Bride",
    frame: "w-36 h-36 md:w-40 md:h-40 rounded-full",
    inner: "rounded-full",
    position: "center 15%",
  },
  {
    img: "/images/brides-brothers.jpeg",
    alt: "Brothers of the Bride",
    title: "Brothers of the Bride",
    frame: "w-44 h-32 md:w-48 md:h-36 rounded-[50%]",
    inner: "rounded-[50%]",
    position: "68% 70%",
  },
  {
    img: "/images/brides-sisters.jpeg",
    alt: "Maids of Honour",
    title: "Maids of Honour",
    subtitle: "Sisters of the Bride",
    frame: "w-44 h-32 md:w-48 md:h-36 rounded-[50%]",
    inner: "rounded-[50%]",
    position: "center 10%",
  },
];

function FamilyCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      className="group relative p-6 md:p-8 rounded-2xl border border-gold/15 bg-[#170C0E]/55 backdrop-blur-md shadow-xl flex flex-col items-center max-w-sm mx-auto w-full transition-all duration-500 hover:border-gold/35 hover:shadow-2xl"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 2) * 0.1 }}
    >
      <div className="fine-gold-border" />
      <div
        className={`relative overflow-hidden p-1.5 bg-[#24181B]/70 shadow-lg border border-gold/20 flex items-center justify-center mb-5 ${member.frame}`}
      >
        <div
          className={`absolute inset-1 border border-gold/30 pointer-events-none z-10 ${member.inner}`}
        />
        <div className={`w-full h-full overflow-hidden relative ${member.inner}`}>
          <img
            src={member.img}
            alt={member.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter saturate-[0.85] family-card-img"
            style={{
              objectPosition: member.position,
              ...(member.baseScale
                ? { "--base-scale": member.baseScale } as React.CSSProperties
                : {}),
            }}
          />
        </div>
      </div>
      <h4 className="font-cinzel text-lg mb-1 text-gold-light font-semibold tracking-wider text-center">
        {member.title}
      </h4>
      {member.subtitle && (
        <span className="font-raleway text-[9px] tracking-[0.2em] uppercase text-rose-gold/70 font-bold mb-1">
          {member.subtitle}
        </span>
      )}
      <div className="w-12 h-[0.5px] bg-gradient-to-r from-transparent via-gold/45 to-transparent my-1" />
    </motion.div>
  );
}

function FamilySide({
  title,
  members,
}: {
  title: string;
  members: Member[];
}) {
  return (
    <div className="space-y-10">
      <div className="text-center mb-8">
        <h3 className="font-cinzel text-2xl text-gold-light font-semibold tracking-wider">
          {title}
        </h3>
        <p className="font-cormorant italic text-sm text-[#FFF8F0]/40 mt-1">
          with love and blessing
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {members.map((m, i) => (
          <FamilyCard key={m.title} member={m} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Families() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0D0506 0%, #17070D 50%, #0D0506 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-raleway text-[10px] md:text-xs tracking-[0.38em] uppercase mb-3 text-gold-light/65">
            With Vows &amp; Blessings
          </p>
          <h2 className="font-cinzel text-gold text-4xl md:text-5xl font-semibold tracking-wide">
            The Families
          </h2>
          <StarDivider />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 mt-8">
          <FamilySide title="Groom's Family" members={groomFamily} />
          <FamilySide title="Bride's Family" members={brideFamily} />
        </div>
      </div>
    </section>
  );
}
