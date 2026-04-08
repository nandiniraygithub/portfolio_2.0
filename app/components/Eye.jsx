"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Eyes() {
  const [emotion, setEmotion] = useState("normal"); // normal, happy, sad
  const [isBlinking, setIsBlinking] = useState(false);
  const containerRef = useRef(null);

  // Eye Tracking Logic
  useEffect(() => {
    const balls = document.getElementsByClassName("ball");
    const handleMouseMove = (event) => {
      const x = (event.clientX * 100) / window.innerWidth;
      const y = (event.clientY * 100) / window.innerHeight;

      // Sad check: if cursor is too far from center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dist = Math.sqrt(Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2));

      if (dist > 500 && emotion !== "happy") {
        setEmotion("sad");
      } else if (emotion !== "happy") {
        setEmotion("normal");
      }

      for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x + "%";
        balls[i].style.top = y + "%";
        balls[i].style.transform = `translate(-${x}%, -${y}%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [emotion]);

  // Random Blinking Logic
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  const eyeVariants = {
    normal: { scaleY: 1, borderRadius: "100%" },
    happy: { scaleY: 0.6, borderRadius: "50% 50% 10% 10%", rotate: 0 },
    sad: { scaleY: 0.8, borderRadius: "40% 40% 50% 50%" },
    blink: { scaleY: 0 }
  };

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">

      {/* Decorative Spots */}
      <div className="absolute top-10 right-20 w-[10vw] h-[10vw] bg-[#ceea69] rounded-full hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-[15vw] h-[15vw] bg-[#ceea69] rounded-full hidden md:block"></div>

      <div className="flex gap-10 relative">

        {/* LEFT EYE */}
        <motion.div
          animate={isBlinking ? "blink" : emotion}
          variants={eyeVariants}
          transition={{ duration: 0.1 }}
          className="relative w-[35vw] h-[35vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border-4 border-black/5"
        >
          <div className="ball absolute w-[20vw] h-[20vw] md:w-[8.5vw] md:h-[8.5vw] bg-zinc-900 rounded-full flex items-center justify-center">
            <p className="text-white text-[1.5vw] font-bold uppercase pointer-events-none select-none">
              {emotion === "happy" ? "^_^" : "Play"}
            </p>
            <div className="w-1.5 h-1.5 md:w-3 md:h-3 bg-white rounded-full absolute top-2 left-3 opacity-80"></div>

            {/* Tears in sad mode */}
            {emotion === "sad" && (
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 50, opacity: 1 }}
                className="absolute top-full w-4 h-10 bg-blue-400/50 rounded-full blur-sm"
              />
            )}
          </div>
        </motion.div>

        {/* RIGHT EYE */}
        <motion.div
          animate={isBlinking ? "blink" : emotion}
          variants={eyeVariants}
          transition={{ duration: 0.1 }}
          className="relative w-[35vw] h-[35vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border-4 border-black/5"
        >
          <div className="ball absolute w-[20vw] h-[20vw] md:w-[8.5vw] md:h-[8.5vw] bg-zinc-900 rounded-full flex items-center justify-center">
            <p className="text-white text-[1.5vw] font-bold uppercase pointer-events-none select-none">
              {emotion === "happy" ? "^_^" : "Play"}
            </p>
            <div className="w-1.5 h-1.5 md:w-3 md:h-3 bg-white rounded-full absolute top-2 left-3 opacity-80"></div>
          </div>
        </motion.div>

        {/* Heart pop-up for happy state */}
        <AnimatePresence>
          {emotion === "happy" && (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 0 }}
              animate={{ scale: 1.5, opacity: 1, y: -100 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 text-6xl pointer-events-none z-50"
            >
              ❤️
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     <motion.button
  onClick={() => {
    setEmotion("happy");
    setTimeout(() => setEmotion("normal"), 3000);

    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=nandini16ray@gmail.com&cc=&su=Hiring%20Opportunity&body=Hi%20Nandini,%0A%0AMy%20name%20is%20[Your%20Name].%20I%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity.",
      "_blank"
    );
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 px-10 py-5 bg-[#ceea69] text-black font-bold rounded-full uppercase tracking-tighter hover:bg-white transition-colors shadow-2xl z-20"
>
  Hire Me
</motion.button>
    </div>
  );
}