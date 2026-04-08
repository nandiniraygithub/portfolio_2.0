"use client";
import React from "react";
import { motion } from "framer-motion";
import TechIcon from "tech-stack-icons";
import MaskHeading from "./MaskHeading";
const StackIcon = TechIcon;

export function About() {
  const techStack = [
    "reactjs", "nextjs", "redux", "mongodb", "postgresql", "nodejs", "js",
    "stripe", "python", "django", "redis", "claude", "tailwindcss", "anthropic"
  ];

  return (
    <div id="about" className="w-full rounded-tr-3xl rounded-tl-3xl py-20 sm:py-32 px-5 sm:px-10 bg-[#ceea69] overflow-hidden text-black font-neue">

      {/* Top Heading */}
      <MaskHeading />

      {/* Full width border */}
      <div className="mt-20 border-t border-[#99ae54] -mx-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row mt-10 gap-10">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-10">
          <div>
            <h1 className="text-5xl sm:text-7xl font-semibold mb-8 uppercase">Tech stack</h1>
            <p className="text-xl max-w-md opacity-80 leading-relaxed">
            I have a strong grasp of frontend development using React, Redux, and modern JavaScript. I also have a basic understanding of backend technologies like Node.js, Express, SQL, Next.js, and Prisma. Additionally, I stay updated with the fast-growing AI landscape and understand how modern AI technologies and workflows operate.
            </p>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-6 px-10 py-5 bg-zinc-900 mt-20 md:mt-0 rounded-full text-white uppercase group w-fit"
          >
            Read More
            <div className="w-3 h-3 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
          </motion.button> */}
        </div>

        {/* RIGHT SIDE - THE WHOLE TECH SLIDER */}
        <div className="w-full  h-[50vh] sm:h-[70vh] flex items-center justify-center overflow-hidden   ">
          <div className="flex flex-col gap-8 w-full">

            {/* Row 1: Moving Left */}
            <div className="flex gap-8 whitespace-nowrap overflow-hidden py-4">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 flex-shrink-0"
              >
                {[...techStack, ...techStack].map((name, i) => (
                  <div key={i} className="w-20 h-20 sm:w-28 sm:h-28  flex items-center justify-center p-5  hover:scale-110 transition-transform cursor-pointer group">
                    <StackIcon name={name} className="w-full h-full group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Moving Right */}
            <div className="flex gap-8 whitespace-nowrap overflow-hidden py-4">
              <motion.div
                initial={{ x: "-50%" }}
                animate={{ x: 0 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 flex-shrink-0"
              >
                {[...techStack, ...techStack].map((name, i) => (
                  <div key={i} className="w-20 h-20 sm:w-28 sm:h-28  flex items-center justify-center p-5  hover:scale-110 transition-transform cursor-pointer group">
                    <StackIcon name={name} className="w-full h-full group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 3: Moving Left (Slightly faster for variation) */}
            <div className="flex gap-8 whitespace-nowrap overflow-hidden py-4 hidden sm:flex">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 flex-shrink-0"
              >
                {[...techStack, ...techStack].map((name, i) => (
                  <div key={i} className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center p-5 hover:scale-110 transition-transform cursor-pointer group">
                    <StackIcon name={name} className="w-full h-full  group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}