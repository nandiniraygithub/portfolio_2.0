"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "नमस्ते", // Hindi
    "Hello", // English
    "Welcome",
    "To My",
    "Portfolio",
    "Creative",
    "Developer",
    "Nandini Ray",
  ];

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  return (
    <motion.div
      initial={{ top: 0 }}
      exit={{ 
        top: "-100vh", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed z-[9999] top-0 left-0 w-screen h-screen bg-[#1c1c1c] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-white text-[6vw] sm:text-[4vw] font-founders uppercase flex items-center gap-4"
        >
          <span className="w-3 h-3 bg-white rounded-full"></span>
          {words[index]}
        </motion.p>
        
        {/* Curvy background effect on exit */}
        <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-[#1c1c1c] -z-10">
            <path d="M0 0 L100 0 L100 100 Q50 100 0 100 L0 0" />
        </svg>
      </div>
    </motion.div>
  );
};

export default Preloader;
