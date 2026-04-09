"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Navbar } from "./components/navbar";
import { LandingPage } from "./components/Landingpage";
import { Marqueue } from "./components/Marqeue";
import { About } from "./components/about";
import { Eyes } from "./components/Eye";
import { Featured } from "./components/Featured";
import { Journey } from "./components/Journey";
import { Footer } from "./components/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Handle preloader + scrollY
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2800);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animations for sections
  useEffect(() => {
    if (isLoading) return;

    // Refresh and kill old triggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    const sections = gsap.utils.toArray<HTMLElement>(".stack-section");

    // All sections have a smooth entrance
    sections.forEach((section, i) => {
      if (i > 0) {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Ochi-style Stacking Effect for multiple pairs
    const pinningTargets = gsap.utils.toArray<HTMLElement>(".pin-target");
    pinningTargets.forEach((target, i) => {
      ScrollTrigger.create({
        trigger: target,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: "bottom top",
      });

      // Specifically for the Eyes hiding effect (second pair)
      if (i === 1) {
        gsap.to(target, {
          scale: 0.8,
          opacity: 0.5,
          scrollTrigger: {
            trigger: ".cover-target", // This triggers when Featured starts arriving
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      }
    });


    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoading]);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden selection:bg-[#ceea69] selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative">
          {typeof window !== 'undefined' && 
    window.innerWidth > 768 && 
    'ontouchstart' in window === false && 
    navigator.maxTouchPoints === 0 && 
    <CustomCursor />}
          <Navbar />

          <main id="main-content" className="relative">
            <div className="stack-section relative z-10"><LandingPage /></div>
            <div className="stack-section pin-target relative z-0 "><Marqueue /></div>
            <div className="stack-section cover-target relative z-20 "><About /></div>
            <div className="stack-section pin-target relative z-0"><Eyes /></div>
            <div className="stack-section relative z-50 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]"><Featured /></div>
            <div className="stack-section relative z-50 bg-zinc-900"><Journey /></div>
            <div className="stack-section relative z-50 bg-[#f1f1f1]"><Footer /></div>
          </main>

          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 h-1 bg-[#ceea69] z-[100] origin-left"
            style={{ scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight) }}
            initial={{ scaleX: 0 }}
          />

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: scrollY > 500 ? 1 : 0, scale: scrollY > 500 ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#ceea69] text-black rounded-full flex items-center justify-center shadow-lg z-[100]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
}