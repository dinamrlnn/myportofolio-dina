// 📦 RotatingText.tsx (Sudah diperbaiki)
"use client";

import { motion, TargetAndTransition, Transition } from "framer-motion";
import React, { useEffect, useState } from "react";

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
  className?: string;
  staggerFrom?: string;
  staggerDuration?: number;
  splitLevelClassName?: string;
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  transition,
  initial,
  animate,
  exit,
  className,
}: RotatingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, (transition?.duration ?? 2) * 1000);
    return () => clearInterval(interval);
  }, [texts.length, transition?.duration]);

  return (
    <motion.div
      className={className}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {texts[currentTextIndex].split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
