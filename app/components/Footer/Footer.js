import React from "react";
import Link from "next/link"; // Menggunakan Link dari Next.js untuk navigasi yang efisien
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa"; // Import ikon

const Footer = () => {
  return (
    <footer className="w-full bg-[#96d2d9] py-10 px-4 md:px-10 text-black font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.instagram.com/dina_marlina_siagian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#96d2d9] transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dina-marlina-siagian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#96d2d9] transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://www.facebook.com/DinaMarlinaSiagian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#96d2d9] transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        {/* Anda perlu menyesuaikan href ini ke ID bagian yang sesuai di halaman Anda */}

        {/* Copyright */}
        <p className="text-black text-sm">
          Created by Dina Marlina Siagian © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
