// app/page.tsx
"use client"; // WAJIB untuk halaman yang menggunakan interaktivitas klien (hooks, event listeners)

import Image from "next/image";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Impor komponen-komponen kustom Anda
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import SplitText from "./components/SplitText/SplitText";
import Ribbons from "./components/Ribbons/Ribbons";
import Particles from "./components/Particles/Particles";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import CircularText from "./components/CircularText/CircularText";
import GradientText from "./components/GradientText/GradientText"; // Tetap diimpor jika digunakan di tempat lain
import FlowingMenu from "./components/FlowingMenu/FlowingMenu";
import { Timeline } from "./components/Timeline/Timeline";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import Footer from "./components/Footer/Footer";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"; // IMPORT BARU: MusicPlayer

export default function Home() {
  const data = [
    {
      title: "2025 - Fundamental of Data Analysis",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates a foundational understanding of{" "}
            <strong>data analysis</strong>, including analytical techniques and
            data interpretation skills.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/1.jpeg"
                alt="Fundamental of Data Analysis Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Front End Development (Coding Studio)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification validates my ability to build{" "}
            <strong>modern and responsive front-end interfaces</strong> using
            essential web technologies.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/2.png"
                alt="Front End Development Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Web Development Fundamentals (IBM)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates understanding of{" "}
            <strong>web development fundamentals</strong>, covering essential
            concepts used in building web applications.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/3.png"
                alt="Web Development Fundamentals IBM Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - C Programming Bootcamp",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates a solid foundation in{" "}
            <strong>C Programming</strong>, covering core concepts and practical
            application.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/4.png"
                alt="C Programming Bootcamp Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Data Classification and Summarization (Hacktiv8)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification validates skills in{" "}
            <strong>data classification and summarization</strong>, essential
            for organizing and processing structured datasets.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/5.png"
                alt="Hacktiv8 Data Classification Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Certificate Data Classification and Summarization (IBM)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates proficiency in{" "}
            <strong>classifying and summarizing data</strong> using IBM
            industry-standard tools and workflows.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/6.png"
                alt="IBM Data Classification Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Classifying Data Using IBM Granite",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification validates my understanding of{" "}
            <strong>data classification using IBM Granite models</strong>,
            focusing on AI-assisted workflows for efficient data processing.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/7.png"
                alt="IBM Granite Classification Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Introduction Data Science With R (DQLab)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification highlights foundational knowledge of{" "}
            <strong>Data Science using R</strong>, including data manipulation
            and statistical modeling.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/8.png"
                alt="Introduction Data Science With R Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Website Development - Back End",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification confirms my expertise in{" "}
            <strong>back-end web development</strong>, including server logic,
            databases, and API integrations.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/9.png"
                alt="Back End Development Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - React Front End",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate demonstrates proficiency in building{" "}
            <strong>dynamic and responsive interfaces using React</strong>.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] bg-white w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/10.png"
                alt="React Front End Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Responsive Website Design",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates the ability to create{" "}
            <strong>fully responsive websites</strong> optimized for all device
            sizes.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] bg-white w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/11.png"
                alt="Responsive Web Design Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Data Analisis (Micro Skill)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification validates competency in{" "}
            <strong>data analysis</strong>, covering foundational techniques for
            effective data processing.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-white aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/12.png"
                alt="Data Analisis Micro Skill Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - AI Software Development (Simplilearn)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates understanding of{" "}
            <strong>AI software development</strong>, including intelligent
            system design and machine learning applications.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-white aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/13.png"
                alt="AI Software Development Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Del English Club Certificate",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification reflects active participation in the{" "}
            <strong>Del English Club</strong>, strengthening communication
            abilities and English proficiency.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-white aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/certificate/14.png"
                alt="Del English Club Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Python (Kaggle)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates my proficiency in{" "}
            <strong>Python programming</strong>, focusing on data manipulation,
            analysis, and practical coding skills.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/15.png"
                alt="Python Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2025 - Introduction to Software Engineer (RevoU)",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification establishes my understanding of{" "}
            <strong>software engineering principles</strong>, including
            workflows and industry best practices.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src="/images/certificate/16.png"
                alt="RevoU Software Engineer Certificate"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Data untuk FlowingMenu
  const demoItems = [
    {
      link: "#learn",
      text: "LEARN",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    },
    {
      link: "#build",
      text: "BUILD",
      image:
        "https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg",
    },
    {
      link: "#grow",
      text: "GROW",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    },
  ];

  // Data untuk Languages & Frameworks section
  const technologies = [
    { name: "HTML", icon: "/images/tech/html.png" },
    { name: "CSS", icon: "/images/tech/css.png" },
    { name: "JavaScript", icon: "/images/tech/javascript.png" },
    { name: "TypeScript", icon: "/images/tech/typescript.png" },
    { name: "React", icon: "/images/tech/react.png" },
    { name: "Next.js", icon: "/images/tech/nextjs.png" },
    { name: "Tailwind CSS", icon: "/images/tech/tailwind.png" },
    { name: "Bootstrap", icon: "/images/tech/bootstrap.png" },
    { name: "Figma", icon: "/images/tech/figma.png" },
    { name: "Python", icon: "/images/tech/python.png" },
    { name: "SQL", icon: "/images/tech/sql.png" },
    { name: "MySQL", icon: "/images/tech/mysql.png" },
    { name: "MongoDB", icon: "/images/tech/mongodb.png" },
    { name: "C", icon: "/images/tech/c.png" },
    { name: "Java", icon: "/images/tech/java.png" },
    { name: "Golang", icon: "/images/tech/golang.png" },
    { name: "Laragon", icon: "/images/tech/laragon.png" },
  ];

  // Data untuk Featured Projects
  const featuredProjects = [
    {
      title: "Life Linker",
      description:
        "I contributed develop Life Linker, a PMI-integrated blood bank platform built with Golang and JSX + Tailwind CSS, enabling donor registration, real-time blood stock checks, compatible donor search, donation history tracking, and emergency notifications for faster, more efficient coordination.",
      image: "/images/project/lifelinker.png",
      technologies: ["Golang", "JSX", "Tailwind CSS"],
      demoLink: "https://github.com/JuliusSinaga/LifeLinker-PPW11",
    },
    {
      title: "Koperasi Bintang Tapanuli",
      description:
        "I contributed to developing a complete online ticketing system using PHP, MySQL, and Bootstrap, featuring route search, seat selection, checkout, e-ticketing, booking management, notifications, and an admin panel for handling schedules, vehicles, seat maps, payments, and reports.",
      image: "/images/project/kbt.png",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      demoLink: "https://github.com/LisbethPanjaitan/KBT",
    },
    {
      title: "Semeru Ticket Reserevation",
      description:
        "I built an online reservation system for Mount Semeru trekking permits using PHP and a MySQL database on XAMPP, enabling users to register and book tickets easily, along with an admin section to create and manage detailed trekking route information.",
      image: "/images/project/gunung semeru.png",
      technologies: ["PHP", "MySQL", "XAMPP"],
      demoLink:
        "https://drive.google.com/drive/folders/1ErDfOV_c0m2cZsdOmHAAMm72fp0Wr5yr",
    },
    {
      title: "HealthyDash",
      description:
        "I built HealthyDash as a solo project to simplify healthy meal ordering and boost online visibility for health businesses through a user-friendly design.",
      image: "/images/project/HealthyDash HomePage.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://dinasiagian.github.io/healthydash/index.html",
    },
    {
      title: "Aroma Kopi Di Sudut Kota",
      description:
        "A user-friendly landing page for online coffee ordering. This solo project empowers coffee shops to boost efficiency and sales.",
      image: "/images/project/Home.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://dinasiagian.github.io/aroma-kopi-di-sudut-kota//",
    },
    {
      title: "agiantravel",
      description:
        "I built AgianTravel as a solo project for a client to promote tourism in Bintan. This interactive website simplifies travel ticket bookings and supports local drivers by enhancing business visibility and operational efficiency.",
      image: "/images/project/agiantravel.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://dinasiagian.github.io/agiantravel/",
    },
    {
      title: "StudyBuddyku",
      description:
        "A solo project developing an intelligent study planner that helps students stay focused and organized through smart scheduling, task prioritization, and the Pomodoro Technique.",
      image: "/images/project/StudyBuddyku.png",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      demoLink: "https://pomodoro-planner-two.vercel.app/",
    },
    {
      title: "Rumah Kreatif Toba",
      description:
        "Solo UI redesign of the Rumah Kreatif Toba website in Figma, aimed at enhancing functionality.",
      image: "/images/project/makanan.png",
      technologies: ["Figma"],
      demoLink:
        "https://www.figma.com/proto/KQP1cPiqJtHEHBqnupjhNT/12S23009_UI-UX-Rumah-Kreatif-Toba?node-id=0-1",
    },
    {
      title: "Koperasi Bintang Tapanuli",
      description:
        "A team project where I designed the UI for Koperasi Bintang Tapanuli, aiming to support local business development.",
      image: "/images/project/6.png",
      technologies: ["Figma"],
      demoLink:
        "https://www.figma.com/proto/LWG0ES9Kb88htkZf4FcopK/Pemesanan-Tiket-Bus-Online--Community-?node-id=18-616&p=f&t=eZZZnXB3xMm8w0aV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A616&show-proto-sidebar=1",
    },
    {
      title: "Go Meat",
      description:
        "I contributed my UI design skills to the Go Meat team project, aiming to introduce Meat Village's stunning, yet hidden, natural beauty to a broader audience.",
      image: "/images/project/10.png",
      technologies: ["Figma"],
      demoLink:
        "https://www.figma.com/proto/R4MBlZ9y6jlmICWv0ivcmD/19_GoMeat?node-id=208-2526&t=yWhxv6jPGoWHJc88-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=208%3A2526",
    },
  ];

  // Efek untuk merefresh ScrollTrigger setelah render awal atau saat layout berubah
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.refresh();
        console.log("ScrollTrigger refreshed from Home page!");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Kontainer utama dengan latar belakang gelap dan partikel
    <div className="overflow-x-hidden bg-[#0a0a0a] relative">
      {/* Efek kursor percikan */}
      <SplashCursor />
      {/* Background Particles - Pastikan menutupi seluruh viewport dan tidak scroll */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <Particles
          particleColors={["#96d2d9"]} // Partikel hanya warna ini (biru/cyan terang)
          particleCount={2000}
          particleSpread={6}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={10}
        />
      </div>
      {/* CircularText - tetap di pojok kanan atas, z-index tinggi */}
      <CircularText
        text="BUILD*GROW*LEARN*"
        onHover="speedUp"
        spinDuration={20}
        className="text-white w-24 h-24 text-[10px] font-bold z-50"
        style={{
          position: "fixed",
          top: "32px",
          right: "32px",
          left: "auto",
        }}
      />
      {/* Section Pertama: Home Screen (Intro & Lanyard) - Tidak di-ScrollFloat agar selalu terlihat */}
      {/* TAMBAHAN: id="home" */}
      <div
        id="home"
        className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-4 z-10 relative"
      >
        {/* Kolom Kiri: Konten Teks */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-16 md:py-0">
          {/* Driven by a passion for ... (Rotating Text) */}
          <Ribbons
            className="flex items-center gap-2 mb-6"
            baseThickness={30}
            colors={["#ffffff"]}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={true}
          >
            <h1 className="text-2xl text-white font-bold">
              Driven by a passion for
            </h1>
            <RotatingText
              texts={["UI/UX Designer", "Data Analyst", "Web Development"]}
              className="px-2 sm:px-2 md:px-3 bg-[#96d2d9] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
              staggerFrom={"last"}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </Ribbons>

          <SplitText
            text="Hi, I'm Dina Marlina Siagian"
            className="text-4xl font-semibold text-white text-left mt-4"
            delay={75}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
          <SplitText
            text="Frontend Developer"
            className="text-4xl font-semibold text-[#96d2d9] text-left mt-2"
            delay={150}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
          <BlurText
            text="I'm a 5th-semester Information Systems student at the Del Institute of Technology with a strong passion for web developer design, and data analysis. I enjoy turning ideas into intuitive digital experiences and am currently deepening my knowledge in designing user-centered websites and interfaces."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-lg text-gray-300 text-left mt-4 leading-relaxed"
          />

          {/* Tombol Contact Me dan Download CV */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/dina-marlina-siagian"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 rounded-lg border border-white inline-block cursor-pointer text-lg font-medium
                         text-white bg-transparent transition-colors duration-300
                         hover:text-[#0a0a0a] hover:bg-[#96d2d9] hover:border-[#96d2d9]"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1hc_lvRKXRHmJCE1w3CpQk1TnNb_rl9Xy/view?usp=sharing"
              download
              className="px-10 py-3 rounded-lg border border-white inline-block cursor-pointer text-lg font-medium
                         text-white bg-transparent transition-colors duration-300
                         hover:text-[#0a0a0a] hover:bg-[#96d2d9] hover:border-[#96d2d9]"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 min-h-[400px]">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>
      </div>
      <div className="w-full bg-[#0a0a0a] py-12 px-4 z-10">
        <FlowingMenu items={demoItems} />
      </div>
      {/* Section Timeline (My Certificates) */}
      {/* TAMBAHAN: id="certificates" */}
      <div id="certificates">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top center"
          scrollEnd="bottom top"
          stagger={0.05}
        >
          <div className="w-full bg-black/80 py-12 px-4 z-10">
            <Timeline data={data} />
          </div>
        </ScrollFloat>
      </div>
      {/* NEW Section: Language & Framework */}
      {/* TAMBAHAN: id="technologies" */}
      <div id="technologies">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top center"
          scrollEnd="bottom top"
          stagger={0.05}
        >
          <section className="w-full bg-black/80 py-16 px-4 z-10">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-semibold text-white mb-4">
                Languages & Frameworks
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                My versatile toolkit includes these languages, frameworks, and
                tools that empower me to build robust and engaging digital
                solutions.
              </p>

              {/* Grid dengan justify-items-center untuk center semua card */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors duration-300 transform hover:scale-105 w-full h-full min-h-[150px]"
                  >
                    {/* Container icon dengan ukuran tetap */}
                    <div className="w-16 h-16 flex items-center justify-center mb-4 flex-shrink-0">
                      {tech.icon ? (
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={64}
                          height={64}
                          className="object-contain w-full h-full"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center bg-[#96d2d9] rounded-full">
                          <span className="text-black text-xl font-bold">
                            {tech.name.substring(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text dengan alignment center dan ukuran konsisten */}
                    <p className="text-white text-base font-medium text-center leading-tight">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFloat>
      </div>
      {/* Section Title & Description for Projects/CircularGallery */}
      {/* TAMBAHAN: id="projects" */}
      <div id="projects">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top center"
          scrollEnd="bottom top"
          stagger={0.03}
        >
          <div className="w-full bg-black/80 py-12 px-4 text-center z-10">
            <h2 className="text-4xl font-semibold text-white mb-4">Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore a selection of my recent projects, showcasing my expertise
              in delivering innovative and engaging digital experiences.
            </p>
          </div>
        </ScrollFloat>
        {/* Section Featured Projects */}
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top center"
          scrollEnd="bottom top"
          stagger={0.1}
        >
          <section className="w-full bg-black/80 py-12 px-4 z-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://github.com/DinaSiagian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-[#96d2d9] text-black font-semibold hover:bg-[#72b1b8] transition-colors duration-300"
                >
                  Check My Github <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
          </section>
        </ScrollFloat>
        {/* Section CircularGallery */}
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top center"
          scrollEnd="bottom top"
          stagger={0.03}
        >
          <div
            style={{ height: "600px", position: "relative", zIndex: 10 }}
            className="py-12 bg-black/80"
          >
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </ScrollFloat>
      </div>
      <Footer />
      {/* Komponen Music Player */}
      {/* Sesuaikan `src` dengan jalur file musik Anda di folder `public/music` */}
      {/* Sesuaikan `volume` (0.0-1.0) sesuai keinginan */}
      <MusicPlayer src="/music/music.mp4" loop={true} volume={0.1} />
    </div>
  );
}
