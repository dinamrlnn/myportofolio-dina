// components/MusicPlayer/MusicPlayer.tsx
"use client"; // Komponen ini akan berinteraksi dengan API browser (audio)

import React, { useRef, useState, useEffect } from "react";

interface MusicPlayerProps {
  src: string; // URL file musik
  loop?: boolean; // Apakah musik akan diulang
  volume?: number; // Volume awal (0.0 hingga 1.0)
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src,
  loop = true,
  volume = 0.3,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Efek untuk mengatur volume awal dan loop
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
    }
  }, [loop, volume]);

  // Fungsi untuk mengaktifkan/menonaktifkan pemutaran
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Pemutaran audio seringkali diblokir oleh browser sebelum interaksi pengguna.
        // .play() akan mengembalikan Promise yang bisa kita tangani.
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
          // Pesan kesalahan umum jika pemutaran diblokir (misalnya, belum ada interaksi pengguna)
          // Pastikan pengguna mengklik tombol ini.
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Opsional: Perbarui status `isPlaying` jika audio diputar/dijeda oleh kontrol asli browser atau faktor eksternal
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []); // Efek ini hanya berjalan sekali saat mount

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {" "}
      {/* Posisi tetap di kanan bawah, z-index tinggi */}
      <button
        onClick={togglePlayPause}
        className="
          bg-[#96d2d9] text-black rounded-full p-3 shadow-lg
          hover:bg-[#72b1b8] transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-[#96d2d9] focus:ring-opacity-75
          flex items-center justify-center
        "
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          // Ikon jeda (dua bar vertikal)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          // Ikon putar (segitiga)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.065V8.934a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.668z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </button>
      {/* Elemen audio itu sendiri - tersembunyi dari tampilan */}
      {/* `preload="auto"` membantu browser memuat audio di latar belakang */}
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
};

export default MusicPlayer;
