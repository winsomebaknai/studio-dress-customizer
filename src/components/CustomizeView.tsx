"use client";
import { useState } from "react";
import Header from "./Header";
import DressRenderer from "../svg/DressRenderer";

type Props = {
  dress: any;
  onBack: () => void;
};

export default function CustomizeView({ dress, onBack }: Props) {

    const [color, setColor] = useState(dress.defaultColor);
    const [sleeve, setSleeve] = useState(dress.sleeves[0]);
    const [collar, setCollar] = useState(
  dress.collars?.[0] ?? "round"
);
    const handleDownload = () => {
  const svg = document.querySelector("svg");
  if (!svg) return;

  const serializer = new XMLSerializer();
  const svgStr = serializer.serializeToString(svg);

  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  const blob = new Blob([svgStr], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  img.onload = () => {
    ctx?.drawImage(img, 0, 0, 800, 800);
    URL.revokeObjectURL(url);

    const png = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = png;
    a.download = "design.png";
    a.click();
  };

  img.src = url;
};


  return (
    <div className="min-h-screen bg-[#faf7fb]">
      <Header back onBack={onBack} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Preview Panel */}
          <section className="lg:col-span-6 lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Live Preview
              </h2>

              <div className="h-[420px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white rounded-xl">
                <DressRenderer
                  type={dress.type}
                  color={color}
                  sleeve={sleeve}
                  collar={collar}
                />
              </div>

              <button
  onClick={handleDownload}
  className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
>
  Download Design
</button>

<button
  onClick={() => {
    setColor(dress.defaultColor);
    setSleeve(dress.sleeves[0]);
    setCollar(dress.collars?.[0] ?? "round");
  }}
  className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition"
>
  Reset Customization
</button>

            </div>
          </section>

          {/* Controls Panel */}
          <section className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {dress.name}
              </h3>

                <div className="space-y-6">



  {/* Color Picker */}
  <div>
    <h4 className="text-sm font-semibold text-gray-700 mb-3">
      Choose Color
    </h4>

    <div className="grid grid-cols-4 gap-3 mb-4">
      {[
        "#3b82f6",
        "#ec4899",
        "#8b5cf6",
        "#10b981",
        "#ef4444",
        "#f59e0b",
        "#1f2937",
        "#f3f4f6",
      ].map((c) => (
        <button
          key={c}
          onClick={() => setColor(c)}
          className={`h-12 rounded-lg border-4 transition ${
            color === c
              ? "border-purple-600 scale-105"
              : "border-gray-200"
          }`}
          style={{ backgroundColor: c }}
        />
      ))}
    </div>

    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-600">Custom</span>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="h-10 w-16 cursor-pointer"
      />
      <span className="text-xs font-mono text-gray-500">
        {color}
      </span>
    </div>
  </div>



      {/* Sleeve Selector */}
<div>
  <h4 className="text-sm font-semibold text-gray-700 mb-3">
    Sleeve Style
  </h4>

  <div className="grid grid-cols-3 gap-3">
    {dress.sleeves.map((s) => (
      <button
        key={s}
        onClick={() => setSleeve(s)}
        className={`py-2 rounded-lg text-sm font-medium transition ${
          sleeve === s
            ? "bg-purple-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {s.charAt(0).toUpperCase() + s.slice(1)}
      </button>
    ))}
  </div>
</div>

        {/* Collar Selector */}
        {dress.collars && (
  <div>
    <h4 className="text-sm font-semibold text-gray-700 mb-3">
      Collar Style
    </h4>

    <div className="grid grid-cols-3 gap-3">
      {dress.collars.map((c) => (
        <button
          key={c}
          onClick={() => setCollar(c)}
          className={`py-2 rounded-lg text-sm font-medium transition ${
            collar === c
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {c.toUpperCase()}
        </button>
      ))}
    </div>
  </div>
)}


        {/* Collar Selector end*/}
            </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
