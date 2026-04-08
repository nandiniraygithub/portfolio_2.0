"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DitherShader } from "@/components/ui/dither-shader";

export function LandingPage() {
  return (
    <div
      id="home"
      data-scroll
      data-scroll-speed="-0.3"
      className="w-full min-h-screen bg-zinc-900 pt-1 overflow-hidden"
    >
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row min-h-screen px-3 sm:px-6 md:px-12 lg:px-20 relative">
        
        {/* LEFT SIDE - HERO TEXT */}
        <div className="  flex-1 textstructure mt-16 sm:mt-20 md:mt-32 lg:mt-44 xl:mt-52 order-2 lg:order-1">
          {["I design.", "I build.", "I bring ideas to life"].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="  masker overflow-hidden mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                >
                  <div className="w-fit flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    
                    {/* RED BLOCK */}
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "9vw" }}
                        transition={{
                          ease: [0.76, 0, 0.24, 1],
                          duration: 1,
                          delay: 0.1,
                        }}
                        className="w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[9vw] 
                                   h-[12vw] sm:h-[10vw] md:h-[8vw] lg:h-[6vw] 
                                   bg-red-500 rounded-md relative 
                                   top-[2vw] sm:top-[1.5vw] md:top-[1vw] lg:top-[0.6vw]"
                      />
                    )}

                    {/* TEXT */}
                    <motion.h1
  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
  transition={{
    ease: [0.76, 0, 0.24, 1],
    duration: 1,
    delay: index * 0.15,
  }}
  className="uppercase 
             text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]
             font-founders leading-[1.1]
             font-bold text-white tracking-wide"
>
  {item}
</motion.h1>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex-1 flex items-center justify-start lg:justify-end mt-8 sm:mt-12 lg:mt-0 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8"
          >
            {/* IMAGE BOX */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 
                            w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] 
                            lg:w-[600px] lg:h-[300px] flex items-center justify-center">
              
              <DitherShader
                src="/project_image/profile.png"
                gridSize={1}
                ditherMode="bayer"
                colorMode="grayscale"
                invert={false}
                animated={false}
                animationSpeed={0.02}
                primaryColor="#000000"
                secondaryColor="#f5f5f5"
                threshold={0.2}
                className="w-full h-full object-cover"
              />
            </div
            >
          </motion.div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-zinc-800 mt-8 sm:mt-12 md:mt-16 lg:mt-20"></div>

      {/* BOTTOM SECTION */}
      <div className="mt-4 sm:mt-6 font-neue flex flex-col md:flex-row justify-between items-start md:items-center py-4 sm:py-5 px-3 sm:px-6 md:px-12 lg:px-20 gap-4 sm:gap-6 md:gap-0">
        
        {/* TEXT */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-20 w-full md:w-auto">
          {[
            "Full Stack Developer specializing in MERN",
            "Building scalable and user-focused web applications",
          ].map((item, index) => (
            <p
              key={index}
              className="text-xs sm:text-sm md:text-lg font-light tracking-tight text-zinc-300 leading-relaxed"
            >
              {item}
            </p>
          ))}
        </div>

        {/* BUTTON */}
        <div className="start flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end">
          <a 
            href="https://www.linkedin.com/in/nandini-ray16/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end"
          >
            <motion.button
              whileHover={{ backgroundColor: "white", color: "black" }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 border-[2px] rounded-full border-zinc-500 
                         font-light text-xs sm:text-sm uppercase transition-colors"
            >
              Let's Connect
            </motion.button>

            <motion.div
              whileHover={{ backgroundColor: "white", color: "black" }}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center 
                         rounded-full border border-zinc-500 transition-colors cursor-pointer"
            >
              <span className="rotate-[300deg]">
                <ArrowRight size={16} />
              </span>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
}
