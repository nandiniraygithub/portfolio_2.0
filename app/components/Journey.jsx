"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useAnimation, useInView } from "framer-motion";

const chapters = [
  {
    id: 1,
    // emoji: "🎒",
    title: "Academic Foundation",
    year: "2023 - 2025",
    desc: "Built a strong foundation in computer science during my BCA, focusing on core concepts like programming, problem-solving, and web development fundamentals. This phase shaped my curiosity for creating real-world applications.",
    img: "/linkedin/academic.png"
  },
  {
    id: 2,
    // emoji: "✨",
    title: "Self-Learning & Projects",
    year: "2024 - 2025",
    desc: "Explored frontend and backend technologies through self-learning. Developed multiple projects using HTML, CSS, JavaScript, React, and Node.js, turning theoretical knowledge into practical skills.",
    img: "/linkedin/project.png"
  },
  {
    id: 3,
    // emoji: "⚡",
    title: "Internship Experience",
    year: "2025-2026",
    desc: "Worked as a Frontend Developer Intern at Aaizel Tech, contributing to a Government of India project under MeitY. Built and optimized dashboard interfaces and landing pages, handled large datasets with efficient rendering techniques like pagination and infinite scrolling, and collaborated with backend teams for seamless API integration while ensuring performance and responsiveness.",
    img: "/linkedin/internship.png"
  },
 
];

export function Journey() {
  const containerRef = useRef(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [color, setColor] = useState("rgb(206, 234, 105)");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div id="journey" ref={containerRef} className="w-full min-h-screen text-white py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">

      <div className="max-w-6xl md:max-w-7xl mx-auto relative">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] font-bold uppercase tracking-tighter leading-none mb-8 sm:mb-10 md:mb-12 lg:mb-16 border-b border-zinc-300 pb-6 sm:pb-8 md:pb-10 lg:pb-12"
        >
          Journey
        </motion.h1>


        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 lg:gap-40 relative">
          {/* Vertical Progress Line */}
          <div 
            className="absolute left-1/2 top-16 sm:top-20 bottom-0 w-[1px] -translate-x-1/2 hidden sm:block transition-colors duration-1000 ease-in-out" 
            style={{ backgroundColor: color }}
          />

          {chapters.map((chapter, index) => (
            <Chapter key={index} chapter={chapter} index={index} timelineColor={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Chapter({ chapter, index, timelineColor }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20 relative`}
    >
      {/* Content Card */}
      <div className="w-full lg:w-1/2 px-4 sm:px-6">
        <motion.div
          style={{ opacity, y }}
          className={`bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/20 transition-all duration-300 ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-xs sm:text-sm md:text-base font-bold text-[#004d43] mb-3 sm:mb-4 md:mb-5 block uppercase tracking-widest">{chapter.year}</span>
          <h2 className="tracking-widest  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-7 lg:mb-9 tracking-tighter font-neue leading-tight text-white">
            {chapter.emoji} {chapter.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 font-medium leading-relaxed lg:leading-loose font-neue mt-3 sm:mt-4 md:mt-5">
            {chapter.desc}
          </p>
        </motion.div>
      </div>

      {/* Timeline Circle */}
      <div className="hidden lg:flex w-10 justify-center absolute left-1/2 -translate-x-1/2">
        <div 
          className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: timelineColor }}
        />
      </div>

      {/* Image Container - Fixed boundary */}
      <div className="w-full lg:w-1/2 px-4 sm:px-6">
        <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl group shadow-xl bg-zinc-200 cursor-pointer">
          <motion.div
            style={{ y, opacity }}
            className="w-full h-full"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={chapter.img}
              alt={chapter.title}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0"
            />
            
            {/* Image Overlay - Hidden on mobile */}
            <div className="hidden sm:block">
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4 md:p-6 lg:p-8"
                  >
                    <div className="text-white">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-3">{chapter.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base opacity-80 line-clamp-2 md:line-clamp-3 leading-relaxed">{chapter.desc}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}