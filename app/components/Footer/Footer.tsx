"use client";

import PillNav from "../PillNav/PillNav";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Certificates", href: "#certificates" },
    { label: "Framework & Language", href: "#technologies" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <footer className="w-full bg-black/90 py-8 px-4 z-20 relative">
      <div className="container mx-auto">
        {/* Pill Navigation */}
        <div className="flex justify-center mb-8">
          <PillNav items={navItems} />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/DinaSiagian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#96d2d9] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dina-marlina-siagian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#96d2d9] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 Dina Marlina Siagian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
