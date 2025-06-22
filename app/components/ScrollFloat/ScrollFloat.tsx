// components/ScrollFloat/ScrollFloat.tsx
"use client"; // WAJIB untuk komponen yang berinteraksi dengan DOM/Browser API

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins sekali.
// Melakukannya di sini di komponen klien yang menggunakannya adalah praktik yang aman.
gsap.registerPlugin(ScrollTrigger);

// Definisi interface untuk props ScrollFloat
interface ScrollFloatProps {
  children: React.ReactNode; // Tipe untuk children React
  animationDuration?: number; // Durasi animasi dalam detik
  ease?: string; // Tipe easing GSAP
  scrollStart?: string; // Posisi mulai ScrollTrigger (e.g., "top center", "bottom bottom")
  scrollEnd?: string; // Posisi akhir ScrollTrigger
  stagger?: number; // Delay antar animasi elemen anak (dalam detik)
  initialY?: number; // Posisi Y awal saat tersembunyi
  initialOpacity?: number; // Opacity awal saat tersembunyi
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  animationDuration = 1,
  ease = "power1.out", // Default easing yang umum
  scrollStart = "top center", // Default start yang responsif
  scrollEnd = "bottom top",
  stagger = 0.05, // Default stagger yang terlihat efeknya
  initialY = 100, // Default float-up effect
  initialOpacity = 0, // Default hidden state
}) => {
  // Gunakan useRef untuk merujuk ke elemen DOM.
  // Tipekan dengan HTMLDivElement atau null karena kita akan me-render <div>.
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lakukan null check untuk ref.current.
    // Ini penting karena ref.current akan menjadi null pada render awal
    // sebelum elemen DOM terpasang.
    const currentRef = ref.current;
    if (!currentRef) {
      console.warn(
        "ScrollFloat: ref.current is null. Cannot attach ScrollTrigger animation."
      );
      return;
    }

    // Gunakan gsap.context untuk manajemen animasi yang lebih baik
    // Ini membantu dalam membersihkan animasi saat komponen di-unmount.
    let ctx = gsap.context(() => {
      // Tentukan elemen mana yang akan dianimasikan.
      // Jika ada stagger dan elemen anak, animasikan masing-masing anak.
      // Jika tidak, animasikan elemen div utama (currentRef).
      const elementsToAnimate =
        stagger > 0 && currentRef.children.length > 0
          ? gsap.utils.toArray(currentRef.children)
          : currentRef;

      // Buat animasi GSAP 'from'.
      // Elemen akan bergerak DARI properti yang ditentukan (opacity:0, y:100)
      // KE kondisi CSS normalnya.
      gsap.from(elementsToAnimate, {
        opacity: initialOpacity, // Mulai dari opacity ini
        y: initialY, // Mulai dari posisi Y ini
        duration: animationDuration, // Durasi animasi
        ease: ease, // Efek easing
        stagger: stagger, // Stagger antar elemen
        scrollTrigger: {
          trigger: currentRef, // Elemen yang memicu trigger
          start: scrollStart, // Kapan animasi dimulai relatif terhadap trigger & scroller
          end: scrollEnd, // Kapan animasi berakhir
          // toggleActions: 'play none none reverse'
          // - 'play': saat trigger masuk dari bawah (onEnter)
          // - 'none': saat trigger keluar ke bawah (onLeave)
          // - 'none': saat trigger masuk dari atas (onEnterBack)
          // - 'reverse': saat trigger keluar ke atas (onLeaveBack) -> membuat elemen tersembunyi lagi
          toggleActions: "play none none reverse",
          markers: false, // Ubah ke TRUE untuk DEBUGGING VISUAL (garis-garis start/end)
        },
      });
    }, currentRef); // Scope context ke ref elemen

    // Fungsi cleanup untuk ScrollTrigger dan animasi GSAP
    // Penting untuk mencegah memory leaks.
    return () => ctx.revert();
  }, [
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    initialY,
    initialOpacity,
  ]);
  // Dependency array untuk useEffect, pastikan semua props yang digunakan di dalamnya terdaftar.

  return (
    // Render div pembungkus yang akan menjadi trigger elemen
    // `position: 'relative'` adalah best practice jika anak-anaknya mungkin memiliki `position: 'absolute'`
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      {children}
    </div>
  );
};

export default ScrollFloat;
