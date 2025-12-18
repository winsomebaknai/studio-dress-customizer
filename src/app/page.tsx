"use client";

import { useState } from "react";
import Header from "@/components/Header";
import DressCarousel from "@/components/DressCarousel";
import CustomizeView from "@/components/CustomizeView";

export default function Home() {
  const [selectedDress, setSelectedDress] = useState<any>(null);

  if (selectedDress) {
    return (
      <CustomizeView
        dress={selectedDress}
        onBack={() => setSelectedDress(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7fb]">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-4">
          Dress Customizer
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose your style and make it yours
        </p>

        <DressCarousel onSelect={setSelectedDress} />
      </main>
    </div>
  );
}


