type CollarType = "round" | "vneck";

type Props = {
  color?: string;
  sleeve?: "short" | "long" | "sleeveless";
  collar?: CollarType;
};

export default function Dress({
  color = "#ec4899",
  sleeve = "short",
  collar = "round",
}: Props) {
  return (
    <svg viewBox="0 0 200 280" className="w-56 h-auto">
      {/* Body */}
      <path
        d="M60 40 L50 260 L150 260 L140 40 Z"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

      {/* Sleeves */}
      {sleeve !== "sleeveless" && (
        <>
          <path
            d={
              sleeve === "long"
                ? "M60 40 L20 120 L60 120 Z"
                : "M60 40 L35 80 L60 80 Z"
            }
            fill={color}
            stroke="#1f2937"
            strokeWidth="2"
          />
          <path
            d={
              sleeve === "long"
                ? "M140 40 L180 120 L140 120 Z"
                : "M140 40 L165 80 L140 80 Z"
            }
            fill={color}
            stroke="#1f2937"
            strokeWidth="2"
          />
        </>
      )}

      {/* Collar / Neckline */}
      {collar === "round" && (
        <ellipse
          cx="100"
          cy="40"
          rx="16"
          ry="10"
          fill="#e5e7eb"
          stroke="#1f2937"
          strokeWidth="2"
        />
      )}

      {collar === "vneck" && (
        <path
          d="M85 30 L100 55 L115 30"
          fill="none"
          stroke="#1f2937"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}
