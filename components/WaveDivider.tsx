import { motion } from "framer-motion";
import {
  CornerOrnament,
  GoldStarIcon,
  LotusIcon,
  RoseStarIcon,
} from "./Ornaments";

type Icon = "lotus" | "goldStar" | "roseStar";

function DividerIcon({ icon }: { icon: Icon }) {
  if (icon === "lotus") return <LotusIcon />;
  if (icon === "goldStar") return <GoldStarIcon />;
  return <RoseStarIcon />;
}

export default function WaveDivider({
  fill = "#0D0506",
  icon = "goldStar",
  flip = false,
}: {
  fill?: string;
  icon?: Icon;
  flip?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 64,
        background: `linear-gradient(180deg, #0D0506 0%, ${fill} 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 w-full"
        height="64"
        preserveAspectRatio="none"
        viewBox="0 0 1440 64"
        style={{ transform: flip ? "scaleY(-1)" : "none" }}
      >
        <path
          d="M0 32 Q120 10 240 32 Q360 54 480 32 Q600 10 720 32 Q840 54 960 32 Q1080 10 1200 32 Q1320 54 1440 32 L1440 64 L0 64Z"
          fill={fill}
          fillOpacity="0.65"
        />
        <path
          d="M0 40 Q180 18 360 40 Q540 62 720 40 Q900 18 1080 40 Q1260 62 1440 40"
          stroke="#D4AF37"
          strokeWidth="0.5"
          strokeOpacity="0.18"
          fill="none"
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center gap-3 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{
            height: 1,
            width: 50,
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.4))",
            transformOrigin: "right",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <DividerIcon icon={icon} />
        <motion.div
          style={{
            height: 1,
            width: 50,
            background:
              "linear-gradient(to left, transparent, rgba(212,175,55,0.4))",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  );
}

export function OpeningCornerOrnaments() {
  return (
    <>
      <div className="absolute hidden md:block top-5 right-5">
        <CornerOrnament flipX />
      </div>
      <div className="absolute hidden md:block top-5 left-5">
        <CornerOrnament />
      </div>
      <div className="absolute hidden md:block bottom-5 right-5">
        <CornerOrnament flipX flipY />
      </div>
      <div className="absolute hidden md:block bottom-5 left-5">
        <CornerOrnament flipY />
      </div>
    </>
  );
}
