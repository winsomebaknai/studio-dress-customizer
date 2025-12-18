"use client";

import { useState } from "react";
import { dresses, Dress } from "@/data/dresses";
import DressRenderer from "@/svg/DressRenderer";

type Props = {
  onSelect: (dress: Dress) => void;
};

export default function DressCarousel({ onSelect }: Props) {
  const [index, setIndex] = useState(0);

  const currentDress = dresses[index];

  return (
    <div className="relative flex flex-col items-center">
      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-sm w-full max-w-md p-6 text-center">
        {/* Left Arrow */}
        <button
          onClick={() =>
            setIndex((index - 1 + dresses.length) % dresses.length)
          }
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 
                     bg-white shadow-md rounded-full w-10 h-10 
                     flex items-center justify-center 
                     hover:bg-gray-100 transition"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setIndex((index + 1) % dresses.length)
          }
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 
                     bg-white shadow-md rounded-full w-10 h-10 
                     flex items-center justify-center 
                     hover:bg-gray-100 transition"
        >
          →
        </button>

        {/* Preview */}
        <div className="h-64 flex items-center justify-center mb-6 bg-gray-50 rounded-xl">
          <DressRenderer
            type={currentDress.type}
            color={currentDress.defaultColor}
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-800">
          {currentDress.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Available sleeves: {currentDress.sleeves.join(", ")}
        </p>

        <button
          onClick={() => onSelect(currentDress)}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Customize This Style
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {dresses.map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-purple-600" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
