type Props = {
  color?: string;
};

export default function Tank({ color = "#10b981" }: Props) {
  return (
    <svg viewBox="0 0 200 260" className="w-56 h-auto">
      {/* Body */}
      <path
        d="M70 50 L65 240 L135 240 L130 50 Z"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Straps */}
      <rect
        x="70"
        y="30"
        width="16"
        height="30"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />
      <rect
        x="114"
        y="30"
        width="16"
        height="30"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Neckline */}
      <path
        d="M70 50 Q100 70 130 50"
        fill="none"
        stroke="#1f2937"
        strokeWidth="2"
      />
    </svg>
  );
}
