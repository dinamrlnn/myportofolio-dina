"use client";

import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import SplitText from "./components/SplitText/SplitText";
import Ribbons from "./components/Ribbons/Ribbons";
import Particles from "./components/Particles/Particles";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import CircularText from "./components/CircularText/CircularText";
import GradientText from "./components/GradientText/GradientText";
import FlowingMenu from "./components/FlowingMenu/FlowingMenu";
import { Timeline } from "./components/Timeline/Timeline";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import Footer from "./components/Footer/Footer";
export default function Home() {
  const data = [
    {
      title: "2025 - Data Visualization",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certification solidifies my expertise in{" "}
            <strong>
              transforming complex data into clear, impactful visual stories
            </strong>
            , enabling better insights and decision-making.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
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
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate demonstrates my proficiency in{" "}
            <strong>
              building dynamic and responsive user interfaces using React
            </strong>
            , focusing on modern web development practices.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
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
      title: "2025 - Responsive Website Design",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            With this certification, I've honed my skills in{" "}
            <strong>
              creating websites that seamlessly adapt to any screen size
            </strong>
            , ensuring an optimal user experience across devices.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src="/images/certificate/Certificate of Course Completion - Responsive Website Design-1.png"
                alt="Responsive Website Design Certificate"
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
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate signifies my strong foundation in{" "}
            <strong>Python programming</strong>, essential for data analysis,
            web development, and automation tasks.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
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
      title: "2025 - Introduction to Programming",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            A fundamental certification establishing my core understanding of{" "}
            <strong>programming concepts and logic</strong>, crucial for any
            development path.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
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
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This certificate highlights my ability to conduct{" "}
            <strong>effective UX research</strong>, gathering insights to create
            user-centric designs.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
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
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            My engagement and achievement in the{" "}
            <strong>Del English Club</strong> reflect my commitment to enhancing
            communication and language skills.
          </p>
          <div className="flex justify-center items-center">
            <div className="aspect-[4/3] w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
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

  return (
    // Removed `min-h-screen` from here to let content define height
    // and let the footer naturally sit at the bottom of the content.
    <div className="overflow-x-hidden bg-[#0a0a0a] relative">
      <SplashCursor />
      {/* Background Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <Particles
          particleColors={["#ffffff", "#96d2d9"]}
          particleCount={1000} // Jauh lebih banyak partikel!
          particleSpread={10} // Sedikit lebih tersebar untuk kepadatan
          speed={0.1}
          particleBaseSize={250} // Ukuran partikel lebih besar lagi
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* CircularText (tetap di pojok kanan atas) */}
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
      {/* Main Content Container (Section Pertama - Home Screen) */}
      {/* Using `min-h-screen` for the first section to ensure it always takes full height */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-4 z-10">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Driven by a passion for ... */}
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

          {/* Nama */}
          <SplitText
            text="Hi, I'm Dina Marlina Siagian"
            className="text-4xl font-semibold text-white text-left"
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
          {/* Frontend Developer */}
          <SplitText
            text="Frontend Developer"
            className="text-4xl font-semibold text-[#96d2d9] text-left"
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
          {/* Deskripsi */}
          <BlurText
            text="I’m a 5th-semester Information Systems student at the Del Institute of Technology with a strong passion for website design, UI/UX, data analysis, and software engineering. I enjoy turning ideas into intuitive digital experiences and am currently deepening my knowledge in designing user-centered websites and interfaces."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-lg text-white text-left mt-4"
          />

          {/* Tombol Hubungi Saya */}
          <a
            href="https://www.linkedin.com/in/dina-marlina-siagian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientText
              colors={["#40ffaa", "#96d2d9", "#40ffaa", "#96d2d9", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="mt-10 px-10 py-3 rounded-lg border border-white inline-block cursor-pointer"
            >
              Contact Me
            </GradientText>
          </a>
        </div>{" "}
        {/* TUTUP Left Column */}
        {/* Right Column: Lanyard */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>
      </div>{" "}
      {/* END Main Content Container */}
      {/* FlowingMenu sebagai pembatas section kedua */}
      {/* MENGURANGI JARAK: py-20 diubah menjadi py-12 */}
      <div className="w-full bg-[#0a0a0a] py-12 px-4">
        {" "}
        {/* <-- PERUBAHAN DI SINI */}
        <FlowingMenu items={demoItems} />
      </div>
      {/* Anda bisa menambahkan section kedua di sini */}
      <div className="w-full bg-[#0a0a0a] py-12 px-4">
        <Timeline data={data} />
      </div>
      {/* New Section for CircularGallery Title and Description */}
      <div className="w-full bg-[#0a0a0a] py-12 px-4 text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">Projects</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore a selection of my recent projects, showcasing my expertise in
          delivering innovative and engaging digital experiences.
        </p>
      </div>
      {/* RE-ADDING fixed height to this div to make the CircularGallery large again */}
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}
