type WorldMapProps = {
  gradientId?: string;
};

export function WorldMap({ gradientId = "mapGlow" }: WorldMapProps) {
  const dots = [
    { cx: 160, cy: 140, label: "UK", tx: 170, ty: 135 },
    { cx: 590, cy: 195, label: "UAE", tx: 600, ty: 190 },
    { cx: 370, cy: 140, label: "Germany", tx: 380, ty: 135 },
    { cx: 660, cy: 175, label: "China", tx: 668, ty: 170 },
    { cx: 615, cy: 230, label: "India", tx: 623, ty: 225 },
    { cx: 570, cy: 220, label: "KSA", tx: 578, ty: 215 },
  ];

  return (
    <svg
      className="world-map-svg"
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="transparent" />
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
        <line x1="0" y1="225" x2="800" y2="225" />
        <line x1="0" y1="112" x2="800" y2="112" />
        <line x1="0" y1="338" x2="800" y2="338" />
        <line x1="400" y1="0" x2="400" y2="450" />
        <line x1="200" y1="0" x2="200" y2="450" />
        <line x1="600" y1="0" x2="600" y2="450" />
      </g>
      <g
        stroke="rgba(201,168,76,0.15)"
        strokeWidth="0.8"
        strokeDasharray="4 4"
        fill="none"
      >
        <polyline points="160,140 220,185 370,160 520,170 590,195 660,200" />
        <line x1="160" y1="140" x2="370" y2="160" />
        <line x1="220" y1="185" x2="370" y2="160" />
        <line x1="660" y1="200" x2="590" y2="195" />
      </g>
      {dots.map((dot) => (
        <g key={dot.label} className="map-dot">
          <circle
            cx={dot.cx}
            cy={dot.cy}
            r="5"
            className="pulse"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
          />
          <circle cx={dot.cx} cy={dot.cy} r="5" fill="#C9A84C" />
          <text
            x={dot.tx}
            y={dot.ty}
            fill="rgba(245,240,232,0.8)"
            fontSize="9"
            fontFamily="var(--font-dm-sans), sans-serif"
          >
            {dot.label}
          </text>
        </g>
      ))}
      <ellipse cx="400" cy="200" rx="300" ry="180" fill={`url(#${gradientId})`} />
    </svg>
  );
}
