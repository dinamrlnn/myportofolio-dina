import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string; // Tailwind classes for width, height, color, font
  style?: React.CSSProperties; // Tambahkan prop style untuk inline CSS
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "", // Kelas Tailwind akan diberikan di sini
  style = {}, // Inisialisasi prop style
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  // --- Perbaikan Perhitungan Posisi Huruf di Lingkaran ---
  // Perkiraan radius berdasarkan ukuran w-24 h-24 (96px) di Home.js
  // Jika Anda mengubah w/h di Home.js, sesuaikan assumedRadius ini
  const assumedRadius = 40; // Setengah dari 96px (kurang lebih) untuk spacing yang baik

  return (
    <motion.div
      // Menggabungkan className yang diterima dari props dan style inline
      className={`relative flex justify-center items-center ${className}`}
      style={{ ...style, rotate: rotation }} // Gabungkan style yang diterima dengan rotasi Framer Motion
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        // Hitung sudut untuk setiap huruf
        const angle = (360 / letters.length) * i;

        // Transformasi untuk menempatkan huruf di keliling lingkaran
        // rotate(angle) memutar span ke posisi di lingkaran.
        // translateY(-assumedRadius) menggeser span ke atas sejauh radius dari pusat.
        // rotateZ(-angle) mengkompensasi rotasi keseluruhan agar huruf tetap tegak.
        const letterTransform = `rotate(${angle}deg) translateY(-${assumedRadius}px) rotateZ(-${angle}deg)`;

        return (
          <span
            key={i}
            className="absolute inset-0 flex justify-center items-center text-current"
            style={{
              transform: letterTransform,
              transformOrigin: "center center", // Pastikan rotasi berasal dari pusat huruf
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
