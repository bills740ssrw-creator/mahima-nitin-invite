"use client";

const petals = Array.from({ length: 24 }, (_, t) => ({
  id: t,
  left: `${(4.2 * t + 15 * Math.sin(1.5 * t) + 50) % 100}%`,
  delay: `${(0.8 * t) % 16}s`,
  duration: `${14 + (t % 8) * 1.8}s`,
  size: 8 + (t % 6) * 3,
  shape: t % 3,
}));

const colors = ["#FFB6C1", "#D4AF37", "#F4A0B0", "#F5E6A3", "#FFCCCB"];

export default function FloatingPetals() {
  return (
    <>
      {petals.map((p) => {
        const color = colors[p.shape % colors.length];
        const style: React.CSSProperties = {
          position: "fixed",
          left: p.left,
          top: 0,
          width: p.size,
          height: 1.6 * p.size,
          opacity: 0,
          animation: `petalDrift ${p.duration} ${p.delay} linear infinite`,
          pointerEvents: "none",
          zIndex: 1,
          filter: "blur(0.4px)",
        };
        if (p.shape === 0) {
          return (
            <div key={p.id} style={style}>
              <svg
                viewBox="0 0 10 16"
                width={p.size}
                height={1.6 * p.size}
              >
                <ellipse cx="5" cy="8" rx="4.2" ry="7.5" fill={color} fillOpacity="0.65" />
              </svg>
            </div>
          );
        }
        if (p.shape === 1) {
          return (
            <div key={p.id} style={style}>
              <svg viewBox="0 0 12 12" width={p.size} height={p.size}>
                <circle cx="6" cy="6" r="4" fill={color} fillOpacity="0.55" />
              </svg>
            </div>
          );
        }
        return (
          <div key={p.id} style={style}>
            <svg viewBox="0 0 10 18" width={p.size} height={1.8 * p.size}>
              <path d="M5 0 C8 4 9 8 5 18 C1 8 2 4 5 0Z" fill={color} fillOpacity="0.6" />
            </svg>
          </div>
        );
      })}
    </>
  );
}
