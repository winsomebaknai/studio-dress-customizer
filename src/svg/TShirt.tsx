type Props = {
  color?: string;
  sleeve?: "short" | "long" | "sleeveless";
  collar?: "round" | "vneck";
};

export default function TShirt({ 
    color = "#3b82f6",
     sleeve = "short", 
     collar = "round"
    }: Props) {
  return (
    <svg
      viewBox="0 0 200 260"
      className="w-40 h-52"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M60 50 L60 220 L140 220 L140 50 Z"
        fill={color}
        stroke="#1f2937"
        strokeWidth="2"
      />

        {/* Sleeves */}
{ sleeve !== "sleeveless" && (
  <>
    <path
      d={
        sleeve === "long"
          ? "M60 50 L20 130 L60 130 Z"
          : "M60 50 L30 90 L60 90 Z"
      }
      fill={color}
      stroke="#1f2937"
      strokeWidth="2"
    />
    <path
      d={
        sleeve === "long"
          ? "M140 50 L180 130 L140 130 Z"
          : "M140 50 L170 90 L140 90 Z"
      }
      fill={color}
      stroke="#1f2937"
      strokeWidth="2"
    />
  </>
)}


      {/* Neck */}
     {collar === "round" && (
  <ellipse
    cx="100"
    cy="45"
    rx="14"
    ry="10"
    fill="#e5e7eb"
    stroke="#1f2937"
    strokeWidth="2"
  />
)}

{collar === "vneck" && (
  <path
    d="M85 35 L100 55 L115 35"
    fill="none"
    stroke="#1f2937"
    strokeWidth="2"
  />
)}

    </svg>
  );
}
