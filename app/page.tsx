"use client";

import { useCallback, useEffect, useState } from "react";
import OpeningOverlay from "@/components/OpeningOverlay";
import EnvelopeScreen from "@/components/EnvelopeScreen";
import Hero from "@/components/Hero";
import FloatingPetals from "@/components/FloatingPetals";
import MusicPlayer from "@/components/MusicPlayer";
import WaveDivider from "@/components/WaveDivider";
import Countdown from "@/components/Countdown";
import OurStory from "@/components/OurStory";
import Families from "@/components/Families";
import Celebrations from "@/components/Celebrations";
import Memories from "@/components/Memories";
import FooterSection from "@/components/FooterSection";

type Phase = "intro" | "envelope" | "main";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    document.body.style.overflow = phase === "main" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const handleIntroDone = useCallback(() => setPhase("envelope"), []);
  const handleEnvelopeOpen = useCallback(() => setPhase("main"), []);

  const mainVisible = phase === "main";

  return (
    <>
      {phase === "intro" && <OpeningOverlay onDone={handleIntroDone} />}
      {phase === "envelope" && <EnvelopeScreen onOpen={handleEnvelopeOpen} />}
      {mainVisible && (
        <>
          <FloatingPetals />
          <MusicPlayer triggerPlay={mainVisible} />
        </>
      )}
      <main
        style={{
          opacity: mainVisible ? 1 : 0,
          transition: "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: mainVisible ? "auto" : "none",
        }}
      >
        <Hero />
        <WaveDivider fill="#180A0F" icon="lotus" />
        <Countdown />
        <WaveDivider fill="#0D0506" icon="goldStar" />
        <OurStory />
        <WaveDivider fill="#0D0506" icon="roseStar" flip />
        <Families />
        <WaveDivider fill="#0D0506" icon="goldStar" />
        <Celebrations />
        <WaveDivider fill="#12070A" icon="roseStar" />
        <Memories />
        <WaveDivider fill="#070203" icon="goldStar" />
        <FooterSection />
      </main>
    </>
  );
}
