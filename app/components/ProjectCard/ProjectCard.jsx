// components/ProjectCard/ProjectCard.jsx
"use client"; // Penting jika Anda menggunakan App Router di Next.js 13+

import Image from "next/image";
// import Link from "next/link"; // Dihapus karena tidak digunakan dalam kode ini

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill={true} // Mengganti layout="fill" dengan fill={true}
          className="object-cover transition-transform duration-300 hover:scale-105" // Menambahkan object-cover class
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-[#96d2d9] text-black text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* --- MODIFICATION STARTS HERE --- */}
        <div className="flex items-center gap-4 mt-auto">
          {project.demoLink && (
            // Outer div for the border effect - HARUS RELATIVE!
            <div className="relative group">
              {" "}
              {/* Added group for hover effect on parent */}
              {/* PSEUDO-ELEMENT SPAN HARUS DULUAN DI SINI */}
              {/* Ini akan menjadi lapisan di bawah link */}
              <span
                className="
                  absolute inset-0 // Cover the parent div
                  rounded-lg // Match border radius of a tag
                  border-2 border-white // Default white border
                  transition-colors duration-300
                  group-hover:border-[#96d2d9] // Border color changes on hover
                  group-hover:bg-[#96d2d9] // Background fills on hover
                "
              ></span>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative z-10 // Pastikan A-tag ini di atas pseudo-element span
                  flex items-center
                  px-4 py-2 // Add padding to make the border visible
                  rounded-lg // Match the border radius
                  text-white
                  font-medium
                  transition-colors duration-300
                  group-hover:text-[#0a0a0a] // Text color changes on hover
                  bg-transparent // Default background transparent
                "
              >
                Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2" // Increased ml for better spacing
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
          {/* Anda bisa menambahkan tautan GitHub di sebelahnya jika Anda memilikinya di data proyek Anda */}
          {/* {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-[#96d2d9] transition-colors duration-300 font-medium"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )} */}
        </div>
        {/* --- MODIFICATION ENDS HERE --- */}
      </div>
    </div>
  );
};

export default ProjectCard;
