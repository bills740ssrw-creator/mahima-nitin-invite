"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MusicPlayer({ triggerPlay }: { triggerPlay: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/hayee-re.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const tryPlay = useCallback(() => {
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!triggerPlay) return;
    tryPlay();
    const onClick = () => {
      if (audioRef.current?.paused) tryPlay();
      document.removeEventListener("click", onClick);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [triggerPlay, tryPlay]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <AnimatePresence>
      {triggerPlay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[999]"
        >
          <button
            onClick={toggle}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border border-gold/30 bg-black/40 backdrop-blur-md shadow-2xl transition-all active:scale-95 focus:outline-none ${
              !playing && triggerPlay ? "animate-pulse border-gold/60" : ""
            }`}
            title={playing ? "Pause Music" : "Play Music"}
          >
            {playing && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-gold/40"
              />
            )}
            {playing ? (
              <div className="flex items-end gap-0.5 h-4 w-4">
                {[0.6, 1.2, 0.8, 1.4].map((delay, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay,
                    }}
                    className="w-[2.5px] bg-gold rounded-full"
                  />
                ))}
              </div>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:scale-110"
              >
                <polygon points="5 3 19 12 5 21 5 3" fill="#D4AF37" fillOpacity="0.3" />
              </svg>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
