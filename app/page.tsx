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
  // Data untuk Timeline
  const data = [
    {
      title: "2025 - C Programming Bootcamp",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates a solid foundation in{" "}
            <strong>C Programming</strong>, covering fundamental concepts and
            practical application.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/C Programming Bootcamp.png"
                alt="C Programming Bootcamp Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Cross Platform Application Development",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification validates my ability to develop{" "}
            <strong>cross-platform applications</strong>, essential for reaching
            diverse user bases.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Cross Platform Application Development.png"
                alt="Cross Platform Application Development Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Introduction Data Science With R",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification highlights my foundational understanding of{" "}
            <strong>Data Science concepts using R</strong>, crucial for data
            analysis and statistical modeling.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Introduction Data Science With R.png"
                alt="Introduction Data Science With R Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Introduction to Software Engineer",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate establishes my understanding of{" "}
            <strong>software engineering principles</strong>, from design to
            deployment.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Introduction to Software Engineer.png"
                alt="Introduction to Software Engineer Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Self-Paced Azure AI Basic Fundamental",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification showcases my understanding of{" "}
            <strong>Azure AI fundamentals</strong>, including machine learning
            and cognitive services.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Self-Paced Azure AI Basic Fundamental.png"
                alt="Self-Paced Azure AI Basic Fundamental Certificate"
                className="h-full w-full object-contain"
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
            <strong>back-end web development</strong>, focusing on server-side
            logic, databases, and APIs.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Dina Marlina Siagian - E-Certif SC Website Development_ Back End.png"
                alt="Website Development - Back End Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Data Visualization",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification solidifies my expertise in{" "}
            <strong>
              transforming complex data into clear, impactful visual stories
            </strong>
            , enabling better insights and decision-making.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Certificate - Data Visualization.png"
                alt="Data Visualization Certificate"
                className="h-full w-full object-contain"
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
            This certificate demonstrates my proficiency in{" "}
            <strong>
              building dynamic and responsive user interfaces using React
            </strong>
            , focusing on modern web development practices.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Certificate - React Front End-1.png"
                alt="React Front End Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Python Programming",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate signifies my strong foundation in{" "}
            <strong>Python programming</strong>, essential for data analysis,
            web development, and automation tasks.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Dina Marlina Siagian - Python.png"
                alt="Python Programming Certificate"
                className="h-full w-full object-contain"
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
            With this certification, I've honed my skills in{" "}
            <strong>
              creating websites that seamlessly adapt to any screen size
            </strong>
            , ensuring an optimal user experience across devices.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Certificate of Course Completion - Responsive Website.png"
                alt="Responsive Website Design Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Web Development: Front End",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification demonstrates my proficiency in{" "}
            <strong>front-end web development</strong>, focusing on user
            interfaces and experiences.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Certificate Website Development_ Front End-1.png"
                alt="Web Development: Front End Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Introduction to Programming",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            A fundamental certification establishing my core understanding of{" "}
            <strong>programming concepts and logic</strong>, crucial for any
            development path.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Dina Marlina Siagian - Intro to Programming.png"
                alt="Introduction to Programming Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Introduction to UX Research",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate highlights my ability to conduct{" "}
            <strong>effective UX research</strong>, gathering insights to create
            user-centric designs.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Dina Marlina Siagian - E-Certif SC Introduction to UX Research MySkill-1.png"
                alt="Introduction to UX Research Certificate"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023/2024 - Del English Club",
      content: (
        <div className="max-w-[400px] mx-auto p-4">
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            My engagement and achievement in the{" "}
            <strong>Del English Club</strong> reflect my commitment to enhancing
            communication and language skills.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Del English Club.png"
                alt="Del English Club Certificate"
                className="h-full w-full object-contain"
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
    { name: "JavaScript", icon: "/images/tech/java.png" },
    { name: "React", icon: "/images/tech/react.png" },
    { name: "Next.js", icon: "/images/tech/nextjs.png" },
    { name: "Tailwind CSS", icon: "/images/tech/tailwind.png" },
    { name: "Figma", icon: "/images/tech/figma.png" },
    { name: "Python", icon: "/images/tech/python.png" },
    { name: "SQL", icon: "/images/tech/sql.png" },
    { name: "C", icon: "/images/tech/c.png" },
  ];

  // Data untuk Featured Projects
  const featuredProjects = [
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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-4 z-10 relative">
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
            text="I’m a 5th-semester Information Systems student at the Del Institute of Technology with a strong passion for website design, UI/UX, data analysis, and software engineering. I enjoy turning ideas into intuitive digital experiences and am currently deepening my knowledge in designing user-centered websites and interfaces."
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
              href="https://drive.google.com/file/d/12hQFgMZ0Q2YuYo0yvfAOow53WgGfINm4/view?usp=sharing" // Pastikan path file CV Anda benar (misal: public/Dina_Marlina_Siagian_CV.pdf)
              download // Menambahkan atribut download untuk memaksa download
              className="px-10 py-3 rounded-lg border border-white inline-block cursor-pointer text-lg font-medium
                         text-white bg-transparent transition-colors duration-300
                         hover:text-[#0a0a0a] hover:bg-[#96d2d9] hover:border-[#96d2d9]"
            >
              Download CV
            </a>
          </div>
        </div>{" "}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 min-h-[400px]">
          {" "}
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>
      </div>{" "}
      <div className="w-full bg-[#0a0a0a] py-12 px-4 z-10">
        <FlowingMenu items={demoItems} />
      </div>
      {/* Section Timeline (My Certificates) */}
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
      {/* NEW Section: Language & Framework */}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors duration-300 transform hover:scale-105"
                >
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mb-3 object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-[#96d2d9] rounded-full mb-3">
                      <span className="text-black text-xl font-bold">
                        {tech.name.substring(0, 2)}{" "}
                      </span>
                    </div>
                  )}
                  <p className="text-white text-lg font-medium text-center">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFloat>
      {/* Section Title & Description for Projects/CircularGallery */}
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
      <Footer />
      {/* Komponen Music Player */}
      {/* Sesuaikan `src` dengan jalur file musik Anda di folder `public/music` */}
      {/* Sesuaikan `volume` (0.0-1.0) sesuai keinginan */}
      <MusicPlayer src="/music/music.mp4" loop={true} volume={0.1} />
    </div>
  );
}
