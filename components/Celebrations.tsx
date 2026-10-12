"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StarDivider } from "./Ornaments";

const EASE = [0.22, 1, 0.36, 1] as const;

type Event = {
  key: string;
  num: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  tag: string;
  desc: string;
  dressCode: string;
  mapUrl: string;
  mainImageUrl: string;
};

const day1: Event[] = [
  {
    key: "lagan",
    num: "01",
    title: "Lagan Ceremony",
    subtitle: "Togetherness & Blessings",
    date: "21 July 2026",
    time: "11:00 AM Onwards",
    venue: "Residence, Village Kubja Nagar",
    address: "Charkhi Dadri, Haryana",
    tag: "Day 1 · Morning",
    desc: "Join us for Lagan and Preetibhoj — where families come together for the first time, sharing joy, laughter, and delicious food in the spirit of celebration.",
    dressCode: "Traditional Yellow / Mustard Ethnic",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Village+Kubja+Nagar+Charkhi+Dadri+Haryana",
    mainImageUrl: "/images/lagan_watercolor.jpg",
  },
  {
    key: "gurchari",
    num: "02",
    title: "Gurchari Night",
    subtitle: "Dance · Music · Celebration",
    date: "21 July 2026",
    time: "8:00 PM Onwards",
    venue: "Residence, Village Kubja Nagar",
    address: "Charkhi Dadri, Haryana",
    tag: "Day 1 · Night",
    desc: "From energetic Haryanvi beats to desi celebrations — the night sky comes alive. Put on your dancing shoes and let's create memories that last a lifetime.",
    dressCode: "Festive Traditional / Vibrant Colors",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Village+Kubja+Nagar+Charkhi+Dadri+Haryana",
    mainImageUrl: "/images/gurchari_watercolor.jpg",
  },
];

