export function StarIcon({
  size = 10,
  color = "#D4AF37",
  opacity = 0.5,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
}

export function StarDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-5">
      <div
        style={{
          height: "0.5px",
          width: 60,
          background:
            "linear-gradient(to right, transparent, rgba(212,175,55,0.3))",
        }}
      />
      <StarIcon size={10} opacity={0.5} />
      <div
        style={{
          height: "0.5px",
          width: 60,
          background:
            "linear-gradient(to left, transparent, rgba(212,175,55,0.3))",
        }}
      />
    </div>
  );
}

export function LotusIcon() {
  return (
    <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
      <path
        d="M14 16 C14 10 6 4 2 2 C4 8 8 12 14 16Z"
        fill="#D4AF37"
        fillOpacity={0.4}
      />
      <path
        d="M14 16 C14 10 22 4 26 2 C24 8 20 12 14 16Z"
        fill="#D4AF37"
        fillOpacity={0.4}
      />
      <path
        d="M14 16 C10 10 4 8 2 8 C5 10 9 13 14 16Z"
        fill="#B76E79"
        fillOpacity={0.35}
      />
      <path
        d="M14 16 C18 10 24 8 26 8 C23 10 19 13 14 16Z"
        fill="#B76E79"
        fillOpacity={0.35}
      />
      <path
        d="M14 16 C12 9 12 4 14 2 C16 4 16 9 14 16Z"
        fill="#D4AF37"
        fillOpacity={0.55}
      />
    </svg>
  );
}

export function GoldStarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 0 L14 8 L22 11 L14 14 L11 22 L8 14 L0 11 L8 8Z"
        fill="#D4AF37"
        fillOpacity={0.55}
      />
    </svg>
  );
}

export function RoseStarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 0 L10.5 6.5 L17 9 L10.5 11.5 L9 18 L7.5 11.5 L1 9 L7.5 6.5Z"
        fill="#B76E79"
        fillOpacity={0.55}
      />
    </svg>
  );
}

export function CornerOrnament({
  flipX = false,
  flipY = false,
}: {
  flipX?: boolean;
  flipY?: boolean;
}) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      style={{
        transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
      }}
    >
      <path
        d="M3 52 L3 3 L52 3"
        stroke="#D4AF37"
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.35"
      />
      <circle cx="3" cy="3" r="2.5" fill="#D4AF37" fillOpacity="0.6" />
      <circle cx="52" cy="3" r="1.5" fill="#D4AF37" fillOpacity="0.3" />
      <circle cx="3" cy="52" r="1.5" fill="#D4AF37" fillOpacity="0.3" />
      <path
        d="M3 35 Q14 22 26 3"
        stroke="#D4AF37"
        strokeWidth="0.5"
        fill="none"
        strokeOpacity="0.25"
      />
      <circle cx="12" cy="20" r="1" fill="#B76E79" fillOpacity="0.5" />
    </svg>
  );
}

export function MandalaSVG() {
  const spokes = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);

  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
      <g
        transform="translate(120,120)"
        stroke="#D4AF37"
        strokeWidth="0.55"
        opacity="0.45"
      >
        {spokes.map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <line x1="0" y1="76" x2="0" y2="106" />
            <circle
              cx="0"
              cy="112"
              r="2.2"
              fill="#D4AF37"
              fillOpacity="0.55"
              stroke="none"
            />
            <ellipse
              cx="0"
              cy="90"
              rx="3.5"
              ry="9"
              fill="#D4AF37"
              fillOpacity="0.12"
            />
          </g>
        ))}
        <circle r="64" strokeOpacity="0.15" />
        <circle r="78" strokeOpacity="0.15" />
        <circle r="92" strokeOpacity="0.5" />
        <circle r="108" strokeOpacity="0.15" />
        <circle r="22" strokeOpacity="0.4" />
        {petals.map((deg) => (
          <g key={`p-${deg}`} transform={`rotate(${deg})`}>
            <path
              d="M0 22 Q5 30 0 38 Q-5 30 0 22Z"
              fill="#D4AF37"
              fillOpacity="0.18"
            />
          </g>
        ))}
        <circle r="7" fill="#D4AF37" fillOpacity="0.15" stroke="none" />
        <circle r="3" fill="#D4AF37" fillOpacity="0.5" stroke="none" />
      </g>
    </svg>
  );
}
