type Props = {
  color?: string;
};

export default function Hoodie({ color = "#8b5cf6" }: Props) {
  return (
    <svg viewBox="0 0 200 280" className="w-56 h-auto">
      {/* Body */}
      <rect
        x="50"
        y="50"
        width="100"
        height="190"
        rx="12"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Sleeves */}
      <path
        d="M50 60 L20 140 L50 140 Z"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />
      <path
        d="M150 60 L180 140 L150 140 Z"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Hood */}
      <path
        d="M70 40 Q100 15 130 40 L130 70 L70 70 Z"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Pocket */}
      <rect
        x="75"
        y="150"
        width="50"
        height="35"
        rx="6"
        fill="#00000022"
      />
    </svg>
  );
}
