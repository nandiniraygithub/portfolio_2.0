"use client";

import { motion } from "framer-motion";
import React from "react";

export function Marqueue() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-[#004d43] py-20">

      <div className="border-t border-b border-[#3c6b63] flex whitespace-nowrap overflow-hidden">

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[30vw] md:text-[24vw] leading-none font-founders font-bold uppercase pr-20"
        >
          Nandini Ray
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[30vw] md:text-[24vw] leading-none font-founders font-bold uppercase pr-20"
        >
          Nandini Ray
        </motion.h1>

      </div>
    </div>
  );
}