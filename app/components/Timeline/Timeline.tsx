// components/Timeline/Timeline.tsx
"use client";
import {
  useMotionValueEvent, // Ini tidak digunakan, bisa dihapus
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Pastikan ref.current ada sebelum menghitung tinggi
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    // Tambahkan event listener untuk resize jika tinggi bisa berubah dinamis
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, data]); // Tambahkan data sebagai dependency agar tinggi dihitung ulang jika data berubah

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    // Hapus bg-[#0a0a0a] di sini, karena sudah diatur oleh ScrollFloat di app/page.tsx
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-white text-center">
          My Certificates & Achievements
        </h2>
        <p className="text-white text-sm md:text-base max-w-xl mx-auto text-center">
          Here's a look at the certifications I've earned, marking key
          achievements in my learning journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-between pt-10 md:pt-20 gap-4 md:gap-10`}
          >
            {/* Kolom Kiri - Untuk item genap atau untuk Mobile */}
            <div
              className={`flex flex-col md:w-1/2 ${
                index % 2 === 0 ? "md:items-end" : "md:order-2 md:items-start"
              }`}
            >
              {/* Bulatan + Judul */}
              <div className="flex items-center gap-3 mb-6">
                {/* Bulatan */}
                <div className="w-4 h-4 rounded-full bg-white border border-gray-400 flex-shrink-0" />
                {/* Judul */}
                <h3 className="text-lg md:text-2xl font-bold text-white flex-grow">
                  {item.title}
                </h3>
              </div>
              {/* Deskripsi & Konten (Sertifikat) */}
              <div
                className={`text-white w-full ${
                  index % 2 === 0
                    ? "md:text-right md:pr-4"
                    : "md:text-left md:pl-4"
                }`}
                // Hapus style={{ maxWidth: "420px" }} agar lebih responsif atau atur di Tailwind
              >
                {item.content} {/* Ini adalah sertifikat/gambar */}
              </div>
            </div>

            {/* Kolom Kanan - Untuk item ganjil atau untuk Mobile */}
            {/* Ini adalah kolom kosong untuk menjaga simetri pada desktop */}
            <div
              className={`hidden md:block md:w-1/2 ${
                index % 2 === 0 ? "" : "md:order-1"
              }`}
            >
              {/* Kolom ini bisa tetap kosong atau diisi dengan sesuatu jika perlu */}
            </div>
          </div>
        ))}

        {/* Garis timeline vertikal */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-1/2 md:-translate-x-1/2 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-white to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
