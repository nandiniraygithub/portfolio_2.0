"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Main cursor follows mouse exactly
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Follower has slight delay for smooth effect
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3, ease: "power2.out" });
      gsap.to(follower, { scale: 2, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(follower, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    // Add event listeners with better error handling
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Set up hover effects with mutation observer for dynamic content
    const setupHoverEffects = () => {
      const interactiveElements = document.querySelectorAll("button, a, input, textarea, [cursor-pointer], .cursor-pointer");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    setupHoverEffects();

    // Watch for DOM changes to catch new elements
    const observer = new MutationObserver(() => {
      setupHoverEffects();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      // Cleanup
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main cursor point */}
      <motion.div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-[#ceea69] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: "-50%", y: "-50%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Follower circle */}
      <motion.div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-[#ceea69] rounded-full pointer-events-none z-[9998]"
        style={{ x: "-50%", y: "-50%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Hide cursor on mobile and ensure visibility */}
      <style jsx>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          div {
            display: none !important;
          }
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
