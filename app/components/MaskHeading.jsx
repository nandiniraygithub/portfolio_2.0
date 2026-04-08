"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function MaskHeading() {
  const maskRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;
    const text = textRef.current;

    let currentSize = 60;

    const handleMove = (e) => {
      gsap.to(mask, {
        "--x": `${e.clientX}px`,
        "--y": `${e.clientY}px`,
        "--size": `${currentSize}px`,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleEnter = () => {
      currentSize = 200;
    };

    const handleLeave = () => {
      currentSize = 60;
    };

    document.addEventListener("mousemove", handleMove);
    text.addEventListener("mouseenter", handleEnter);
    text.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      text.removeEventListener("mouseenter", handleEnter);
      text.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full">
      
      {/* ORIGINAL TEXT */}
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight sm:leading-[4vw] max-w-5xl text-white/40"
      >
        I am a creative developer passionate about building bespoke digital experiences that merge high-end design with cutting-edge technology.
      </motion.h1>

      {/* MASK LAYER */}
      <div
        ref={maskRef}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{
          background: "#DDFC3E",
          WebkitMaskImage: `radial-gradient(circle var(--size, 60px) at var(--x, -100px) var(--y, -100px), black 100%, transparent 100%)`,
          maskImage: `radial-gradient(circle var(--size, 60px) at var(--x, -100px) var(--y, -100px), black 100%, transparent 100%)`,
        }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight sm:leading-[4vw] max-w-5xl text-black">
          I am a creative developer passionate about building bespoke digital experiences that merge high-end design with cutting-edge technology.
        </h1>
      </div>
    </div>
  );
}