const day2: Event[] = [
  {
    key: "barat",
    num: "03",
    title: "Departure of the Barat",
    subtitle: "The Grand Procession",
    date: "22 July 2026",
    time: "2:00 PM",
    venue: "Village Kubja Nagar",
    address: "Charkhi Dadri, Haryana",
    tag: "Day 2 · Afternoon",
    desc: "With hearts full of excitement, the groom's procession sets forth — filled with band, baja, and the electric energy of a thousand blessings.",
    dressCode: "Royal / Elegant Traditional",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Village+Kubja+Nagar+Charkhi+Dadri+Haryana",
    mainImageUrl: "/images/barat_watercolor.jpg",
  },
  {
    key: "reception",
    num: "04",
    title: "Phere & Reception",
    subtitle: "Sacred Vows · Elegant Evening",
    date: "22 July 2026",
    time: "7:00 PM Onwards",
    venue: "Four Seasons by TPM",
    address: "Near Mathura Road NH-2, Sikri, Faridabad",
    tag: "Day 2 · Main Event",
    desc: "Witness the sacred vows as two souls become one. Celebrate the beginning of forever in an elegant setting — your presence makes this evening unforgettable.",
    dressCode: "Formal Suits / Pastel Lehengas & Sherwanis",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Four+Seasons+by+TPM+Sikri+Faridabad+Mathura+Road",
    mainImageUrl: "/images/phere_watercolor.jpg",
  },
];

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.8">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="mt-0.5 shrink-0" opacity="0.8">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GemIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
      <path d="M20.37 8.91l-8.17-6.07a1 1 0 0 0-1.2 0L2.83 8.91A1 1 0 0 0 2.5 9.8l2.67 9A1 1 0 0 0 6.12 19.5h10.96a1 1 0 0 0 .95-.7l2.67-9a1 1 0 0 0-.33-.89z" />
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className={`group relative flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-stretch rounded-2xl overflow-hidden border border-gold/15 bg-[#12070A]/55 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-gold/35 max-w-5xl mx-auto w-full`}
    >
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/10 pointer-events-none transition-all duration-500" />
      <div className="w-full md:w-1/2 overflow-hidden relative min-h-[300px] md:min-h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 md:bg-gradient-to-r md:from-transparent md:to-black/30 z-[2] pointer-events-none" />
        <img
          src={event.mainImageUrl}
          alt={event.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] z-[1]"
        />
        <div
          className="absolute top-6 left-6 px-4 py-1.5 font-raleway text-[9px] font-bold tracking-[0.25em] uppercase rounded-full shadow-lg border backdrop-blur-md z-[3]"
          style={{
            backgroundColor: "rgba(13, 5, 6, 0.85)",
            borderColor: "rgba(212,175,55,0.4)",
            color: "#F5E6A3",
          }}
        >
          {event.tag}
        </div>
        <div className="absolute inset-4 border border-gold/25 rounded-lg z-[3] pointer-events-none group-hover:border-gold/45 transition-colors duration-500" />
      </div>
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative z-10 bg-black/20">
        <span className="absolute right-8 top-6 font-cinzel text-[7rem] md:text-[8rem] select-none pointer-events-none text-gold/5 font-bold leading-none">
          {event.num}
        </span>
        <div className="w-full">
          <span className="font-raleway text-[10px] tracking-[0.3em] uppercase text-gold/70 font-semibold block mb-2">
            {event.subtitle}
          </span>
          <h3 className="font-cinzel text-2xl md:text-3xl text-gold-light font-semibold tracking-wide leading-tight mb-4 pr-16">
            {event.title}
          </h3>
          <div className="w-16 h-[1px] bg-gradient-to-r from-gold to-transparent mb-6" />
          <p className="font-cormorant italic text-lg md:text-xl text-[#FFF8F0]/90 leading-relaxed mb-8">
            {event.desc}
          </p>
        </div>
        <div className="w-full space-y-5">
          <div
            className="py-3.5 px-4 rounded-xl border flex items-center gap-4 transition-colors duration-300 group-hover:bg-gold/[0.03]"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(212, 175, 55, 0.01) 100%)",
              borderColor: "rgba(212, 175, 55, 0.2)",
            }}
          >
            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 border border-gold/25">
              <GemIcon />
            </div>
            <div>
              <span className="font-raleway text-[9px] tracking-widest uppercase text-gold/60 font-bold block mb-0.5">
                Dress Code Recommendation
              </span>
              <span className="font-raleway text-xs font-semibold text-[#FFF8F0]/95 leading-normal">
                {event.dressCode}
              </span>
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#FFF8F0]/85">
                <CalendarIcon />
                <span className="font-raleway text-xs font-semibold tracking-wide">
                  {event.date} · {event.time}
                </span>
              </div>
              <div className="flex items-start gap-3 text-[#FFF8F0]/85">
                <PinIcon />
                <div>
                  <p className="font-raleway text-xs font-bold text-[#FFF8F0]">{event.venue}</p>
                  <p className="font-raleway text-[10px] text-[#FFF8F0]/60 mt-0.5 leading-normal">
                    {event.address}
                  </p>
                </div>
              </div>
            </div>
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-raleway text-[10px] tracking-widest uppercase border border-gold/30 text-gold-light hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_18px_rgba(212,175,55,0.2)] transition-all duration-300 shadow-sm shrink-0 sm:self-center"
              style={{ fontWeight: 600 }}
            >
              <MapIcon />
              View Map
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Celebrations() {
  const [day, setDay] = useState<1 | 2>(1);
  const events = day === 1 ? day1 : day2;

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0506 0%, #17070D 50%, #0D0506 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 10%, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            className="font-raleway text-[10px] md:text-xs tracking-[0.38em] uppercase mb-3 text-gold-light/65"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Mark Your Calendar
          </motion.p>
          <motion.h2
            className="font-cinzel text-gold text-4xl md:text-5xl font-semibold tracking-wide"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            Celebrations
          </motion.h2>
          <StarDivider />
        </div>
        <div className="flex justify-center mb-16">
          <div
            className="relative flex items-center p-1.5 rounded-full border bg-black/40 backdrop-blur-md"
            style={{
              borderColor: "rgba(212, 175, 55, 0.25)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
            }}
          >
            {(
              [
                { id: 1, label: "Day 01", title: "21 July · Wedding Luncheon" },
                { id: 2, label: "Day 02", title: "22 July · Main Wedding" },
              ] as const
            ).map((tab) => {
              const active = day === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setDay(tab.id)}
                  className="relative px-6 py-2.5 rounded-full font-raleway text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 focus:outline-none flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px]"
                  style={{
                    color: active ? "#FFF8F0" : "rgba(255, 248, 240, 0.45)",
                    fontWeight: active ? 600 : 500,
                    zIndex: 2,
                  }}
                >
                  {active && (
                    <div
                      className="absolute inset-0 rounded-full border shadow-inner"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 100%)",
                        borderColor: "rgba(212,175,55,0.45)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 15px rgba(212,175,55,0.15)",
                        zIndex: -1,
                      }}
                    />
                  )}
                  <span>{tab.label}</span>
                  <span className="text-[8px] tracking-wide mt-0.5 lowercase text-gold-light/60">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={day}
            className="flex flex-col gap-16 md:gap-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {events.map((event, i) => (
              <EventCard key={event.key} event={event} index={i} />
            ))}
          </motion.div>
        </div>
        <motion.p
          className="font-cormorant italic text-center text-lg md:text-xl mt-20 text-[#FFF8F0]/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Your presence is the greatest gift of all.
        </motion.p>
      </div>
    </section>
  );
}
