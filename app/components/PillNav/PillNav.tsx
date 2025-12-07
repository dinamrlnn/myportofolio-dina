"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  items: NavItem[];
}

export default function PillNav({ items }: PillNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, href: string) => {
    setActiveIndex(index);
    // Smooth scroll ke section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex items-center gap-2 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index, item.href)}
          className="relative px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:text-white/80 rounded-full"
        >
          {activeIndex === index && (
            <motion.span
              layoutId="pill"
              className="absolute inset-0 bg-[#96d2d9] rounded-full z-0"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
